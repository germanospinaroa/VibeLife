"use client";

import { Bolt, Heart, Leaf, Target } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const audiences = [
  {
    title: {
      es: "Personas que quieren mejorar su energía",
      en: "People who want to improve their energy",
    },
    description: {
      es: "Buscan sostener mejor su ritmo diario y sentirse más activas.",
      en: "They want to sustain their daily rhythm better and feel more active.",
    },
    icon: Bolt,
  },
  {
    title: {
      es: "Personas que buscan hábitos más saludables",
      en: "People looking for healthier habits",
    },
    description: {
      es: "Quieren tomar decisiones más conscientes y sostenibles en su rutina.",
      en: "They want to make more conscious and sustainable decisions in their routine.",
    },
    icon: Leaf,
  },
  {
    title: {
      es: "Personas que quieren sentirse mejor día a día",
      en: "People who want to feel better day to day",
    },
    description: {
      es: "Les importa cómo se sienten, cómo rinden y cómo viven cada semana.",
      en: "They care about how they feel, perform and live each week.",
    },
    icon: Heart,
  },
  {
    title: {
      es: "Personas que buscan equilibrio",
      en: "People who seek balance",
    },
    description: {
      es: "Quieren una rutina que les ayude a mantenerse mejor física y mentalmente.",
      en: "They want a routine that helps them stay better physically and mentally.",
    },
    icon: Target,
  },
];

export function WhoIsVibeLifeForSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <SectionHeading
        align="center"
        title={localize(
          {
            es: "¿Para quién es VibeLife?",
            en: "Who is VibeLife for?",
          },
          language,
        )}
        description={localize(
          {
            es: "Si estás buscando sentirte mejor, mejorar tu rutina y contar con una guía más clara, aquí puedes encontrar opciones que acompañen ese proceso.",
            en: "If you want to feel better, improve your routine and have clearer guidance, here you can find options that support that process.",
          },
          language,
        )}
      />

      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2">
        {audiences.map((audience) => {
          const Icon = audience.icon;

          return (
            <StaggerItem key={audience.title.es}>
              <Card className="h-full bg-white/84 p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef7e6] text-[#6f9d49]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2f4541]">
                      {localize(audience.title, language)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                      {localize(audience.description, language)}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionShell>
  );
}
