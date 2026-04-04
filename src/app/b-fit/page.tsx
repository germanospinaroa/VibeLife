import type { Metadata } from "next";
import { BFitHeroSection } from "@/components/products/b-fit/hero-section";
import { BFitSistemaIntroSection } from "@/components/products/b-fit/sistema-intro-section";
import { BFitCienciaProductoSection } from "@/components/products/b-fit/ciencia-producto-section";
import { BFitIngredientesSection } from "@/components/products/b-fit/ingredientes-section";
import { BFitSistemaCompletoSection } from "@/components/products/b-fit/sistema-completo-section";
import { BFitEducacionValorSection } from "@/components/products/b-fit/educacion-valor-section";
import { BFitHabitosClave } from "@/components/products/b-fit/habitos-clave-section";
import { BFitEducationSection } from "@/components/products/b-fit/education-section";
import { BFitProblemSection } from "@/components/products/b-fit/problem-section";
import { BFitBreakthroughSection } from "@/components/products/b-fit/breakthrough-section";
import { BFitIntroductionSection } from "@/components/products/b-fit/introduction-bfit-section";
import { BFitComponentsBenefitsSection } from "@/components/products/b-fit/components-benefits-section";
import { BFitHowItWorksSection } from "@/components/products/b-fit/how-it-works-section";
import { BFitBenefitsSection } from "@/components/products/b-fit/benefits-section";
import { BFitDifferentiationSection } from "@/components/products/b-fit/differentiation-section";
import { BFitHowToUseSection } from "@/components/products/b-fit/how-to-use-section";
import { BFitAudienceSection } from "@/components/products/b-fit/audience-section";
import { BFitSupportSection } from "@/components/products/b-fit/support-section";
import { BFitDescargablesSection } from "@/components/products/b-fit/descargables-section";
import { BFitFinalCtaSection } from "@/components/products/b-fit/final-cta-section";
import { BFitDisclaimerSection } from "@/components/products/b-fit/disclaimer-section";
import { FloatingHelpButton } from "@/components/products/b-fit/floating-help-button";

export const metadata: Metadata = {
  title: "B-Fit | VibeLife",
  description:
    "B-Fit es una forma simple de acompañar tu metabolismo, ayudarte a recuperar equilibrio y sentirte más ligera, con más control y energía en tu día a día.",
};

export default function BFitPage() {
  return (
    <>
      <FloatingHelpButton />
      <BFitHeroSection />
      <BFitSistemaIntroSection />
      <BFitCienciaProductoSection />
      <BFitIngredientesSection />
      <BFitSistemaCompletoSection />
      <BFitEducacionValorSection />
      <BFitHabitosClave />
      <BFitEducationSection />
      <BFitProblemSection />
      <BFitBreakthroughSection />
      <BFitIntroductionSection />
      <BFitComponentsBenefitsSection />
      <BFitHowItWorksSection />
      <BFitBenefitsSection />
      <BFitDifferentiationSection />
      <BFitHowToUseSection />
      <BFitAudienceSection />
      <BFitSupportSection />
      <BFitDescargablesSection />
      <BFitFinalCtaSection />
      <BFitDisclaimerSection />
    </>
  );
}
