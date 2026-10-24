import type { Metadata } from "next";
import { guides } from "../../lib/content";
import { SITE_URL } from "../../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const zhUrl = `${SITE_URL}/guides`;
  const enUrl = `${SITE_URL}/en/guides`;
  return {
    title: "HEIC Guides & Tutorials - Image Format Knowledge Base",
    description: "What is HEIC? How to open HEIC files on Windows? How to make your iPhone take JPGs? Comprehensive, plain-English guides to image formats.",
    alternates: {
      canonical: enUrl,
      languages: {
        "zh-CN": zhUrl,
        en: enUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: "HEIC Guides & Tutorials - Image Format Knowledge Base",
      description: "Everything you need to know about HEIC, JPG, PNG, and WebP formats.",
      url: enUrl,
      siteName: "Heic2Jpg",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function EnglishGuidesIndex() {
  const list = Object.values(guides.en);
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">HEIC & Image Format Guides</h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-10">
        In-depth, plain-English guides explaining HEIC, JPG, PNG, and WebP — and how to fix compatibility issues.
      </p>
      <div className="space-y-5">
        {list.map((g) => (
          <a
            key={g.slug}
            href={`/en/guides/${g.slug}`}
            className="block p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 transition-colors"
          >
            <h2 className="text-lg font-semibold mb-2">{g.h1}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{g.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
