"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
                <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
            </div>
        </footer>
    );
}
