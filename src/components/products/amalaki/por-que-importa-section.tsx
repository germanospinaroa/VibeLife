"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiPorQueImportaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "El problema no es la falta de energía… es el desgaste",
                en: "The problem isn't lack of energy… it's depletion",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Tu cuerpo todos los días sufre:",
                en: "Your body every day suffers:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "estrés", en: "stress" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "inflamación", en: "inflammation" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "daño celular", en: "cellular damage" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "mala alimentación", en: "poor nutrition" }, language)}</p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "👉 Eso genera:",
                en: "👉 That creates:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "cansancio", en: "fatigue" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "envejecimiento", en: "aging" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "baja energía", en: "low energy" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "mal funcionamiento", en: "dysfunction" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#9BC56A] space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Amalaki trabaja en ese nivel.",
                  en: "Amalaki works at that level.",
                },
                language,
              )}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No en el síntoma", en: "Not on the symptom" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "En la raíz", en: "On the root" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
