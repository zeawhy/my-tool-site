// UI strings per locale. Page-specific SEO copy lives in ./content.ts.

export type UILocale = "zh" | "en";

export const ui = {
  zh: {
    brand: "Heic2Jpg",
    toggleLabel: "English",
    toggleAria: "Switch to English version",
    nav: {
      home: "首页",
      tools: "在线工具",
      guides: "使用指南",
    },
    tools: {
      "heic-to-jpg": "HEIC 转 JPG",
      "heic-to-png": "HEIC 转 PNG",
      "webp-to-jpg": "WebP 转 JPG",
    },
    converter: {
      dropzone: "点击或拖拽上传图片",
      status_pending: "等待中",
      status_converting: "转换中...",
      status_done: "完成",
      status_error: "错误",
      download: "下载",
      download_all: "下载全部",
    },
    footer: {
      toolsTitle: "在线工具",
      guidesTitle: "使用指南",
      aboutTitle: "关于",
      privacy: "隐私政策",
      about: "关于我们",
      contact: "联系我们",
      copyright: "Heic2Jpg。保留所有权利。",
    },
    donation: {
      text: "觉得好用？请我喝杯咖啡 ☕️",
    },
    crossPromo: {
      text: "需要更小的文件？试试 YuliusBox 图片压缩",
      link: "https://www.yuliusbox.com/tools/image-compressor",
    },
  },
  en: {
    brand: "Heic2Jpg",
    toggleLabel: "中文",
    toggleAria: "切换到中文版",
    nav: {
      home: "Home",
      tools: "Tools",
      guides: "Guides",
    },
    tools: {
      "heic-to-jpg": "HEIC to JPG",
      "heic-to-png": "HEIC to PNG",
      "webp-to-jpg": "WebP to JPG",
    },
    converter: {
      dropzone: "Click or Drop Images Here",
      status_pending: "Pending",
      status_converting: "Converting...",
      status_done: "Done",
      status_error: "Error",
      download: "Download",
      download_all: "Download All",
    },
    footer: {
      toolsTitle: "Tools",
      guidesTitle: "Guides",
      aboutTitle: "About",
      privacy: "Privacy Policy",
      about: "About Us",
      contact: "Contact",
      copyright: "Heic2Jpg. All rights reserved.",
    },
    donation: {
      text: "Find this tool useful? Buy me a coffee ☕️",
    },
    crossPromo: {
      text: "Need smaller files? Compress with YuliusBox",
      link: "https://www.yuliusbox.com/tools/image-compressor",
    },
  },
} as const;

export type UIStrings = (typeof ui)[keyof typeof ui];
