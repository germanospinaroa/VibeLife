"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellPosicionamientoSection() {
  const { language } = useLanguage();

  const ingredients = [
    {
      es: "Cafeína de fuentes naturales (té verde) → energía gradual",
      en: "Caffeine from natural sources (green tea) → gradual energy",
    },
    {
      es: "Vitaminas B → soporte neurológico y energético",
      en: "B vitamins → neurological and energy support",
    },
    {
      es: "Enzimas digestivas → absorción óptima",
      en: "Digestive enzymes → optimal absorption",
    },
    {
      es: "Minerales → hidratación real a nivel celular",
      en: "Minerals → real hydration at the cellular level",
    },
  ];

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No es un energizante común",
                en: "It's not a common energy drink",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "La mayoría de las bebidas energéticas te dan una sacudida… y luego una caída.",
                en: "Most energy drinks give you a jolt… and then a crash.",
              },
              language,
            )}
          </p>
          <p className="text-xl font-bold text-[#2f4541]">
            {localize({ es: "Accell no.", en: "Accell doesn't." }, language)}
          </p>
          <p>
            {localize(
              {
                es: "Accell usa ingredientes funcionales que trabajan en sinergia:",
                en: "Accell uses functional ingredients that work in synergy:",
              },
              language,
            )}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-6 space-y-3">
          {ingredients.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold mt-1">•</span>
              <p className="text-base leading-relaxed text-[#5c746d] sm:text-lg">
                {localize(item, language)}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.3} className="mt-8">
          <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "¿El resultado? Energía limpia, mente clara, cuerpo activo.",
                  en: "The result? Clean energy, clear mind, active body.",
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
