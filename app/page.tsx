"use client";

import ImageConverter from "./components/ImageConverter";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-5xl space-y-24">
        <ImageConverter />

        {/* SEO Text Content */}
        <section className="prose prose-zinc dark:prose-invert max-w-none">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent inline-block">
              {t.features.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 text-2xl">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.features.sec_title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.features.sec_desc}
              </p>
            </div>

            <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.features.fast_title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.features.fast_desc}
              </p>
            </div>

            <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.features.free_title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.features.free_desc}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">{t.howto.title}</h3>
            <ol className="list-decimal list-inside space-y-4 text-zinc-600 dark:text-zinc-400 text-lg">
              <li className="pl-2"><span className="font-semibold text-zinc-900 dark:text-white">{t.howto.step1_title}</span> {t.howto.step1_desc}</li>
              <li className="pl-2"><span className="font-semibold text-zinc-900 dark:text-white">{t.howto.step2_title}</span> {t.howto.step2_desc}</li>
              <li className="pl-2"><span className="font-semibold text-zinc-900 dark:text-white">{t.howto.step3_title}</span> {t.howto.step3_desc}</li>
            </ol>
          </div>

          <div className="mt-16 p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-2xl font-bold mb-6">{t.about.title}</h3>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <p>
                <strong className="text-zinc-900 dark:text-white">HEIC (High Efficiency Image Container)</strong>{" "}
                {t.about.desc1}
              </p>
              <p>
                <strong className="text-zinc-900 dark:text-white">WebP</strong> {t.about.desc2}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
