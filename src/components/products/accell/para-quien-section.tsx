"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellParaQuienSection() {
  const { language } = useLanguage();

  const profiles = [
    {
      es: "Eres deportista o entrenas regularmente",
      en: "You're an athlete or train regularly",
    },
    {
      es: "Tienes días largos y necesitas enfoque sostenido",
      en: "You have long days and need sustained focus",
    },
    {
      es: "Buscas controlar los antojos entre comidas",
      en: "You want to control cravings between meals",
    },
    {
      es: "Quieres energía sin depender de café o bebidas azucaradas",
      en: "You want energy without depending on coffee or sugary drinks",
    },
    {
      es: "Cuidas tu alimentación pero necesitas un impulso real",
      en: "You watch what you eat but need a real boost",
    },
    {
      es: "Vives en movimiento y no tienes tiempo para complicaciones",
      en: "You live on the go and don't have time for complications",
    },
  ];

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Accell es para ti si…",
                en: "Accell is for you if…",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-3">
          {profiles.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold mt-1">•</span>
              <p className="text-base leading-relaxed text-[#5c746d] sm:text-lg">
                {localize(item, language)}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </SectionShell>
  );
}
