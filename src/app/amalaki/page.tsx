import type { Metadata } from "next";
import { AmalakiHeroSection } from "@/components/products/amalaki/hero-section";
import { AmalakiProblemaSection } from "@/components/products/amalaki/problema-section";
import { AmalakiIntroduccionSection } from "@/components/products/amalaki/introduccion-section";
import { AmalakiQueEsSection } from "@/components/products/amalaki/que-es-amalaki-section";
import { AmalakiPorQueImportaSection } from "@/components/products/amalaki/por-que-importa-section";
import { AmalakiBeneficiosSection } from "@/components/products/amalaki/beneficios-section";
import { AmalakiDiferenteSection } from "@/components/products/amalaki/diferente-section";
import { AmalakiEducacionSection } from "@/components/products/amalaki/educacion-section";
import { AmalakiAntesDesppuesSection } from "@/components/products/amalaki/antes-despues-section";
import { AmalakiComoIntegrarSection } from "@/components/products/amalaki/como-integrar-section";
import { AmalakiPosicionamientoSection } from "@/components/products/amalaki/posicionamiento-section";
import { AmalakiParaQuienSection } from "@/components/products/amalaki/para-quien-section";
import { AmalakiExpectativaSection } from "@/components/products/amalaki/expectativa-section";
import { AmalakiComunidadSection } from "@/components/products/amalaki/comunidad-section";
import { AmalakiFinalSection } from "@/components/products/amalaki/final-section";
import { AmalakiDisclaimerSection } from "@/components/products/amalaki/disclaimer-section";

export const metadata: Metadata = {
  title: "Amalaki | VibeLife",
  description:
    "Amalaki es uno de los antioxidantes más potentes del mundo. Energía real, menos inflamación, y un cuerpo que realmente responde. La base que tu cuerpo necesita.",
};

export default function AmalakiPage() {
  return (
    <>
      <AmalakiHeroSection />
      <AmalakiProblemaSection />
      <AmalakiIntroduccionSection />
      <AmalakiQueEsSection />
      <AmalakiPorQueImportaSection />
      <AmalakiBeneficiosSection />
      <AmalakiDiferenteSection />
      <AmalakiEducacionSection />
      <AmalakiAntesDesppuesSection />
      <AmalakiComoIntegrarSection />
      <AmalakiPosicionamientoSection />
      <AmalakiParaQuienSection />
      <AmalakiExpectativaSection />
      <AmalakiComunidadSection />
      <AmalakiFinalSection />
      <AmalakiDisclaimerSection />
    </>
  );
}
