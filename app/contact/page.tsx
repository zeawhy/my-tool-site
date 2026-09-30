import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { legalMetadata } from "../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return legalMetadata("contact", "zh");
}

export default function ContactZh() {
  return <LegalPage page="contact" locale="zh" />;
}
