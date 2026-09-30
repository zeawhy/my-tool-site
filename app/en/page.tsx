import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
import { toolMetadata, toolCanonical } from "../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return toolMetadata("en", "heic-to-jpg");
}

export default function EnglishHome() {
  return (
    <ToolPage
      locale="en"
      pageId="heic-to-jpg"
      canonical={toolCanonical("en", "heic-to-jpg")}
    />
  );
}
