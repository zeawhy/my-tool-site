import { headers } from "next/headers";
import { ui, type UILocale } from "../lib/translations";
import { guides } from "../lib/content";

function toolHref(locale: UILocale, pageId: "heic-to-jpg" | "heic-to-png" | "webp-to-jpg"): string {
  const prefix = locale === "en" ? "/en" : "";
  return pageId === "heic-to-jpg" ? `${prefix}/` || "/" : `${prefix}/${pageId}`;
}

function legalHref(locale: UILocale, page: "privacy" | "about" | "contact"): string {
  const prefix = locale === "en" ? "/en" : "";
  return `${prefix}/${page}`;
}

export default async function Footer() {
  const h = await headers();
  const locale: UILocale = h.get("x-locale") === "en" ? "en" : "zh";
  const t = ui[locale];
  const guideSlugs = Object.keys(guides);

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10 text-sm">
          <div>
            <p className="font-semibold mb-3 text-zinc-900 dark:text-white">{t.footer.toolsTitle}</p>
            <ul className="space-y-2 text-zinc-500 dark:text-zinc-400">
              <li><a href={toolHref(locale, "heic-to-jpg")} className="hover:text-blue-600 dark:hover:text-blue-400">{t.tools["heic-to-jpg"]}</a></li>
              <li><a href={toolHref(locale, "heic-to-png")} className="hover:text-blue-600 dark:hover:text-blue-400">{t.tools["heic-to-png"]}</a></li>
              <li><a href={toolHref(locale, "webp-to-jpg")} className="hover:text-blue-600 dark:hover:text-blue-400">{t.tools["webp-to-jpg"]}</a></li>
            </ul>
          </div>
          {locale === "zh" && (
            <div>
              <p className="font-semibold mb-3 text-zinc-900 dark:text-white">{t.footer.guidesTitle}</p>
              <ul className="space-y-2 text-zinc-500 dark:text-zinc-400">
                {guideSlugs.map((slug) => (
                  <li key={slug}>
                    <a href={`/guides/${slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                      {guides[slug].h1.length > 18 ? guides[slug].h1.slice(0, 18) + "…" : guides[slug].h1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <p className="font-semibold mb-3 text-zinc-900 dark:text-white">{t.footer.aboutTitle}</p>
            <ul className="space-y-2 text-zinc-500 dark:text-zinc-400">
              <li><a href={legalHref(locale, "about")} className="hover:text-blue-600 dark:hover:text-blue-400">{t.footer.about}</a></li>
              <li><a href={legalHref(locale, "privacy")} className="hover:text-blue-600 dark:hover:text-blue-400">{t.footer.privacy}</a></li>
              <li><a href={legalHref(locale, "contact")} className="hover:text-blue-600 dark:hover:text-blue-400">{t.footer.contact}</a></li>
            </ul>
          </div>
        </div>

        {/* Donation Section */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            {t.donation.text}
          </p>
          <div className="flex gap-3">
            <a
              href="https://ko-fi.com/yuliuslux"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#FF5E5B' }}
            >
              Ko-fi
            </a>
            <a
              href="https://paypal.me/yuliuslux"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#0070BA' }}
            >
              PayPal
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
