import type { Metadata } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const SITE_URL = "https://www.heic2jpg-free.com";

// Umami (self-hosted, cookieless analytics). The tracking script is only
// injected once NEXT_PUBLIC_UMAMI_WEBSITE_ID is set, so the site works fine
// before the Website ID is configured.
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL || "https://stats.yuliusbox.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HEIC 转 JPG 在线转换 - 免费·批量·不上传 | Heic2Jpg",
    template: "%s | Heic2Jpg",
  },
  description:
    "在线把 iPhone 的 HEIC 照片转成 JPG，支持批量转换。文件只在浏览器本地处理，不上传服务器，免费不限次数。",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "zh-CN": SITE_URL,
      en: `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "HEIC 转 JPG 在线转换 - 免费·批量·不上传",
    description:
      "iPhone 照片转 JPG，支持批量。文件只在浏览器本地处理，不上传服务器，免费不限次数。",
    url: SITE_URL,
    siteName: "Heic2Jpg",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Heic2Jpg - 免费 HEIC 转 JPG 在线工具",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HEIC 转 JPG 在线转换 - 免费·批量·不上传",
    description: "iPhone 照片转 JPG，支持批量。文件只在浏览器本地处理，不上传服务器。",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "wXctQV7dJ0xqyLoid7LXpRgKZ_hTA3mf_IVU_2_DA_o",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "zh-CN";

  return (
    <html lang={locale}>
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {umamiWebsiteId && (
          <Script
            src={`${umamiUrl}/script.js`}
            data-website-id={umamiWebsiteId}
            data-domains="heic2jpg-free.com,www.heic2jpg-free.com"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
