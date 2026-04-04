"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitHabitosClave() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Pequeños cambios que generan grandes resultados",
                en: "Small changes that create big results",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "El programa recomienda:",
                en: "The program recommends:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "enfoque mental positivo", en: "positive mental focus" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "apoyo de entorno", en: "environmental support" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "claridad en tu 'por qué'", en: "clarity on your 'why'" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#fff5f0] p-8 border-l-4 border-[#d97706]">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "Porque sin esto… ningún producto funciona",
                  en: "Because without this… no product works",
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
