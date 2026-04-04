"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

export function BFitDisclaimerSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="rounded-2xl bg-[#fff5f0] p-8 border-l-4 border-[#d97706]">
            <p className="text-sm leading-7 text-[#5c746d]">
              {localize(
                {
                  es: "Este producto no sustituye hábitos saludables ni recomendaciones médicas.\n\nConsulta con un profesional antes de iniciar cualquier programa.",
                  en: "This product does not substitute for healthy habits or medical recommendations.\n\nConsult with a healthcare professional before starting any program.",
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
