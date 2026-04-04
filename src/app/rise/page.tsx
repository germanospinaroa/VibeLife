import type { Metadata } from "next";
import { RiseHeroSection } from "@/components/products/rise/hero-section";
import { RiseRealidadSection } from "@/components/products/rise/realidad-section";
import { RiseProblemasCafeSection } from "@/components/products/rise/problema-cafe-section";
import { RiseIntroduccionSection } from "@/components/products/rise/introduccion-section";
import { RiseQueSentirásSection } from "@/components/products/rise/que-sentiiras-section";
import { RiseQueEsSection } from "@/components/products/rise/que-es-rise-section";
import { RisePorQueFuncionaSection } from "@/components/products/rise/por-que-funciona-section";
import { RiseIngredienteDiferenteSection } from "@/components/products/rise/ingrediente-diferente-section";
import { RiseExperienciaComparativaSection } from "@/components/products/rise/experiencia-comparativa-section";
import { RiseEducacionSection } from "@/components/products/rise/educacion-section";
import { RiseParaQuienSection } from "@/components/products/rise/para-quien-section";
import { RiseComoIntegrarloSection } from "@/components/products/rise/como-integrarlo-section";
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
      <RiseRealidadSection />
      <RiseProblemasCafeSection />
      <RiseIntroduccionSection />
      <RiseQueSentirásSection />
      <RiseQueEsSection />
      <RisePorQueFuncionaSection />
      <RiseIngredienteDiferenteSection />
      <RiseExperienciaComparativaSection />
      <RiseEducacionSection />
      <RiseParaQuienSection />
      <RiseComoIntegrarloSection />
      <RiseComunidadSection />
      <RiseExpectativaSection />
      <RiseFinalSection />
      <RiseDisclaimerSection />
    </>
  );
}
