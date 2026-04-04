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
    { es: "Más energía durante el día sin depender de estimulantes", en: "More energy throughout the day without relying on stimulants" },
    { es: "Menor sensación de inflamación o pesadez", en: "Less feeling of bloating or heaviness" },
    { es: "Mejor respuesta del cuerpo a cambios en alimentación", en: "Better body response to dietary changes" },
    { es: "Mayor facilidad para sostener hábitos", en: "Easier to maintain habits" },
    { es: "Sensación de control sobre tu proceso", en: "Feeling of control over your progress" },
  ];

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que puedes empezar a notar con el tiempo",
                en: "What you can start to notice over time",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 mb-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Al integrar B-Fit dentro de una rutina básica, muchas personas experimentan:",
                en: "When integrating B-Fit into a basic routine, many people experience:",
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

        <Reveal delay={0.4} className="mt-12 space-y-6">
          <div className="rounded-xl bg-[#fff5f0] p-8 border-l-4 border-[#d97706]">
            <p className="font-semibold text-[#2f4541] mb-4">
              {localize(
                {
                  es: "Importante:",
                  en: "Important:",
                },
                language,
              )}
            </p>
            <p className="text-[#5c746d]">
              {localize(
                {
                  es: "Esto no es inmediato ni mágico.\n\nEs progresivo, acumulativo y depende de la constancia.",
                  en: "This isn't immediate or magical.\n\nIt's progressive, cumulative and depends on consistency.",
                },
                language,
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
