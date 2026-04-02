import { BookOpen, Heart, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

const educationBlocks = [
  {
    title: "Healthy habits that create balance",
    description:
      "Small daily actions can deeply influence energy, mental clarity and overall wellbeing.",
    icon: Sparkles,
  },
  {
    title: "Caring for body and mind together",
    description:
      "True wellness grows when physical care and emotional wellbeing are treated as part of the same journey.",
    icon: Heart,
  },
  {
    title: "Personal growth through daily intention",
    description:
      "Growth does not always begin with dramatic change. Often it begins with better routines and a better relationship with yourself.",
    icon: BookOpen,
  },
];

export function EducationalSection() {
  return (
    <SectionShell tone="soft">
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Guidance"
            title="Practical guidance helps you get better results"
            description="At VibeLife, guidance matters as much as the options themselves. Understanding habits and daily decisions makes it easier to choose what fits you best."
          />
        </Reveal>

        <div className="grid gap-4">
          {educationBlocks.map((block, index) => {
            const Icon = block.icon;

            return (
              <Reveal delay={index * 0.08} key={block.title}>
                <Card className="flex h-full items-start gap-4 bg-white/82">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf6e4] text-[#6f9d49]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{block.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                      {block.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
