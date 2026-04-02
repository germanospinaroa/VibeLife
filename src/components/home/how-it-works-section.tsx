"use client";

import { MessageCircleMore, Search, Sparkles } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

const steps = [
  {
    title: {
      es: "Explora los productos",
      en: "Explore the products",
    },
    description: {
      es: "Descubre cuál se adapta mejor a ti.",
      en: "Find out which one fits you best.",
    },
    icon: Sparkles,
  },
  {
    title: {
      es: "Aprende cómo usarlo",
      en: "Learn how to use it",
    },
    description: {
      es: "Te orientamos para que obtengas mejores resultados.",
      en: "We guide you so you can get better results.",
    },
    icon: Search,
  },
  {
    title: {
      es: "Escríbenos por WhatsApp",
      en: "Message us on WhatsApp",
    },
    description: {
      es: "Resolvemos tus dudas directamente.",
      en: "We answer your questions directly.",
    },
    icon: MessageCircleMore,
  },
];

export function HowItWorksSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <SectionHeading
        eyebrow={localize(
          {
            es: "Cómo empezar",
            en: "How to start",
          },
          language,
        )}
        title={localize(
          {
            es: "Empieza en 3 pasos",
            en: "Start in 3 steps",
          },
          language,
        )}
        description={localize(
          {
            es: "Un flujo simple para descubrir productos, entenderlos mejor y resolver dudas rápido.",
            en: "A simple flow to discover products, understand them better and resolve questions quickly.",
          },
          language,
        )}
      />

      <StaggerGroup className="relative mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
        <div className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-[linear-gradient(90deg,rgba(69,111,120,0.08),rgba(69,111,120,0.32),rgba(69,111,120,0.08))] lg:block" />
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <StaggerItem key={step.title.es}>
              <Card className="relative h-full bg-white/84 p-6 pt-7">
                <div className="relative z-10 mb-5 flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#35525b] text-lg font-semibold text-white shadow-[0_16px_28px_rgba(62,102,112,0.24)]">
                    {index + 1}
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf6e4] text-[#6f9d49]">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6e847d]">
                  {localize(
                    {
                      es: `Paso ${index + 1}`,
                      en: `Step ${index + 1}`,
                    },
                    language,
                  )}
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
