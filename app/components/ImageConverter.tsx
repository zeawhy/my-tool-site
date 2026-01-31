"use client";

import React, { useState, useCallback } from "react";
import { Upload, X, Download, FileImage, Loader2 } from "lucide-react";
import clsx from "clsx";

interface ProcessedImage {
    id: string;
    originalName: string;
    newName: string;
    blob: Blob;
    previewUrl: string;
    status: "pending" | "converting" | "done" | "error";
    errorMsg?: string;
    originalSize: number;
    newSize?: number;
}

import { useLanguage } from "../context/LanguageContext";

export default function ImageConverter() {
    const { t } = useLanguage();
    const [images, setImages] = useState<ProcessedImage[]>([]);
    const [isDragOver, setIsDragOver] = useState(false);

    const processFile = async (id: string, file: File) => {
        setImages((prev) =>
            prev.map((img) =>
                img.id === id ? { ...img, status: "converting" } : img
            )
        );

        try {
            let resultBlob: Blob;
            const isHeic = file.name.toLowerCase().endsWith(".heic");

            if (isHeic) {
                // Convert HEIC
                const heic2any = (await import("heic2any")).default;
                const conversionResult = await heic2any({
                    blob: file,
                    toType: "image/jpeg",
                    quality: 0.8,
                });

                resultBlob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;

            } else {
                // Convert WebP
                resultBlob = await convertWebPToJpeg(file);
            }

            const previewUrl = URL.createObjectURL(resultBlob);

            setImages((prev) =>
                prev.map((img) =>
                    img.id === id
                        ? {
                            ...img,
                            blob: resultBlob,
                            previewUrl,
                            status: "done",
                            newSize: resultBlob.size,
                        }
                        : img
                )
            );
        } catch (error) {
            console.error("Conversion error:", error);
            setImages((prev) =>
                prev.map((img) =>
                    img.id === id
                        ? { ...img, status: "error", errorMsg: "转换失败" }
                        : img
                )
            );
        }
    };

    const convertWebPToJpeg = (file: File): Promise<Blob> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    reject(new Error("Canvas context error"));
                    return;
                }
                ctx.drawImage(img, 0, 0);
                canvas.toBlob((blob) => {
                    if (blob) resolve(blob);
                    else reject(new Error("Canvas to Blob failed"));
                }, "image/jpeg", 0.8);
            };
            img.onerror = (e) => reject(e);
            img.src = URL.createObjectURL(file);
        });
    };

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    }, []);

    const handleFiles = async (files: File[]) => {
        // 1. Create initial state for all files
        const newImages: ProcessedImage[] = files
            .filter(file => {
                const name = file.name.toLowerCase();
                return name.endsWith(".heic") || name.endsWith(".webp");
            })
            .map(file => ({
                id: Math.random().toString(36).substring(7),
                originalName: file.name,
                newName: file.name.replace(/\.(heic|webp)$/i, ".jpg"),
                blob: new Blob(),
                previewUrl: "",
                status: "pending",
                originalSize: file.size,
            }));

        if (newImages.length === 0) return;

        setImages(prev => [...prev, ...newImages]);

        // 2. Queue processing with concurrency limit
        const pLimit = (await import("p-limit")).default;
        const limit = pLimit(2); // Limit concurrency to 2

        newImages.forEach((img, index) => {
            // Find corresponding file
            // Note: this simple matching assumes index order is preserved, which it is
            const file = files.find(f => f.name === img.originalName && f.size === img.originalSize);
            if (file) {
                limit(() => processFile(img.id, file));
            }
        });
    };

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);

        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    }, []);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            handleFiles(files);
            // Reset input so same files can be selected again if needed
            e.target.value = "";
        }
    };

    const removeImage = (id: string) => {
        setImages((prev) => prev.filter((img) => img.id !== id));
    };

    const downloadImage = async (img: ProcessedImage) => {
        if (img.status === "done" && img.blob) {
            const { saveAs } = await import("file-saver");
            saveAs(img.blob, img.newName);
        }
    };

    const downloadAll = async () => {
        const JSZip = (await import("jszip")).default;
        const { saveAs } = await import("file-saver");
        const zip = new JSZip();
        const completedImages = images.filter((img) => img.status === "done");

        if (completedImages.length === 0) return;

        completedImages.forEach((img) => {
            zip.file(img.newName, img.blob);
        });

        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, "images_converted.zip");
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t.hero.title}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                    {t.hero.subtitle}
                </p>
            </div>

            {/* Dropzone */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={clsx(
                    "relative border-2 border-dashed rounded-2xl p-12 transition-all duration-300 ease-in-out cursor-pointer",
                    isDragOver
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-[1.02]"
                        : "border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/50"
                )}
            >
                <input
                    type="file"
                    multiple
                    accept=".heic,.webp"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileSelect}
                />
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="p-4 bg-white dark:bg-zinc-800 rounded-full shadow-sm">
                        <Upload className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-lg font-medium text-zinc-900 dark:text-white">
                            {t.converter.dropzone}
                        </p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {t.converter.dropzone_sub}
                        </p>
                    </div>
                </div>
            </div>

            {/* List & Actions */}
            {images.length > 0 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {images.map((img) => (
                            <div
                                key={img.id}
                                className="group relative bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all"
                            >
                                {/* Preview Image */}
                                <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 relative flex items-center justify-center overflow-hidden">
                                    {img.status === "done" ? (
                                        <img
                                            src={img.previewUrl}
                                            alt={img.originalName}
                                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                        />
                                    ) : img.status === "converting" ? (
                                        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                                    ) : img.status === "pending" ? (
                                        <div className="w-full h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-800">
                                            <Loader2 className="w-6 h-6 text-zinc-300 dark:text-zinc-600" />
                                        </div>
                                    ) : (
                                        <FileImage className="w-10 h-10 text-zinc-400" />
                                    )}

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeImage(img.id)}
                                        className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-red-500/80 rounded-full text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Info & Actions */}
                                <div className="p-4 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div className="truncate pr-4">
                                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate" title={img.newName}>
                                                {img.newName}
                                            </p>
                                            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                                {(img.originalSize / 1024 / 1024).toFixed(2)} MB
                                                {img.newSize && ` -> ${(img.newSize / 1024 / 1024).toFixed(2)} MB`}
                                            </p>
                                        </div>
                                    </div>

                                    {img.status === "done" && (
                                        <button
                                            onClick={() => downloadImage(img)}
                                            className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-lg transition-colors"
                                        >
                                            <Download className="w-4 h-4" />
                                            {t.converter.download}
                                        </button>
                                    )}
                                    {img.status === "error" && (
                                        <p className="text-xs text-red-500 text-center py-2 bg-red-50 dark:bg-red-900/10 rounded-lg">
                                            {img.errorMsg || t.converter.status_error}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex justify-center pt-4">
                        <button
                            onClick={downloadAll}
                            disabled={images.filter(i => i.status === "done").length === 0}
                            className="flex items-center gap-2 px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 active:scale-95 transition-all"
                        >
                            <Download className="w-5 h-5" />
                            {t.converter.download_all}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
