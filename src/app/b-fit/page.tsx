import type { Metadata } from "next";
import { BFitHeroSection } from "@/components/products/b-fit/hero-section";
import { BFitProblemSection } from "@/components/products/b-fit/problem-section";
import { BFitPerspectiveSection } from "@/components/products/b-fit/perspective-section";
import { BFitWhatIsSection } from "@/components/products/b-fit/what-is-section";
import { BFitBenefitsSection } from "@/components/products/b-fit/benefits-section";
import { BFitHowToUseSection } from "@/components/products/b-fit/how-to-use-section";
import { BFitAudienceSection } from "@/components/products/b-fit/audience-section";
import { BFitNotForSection } from "@/components/products/b-fit/not-for-section";
import { BFitSupportSection } from "@/components/products/b-fit/support-section";
import { BFitTestimonialsSection } from "@/components/products/b-fit/testimonials-section";
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
      <BFitProblemSection />
      <BFitPerspectiveSection />
      <BFitWhatIsSection />
      <BFitBenefitsSection />
      <BFitHowToUseSection />
      <BFitAudienceSection />
      <BFitNotForSection />
      <BFitSupportSection />
      <BFitTestimonialsSection />
      <BFitFinalCtaSection />
    </>
  );
}
