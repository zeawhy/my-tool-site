import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Image Converter - Free HEIC/WebP to JPG Tool",
  description: "Convert HEIC and WebP images to JPG format for free. Secure, fast, and processed locally in your browser.",
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
                MyTools
              </span>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>&copy; {new Date().getFullYear()} MyTools. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
