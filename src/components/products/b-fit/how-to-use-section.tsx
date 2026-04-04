"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitHowToUseSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Cómo integrarlo en tu rutina de forma real",
                en: "How to integrate it into your routine realistically",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="font-semibold text-[#2f4541] text-lg">
            {localize(
              {
                es: "B-Fit está diseñado para ser fácil de usar.",
                en: "B-Fit is designed to be easy to use.",
              },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "Puedes integrarlo así:",
                en: "You can integrate it like this:",
              },
              language,
            )}
          </p>

          <div className="rounded-xi bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "tomarlo diariamente según indicación", en: "take it daily as directed" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "acompañarlo con alimentación balanceada", en: "pair it with balanced nutrition" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "mantener hábitos simples (no extremos)", en: "maintain simple habits (not extreme)" },
                  language,
                )}
              </p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "No necesitas hacer cambios radicales desde el día uno.",
                en: "You don't need to make radical changes from day one.",
              },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "De hecho, lo ideal es empezar con pequeños ajustes sostenibles.",
                en: "In fact, it's best to start with small, sustainable adjustments.",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#6f9d49]">
            <p className="font-semibold text-[#2f4541] mb-3">
              👉{" "}
              {localize(
                {
                  es: "Porque lo que cambia tu vida no es lo que haces un día",
                  en: "Because what changes your life isn't what you do one day",
                },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              👉{" "}
              {localize(
                {
                  es: "es lo que puedes mantener en el tiempo",
                  en: "it's what you can maintain over time",
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
