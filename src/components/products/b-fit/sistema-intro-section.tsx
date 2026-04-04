"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitSistemaIntroSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Esto no es una solución rápida… es un proceso inteligente",
                en: "This isn't a quick fix… it's a smart process",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Cuando empiezas B-Fit, no solo estás tomando un suplemento.",
                en: "When you start B-Fit, you're not just taking a supplement.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Estás entrando en un sistema diseñado para ayudarte a:",
                en: "You're entering a system designed to help you:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "recuperar tu energía", en: "recover your energy" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "equilibrar tu metabolismo", en: "balance your metabolism" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "construir hábitos sostenibles", en: "build sustainable habits" }, language)}</p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            👉{" "}
            {localize(
              {
                es: "Es un enfoque completo, no una solución aislada.",
                en: "It's a complete approach, not an isolated solution.",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#6f9d49]">
            <p className="text-lg font-semibold text-[#2f4541] italic">
              {localize(
                {
                  es: '"Se trata de un nuevo estilo de vida que te hará sentir tan bien como te verás."',
                  en: '"It\'s about a new lifestyle that will make you feel as good as you\'ll look."',
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
