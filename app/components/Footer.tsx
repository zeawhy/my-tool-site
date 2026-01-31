"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">

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
