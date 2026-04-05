"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellProblemaSection() {
  const { language } = useLanguage();

  const symptoms = [
    {
      es: "Necesitas cafeína para funcionar, pero el café ya no alcanza",
      en: "You need caffeine to function, but coffee isn't cutting it anymore",
    },
    {
      es: "Sientes caídas de energía a media mañana o después del almuerzo",
      en: "You feel energy crashes mid-morning or after lunch",
    },
    {
      es: "Quieres entrenar, pero llegas sin energía",
      en: "You want to work out, but you show up running on empty",
    },
    {
      es: "Te cuesta concentrarte por más de una hora seguida",
      en: "You struggle to focus for more than an hour at a time",
    },
    {
      es: "Buscas algo que te ayude — sin exceso de azúcar, sin ingredientes raros",
      en: "You're looking for something that helps — without excess sugar or strange ingredients",
    },
  ];

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              { es: "¿Te suena esto?", en: "Does this sound familiar?" },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-3">
          {symptoms.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold mt-1">•</span>
              <p className="text-base leading-relaxed text-[#5c746d] sm:text-lg">
                {localize(item, language)}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Tu cuerpo no está fallando. Solo necesita el combustible correcto.",
                  en: "Your body isn't failing. It just needs the right fuel.",
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
