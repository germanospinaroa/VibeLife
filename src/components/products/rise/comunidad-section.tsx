"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";
import { BorderBeam } from "@/components/ui/border-beam";

export function RiseComunidadSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No estás haciendo esto sola",
                en: "You're not doing this alone",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-[#f0f9e8]/60 p-8 sm:p-10">
          <BorderBeam
            colorFrom="#9BC56A"
            colorTo="#6f9d49"
            duration={12}
            size={80}
            borderWidth={1}
          />
          <div className="relative z-10 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Esto no es solo un producto.",
                  en: "This isn't just a product.",
                },
                language,
              )}
            </p>

            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Es una comunidad de mujeres que:",
                  en: "It's a community of women who:",
                },
                language,
              )}
            </p>

            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <p>{localize({ es: "están priorizándose", en: "are prioritizing themselves" }, language)}</p>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <p>{localize({ es: "están recuperando su energía", en: "are reclaiming their energy" }, language)}</p>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <p>{localize({ es: "están cambiando su forma de vivir", en: "are changing how they live" }, language)}</p>
              </div>
            </div>

            <div className="rounded-lg bg-[#f0f9e8] p-4 border-l-4 border-[#9BC56A] mt-6">
              <p className="text-lg font-semibold text-[#2f4541]">
                👉 {localize(
                  {
                    es: "Aquí no se trata de perfección",
                    en: "Here it's not about perfection",
                  },
                  language,
                )}
              </p>
              <p className="text-lg font-semibold text-[#2f4541] mt-2">
                {localize(
                  {
                    es: "se trata de proceso",
                    en: "it's about process",
                  },
                  language,
                )}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
