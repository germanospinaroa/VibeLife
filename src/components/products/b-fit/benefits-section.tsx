"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";
import { Check } from "lucide-react";

export function BFitBenefitsSection() {
  const { language } = useLanguage();

  const benefits = [
    { es: "Apoya el metabolismo", en: "Supports metabolism" },
    { es: "Contribuye al equilibrio del cuerpo", en: "Contributes to body balance" },
    { es: "Ayuda a sentirte más ligera", en: "Helps you feel lighter" },
    { es: "Facilita la constancia en hábitos", en: "Facilitates habit consistency" },
    { es: "Complementa tu estilo de vida", en: "Complements your lifestyle" },
  ];

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Cómo puede ayudarte?",
                en: "How can it help you?",
              },
              language,
            )}
          />
        </Reveal>

        <StaggerGroup className="mt-12 space-y-4">
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-4 rounded-xl bg-white/70 p-6 transition-all hover:shadow-[0_4px_12px_rgba(62,102,112,0.08)]">
                <div className="shrink-0 rounded-lg bg-[#6f9d49]/10 p-3">
                  <Check className="h-5 w-5 text-[#6f9d49]" />
                </div>
                <p className="text-base font-medium leading-7 text-[#5c746d] sm:text-lg">
                  {localize(benefit, language)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
