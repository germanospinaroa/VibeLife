"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellUsoSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Cómo integrarlo en tu día",
                en: "How to integrate it into your day",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize({ es: "Accell está diseñado para:", en: "Accell is designed to:" }, language)}
          </p>

          <ul className="space-y-2 pl-1">
            {[
              { es: "integrarse fácilmente en tu rutina", en: "integrate easily into your routine" },
              { es: "acompañar tu alimentación", en: "complement your nutrition" },
              { es: "potenciar tu proceso", en: "enhance your process" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No necesitas cambios extremos", en: "You don't need extreme changes" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "necesitas consistencia", en: "you need consistency" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
