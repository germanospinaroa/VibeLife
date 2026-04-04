"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitEducacionValorSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que nadie te explica sobre bajar de peso",
                en: "What nobody explains about losing weight",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "No se trata solo de comer menos.",
                en: "It's not just about eating less.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Se trata de:",
                en: "It's about:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "cuándo comes", en: "when you eat" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "cómo responde tu cuerpo", en: "how your body responds" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "qué tan estable está tu metabolismo", en: "how stable your metabolism is" }, language)}</p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Por ejemplo:",
                en: "For example:",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-gradient-to-r from-[#2f4c53] to-[#456F78] p-8 text-white">
            <p className="text-base leading-7">
              {localize(
                {
                  es: "Reducir tu ventana de alimentación permite que tu cuerpo acceda a reservas de grasa y las use como energía",
                  en: "Reducing your eating window allows your body to access fat reserves and use them as energy",
                },
                language,
              )}
            </p>
          </div>

          <p className="text-base leading-7 text-[#5c746d]">
            👉{" "}
            {localize(
              {
                es: "Esto acelera resultados sin necesidad de extremos",
                en: "This accelerates results without extremes",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
