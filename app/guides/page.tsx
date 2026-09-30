import type { Metadata } from "next";
import { guides } from "../lib/content";
import { SITE_URL } from "../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "使用指南 - 图片格式知识库",
    description: "HEIC 是什么？Windows 怎么打开 HEIC？iPhone 怎么设置拍 JPG？用通俗的语言讲清图片格式的那些事。",
    alternates: { canonical: `${SITE_URL}/guides` },
    openGraph: {
      title: "使用指南 - 图片格式知识库",
      description: "用通俗的语言讲清 HEIC、JPG、PNG、WebP 这些图片格式。",
      url: `${SITE_URL}/guides`,
      siteName: "Heic2Jpg",
      locale: "zh_CN",
      type: "website",
    },
  };
}

export default function GuidesIndex() {
  const list = Object.values(guides);
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">使用指南</h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-10">
        用通俗的语言，把 HEIC、JPG、PNG、WebP 这些格式讲清楚。
      </p>
      <div className="space-y-5">
        {list.map((g) => (
          <a
            key={g.slug}
            href={`/guides/${g.slug}`}
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
