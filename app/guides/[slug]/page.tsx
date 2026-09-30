import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides } from "../../lib/content";
import { guideMetadata, SITE_URL } from "../../lib/seo";

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!guides[slug]) return {};
  return guideMetadata(slug);
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = guides[slug];
  if (!g) notFound();

  const canonical = `${SITE_URL}/guides/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.h1,
    description: g.description,
    url: canonical,
    inLanguage: "zh-CN",
    author: { "@type": "Organization", name: "Heic2Jpg" },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "使用指南", item: `${SITE_URL}/guides` },
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
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">{g.intro}</p>

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
          <h2 className="text-2xl font-bold mb-6">常见问题</h2>
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

      <div className="mt-12 p-8 text-center rounded-3xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900">
        <a
          href={g.toolLink === "heic-to-jpg" ? "/" : `/${g.toolLink}`}
          className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          {g.toolLinkText}
        </a>
      </div>
    </article>
  );
}
