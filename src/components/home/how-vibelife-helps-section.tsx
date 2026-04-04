"use client";

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const steps = [
  {
    number: "1",
    title: {
      es: "Te escuchamos",
      en: "We listen to you",
    },
    description: {
      es: "Entendemos cómo te sientes y qué necesitas",
      en: "We understand how you feel and what you need",
    },
  },
  {
    number: "2",
    title: {
      es: "Te guiamos",
      en: "We guide you",
    },
    description: {
      es: "Te mostramos opciones simples y realistas",
      en: "We show you simple and realistic options",
    },
  },
  {
    number: "3",
    title: {
      es: "Te acompañamos",
      en: "We support you",
    },
    description: {
      es: "No estás sola en el proceso",
      en: "You are not alone in the process",
    },
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
            es: "No tienes que hacerlo perfecto.\nSolo tienes que empezar con lo correcto.",
            en: "You do not have to do it perfectly.\nYou just have to start with what is right.",
          },
          language,
        )}
      />

      <StaggerGroup className="mt-12 grid gap-5 lg:grid-cols-3">
        {steps.map((step) => {
          return (
            <StaggerItem key={step.number}>
              <Card className="h-full bg-white/84 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef7e6] text-[#6f9d49] text-xl font-bold">
                  {step.number}
                </span>
                <h3 className="mt-5 text-2xl font-semibold">
                  {localize(step.title, language)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {localize(step.description, language)}
                </p>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionShell>
  );
}
