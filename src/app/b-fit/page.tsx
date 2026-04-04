import type { Metadata } from "next";
import { BFitHeroSection } from "@/components/products/b-fit/hero-section";
import { BFitEducationSection } from "@/components/products/b-fit/education-section";
import { BFitProblemSection } from "@/components/products/b-fit/problem-section";
import { BFitBreakthroughSection } from "@/components/products/b-fit/breakthrough-section";
import { BFitIntroductionSection } from "@/components/products/b-fit/introduction-bfit-section";
import { BFitHowItWorksSection } from "@/components/products/b-fit/how-it-works-section";
import { BFitBenefitsSection } from "@/components/products/b-fit/benefits-section";
import { BFitDifferentiationSection } from "@/components/products/b-fit/differentiation-section";
import { BFitHowToUseSection } from "@/components/products/b-fit/how-to-use-section";
import { BFitAudienceSection } from "@/components/products/b-fit/audience-section";
import { BFitSupportSection } from "@/components/products/b-fit/support-section";
import { BFitFinalCtaSection } from "@/components/products/b-fit/final-cta-section";
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
      <BFitEducationSection />
      <BFitProblemSection />
      <BFitBreakthroughSection />
      <BFitIntroductionSection />
      <BFitHowItWorksSection />
      <BFitBenefitsSection />
      <BFitDifferentiationSection />
      <BFitHowToUseSection />
      <BFitAudienceSection />
      <BFitSupportSection />
      <BFitFinalCtaSection />
    </>
  );
}
