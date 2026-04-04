"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";
import { BorderBeam } from "@/components/ui/border-beam";

export function BFitSupportSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No estás sola en este proceso",
                en: "You're not alone in this process",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-[#f0f9e8]/60 p-8 sm:p-10">
          <BorderBeam
            colorFrom="#6f9d49"
            colorTo="#456F78"
            duration={12}
            size={80}
            borderWidth={1}
          />
          <div className="relative z-10 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "No se trata solo del producto.", en: "It's not just about the product." },
                language,
              )}
            </p>

            <p>
              {localize(
                {
                  es: "Te acompañamos paso a paso para ayudarte a integrar esto en tu vida de forma real, sostenible y consciente.",
                  en: "We support you step by step to help you integrate this into your life in a real, sustainable and conscious way.",
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
