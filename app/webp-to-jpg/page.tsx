import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
import { toolMetadata, toolCanonical } from "../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return toolMetadata("zh", "webp-to-jpg");
}

export default function WebpToJpg() {
  return (
    <ToolPage
      locale="zh"
      pageId="webp-to-jpg"
      canonical={toolCanonical("zh", "webp-to-jpg")}
    />
  );
}
