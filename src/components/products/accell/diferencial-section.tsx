"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellDiferencialSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No bloquea… no obliga… regula",
                en: "It doesn't block… doesn't force… it regulates",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-10 text-base leading-8 text-[#5c746d] sm:text-lg">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Muchos productos:", en: "Many products:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "bloquean el apetito agresivamente", en: "aggressively block appetite" },
                { es: "generan dependencia", en: "create dependency" },
                { es: "alteran el sistema", en: "disrupt the system" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#d97706] font-bold">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Accell hace algo diferente:", en: "Accell does something different:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "regula", en: "regulates" },
                { es: "acompaña", en: "supports" },
                { es: "optimiza", en: "optimizes" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "Trabaja con tu cuerpo", en: "Works with your body" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "no contra él", en: "not against it" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
