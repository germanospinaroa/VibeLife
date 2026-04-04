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
                es: "¿Cómo integrarlo en tu día?",
                en: "How to integrate it into your day?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="font-semibold text-[#2f4541]">
            {localize(
              {
                es: "No necesitas cambiar toda tu vida.",
                en: "You don't need to change your whole life.",
              },
              language,
            )}
          </p>

          <p className="font-semibold text-[#2f4541]">
            {localize(
              { es: "Solo empezar diferente.", en: "Just start differently." },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "B-Fit está diseñado para integrarse fácilmente en tu día, sin complicaciones.",
                en: "B-Fit is designed to integrate easily into your day, without complications.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
