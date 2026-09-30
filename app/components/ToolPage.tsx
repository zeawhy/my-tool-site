import ImageConverter from "./ImageConverter";
import { ui, type UILocale } from "../lib/translations";
import { toolPages, type PageId } from "../lib/content";

interface ToolPageProps {
  locale: UILocale;
  pageId: PageId;
  canonical: string;
}

const SITE_URL = "https://www.heic2jpg-free.com";

function pageUrl(locale: UILocale, pageId: PageId): string {
  const prefix = locale === "en" ? "/en" : "";
  const path = pageId === "heic-to-jpg" ? "" : `/${pageId}`;
  return `${SITE_URL}${prefix}${path}`;
}

export default function ToolPage({ locale, pageId, canonical }: ToolPageProps) {
  const t = ui[locale];
  const c = toolPages[locale][pageId];
  const prefix = locale === "en" ? "/en" : "";

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: c.h1,
    url: canonical,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: c.description,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.nav.home,
        item: `${SITE_URL}${prefix || "/"}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.tools[pageId],
        item: canonical,
      },
    ],
  };

  const relatedPages: PageId[] = (["heic-to-jpg", "heic-to-png", "webp-to-jpg"] as PageId[]).filter(
    (p) => p !== pageId
  );

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ImageConverter
        t={t.converter}
        heroTitle={c.h1}
        heroSubtitle={c.subtitle}
        dropzoneSub={c.dropzoneSub}
        from={c.from}
        to={c.to}
      />

      <div className="w-full max-w-4xl mx-auto px-6 pb-16 space-y-14">
        {/* Cross promo */}
        <div className="text-center">
          <a
            href={t.crossPromo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors border-b border-transparent hover:border-current"
          >
            {t.crossPromo.text}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* How to */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">{c.howtoTitle}</h2>
          <ol className="grid md:grid-cols-3 gap-6 list-none">
            {c.steps.map((s, i) => (
              <li
                key={i}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <div className="w-8 h-8 mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">{c.featuresTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <h3 className="font-semibold mb-2">{f.t}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Verify no-upload */}
        <section className="p-8 bg-blue-50 dark:bg-blue-950/30 rounded-3xl border border-blue-100 dark:border-blue-900">
          <h2 className="text-2xl font-bold mb-4">{c.verifyTitle}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">{c.verifyIntro}</p>
          <ol className="list-decimal list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            {c.verifySteps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">{c.faqTitle}</h2>
          <div className="space-y-4">
            {c.faqs.map((f, i) => (
              <details
                key={i}
                className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">{c.aboutTitle}</h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            {c.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Related tools */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">{c.relatedTitle}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedPages.map((p) => (
              <a
                key={p}
                href={`${prefix}/${p}`.replace("//", "/")}
                className="px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-700 font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t.tools[p]}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { pageUrl };
