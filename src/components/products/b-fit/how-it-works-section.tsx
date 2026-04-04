"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitHowItWorksSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Por qué empezar desde el metabolismo cambia todo?",
                en: "Why starting with your metabolism changes everything?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Cuando tu metabolismo está activo y equilibrado:",
                en: "When your metabolism is active and balanced:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">✓</span>
              <p>
                {localize(
                  { es: "tu cuerpo utiliza mejor lo que comes", en: "your body uses what you eat better" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">✓</span>
              <p>
                {localize(
                  { es: "tienes más energía disponible", en: "you have more available energy" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">✓</span>
              <p>
                {localize(
                  { es: "te sientes más ligera", en: "you feel lighter" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">✓</span>
              <p>
                {localize(
                  { es: "puedes sostener hábitos con menos esfuerzo", en: "you can maintain habits with less effort" },
                  language,
                )}
              </p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Esto cambia completamente la experiencia:",
                en: "This completely changes the experience:",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Ya no se trata de luchar contra tu cuerpo.",
                  en: "It's no longer about fighting your body.",
                },
                language,
              )}
            </p>

            <p className="text-lg font-semibold text-[#2f4541] border-t border-[#6f9d49]/20 pt-4">
              👉{" "}
              {localize(
                {
                  es: "Se trata de trabajar con él.",
                  en: "It's about working with it.",
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
