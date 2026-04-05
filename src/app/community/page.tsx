import type { Metadata } from "next";
import { CommunityPageClient } from "./community-page-client";

export const metadata: Metadata = {
  title: "Comunidad",
  description:
    "Cada domingo caminamos juntos en Ciudad de Panamá. Un espacio sin presión para reconectarte, moverte y rodearte de personas con buena energía.",
};

export default function CommunityPage() {
  return <CommunityPageClient />;
}
