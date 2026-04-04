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
    { es: "Apoya tu metabolismo desde adentro", en: "Supports your metabolism from within" },
    { es: "Te ayuda a sentirte más ligera y con más energía", en: "Helps you feel lighter and more energetic" },
    { es: "Reduce la sensación de estancamiento", en: "Reduces the feeling of being stuck" },
    { es: "Facilita que sostengas hábitos", en: "Makes it easier to stick to habits" },
    { es: "Acompaña tu proceso sin presión", en: "Supports your journey without pressure" },
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
