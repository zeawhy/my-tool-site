import { legal, type ContentLocale } from "../lib/content";
import { SITE_URL } from "../lib/seo";

interface LegalPageProps {
  page: "privacy" | "about" | "contact";
  locale: ContentLocale;
}

export default function LegalPage({ page, locale }: LegalPageProps) {
  const l = legal[page][locale];
  const prefix = locale === "en" ? "/en" : "";
  const canonical = `${SITE_URL}${prefix}/${page}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "zh" ? "首页" : "Home", item: `${SITE_URL}${prefix || "/"}` },
      { "@type": "ListItem", position: 2, name: l.h1, item: canonical },
    ],
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <h1 className="text-3xl font-bold mb-4">{l.h1}</h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-10">{l.intro}</p>
      <div className="space-y-8">
        {l.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold mb-3">{s.h}</h2>
            <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
              {s.p.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      {page === "contact" && (
        <div className="mt-10">
          <a
            href="https://ko-fi.com/yuliuslux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#FF5E5B" }}
          >
            Ko-fi
          </a>
        </div>
      )}
    </div>
  );
}
