"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const beneficios = [
  {
    es: "Mejor calidad de sueño — más profundo, más reparador",
    en: "Better sleep quality — deeper, more restorative",
  },
  {
    es: "Menos tensión y ansiedad durante el día",
    en: "Less tension and anxiety throughout the day",
  },
  {
    es: "Respuesta inflamatoria más equilibrada — menos malestar crónico",
    en: "More balanced inflammatory response — less chronic discomfort",
  },
  {
    es: "Más claridad mental — menos niebla, más enfoque",
    en: "More mental clarity — less fog, more focus",
  },
  {
    es: "Bienestar general sostenido — no picos y caídas",
    en: "Sustained general wellbeing — no spikes and crashes",
  },
  {
    es: "Recuperación más rápida después del esfuerzo físico o mental",
    en: "Faster recovery after physical or mental effort",
  },
];

export function IceBeneficiosSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="default">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que notarás — sin promesas imposibles",
                en: "What you'll notice — no impossible promises",
              },
              language,
            )}
            description={localize(
              {
                es: "Cada cuerpo es diferente. Estos son los cambios que reportan quienes lo usan de forma consistente:",
                en: "Every body is different. These are the changes reported by those who use it consistently:",
              },
              language,
            )}
          />
        </Reveal>

        <StaggerGroup className="mt-10 space-y-3">
          {beneficios.map((beneficio, index) => (
            <StaggerItem key={index}>
              <div className="flex items-center gap-4 rounded-xl bg-white/80 border border-[#D4E4F4] p-5">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#9BC56A]/15 font-bold text-[#9BC56A] text-base">
                  ✓
                </span>
                <p className="text-base leading-7 text-[#5c746d] sm:text-lg">
                  {localize(beneficio, language)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.5} className="mt-8">
          <p className="text-xs leading-6 text-[#9aada9] text-center px-4">
            {localize(
              {
                es: "*Estos beneficios son reportados por usuarios y no constituyen promesas médicas. UltraICE no está diseñado para diagnosticar, tratar ni prevenir ninguna enfermedad. Si tienes una condición de salud, consulta a tu médico antes de usarlo.",
                en: "*These benefits are reported by users and do not constitute medical promises. UltraICE is not designed to diagnose, treat or prevent any disease. If you have a health condition, consult your doctor before use.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
