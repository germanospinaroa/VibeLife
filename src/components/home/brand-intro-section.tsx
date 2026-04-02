import { Heart, Leaf, Sparkles, SunMedium } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

const concepts = [
  {
    title: "Natural Wellness",
    description: "A softer approach to feeling well, grounded in everyday care.",
    icon: Leaf,
  },
  {
    title: "Personal Growth",
    description: "Daily choices that help life feel more aligned and intentional.",
    icon: SunMedium,
  },
  {
    title: "Positive Energy",
    description: "Mindset, rhythm and good habits that support a better day.",
    icon: Sparkles,
  },
  {
    title: "Healthy Lifestyle",
    description: "Balance built through nourishment, movement and conscious living.",
    icon: Heart,
  },
];

export function BrandIntroSection() {
  return (
    <SectionShell tone="soft">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Overview"
            title="Selected products, guidance and natural wellness in one place"
            description="VibeLife was created to make the wellness journey easier to understand, with clearer guidance, selected products and direct support for healthier daily habits."
          />
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2">
          {concepts.map((concept) => {
            const Icon = concept.icon;

            return (
              <StaggerItem key={concept.title}>
                <Card className="h-full bg-white/80">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6e4] text-[#6f9d49]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold">
                    {concept.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {concept.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
