"use client";

import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export default function Header() {
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "cn" : "en");
    };

    return (
        <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {t.header.title}
                    </span>
                </div>
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-medium text-zinc-600 dark:text-zinc-300"
                    aria-label="Toggle Language"
                >
                    <Globe className="w-4 h-4" />
                    <span>{language === "en" ? "English" : "中文"}</span>
                </button>
            </div>
        </header>
    );
}
