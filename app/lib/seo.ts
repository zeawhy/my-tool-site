import type { Metadata } from "next";
import { toolPages, guides, legal, type PageId, type ContentLocale } from "./content";

export const SITE_URL = "https://www.heic2jpg-free.com";

export function toolCanonical(locale: ContentLocale, pageId: PageId): string {
  const prefix = locale === "en" ? "/en" : "";
  const path = pageId === "heic-to-jpg" ? "" : `/${pageId}`;
  return `${SITE_URL}${prefix}${path}`;
}

export function toolMetadata(locale: ContentLocale, pageId: PageId): Metadata {
  const c = toolPages[locale][pageId];
  const canonical = toolCanonical(locale, pageId);
  const path = pageId === "heic-to-jpg" ? "" : `/${pageId}`;
  const zhUrl = `${SITE_URL}${path}`;
  const enUrl = `${SITE_URL}/en${path}`;
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical,
      languages: { "zh-CN": zhUrl, en: enUrl, "x-default": zhUrl },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: canonical,
      siteName: "Heic2Jpg",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: c.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: ["/og-cover.jpg"],
    },
  };
}

export function guideMetadata(slug: string): Metadata {
  const g = guides[slug];
  const canonical = `${SITE_URL}/guides/${slug}`;
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical },
    openGraph: {
      title: g.title,
      description: g.description,
      url: canonical,
      siteName: "Heic2Jpg",
      locale: "zh_CN",
      type: "article",
      images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: g.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: g.title,
      description: g.description,
      images: ["/og-cover.jpg"],
    },
  };
}

export function legalMetadata(
  page: "privacy" | "about" | "contact",
  locale: ContentLocale
): Metadata {
  const l = legal[page][locale];
  const prefix = locale === "en" ? "/en" : "";
  const canonical = `${SITE_URL}${prefix}/${page}`;
  const zhUrl = `${SITE_URL}/${page}`;
  const enUrl = `${SITE_URL}/en/${page}`;
  return {
    title: l.title,
    description: l.description,
    alternates: {
      canonical,
      languages: { "zh-CN": zhUrl, en: enUrl, "x-default": zhUrl },
    },
    openGraph: {
      title: l.title,
      description: l.description,
      url: canonical,
      siteName: "Heic2Jpg",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
  };
}
