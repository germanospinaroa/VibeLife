"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseIntroduccionSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Aquí es donde RISE hace la diferencia",
                en: "Here's where RISE makes the difference",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "RISE es una mezcla funcional de café con ingredientes diseñados para:",
                en: "RISE is a functional coffee blend with ingredients designed to:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "mejorar tu claridad mental", en: "improve your mental clarity" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "darte energía sostenida", en: "give you sustained energy" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "reducir el impacto del estrés", en: "reduce the impact of stress" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "apoyar tu bienestar desde adentro", en: "support your wellbeing from within" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#9BC56A] to-[#6f9d49] p-8 text-white">
            <p className="text-lg font-semibold">
              👉 {localize(
                {
                  es: "No es un 'boost' momentáneo. Es una experiencia diferente.",
                  en: "It's not a momentary 'boost'. It's a different experience.",
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
