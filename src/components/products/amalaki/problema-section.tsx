"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiProblemaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Tu cuerpo no está fallando… está sobrecargado",
                en: "Your body isn't failing… it's overloaded",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-10 text-base leading-8 text-[#5c746d] sm:text-lg">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Si te sientes:", en: "If you feel:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "inflamada constantemente", en: "constantly inflamed" },
                { es: "cansada incluso después de descansar", en: "tired even after resting" },
                { es: "con digestión pesada", en: "with heavy digestion" },
                { es: "sin energía real durante el día", en: "without real energy during the day" },
                { es: "desconectada de tu propio cuerpo", en: "disconnected from your own body" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#d97706] font-bold">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-[#2f4541] pt-2">
              👉 {localize({ es: "no es normal… aunque ya te hayas acostumbrado", en: "it's not normal… even if you've gotten used to it" }, language)}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Tu cuerpo está lidiando todos los días con:", en: "Your body is dealing every day with:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "estrés", en: "stress" },
                { es: "mala absorción de nutrientes", en: "poor nutrient absorption" },
                { es: "inflamación interna", en: "internal inflammation" },
                { es: "acumulación de toxinas", en: "toxin buildup" },
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
              {localize({ es: "Y eso hace que:", en: "And that causes:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "te sientas pesada", en: "you feel heavy" },
                { es: "no tengas energía", en: "you have no energy" },
                { es: "nada te funcione igual", en: "nothing works the same" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#d97706] font-bold">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "Por eso sientes que haces cosas… pero no avanzas", en: "That's why you feel like you're doing things… but not moving forward" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
