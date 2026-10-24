import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides } from "../../../lib/content";
import { guideMetadata, SITE_URL } from "../../../lib/seo";

export async function generateStaticParams() {
  return Object.keys(guides.en).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!guides.en[slug]) return {};
  return guideMetadata(slug, "en");
}

export default async function EnglishGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = guides.en[slug];
  if (!g) notFound();

  const canonical = `${SITE_URL}/en/guides/${slug}`;
  const toolUrl = g.toolLink === "heic-to-jpg" ? "/en" : `/en/${g.toolLink}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.h1,
    description: g.description,
    url: canonical,
    inLanguage: "en-US",
    author: { "@type": "Organization", name: "Heic2Jpg" },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/en/guides` },
      { "@type": "ListItem", position: 3, name: g.h1, item: canonical },
    ],
  };

  return (
    <article className="w-full max-w-3xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-6">{g.h1}</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">{g.intro}</p>

      {/* Top Tool CTA */}
      <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-200/80 dark:border-blue-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
            Need to convert HEIC photos right away?
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
            Converted directly in your browser. Photos are not uploaded to any server. Free and fast.
          </p>
        </div>
        <a
          href="/en"
          className="shrink-0 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm"
        >
          Convert HEIC to JPG Free →
        </a>
      </div>

      <div className="space-y-10">
        {g.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-2xl font-bold mb-4">{s.h}</h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {s.p.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {g.faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {g.faqs.map((f, i) => (
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
      )}

      {/* Bottom Tool CTA */}
      <div className="mt-14 p-8 text-center rounded-3xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 shadow-sm">
        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
          Ready to Convert Your HEIC Photos?
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-lg mx-auto mb-6">
          No software to install, no sign-up required. Converted locally in your browser — photos are not uploaded to any server.
        </p>
        <a
          href={toolUrl}
          className="inline-block px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
        >
          {g.toolLinkText}
        </a>
      </div>
    </article>
  );
}
