import { MetadataRoute } from 'next'
import { guides } from './lib/content'

const baseUrl = 'https://www.heic2jpg-free.com'
// Content launch date — update only when a page's content actually changes.
const CONTENT_DATE = new Date('2026-09-30')

type Entry = MetadataRoute.Sitemap[number];

function bilingual(path: string, priority: number): Entry[] {
    const zh = `${baseUrl}${path}`;
    const en = `${baseUrl}/en${path}`;
    const langs = { 'zh-CN': zh, en, 'x-default': zh };
    return [
        { url: zh, lastModified: CONTENT_DATE, changeFrequency: 'weekly', priority, alternates: { languages: langs } },
        { url: en, lastModified: CONTENT_DATE, changeFrequency: 'weekly', priority: priority * 0.9, alternates: { languages: langs } },
    ];
}

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: Entry[] = [
        // Tool pages (zh + en)
        ...bilingual('', 1),
        ...bilingual('/heic-to-png', 0.9),
        ...bilingual('/webp-to-jpg', 0.9),
        // Legal pages (zh + en)
        ...bilingual('/privacy', 0.3),
        ...bilingual('/about', 0.3),
        ...bilingual('/contact', 0.3),
        // Guides index (zh only)
        {
            url: `${baseUrl}/guides`,
            lastModified: CONTENT_DATE,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        // Guide articles (zh only)
        ...Object.keys(guides).map((slug): Entry => ({
            url: `${baseUrl}/guides/${slug}`,
            lastModified: CONTENT_DATE,
            changeFrequency: 'monthly',
            priority: 0.7,
        })),
    ];
    return entries;
}
