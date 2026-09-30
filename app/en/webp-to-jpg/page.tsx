import type { Metadata } from "next";
import ToolPage from "../../components/ToolPage";
import { toolMetadata, toolCanonical } from "../../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return toolMetadata("en", "webp-to-jpg");
}

export default function WebpToJpgEn() {
  return (
    <ToolPage
      locale="en"
      pageId="webp-to-jpg"
      canonical={toolCanonical("en", "webp-to-jpg")}
    />
  );
}
