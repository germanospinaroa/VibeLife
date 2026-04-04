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
                es: "¿Por qué sientes que haces esfuerzo… pero no ves resultados?",
                en: "Why do you feel like you're trying… but not seeing results?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Muchas mujeres viven en un estado constante de:",
                en: "Many women live in a constant state of:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/60 p-8 space-y-4">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "metabolismo lento", en: "slow metabolism" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "inflamación", en: "inflammation" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "baja energía", en: "low energy" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "desbalance interno", en: "internal imbalance" },
                  language,
                )}
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Y eso genera algo muy frustrante:",
                en: "And that creates something very frustrating:",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#6f9d49]">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Haces cambios… pero tu cuerpo no responde igual",
                  en: "You make changes… but your body doesn't respond the same way",
                },
                language,
              )}
            </p>
          </div>

          <p>
            {localize(
              {
                es: "No porque estés haciendo algo mal.\nSino porque tu cuerpo no está en condiciones óptimas para cambiar.",
                en: "Not because you're doing something wrong.\nBut because your body isn't in optimal conditions to change.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
