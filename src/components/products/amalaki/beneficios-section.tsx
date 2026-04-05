"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiBeneficiosSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que realmente empieza a cambiar en tu cuerpo",
                en: "What really starts changing in your body",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-10 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg text-[#5c746d]">
            {localize(
              {
                es: "Cuando tu cuerpo empieza a equilibrarse, empiezas a notar:",
                en: "When your body starts to balance, you begin to notice:",
              },
              language,
            )}
          </p>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#2f4541]">
                🔹 {localize({ es: "Digestión", en: "Digestion" }, language)}
              </h3>
              <ul className="space-y-2 pl-2">
                {[
                  { es: "dejas de sentirte pesada después de comer", en: "you stop feeling heavy after eating" },
                  { es: "tu cuerpo procesa mejor los alimentos", en: "your body processes food better" },
                  { es: "disminuye la inflamación", en: "inflammation decreases" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                    <span className="text-[#5c746d]">{localize(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#2f4541]">
                🔹 {localize({ es: "Energía", en: "Energy" }, language)}
              </h3>
              <ul className="space-y-2 pl-2">
                {[
                  { es: "energía más estable durante el día", en: "more stable energy throughout the day" },
                  { es: "menos dependencia del café o estímulos", en: "less dependence on coffee or stimulants" },
                  { es: "mayor claridad mental", en: "greater mental clarity" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                    <span className="text-[#5c746d]">{localize(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#2f4541]">
                🔹 {localize({ es: "Sistema interno", en: "Internal system" }, language)}
              </h3>
              <ul className="space-y-2 pl-2">
                {[
                  { es: "mejor absorción de nutrientes", en: "better nutrient absorption" },
                  { es: "menos desgaste celular", en: "less cellular depletion" },
                  { es: "mayor equilibrio general", en: "greater overall balance" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                    <span className="text-[#5c746d]">{localize(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No es energía falsa", en: "It's not fake energy" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "es tu cuerpo funcionando mejor", en: "it's your body working better" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
