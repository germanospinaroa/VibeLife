"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiEducacionSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "El problema no es la falta de energía… es el desgaste interno",
                en: "The problem isn't lack of energy… it's internal depletion",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-10 text-base leading-8 text-[#5c746d] sm:text-lg">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Tu cuerpo todos los días está expuesto a:", en: "Your body is exposed every day to:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "estrés constante", en: "constant stress" },
                { es: "inflamación", en: "inflammation" },
                { es: "mala alimentación", en: "poor nutrition" },
                { es: "daño celular acumulado", en: "accumulated cellular damage" },
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
              {localize({ es: "Eso genera:", en: "That creates:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "cansancio", en: "fatigue" },
                { es: "envejecimiento acelerado", en: "accelerated aging" },
                { es: "digestión lenta", en: "slow digestion" },
                { es: "baja energía", en: "low energy" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#d97706] font-bold">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            👉 {localize({ es: "Y por eso nada se sostiene", en: "And that's why nothing holds" }, language)}
          </p>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-3">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Amalaki trabaja en ese nivel:", en: "Amalaki works at that level:" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "no en el síntoma", en: "not on the symptom" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "en la raíz", en: "on the root" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
