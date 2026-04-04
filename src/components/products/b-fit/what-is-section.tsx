"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitWhatIsSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Qué es B-Fit?",
                en: "What is B-Fit?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "B-Fit es un complemento diseñado para acompañar tu metabolismo y ayudarte a crear un entorno más favorable para sentirte mejor en tu cuerpo.",
                en: "B-Fit is a supplement designed to support your metabolism and help you create a more favorable environment to feel better in your body.",
              },
              language,
            )}
          </p>

          <div className="space-y-4 rounded-2xl bg-[#f0f9e8] p-8">
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "No es una solución mágica.", en: "It's not a magic solution." },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Es una herramienta que, junto con pequeños cambios, puede marcar una gran diferencia.",
                  en: "It's a tool that, combined with small changes, can make a big difference.",
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
