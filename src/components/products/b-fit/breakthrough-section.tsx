"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitBreakthroughSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No es tu culpa",
                en: "It's not your fault",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <div className="space-y-4">
            <p>
              {localize(
                {
                  es: "Durante mucho tiempo te hicieron creer que era disciplina.",
                  en: "For a long time you were told it was about discipline.",
                },
                language,
              )}
            </p>
            <p>
              {localize(
                {
                  es: "Que era fuerza de voluntad.",
                  en: "That it was about willpower.",
                },
                language,
              )}
            </p>
            <p>
              {localize(
                {
                  es: "Que era \"hacer más\".",
                  en: "That it was about \"doing more\".",
                },
                language,
              )}
            </p>
          </div>

          <p className="font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Pero la realidad es otra:",
                en: "But the reality is different:",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-white/80 p-8 font-semibold text-[#2f4541] text-lg space-y-4">
            <p>
              {localize(
                {
                  es: "Tu cuerpo necesita apoyo, no exigencia.",
                  en: "Your body needs support, not pressure.",
                },
                language,
              )}
            </p>

            <p className="text-base leading-8">
              {localize(
                {
                  es: "Y cuando no lo tiene… todo se vuelve más difícil.",
                  en: "And when it doesn't have it… everything becomes harder.",
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
