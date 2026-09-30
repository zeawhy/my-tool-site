import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import { legalMetadata } from "../../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return legalMetadata("privacy", "en");
}

export default function PrivacyEn() {
  return <LegalPage page="privacy" locale="en" />;
}
