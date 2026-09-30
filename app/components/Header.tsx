import { headers } from "next/headers";
import { Globe } from "lucide-react";
import { ui, type UILocale } from "../lib/translations";

function toolHref(locale: UILocale, pageId: "heic-to-jpg" | "heic-to-png" | "webp-to-jpg"): string {
  const prefix = locale === "en" ? "/en" : "";
  return pageId === "heic-to-jpg" ? `${prefix}/` || "/" : `${prefix}/${pageId}`;
}

export default async function Header() {
  const h = await headers();
  const locale: UILocale = h.get("x-locale") === "en" ? "en" : "zh";
  const pathname = h.get("x-pathname") || "/";
  const t = ui[locale];

  const homeHref = locale === "en" ? "/en" : "/";
  // Language toggle: mirror the current page in the other locale.
  // Guides are Chinese-only, so they fall back to the English home.
  let alternate: string;
  if (locale === "en") {
    alternate = pathname.replace(/^\/en/, "") || "/";
  } else {
    alternate = pathname.startsWith("/guides") ? "/en" : `/en${pathname === "/" ? "" : pathname}`;
  }

  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={homeHref}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {t.brand}
          </a>
          <nav className="hidden sm:flex items-center gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <a href={toolHref(locale, "heic-to-jpg")} className="hover:text-blue-600 dark:hover:text-blue-400">
              {t.tools["heic-to-jpg"]}
            </a>
            <a href={toolHref(locale, "heic-to-png")} className="hover:text-blue-600 dark:hover:text-blue-400">
              {t.tools["heic-to-png"]}
            </a>
            <a href={toolHref(locale, "webp-to-jpg")} className="hover:text-blue-600 dark:hover:text-blue-400">
              {t.tools["webp-to-jpg"]}
            </a>
            {locale === "zh" && (
              <a href="/guides" className="hover:text-blue-600 dark:hover:text-blue-400">
                {t.nav.guides}
              </a>
            )}
          </nav>
        </div>
        <a
          href={alternate}
          aria-label={t.toggleAria}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-medium text-zinc-600 dark:text-zinc-300"
        >
          <Globe className="w-4 h-4" />
          <span>{t.toggleLabel}</span>
        </a>
      </div>
    </header>
  );
}
