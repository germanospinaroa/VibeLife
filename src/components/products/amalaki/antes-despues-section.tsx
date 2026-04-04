"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiAntesDesppuesSection() {
  const { language } = useLanguage();

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

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[#9BC56A]/30">
                  <td className="py-6 px-4 text-lg font-semibold text-[#d97706] sm:px-8">
                    {localize({ es: "Inflamación constante", en: "Constant inflammation" }, language)}
                  </td>
                  <td className="py-6 px-4 text-lg font-semibold text-[#9BC56A] sm:px-8">
                    {localize({ es: "Sensación de ligereza", en: "Feeling lighter" }, language)}
                  </td>
                </tr>
                <tr className="border-b border-[#9BC56A]/30">
                  <td className="py-6 px-4 text-lg font-semibold text-[#d97706] sm:px-8">
                    {localize({ es: "Cansancio diario", en: "Daily fatigue" }, language)}
                  </td>
                  <td className="py-6 px-4 text-lg font-semibold text-[#9BC56A] sm:px-8">
                    {localize({ es: "Energía natural", en: "Natural energy" }, language)}
                  </td>
                </tr>
                <tr className="border-b border-[#9BC56A]/30">
                  <td className="py-6 px-4 text-lg font-semibold text-[#d97706] sm:px-8">
                    {localize({ es: "Digestión pesada", en: "Heavy digestion" }, language)}
                  </td>
                  <td className="py-6 px-4 text-lg font-semibold text-[#9BC56A] sm:px-8">
                    {localize({ es: "Digestión eficiente", en: "Efficient digestion" }, language)}
                  </td>
                </tr>
                <tr className="border-b border-[#9BC56A]/30">
                  <td className="py-6 px-4 text-lg font-semibold text-[#d97706] sm:px-8">
                    {localize({ es: "Poca respuesta a suplementos", en: "Poor supplement response" }, language)}
                  </td>
                  <td className="py-6 px-4 text-lg font-semibold text-[#9BC56A] sm:px-8">
                    {localize({ es: "Mejor absorción", en: "Better absorption" }, language)}
                  </td>
                </tr>
                <tr>
                  <td className="py-6 px-4 text-lg font-semibold text-[#d97706] sm:px-8">
                    {localize({ es: "Desgaste general", en: "General depletion" }, language)}
                  </td>
                  <td className="py-6 px-4 text-lg font-semibold text-[#9BC56A] sm:px-8">
                    {localize({ es: "Equilibrio interno", en: "Internal balance" }, language)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
