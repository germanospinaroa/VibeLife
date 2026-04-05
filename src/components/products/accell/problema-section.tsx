"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellProblemaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No es que no puedas… es que tu cuerpo no responde",
                en: "It's not that you can't… your body just isn't responding",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-10 text-base leading-8 text-[#5c746d] sm:text-lg">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Muchas mujeres viven esto:", en: "Many women experience this:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "hacen dieta y no ven cambios", en: "they diet and see no changes" },
                { es: "hacen ejercicio y no sienten progreso", en: "they exercise and feel no progress" },
                { es: "tienen antojos constantes", en: "they have constant cravings" },
                { es: "sienten el metabolismo lento", en: "their metabolism feels slow" },
                { es: "acumulan grasa fácilmente", en: "they accumulate fat easily" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#d97706] font-bold">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-[#2f4541] pt-2">
              👉 {localize({ es: "Y empiezan a frustrarse", en: "And they start to get frustrated" }, language)}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[#5c746d]">
              {localize({ es: "Pero el problema no es la falta de esfuerzo.", en: "But the problem isn't lack of effort." }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Es que su cuerpo está:", en: "It's that their body is:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "desregulado", en: "dysregulated" },
                { es: "lento", en: "slow" },
                { es: "sin respuesta metabólica eficiente", en: "without efficient metabolic response" },
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
              👉 {localize({ es: "Por eso sientes que haces todo… y no pasa nada", en: "That's why you feel like you're doing everything… and nothing happens" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
