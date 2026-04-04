"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseProblemasCafeSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "El problema no es el café… es depender de él",
                en: "The problem isn't coffee… it's depending on it",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "El café tradicional:",
                en: "Traditional coffee:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p>{localize({ es: "te da energía rápida", en: "gives you quick energy" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p>{localize({ es: "pero también genera picos y caídas", en: "but also creates spikes and crashes" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p>{localize({ es: "puede aumentar ansiedad", en: "can increase anxiety" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p>{localize({ es: "afecta tu estabilidad durante el día", en: "affects your stability throughout the day" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#fff5f0] p-8 border-l-4 border-[#d97706] space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "No te está ayudando a largo plazo",
                  en: "It's not helping you long-term",
                },
                language,
              )}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "solo te mantiene funcionando",
                  en: "it's just keeping you functioning",
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
