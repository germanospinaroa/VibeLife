import type { Metadata } from "next";
import { AccellHeroSection } from "@/components/products/accell/hero-section";
import { AccellProblemaSection } from "@/components/products/accell/problema-section";
import { AccellQueEsSection } from "@/components/products/accell/que-es-section";
import { AccellEducacionSection } from "@/components/products/accell/educacion-section";
import { AccellComoActuaSection } from "@/components/products/accell/como-actua-section";
import { AccellDiferencialSection } from "@/components/products/accell/diferencial-section";
import { AccellResultadosSection } from "@/components/products/accell/resultados-section";
import { AccellPosicionamientoSection } from "@/components/products/accell/posicionamiento-section";
import { AccellUsoSection } from "@/components/products/accell/uso-section";
import { AccellParaQuienSection } from "@/components/products/accell/para-quien-section";
import { AccellProfundidadSection } from "@/components/products/accell/profundidad-section";
import { AccellComunidadSection } from "@/components/products/accell/comunidad-section";
import { AccellFinalSection } from "@/components/products/accell/final-section";
import { AccellDisclaimerSection } from "@/components/products/accell/disclaimer-section";

export const metadata: Metadata = {
  title: "Accell | VibeLife",
  description:
    "Tu metabolismo no está respondiendo — no es falta de motivación. Accell activa tu metabolismo desde adentro: más control, menos ansiedad, resultados reales.",
};

export default function AccellPage() {
  return (
    <>
      <AccellHeroSection />
      <AccellProblemaSection />
      <AccellQueEsSection />
      <AccellEducacionSection />
      <AccellComoActuaSection />
      <AccellDiferencialSection />
      <AccellResultadosSection />
      <AccellPosicionamientoSection />
      <AccellUsoSection />
      <AccellParaQuienSection />
      <AccellProfundidadSection />
      <AccellComunidadSection />
      <AccellFinalSection />
      <AccellDisclaimerSection />
    </>
  );
}
