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
      es: "Empieza por recuperar el combustible. Sin energía, todo lo demás es fuerza de voluntad pura — y eso se agota.",
      en: "Start by recovering your fuel. Without energy, everything else is pure willpower — and that runs out.",
    },
    icon: Bolt,
  },
  {
    title: {
      es: "Construir hábitos saludables",
      en: "Build healthier habits",
    },
    description: {
      es: "No necesitas disciplina perfecta. Necesitas hábitos que se adapten a una vida real, ocupada y a veces caótica.",
      en: "You don't need perfect discipline. You need habits that adapt to a real, busy, sometimes chaotic life.",
    },
    icon: HeartHandshake,
  },
  {
    title: {
      es: "Cuidar tu bienestar de forma natural",
      en: "Take care of your wellness naturally",
    },
    description: {
      es: "Apoyo natural para lo que ya quieres hacer. No para reemplazar tu esfuerzo — para que ese esfuerzo rinda más.",
      en: "Natural support for what you already want to do. Not to replace your effort — to make that effort go further.",
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
            es: "¿Por dónde empezar si ya intentaste de todo?",
            en: "Where to start when you have already tried everything?",
          },
          language,
        )}
        description={localize(
          {
            es: "No con otro plan enorme. Con el primer paso correcto para ti.",
            en: "Not with another huge plan. With the right first step for you.",
          },
          language,
        )}
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-[#5c746d] sm:text-base">
        {localize(
          {
            es: "Cada persona llega a VibeLife desde un lugar diferente. Algunas con mucho cansancio. Otras con poco enfoque. Otras sin saber exactamente qué les pasa. Por eso no mandamos lo mismo a todas. Primero entendemos cómo estás — y desde ahí orientamos.",
            en: "Everyone comes to VibeLife from a different place. Some exhausted. Others unfocused. Others not quite sure what is wrong. That is why we do not send everyone the same thing. First we understand where you are — and from there we guide you.",
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
