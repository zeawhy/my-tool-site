import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";
import "./globals.css";

// 这里的 URL 换成你刚才买的新域名
const SITE_URL = "https://www.heic2jpg-free.com";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "免费在线 HEIC 转 JPG 工具 (本地处理，保护隐私)",
    template: "%s | Free HEIC to JPG Converter",
  },
  description: "全网最安全的 HEIC 转 JPG 在线工具。无需上传服务器，100% 浏览器本地转换。支持 HEIC, WebP 批量转 JPEG/PNG，保留 Exif 信息，永久免费。",
  keywords: [
    "HEIC转JPG",
    "HEIC to JPG converter",
    "WebP to JPG",
    "iphone photo converter",
    "online image converter",
    "免费图片转换",
    "privacy focused image tool"
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "免费 HEIC 转 JPG - 极速、安全、不上传",
    description: "如果你担心照片泄露，请使用这个纯本地转换工具。支持批量转换，秒级处理。",
    url: SITE_URL,
    siteName: "Secure HEIC Converter",
    locale: "zh_CN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "wXctQV7dJ0xqyLoid7LXpRgKZ_hTA3mf_IVU_2_DA_o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white flex flex-col min-h-screen">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v9vh2qgro7");
          `}
        </Script>
      </body>
      <GoogleAnalytics gaId="G-5CL464Q7FH" />
    </html>
  );
}
