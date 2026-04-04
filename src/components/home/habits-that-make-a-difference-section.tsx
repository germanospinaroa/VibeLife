"use client";

import { Leaf } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const benefits = [
  {
    title: {
      es: "Energía real",
      en: "Real energy",
    },
    description: {
      es: "No solo para empezar el día, sino para sostenerlo",
      en: "Not just to start the day, but to sustain it",
    },
  },
  {
    title: {
      es: "Hábitos sostenibles",
      en: "Sustainable habits",
    },
    description: {
      es: "Sin depender de motivación constante",
      en: "Without depending on constant motivation",
    },
  },
  {
    title: {
      es: "Equilibrio interno",
      en: "Inner balance",
    },
    description: {
      es: "Tu cuerpo y tu mente dejan de ir en direcciones opuestas",
      en: "Your body and mind stop going in opposite directions",
    },
  },
];

export function HabitsThatMakeDifferenceSection() {
  const { language } = useLanguage();

  return (
    <SectionShell className="bg-white/24" tone="teal">
      <SectionHeading
        align="center"
        title={localize(
          {
            es: "Lo que pasa cuando tu cuerpo tiene lo que necesita",
            en: "What happens when your body has what it needs",
          },
          language,
        )}
      />

      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
        {benefits.map((benefit) => {
          return (
            <StaggerItem key={benefit.title.es}>
              <Card className="h-full bg-white/84 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef7e6] text-[#6f9d49]">
                  <Leaf className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">
                  {localize(benefit.title, language)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {localize(benefit.description, language)}
                </p>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionShell>
  );
}
