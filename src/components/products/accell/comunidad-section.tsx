"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellComunidadSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Energizado. Ágil. Enfocado. Seguro de ti mismo.",
                en: "Energized. Agile. Focused. Confident.",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Ese es el poder de Accell.",
                en: "That's the power of Accell.",
              },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "Si buscas un producto práctico que complemente tu dieta, te provea energía y te ayude a mejorar tu desempeño, la respuesta es Accell — un impulso para tu cuerpo, mente y energía.",
                en: "If you're looking for a practical product that complements your diet, provides energy, and helps you improve your performance, the answer is Accell — a boost for your body, mind, and energy.",
              },
              language,
            )}
          </p>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "No estás solo en este proceso. Tenemos el soporte y la guía que necesitas para sacarle el máximo a Accell.",
                  en: "You're not alone in this process. We have the support and guidance you need to get the most out of Accell.",
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
