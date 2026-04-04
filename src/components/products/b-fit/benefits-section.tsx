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
                es: "Lo que puedes empezar a sentir",
                en: "What you can start to feel",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 mb-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Con el uso constante y acompañado de hábitos simples, puedes notar:",
                en: "With consistent use and simple habits, you can start to notice:",
              },
              language,
            )}
          </p>
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

        <Reveal delay={0.4} className="mt-12 text-center space-y-3">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "No es magia.",
                en: "It's not magic.",
              },
              language,
            )}
          </p>
          <p className="text-[#5c746d]">
            {localize(
              {
                es: "Es darle a tu cuerpo lo que necesita para funcionar mejor.",
                en: "It's giving your body what it needs to function better.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
