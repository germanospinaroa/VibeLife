import { Heart, Leaf, Sparkles, SunMedium } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

const pillars = [
  {
    title: "Natural Wellness",
    description:
      "A practical approach to feeling better through conscious care and healthier routines.",
    icon: Leaf,
  },
  {
    title: "Personal Growth",
    description:
      "Growth happens through intention, reflection and the decision to build a more aligned life.",
    icon: SunMedium,
  },
  {
    title: "Positive Energy",
    description:
      "The way we think, feel and move through life deeply shapes our wellbeing.",
    icon: Sparkles,
  },
  {
    title: "Healthy Lifestyle",
    description:
      "Daily balance grows through rest, movement, nourishment, focus and consistent choices.",
    icon: Heart,
  },
];

export function PillarsSection() {
  return (
    <SectionShell tone="leaf">
      <SectionHeading
        align="center"
        eyebrow="Core Pillars"
        title="Wellness, growth and everyday balance in one modern ecosystem"
        description="These four ideas shape how VibeLife guides each experience with more clarity and intention."
      />

      <StaggerGroup className="mt-12 grid gap-5 lg:grid-cols-4">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;

          return (
            <StaggerItem key={pillar.title}>
              <Card className="h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(244,250,239,0.94))]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff7e7] text-[#6c9848]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {pillar.description}
                </p>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionShell>
  );
}
