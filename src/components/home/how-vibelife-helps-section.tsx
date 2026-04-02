"use client";

import { Bolt, HeartHandshake, Leaf } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const blocks = [
  {
    title: {
      es: "Mejorar tu energía diaria",
      en: "Improve your daily energy",
    },
    description: {
      es: "Una rutina bien acompañada puede ayudarte a sostener enfoque, constancia y mejor rendimiento durante el día.",
      en: "A well-supported routine can help you sustain focus, consistency and better performance throughout the day.",
    },
    icon: Bolt,
  },
  {
    title: {
      es: "Construir hábitos saludables",
      en: "Build healthier habits",
    },
    description: {
      es: "Los cambios pequeños y repetidos suelen tener más impacto que los esfuerzos aislados o difíciles de sostener.",
      en: "Small repeated changes usually have more impact than isolated efforts that are hard to sustain.",
    },
    icon: HeartHandshake,
  },
  {
    title: {
      es: "Cuidar tu bienestar de forma natural",
      en: "Take care of your wellness naturally",
    },
    description: {
      es: "El descanso, el movimiento, la alimentación y los productos adecuados pueden complementar una rutina más equilibrada.",
      en: "Rest, movement, nutrition and the right products can complement a more balanced routine.",
    },
    icon: Leaf,
  },
];

export function HowVibeLifeHelpsSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <SectionHeading
        align="center"
        title={localize(
          {
            es: "¿Cómo puedes mejorar tu bienestar?",
            en: "How can you improve your wellness?",
          },
          language,
        )}
        description={localize(
          {
            es: "Existen diferentes formas de apoyar tu bienestar, desde hábitos diarios hasta el uso de productos adecuados que complementen tu rutina.",
            en: "There are different ways to support your wellness, from daily habits to the use of suitable products that complement your routine.",
          },
          language,
        )}
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-[#5c746d] sm:text-base">
        {localize(
          {
            es: "No se trata de hacerlo todo a la vez, sino de entender qué cambios pueden ayudarte hoy y sostenerlos con más claridad.",
            en: "It is not about doing everything at once, but about understanding which changes can help you today and sustaining them more clearly.",
          },
          language,
        )}
      </p>

      <StaggerGroup className="mt-12 grid gap-5 lg:grid-cols-3">
        {blocks.map((block) => {
          const Icon = block.icon;

          return (
            <StaggerItem key={block.title.es}>
              <Card className="h-full bg-white/84 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef7e6] text-[#6f9d49]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">
                  {localize(block.title, language)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {localize(block.description, language)}
                </p>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionShell>
  );
}
