"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const beneficios = [
  {
    es: "Te sientes más ligera durante el día",
    en: "You feel lighter throughout the day",
  },
  {
    es: "Tu cuerpo responde mejor cuando te mueves",
    en: "Your body responds better when you move",
  },
  {
    es: "Recuperas energía sin exigirte tanto",
    en: "You recover energy without pushing yourself so hard",
  },
  {
    es: "Menos sensación de carga acumulada",
    en: "Less feeling of accumulated burden",
  },
  {
    es: "Más bienestar real, no momentáneo",
    en: "More real wellbeing, not fleeting",
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
                es: "Lo que puedes empezar a notar",
                en: "What you can start to notice",
              },
              language,
            )}
            description={localize(
              {
                es: "No es magia. No es inmediato. Es constancia — y darle a tu cuerpo lo que sí necesita.",
                en: "It's not magic. It's not immediate. It's consistency — and giving your body what it actually needs.",
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
