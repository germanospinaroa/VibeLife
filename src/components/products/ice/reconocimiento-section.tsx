"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const sintomas = [
  {
    es: "Te levantas cansada aunque hayas dormido.",
    en: "You wake up tired even though you slept.",
  },
  {
    es: "Tu cuerpo se siente pesado.",
    en: "Your body feels heavy.",
  },
  {
    es: "Te cuesta recuperarte, incluso cuando descansas.",
    en: "You struggle to recover, even when you rest.",
  },
  {
    es: "Y lo peor es que no sabes exactamente qué está pasando.",
    en: "And the worst part is you don't know exactly what's happening.",
  },
];

export function IceReconocimientoSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              { es: "Si sientes que ya no eres la misma…", en: "If you feel like you're not yourself anymore…" },
              language,
            )}
          />
        </Reveal>

        <StaggerGroup className="mt-10 space-y-3">
          {sintomas.map((sintoma, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-4 rounded-xl bg-white/70 p-5">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2E5F9A]/10 font-semibold text-[#2E5F9A] text-sm">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-[#5c746d] sm:text-lg">
                  {localize(sintoma, language)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.5} className="mt-10 space-y-6">
          <div className="rounded-2xl bg-[#D4E4F4]/60 p-8 border-l-4 border-[#1B3A6B]">
            <p className="text-lg font-semibold text-[#1B3A6B]">
              {localize(
                {
                  es: "No es falta de disciplina.",
                  en: "It's not a lack of discipline.",
                },
                language,
              )}
            </p>
            <p className="mt-4 text-base leading-8 text-[#5c746d]">
              {localize(
                {
                  es: "Es que tu cuerpo lleva tiempo en desgaste… y nadie te enseñó cómo apoyarlo de verdad.",
                  en: "Your body has been wearing down for a long time… and no one taught you how to truly support it.",
                },
                language,
              )}
            </p>
            <p className="mt-4 text-lg font-semibold text-[#2E5F9A]">
              {localize(
                {
                  es: "UltraICE empieza por dentro.",
                  en: "UltraICE starts from within.",
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
