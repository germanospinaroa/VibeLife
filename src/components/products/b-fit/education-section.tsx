"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitEducationSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Por qué haces esfuerzos… pero tu cuerpo no responde?",
                en: "Why do you try… but your body doesn't respond?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Muchas mujeres viven en un estado donde su cuerpo está trabajando en contra de ellas, no a favor.",
                en: "Many women live in a state where their body is working against them, not for them.",
              },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "Esto puede manifestarse como:",
                en: "This can show up as:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "metabolismo más lento", en: "slower metabolism" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "acumulación de grasa incluso haciendo 'lo correcto'", en: "fat accumulation even when doing 'the right things'" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "sensación constante de inflamación", en: "constant feeling of bloating" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "baja energía durante el día", en: "low energy throughout the day" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "dificultad para sostener hábitos", en: "difficulty sustaining habits" }, language)}</p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "El problema no es que no lo intentes.",
                en: "The problem isn't that you're not trying.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "El problema es que tu cuerpo no está en condiciones óptimas para responder.",
                en: "The problem is that your body isn't in optimal conditions to respond.",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-[#fff5f0] p-8 border-l-4 border-[#d97706]">
            <div className="space-y-3">
              <p>👉 {localize({ es: "haces más esfuerzo", en: "you make more effort" }, language)}</p>
              <p>👉 {localize({ es: "ves menos resultado", en: "you see less result" }, language)}</p>
              <p>👉 {localize({ es: "te frustras más rápido", en: "you get frustrated faster" }, language)}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
