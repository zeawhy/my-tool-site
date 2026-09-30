import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { legalMetadata } from "../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return legalMetadata("about", "zh");
}

export default function AboutZh() {
  return <LegalPage page="about" locale="zh" />;
}
