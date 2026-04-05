"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiAntesDesppuesSection() {
  const { language } = useLanguage();

  const rows = [
    { before: { es: "inflamación constante", en: "constant inflammation" }, after: { es: "sensación de ligereza", en: "feeling of lightness" } },
    { before: { es: "cansancio diario", en: "daily fatigue" }, after: { es: "energía natural", en: "natural energy" } },
    { before: { es: "digestión pesada", en: "heavy digestion" }, after: { es: "digestión eficiente", en: "efficient digestion" } },
    { before: { es: "poca respuesta a lo que haces", en: "poor response to what you do" }, after: { es: "mejor respuesta del cuerpo", en: "better body response" } },
  ];

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Cuando tu cuerpo empieza a responder",
                en: "When your body starts to respond",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12 space-y-8">
          <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-[#9BC56A]/20">
            <div className="bg-[#fff5f0] px-6 py-4 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#d97706]">
                {localize({ es: "Antes", en: "Before" }, language)}
              </span>
            </div>
            <div className="bg-[#f0f9e8] px-6 py-4 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#6f9d49]">
                {localize({ es: "Después", en: "After" }, language)}
              </span>
            </div>
            {rows.map((row, i) => (
              <>
                <div key={`before-${i}`} className="bg-white/60 px-6 py-5 border-t border-[#9BC56A]/10">
                  <p className="font-medium text-[#d97706]">{localize(row.before, language)}</p>
                </div>
                <div key={`after-${i}`} className="bg-white/80 px-6 py-5 border-t border-[#9BC56A]/10">
                  <p className="font-medium text-[#6f9d49]">{localize(row.after, language)}</p>
                </div>
              </>
            ))}
          </div>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No es magia", en: "It's not magic" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "es fisiología funcionando mejor", en: "it's physiology working better" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
