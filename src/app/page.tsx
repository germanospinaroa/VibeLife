import { FaqSection } from "@/components/home/faq-section";
import { HabitsThatMakeDifferenceSection } from "@/components/home/habits-that-make-a-difference-section";
import { CommunityHighlightSection } from "@/components/home/community-highlight-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowVibeLifeHelpsSection } from "@/components/home/how-vibelife-helps-section";
import { ProductsShowcaseSection } from "@/components/home/products-showcase-section";
import { WhoIsVibeLifeForSection } from "@/components/home/who-is-vibelife-for-section";
import { WhyWellnessMattersSection } from "@/components/home/why-wellness-matters-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyWellnessMattersSection />
      <HowVibeLifeHelpsSection />
      <HabitsThatMakeDifferenceSection />
      <ProductsShowcaseSection />
      <WhoIsVibeLifeForSection />
      <CommunityHighlightSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
