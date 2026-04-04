"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitSistemaCompletoSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "El resultado no viene de una sola acción",
                en: "Results don't come from a single action",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "El verdadero cambio ocurre cuando integras:",
                en: "Real change happens when you integrate:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "lo que tomas", en: "what you take" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "lo que comes", en: "what you eat" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "cómo vives", en: "how you live" }, language)}</p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "El sistema B-Fit combina:",
                en: "The B-Fit system combines:",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-gradient-to-r from-[#6f9d49] to-[#456F78] p-8 text-white space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 font-bold">•</span>
              <p>{localize({ es: "suplementación", en: "supplementation" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 font-bold">•</span>
              <p>{localize({ es: "nutrición basada en estilo mediterráneo", en: "Mediterranean-style nutrition" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 font-bold">•</span>
              <p>{localize({ es: "hábitos sostenibles", en: "sustainable habits" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#6f9d49] space-y-3">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No es restricción.", en: "It's not restriction." }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Es estructura.", en: "It's structure." }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
