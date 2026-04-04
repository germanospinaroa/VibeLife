"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseExperienciaComparativaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "La diferencia que sí se siente",
                en: "The difference you can actually feel",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-2xl overflow-hidden border border-[#9BC56A]/20">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#9BC56A] to-[#6f9d49]">
                  <th className="px-6 py-4 text-left font-semibold text-white">
                    {localize({ es: "Café tradicional", en: "Traditional Coffee" }, language)}
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-white">
                    {localize({ es: "RISE", en: "RISE" }, language)}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#9BC56A]/10">
                <tr className="bg-white/50">
                  <td className="px-6 py-4 text-[#5c746d]">
                    {localize({ es: "Energía rápida", en: "Quick energy" }, language)}
                  </td>
                  <td className="px-6 py-4 text-[#2f4541] font-semibold">
                    {localize({ es: "Energía estable", en: "Stable energy" }, language)}
                  </td>
                </tr>
                <tr className="bg-white/70">
                  <td className="px-6 py-4 text-[#5c746d]">
                    {localize({ es: "Ansiedad / nerviosismo", en: "Anxiety / nervousness" }, language)}
                  </td>
                  <td className="px-6 py-4 text-[#2f4541] font-semibold">
                    {localize({ es: "Sensación de calma activa", en: "Active calm feeling" }, language)}
                  </td>
                </tr>
                <tr className="bg-white/50">
                  <td className="px-6 py-4 text-[#5c746d]">
                    {localize({ es: "Caída energética", en: "Energy crash" }, language)}
                  </td>
                  <td className="px-6 py-4 text-[#2f4541] font-semibold">
                    {localize({ es: "Flujo constante", en: "Constant flow" }, language)}
                  </td>
                </tr>
                <tr className="bg-white/70">
                  <td className="px-6 py-4 text-[#5c746d]">
                    {localize({ es: "Dependencia", en: "Dependency" }, language)}
                  </td>
                  <td className="px-6 py-4 text-[#2f4541] font-semibold">
                    {localize({ es: "Bienestar sostenible", en: "Sustainable wellbeing" }, language)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#9BC56A] space-y-3">
          <p className="text-lg font-semibold text-[#2f4541]">
            👉 {localize({ es: "No es dejar el café", en: "It's not about giving up coffee" }, language)}
          </p>
          <p className="text-lg font-semibold text-[#2f4541]">
            👉 {localize({ es: "Es evolucionarlo", en: "It's about evolving it" }, language)}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
