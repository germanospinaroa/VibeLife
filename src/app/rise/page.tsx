import type { Metadata } from "next";
import { RiseHeroSection } from "@/components/products/rise/hero-section";
import { RiseProblemaRealSection } from "@/components/products/rise/problema-real-section";
import { RiseIntroduccionSection } from "@/components/products/rise/introduccion-section";
import { RiseQueEsSection } from "@/components/products/rise/que-es-rise-section";
import { RiseBeneficiosSection } from "@/components/products/rise/beneficios-section";
import { RiseIngredienteDiferenteSection } from "@/components/products/rise/ingrediente-diferente-section";
import { RiseExperienciaComparativaSection } from "@/components/products/rise/experiencia-comparativa-section";
import { RiseParaQuienSection } from "@/components/products/rise/para-quien-section";
import { RiseComoIntegrarloSection } from "@/components/products/rise/como-integrarlo-section";
import { RiseEducacionSection } from "@/components/products/rise/educacion-section";
import { RiseComunidadSection } from "@/components/products/rise/comunidad-section";
import { RiseExpectativaSection } from "@/components/products/rise/expectativa-section";
import { RiseFinalSection } from "@/components/products/rise/final-section";
import { RiseDisclaimerSection } from "@/components/products/rise/disclaimer-section";

export const metadata: Metadata = {
  title: "RISE | VibeLife",
  description:
    "RISE es más que café. Es claridad mental, energía estable y una nueva forma de empezar tu día con amalaki y café arábica colombiano.",
};

export default function RisePage() {
  return (
    <>
      <RiseHeroSection />
      <RiseProblemaRealSection />
      <RiseIntroduccionSection />
      <RiseQueEsSection />
      <RiseBeneficiosSection />
      <RiseIngredienteDiferenteSection />
      <RiseExperienciaComparativaSection />
      <RiseParaQuienSection />
      <RiseComoIntegrarloSection />
      <RiseEducacionSection />
      <RiseComunidadSection />
      <RiseExpectativaSection />
      <RiseFinalSection />
      <RiseDisclaimerSection />
    </>
  );
}
