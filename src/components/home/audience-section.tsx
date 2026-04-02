import { CheckCircle2 } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

const audiencePoints = [
  "A more balanced lifestyle",
  "Habits that support wellbeing",
  "A healthier daily rhythm",
  "Personal growth with intention",
  "Guidance aligned with a natural and mindful perspective",
];

export function AudienceSection() {
  return (
    <SectionShell className="bg-white/24" tone="leaf">
      <SectionHeading
        align="center"
        eyebrow="Audience"
        title="VibeLife is for you if you are looking for..."
        description="A clearer way to explore wellness options, healthier rhythms and practical support."
      />

      <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {audiencePoints.map((point) => (
          <StaggerItem key={point}>
            <Card className="flex h-full flex-col items-start justify-between bg-white/84 p-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef7e7] text-[#6f9d49]">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <p className="mt-10 text-base font-semibold leading-7 text-[#35525b]">
                {point}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
