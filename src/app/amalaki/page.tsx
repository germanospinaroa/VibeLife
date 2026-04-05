import type { Metadata } from "next";
import { AmalakiHeroSection } from "@/components/products/amalaki/hero-section";
import { AmalakiProblemaSection } from "@/components/products/amalaki/problema-section";
import { AmalakiQueEsSection } from "@/components/products/amalaki/que-es-amalaki-section";
import { AmalakiEducacionSection } from "@/components/products/amalaki/educacion-section";
import { AmalakiBeneficiosSection } from "@/components/products/amalaki/beneficios-section";
import { AmalakiDiferenteSection } from "@/components/products/amalaki/diferente-section";
import { AmalakiAntesDesppuesSection } from "@/components/products/amalaki/antes-despues-section";
import { AmalakiPosicionamientoSection } from "@/components/products/amalaki/posicionamiento-section";
import { AmalakiComoIntegrarSection } from "@/components/products/amalaki/como-integrar-section";
import { AmalakiParaQuienSection } from "@/components/products/amalaki/para-quien-section";
import { AmalakiExpectativaSection } from "@/components/products/amalaki/expectativa-section";
import { AmalakiComunidadSection } from "@/components/products/amalaki/comunidad-section";
import { AmalakiFinalSection } from "@/components/products/amalaki/final-section";
import { AmalakiDisclaimerSection } from "@/components/products/amalaki/disclaimer-section";

export const metadata: Metadata = {
  title: "Amalaki | VibeLife",
  description:
    "Tu cuerpo no está fallando, está sobrecargado. Amalaki es el punto donde todo empieza a corregirse: menos inflamación, más energía, mejor digestión.",
};

export default function AmalakiPage() {
  return (
    <>
      <AmalakiHeroSection />
      <AmalakiProblemaSection />
      <AmalakiQueEsSection />
      <AmalakiEducacionSection />
      <AmalakiBeneficiosSection />
      <AmalakiDiferenteSection />
      <AmalakiAntesDesppuesSection />
      <AmalakiPosicionamientoSection />
      <AmalakiComoIntegrarSection />
      <AmalakiParaQuienSection />
      <AmalakiExpectativaSection />
      <AmalakiComunidadSection />
      <AmalakiFinalSection />
      <AmalakiDisclaimerSection />
    </>
  );
}
