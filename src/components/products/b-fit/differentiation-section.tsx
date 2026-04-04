"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitDifferentiationSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Por qué la mayoría falla… y esto es diferente?",
                en: "Why most fail… and this is different?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "La mayoría de soluciones se enfocan en exigirte más:",
                en: "Most solutions focus on demanding more from you:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p>{localize({ es: "más disciplina", en: "more discipline" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p>{localize({ es: "más restricciones", en: "more restrictions" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p>{localize({ es: "más esfuerzo", en: "more effort" }, language)}</p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Pero no trabajan en lo más importante:",
                en: "But they don't address what's most important:",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-[#fff5f0] p-8 border-l-4 border-[#d97706]">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉{" "}
              {localize(
                {
                  es: "el estado interno de tu cuerpo",
                  en: "the internal state of your body",
                },
                language,
              )}
            </p>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "B-Fit cambia el enfoque:",
                en: "B-Fit changes the approach:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-[#f0f9e8] p-8 space-y-3 border-l-4 border-[#6f9d49]">
            <p className="font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Primero apoyas tu cuerpo",
                  en: "First, you support your body",
                },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Luego construyes hábitos",
                  en: "Then, you build habits",
                },
                language,
              )}
            </p>
            <p className="text-[#5c746d] text-sm mt-4">
              {localize(
                {
                  es: "Y eso hace que todo sea más sostenible.",
                  en: "And that makes everything more sustainable.",
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
