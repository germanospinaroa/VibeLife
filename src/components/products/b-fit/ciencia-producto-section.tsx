"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitCienciaProductoSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "La diferencia está en cómo trabaja dentro de tu cuerpo",
                en: "The difference is in how it works inside your body",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "B-Fit no actúa en una sola área.",
                en: "B-Fit doesn't work on just one area.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Funciona como un sistema que impacta:",
                en: "It works as a system that impacts:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "apetito", en: "appetite" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "metabolismo", en: "metabolism" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "digestión", en: "digestion" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "energía", en: "energy" }, language)}</p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Gracias a una combinación sinérgica de ingredientes que trabajan juntos, no por separado",
                en: "Thanks to a synergistic combination of ingredients that work together, not separately",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-gradient-to-r from-[#2f4c53] to-[#456F78] p-8 text-white">
            <p className="text-base leading-7">
              {localize(
                {
                  es: "Cada ingrediente tiene un propósito. Juntos, crean un efecto mucho más potente que la suma de sus partes.",
                  en: "Each ingredient has a purpose. Together, they create a much more powerful effect than the sum of their parts.",
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
