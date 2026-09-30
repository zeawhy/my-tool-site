import type { Metadata } from "next";
import ToolPage from "./components/ToolPage";
import { toolMetadata, toolCanonical } from "./lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return toolMetadata("zh", "heic-to-jpg");
}

export default function Home() {
  return (
    <ToolPage
      locale="zh"
      pageId="heic-to-jpg"
      canonical={toolCanonical("zh", "heic-to-jpg")}
    />
  );
}
