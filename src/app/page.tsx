import { EmotionalMirrorSection } from "@/components/home/emotional-mirror-section";
import { FaqSection } from "@/components/home/faq-section";
import { HabitsThatMakeDifferenceSection } from "@/components/home/habits-that-make-a-difference-section";
import { CommunityHighlightSection } from "@/components/home/community-highlight-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowVibeLifeHelpsSection } from "@/components/home/how-vibelife-helps-section";
import { ProductsShowcaseSection } from "@/components/home/products-showcase-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhoIsVibeLifeForSection } from "@/components/home/who-is-vibelife-for-section";
import { NoEresSolaSection } from "@/components/home/no-eres-sola-section";
import { PerspectiveSection } from "@/components/home/perspective-section";
import { AboutAdelvisSection } from "@/components/home/about-adelvis-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EmotionalMirrorSection />
      <NoEresSolaSection />
      <PerspectiveSection />
      <HabitsThatMakeDifferenceSection />
      <HowVibeLifeHelpsSection />
      <ProductsShowcaseSection />
      <WhoIsVibeLifeForSection />
      <TestimonialsSection />
      <CommunityHighlightSection />
      <AboutAdelvisSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
