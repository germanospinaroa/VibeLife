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
                es: "Aquí es donde B-Fit realmente ayuda",
                en: "Here's where B-Fit really helps",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "B-Fit es un suplemento diseñado para apoyar tu cuerpo desde adentro.",
                en: "B-Fit is a supplement designed to support your body from within.",
              },
              language,
            )}
          </p>

          <p className="font-semibold text-[#2f4541]">
            {localize(
              {
                es: "No reemplaza hábitos.",
                en: "It doesn't replace habits.",
              },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "Pero ayuda a que tu cuerpo:",
                en: "But it helps your body:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-4">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">✓</span>
              <p className="font-medium text-[#2f4541]">
                {localize(
                  { es: "procese mejor los nutrientes", en: "process nutrients better" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">✓</span>
              <p className="font-medium text-[#2f4541]">
                {localize(
                  { es: "active su metabolismo", en: "activate its metabolism" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">✓</span>
              <p className="font-medium text-[#2f4541]">
                {localize(
                  { es: "tenga más energía disponible", en: "have more available energy" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">✓</span>
              <p className="font-medium text-[#2f4541]">
                {localize(
                  { es: "reduzca la sensación de estancamiento", en: "reduce the feeling of being stuck" },
                  language,
                )}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f9e8] p-8">
            <p className="font-semibold text-[#2f4541] text-lg mb-3">
              {localize(
                {
                  es: "En pocas palabras:",
                  en: "In short:",
                },
                language,
              )}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Hace que el esfuerzo que haces… empiece a tener sentido.",
                  en: "It makes the effort you're making… actually start to make sense.",
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
