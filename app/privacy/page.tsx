import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { legalMetadata } from "../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return legalMetadata("privacy", "zh");
}

export default function PrivacyZh() {
  return <LegalPage page="privacy" locale="zh" />;
}
