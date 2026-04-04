"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitTestimonialsSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que otras mujeres están logrando",
                en: "What other women are achieving",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <div className="rounded-2xl bg-white/60 p-8 text-center">
            <p className="text-base leading-8 text-[#6e847d] sm:text-lg italic">
              {localize(
                {
                  es: "(Aquí luego agregamos testimonios reales de mujeres que ya están viendo cambios)",
                  en: "(Real testimonials from women who are already seeing changes will be added here)",
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
