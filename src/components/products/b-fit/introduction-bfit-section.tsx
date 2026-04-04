"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitIntroductionSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Qué es B-Fit y qué hace realmente?",
                en: "What is B-Fit and what does it really do?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "B-Fit es un suplemento diseñado para apoyar tu metabolismo y tu equilibrio interno desde adentro.",
                en: "B-Fit is a supplement designed to support your metabolism and internal balance from within.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "No es un reemplazo de hábitos.",
                en: "It's not a replacement for habits.",
              },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "Es una herramienta que ayuda a que tu cuerpo funcione mejor mientras haces cambios en tu estilo de vida.",
                en: "It's a tool that helps your body function better while you make lifestyle changes.",
              },
              language,
            )}
          </p>

          <p className="font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Su función principal es:",
                en: "Its main function is to:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "apoyar el metabolismo", en: "support your metabolism" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "mejorar la forma en que tu cuerpo utiliza la energía", en: "improve how your body uses energy" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "ayudar a reducir la sensación de estancamiento", en: "help reduce the feeling of being stuck" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "facilitar que tu cuerpo responda mejor a tus hábitos", en: "help your body respond better to your habits" },
                  language,
                )}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#6f9d49]">
            <p className="font-semibold text-[#2f4541] mb-4">
              {localize(
                {
                  es: "👉 En pocas palabras:",
                  en: "👉 In short:",
                },
                language,
              )}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "No hace el trabajo por ti, pero hace que tu cuerpo deje de resistirse al cambio.",
                  en: "It doesn't do the work for you, but it makes your body stop resisting change.",
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
