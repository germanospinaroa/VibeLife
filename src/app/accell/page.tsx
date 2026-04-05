import type { Metadata } from "next";
import { AccellHeroSection } from "@/components/products/accell/hero-section";
import { AccellProblemaSection } from "@/components/products/accell/problema-section";
import { AccellQueEsSection } from "@/components/products/accell/que-es-section";
import { AccellPosicionamientoSection } from "@/components/products/accell/posicionamiento-section";
import { AccellDiferencialSection } from "@/components/products/accell/diferencial-section";
import { AccellEducacionSection } from "@/components/products/accell/educacion-section";
import { AccellComoActuaSection } from "@/components/products/accell/como-actua-section";
import { AccellResultadosSection } from "@/components/products/accell/resultados-section";
import { AccellUsoSection } from "@/components/products/accell/uso-section";
import { AccellParaQuienSection } from "@/components/products/accell/para-quien-section";
import { AccellProfundidadSection } from "@/components/products/accell/profundidad-section";
import { AccellDescargablesSection } from "@/components/products/accell/descargables-section";
import { AccellComunidadSection } from "@/components/products/accell/comunidad-section";
import { AccellFinalSection } from "@/components/products/accell/final-section";
import { AccellDisclaimerSection } from "@/components/products/accell/disclaimer-section";

export const metadata: Metadata = {
  title: "Accell | VibeLife",
  description:
    "Accell — Nutrición para un estilo de vida activo. Bebida funcional con cafeína natural, vitaminas B y minerales esenciales. Energía real, enfoque sostenido, sin picos ni colapsos.",
};

export default function AccellPage() {
  return (
    <>
      <AccellHeroSection />
      <AccellProblemaSection />
      <AccellQueEsSection />
      <AccellPosicionamientoSection />
      <AccellDiferencialSection />
      <AccellEducacionSection />
      <AccellComoActuaSection />
      <AccellResultadosSection />
      <AccellUsoSection />
      <AccellParaQuienSection />
      <AccellProfundidadSection />
      <AccellDescargablesSection />
      <AccellComunidadSection />
      <AccellFinalSection />
      <AccellDisclaimerSection />
    </>
  );
}
