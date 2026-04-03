"use client";

import { Bolt, CheckCircle2, HeartHandshake } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const pillars = [
  {
    title: {
      es: "Energía que dura todo el día",
      en: "Energy that lasts all day",
    },
    description: {
      es: "No solo para el café de las 8am. Para las 3pm cuando todo cae.",
      en: "Not just for the 8am coffee. For the 3pm slump when everything falls apart.",
    },
    icon: Bolt,
  },
  {
    title: {
      es: "Hábitos que se sostienen solos",
      en: "Habits that sustain themselves",
    },
    description: {
      es: "Pequeños. Reales. Que no dependen de que estés perfecta ese día.",
      en: "Small. Real. That don't depend on you being perfect that day.",
    },
    icon: CheckCircle2,
  },
  {
    title: {
      es: "Tu cuerpo y tu mente en el mismo canal",
      en: "Your body and mind on the same channel",
    },
    description: {
      es: "Cuando uno mejora, el otro lo siente. Así de conectados están.",
      en: "When one improves, the other feels it. They are that connected.",
    },
    icon: HeartHandshake,
  },
];

export function WhyWellnessMattersSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeading
            title={localize(
              {
                es: "Lo que cambia cuando tu cuerpo tiene lo que necesita",
                en: "What changes when your body has what it needs",
              },
              language,
            )}
            description={localize(
              {
                es: "No se trata de hacer más. Se trata de empezar a funcionar mejor con lo que ya tienes — y el apoyo correcto.",
                en: "It is not about doing more. It is about starting to function better with what you already have — and the right support.",
              },
              language,
            )}
          />
        </div>

        <StaggerGroup className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <StaggerItem key={pillar.title.es}>
                <Card className="bg-white/84 p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef7e6] text-[#6f9d49]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-[#2f4541]">
                        {localize(pillar.title, language)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                        {localize(pillar.description, language)}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
