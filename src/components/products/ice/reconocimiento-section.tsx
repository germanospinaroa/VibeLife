"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const sintomas = [
  {
    es: "Tu cuerpo no responde como antes — aunque duermes, descansas mal.",
    en: "Your body doesn't respond like it used to — even though you sleep, you don't rest.",
  },
  {
    es: "Tienes días de mucha inflamación, tensión o malestar que no sabes de dónde viene.",
    en: "You have days of intense inflammation, tension or discomfort with no clear cause.",
  },
  {
    es: "Tu mente está nublada. No es falta de sueño — es algo más profundo.",
    en: "Your mind is foggy. It's not lack of sleep — it's something deeper.",
  },
  {
    es: "Sientes que el estrés te come por dentro aunque por fuera todo esté bien.",
    en: "You feel stress consuming you from within even though everything looks fine on the outside.",
  },
  {
    es: "Has probado cosas, pero nada llega al fondo del problema.",
    en: "You've tried things, but nothing gets to the root of the problem.",
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
              { es: "¿Te has sentido así?", en: "Have you felt this way?" },
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
                  es: "Eso que sientes tiene nombre: desequilibrio.",
                  en: "What you feel has a name: imbalance.",
                },
                language,
              )}
            </p>
            <p className="mt-4 text-base leading-8 text-[#5c746d]">
              {localize(
                {
                  es: "Tu cuerpo tiene un sistema diseñado para mantenerte en equilibrio — el sistema endocannabinoide. Cuando ese sistema se desregula, todo lo demás también.",
                  en: "Your body has a system designed to keep you in balance — the endocannabinoid system. When that system is disrupted, everything else is too.",
                },
                language,
              )}
            </p>
            <p className="mt-4 text-lg font-semibold text-[#2E5F9A]">
              {localize(
                {
                  es: "UltraICE trabaja exactamente ahí.",
                  en: "UltraICE works exactly there.",
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
