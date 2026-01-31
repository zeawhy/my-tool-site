import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// 这里的 URL 换成你刚才买的新域名
const SITE_URL = "https://www.heic2jpg-free.com";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white flex flex-col min-h-screen">
        <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Heic2Jpg Free
              </span>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>&copy; {new Date().getFullYear()} Heic2Jpg Free. All rights reserved.</p>
          </div>
        </footer>
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
    </html>
  );
}
