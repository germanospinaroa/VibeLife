"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

export function AboutAdelvisSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold text-[#2f4541] sm:text-4xl lg:text-5xl">
            {localize({ es: "Sobre mí", en: "About me" }, language)}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl bg-white/80 p-8 shadow-[0_2px_14px_rgba(62,102,112,0.08)]">
            <p className="text-base leading-8 text-[#3d5550] sm:text-lg">
              {localize(
                {
                  es: "Este espacio nace desde la experiencia.\n\nPorque yo también estuve en ese punto donde sabía que necesitaba cambiar algo… pero no sabía por dónde empezar.\n\nHoy acompaño a otras mujeres a hacerlo de forma más simple, más real y más humana.",
                  en: "This space is born from experience.\n\nBecause I too was at that point where I knew I needed to change something… but I did not know where to start.\n\nToday I support other women to do it in a simpler, more real and more human way.",
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
