import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import { legalMetadata } from "../../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return legalMetadata("contact", "en");
}

export default function ContactEn() {
  return <LegalPage page="contact" locale="en" />;
}
