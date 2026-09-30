import type { Metadata } from "next";
import ToolPage from "../../components/ToolPage";
import { toolMetadata, toolCanonical } from "../../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return toolMetadata("en", "heic-to-png");
}

export default function HeicToPngEn() {
  return (
    <ToolPage
      locale="en"
      pageId="heic-to-png"
      canonical={toolCanonical("en", "heic-to-png")}
    />
  );
}
