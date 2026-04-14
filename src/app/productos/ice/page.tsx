import type { Metadata } from "next";
import { IceHeroSection } from "@/components/products/ice/hero-section";
import { IceReconocimientoSection } from "@/components/products/ice/reconocimiento-section";
import { IceQueEsSection } from "@/components/products/ice/que-es-section";
import { IceParaQuienSection } from "@/components/products/ice/para-quien-section";
import { IceBeneficiosSection } from "@/components/products/ice/beneficios-section";
import { IceIngredientesSection } from "@/components/products/ice/ingredientes-section";
import { IceTecnologiaSection } from "@/components/products/ice/tecnologia-section";
import { IceComoUsarSection } from "@/components/products/ice/como-usar-section";
import { IceTestimoniosSection } from "@/components/products/ice/testimonios-section";
import { IceFaqSection } from "@/components/products/ice/faq-section";
import { IceFinalSection } from "@/components/products/ice/final-section";
import { IceDisclaimerSection } from "@/components/products/ice/disclaimer-section";

export const metadata: Metadata = {
  title: "UltraICE™ — Equilibrio y Bienestar Natural",
  description:
    "UltraICE apoya el equilibrio natural de tu cuerpo desde el sistema endocannabinoide. Sin cáñamo. Con tecnología UltraCell® de alta absorción. VibeLife.",
};

export default function UltraIcePage() {
  return (
    <>
      <IceHeroSection />
      <IceReconocimientoSection />
      <IceQueEsSection />
      <IceParaQuienSection />
      <IceBeneficiosSection />
      <IceIngredientesSection />
      <IceTecnologiaSection />
      <IceComoUsarSection />
      <IceTestimoniosSection />
      <IceFaqSection />
      <IceFinalSection />
      <IceDisclaimerSection />
    </>
  );
}
