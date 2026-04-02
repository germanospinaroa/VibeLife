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
      es: "Energía diaria",
      en: "Daily energy",
    },
    description: {
      es: "Sentirte con energía no debería ser algo ocasional.",
      en: "Feeling energized should not be something occasional.",
    },
    icon: Bolt,
  },
  {
    title: {
      es: "Hábitos sostenibles",
      en: "Sustainable habits",
    },
    description: {
      es: "Tu bienestar depende de lo que haces todos los días.",
      en: "Your wellness depends on what you do every day.",
    },
    icon: CheckCircle2,
  },
  {
    title: {
      es: "Equilibrio físico y mental",
      en: "Physical and mental balance",
    },
    description: {
      es: "Cuerpo y mente trabajan juntos.",
      en: "Body and mind work together.",
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
                es: "Cuidar tu bienestar no es un lujo, es una necesidad",
                en: "Taking care of your wellness is not a luxury, it is a necessity",
              },
              language,
            )}
            description={localize(
              {
                es: "El ritmo de vida actual, el estrés, la alimentación y los hábitos diarios impactan directamente en cómo te sientes, cómo rindes y cómo vives.",
                en: "Today’s pace of life, stress, nutrition and daily habits directly impact how you feel, how you perform and how you live.",
              },
              language,
            )}
          />
          <p className="mt-6 max-w-2xl text-pretty text-sm leading-8 text-[#5c746d] sm:text-base">
            {localize(
              {
                es: "Muchas veces normalizamos el cansancio, la falta de energía o el desbalance, sin darnos cuenta de que pequeños cambios pueden marcar una gran diferencia.",
                en: "Many times we normalize tiredness, low energy or imbalance without realizing that small changes can make a big difference.",
              },
              language,
            )}
          </p>
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
