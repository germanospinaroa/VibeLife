"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function IceTecnologiaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="default">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Por qué UltraICE funciona cuando otros no?",
                en: "Why does UltraICE work when others don't?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "La mayoría de suplementos en cápsula o aceite tienen un problema: tu cuerpo no los absorbe bien. El aceite y el agua no se mezclan — y tu sistema digestivo es mayormente agua.",
                en: "Most capsule or oil supplements have a problem: your body doesn't absorb them well. Oil and water don't mix — and your digestive system is mostly water.",
              },
              language,
            )}
          </p>
          <div className="rounded-2xl bg-[#1B3A6B]/5 border border-[#1B3A6B]/10 p-8">
            <p className="text-lg font-semibold text-[#1B3A6B] mb-4">
              {localize(
                {
                  es: "La tecnología UltraCell® resuelve exactamente eso.",
                  en: "UltraCell® technology solves exactly that.",
                },
                language,
              )}
            </p>
            <p>
              {localize(
                {
                  es: "Convierte los compuestos a base de aceite en un formato soluble en agua, lo que significa que tu cuerpo puede absorber hasta un 90% de lo que toma.",
                  en: "It converts oil-based compounds into a water-soluble format, meaning your body can absorb up to 90% of what it takes.",
                },
                language,
              )}
            </p>
            <p className="mt-4 text-sm text-[#9aada9]">
              {localize(
                {
                  es: "No es marketing. Está demostrado en estudios clínicos.",
                  en: "This isn't marketing. It's demonstrated in clinical studies.",
                },
                language,
              )}
            </p>
          </div>
          <p className="font-semibold text-[#2E5F9A]">
            {localize(
              {
                es: "El resultado: lo sientes antes, dura más, funciona mejor.",
                en: "The result: you feel it sooner, it lasts longer, it works better.",
              },
              language,
            )}
          </p>
        </Reveal>

        {/* Comparison Table */}
        <Reveal delay={0.2} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-[#D4E4F4] bg-white/80">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B3A6B] text-white">
                  <th className="px-6 py-4 text-left font-semibold"></th>
                  <th className="px-6 py-4 text-center font-semibold">
                    {localize(
                      { es: "Suplemento convencional", en: "Conventional supplement" },
                      language,
                    )}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-[#D4E4F4]">
                    {localize(
                      { es: "UltraICE con UltraCell®", en: "UltraICE with UltraCell®" },
                      language,
                    )}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4E4F4]">
                <tr className="hover:bg-[#D4E4F4]/20">
                  <td className="px-6 py-4 font-medium text-[#1B3A6B]">
                    {localize({ es: "Formato", en: "Format" }, language)}
                  </td>
                  <td className="px-6 py-4 text-center text-[#5c746d]">
                    {localize({ es: "Cápsula / aceite", en: "Capsule / oil" }, language)}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-[#2E5F9A]">
                    {localize({ es: "Líquido soluble en agua", en: "Water-soluble liquid" }, language)}
                  </td>
                </tr>
                <tr className="hover:bg-[#D4E4F4]/20">
                  <td className="px-6 py-4 font-medium text-[#1B3A6B]">
                    {localize({ es: "Absorción", en: "Absorption" }, language)}
                  </td>
                  <td className="px-6 py-4 text-center text-[#5c746d]">10–20%</td>
                  <td className="px-6 py-4 text-center font-semibold text-[#2E5F9A]">
                    {localize({ es: "Hasta 90%", en: "Up to 90%" }, language)}
                  </td>
                </tr>
                <tr className="hover:bg-[#D4E4F4]/20">
                  <td className="px-6 py-4 font-medium text-[#1B3A6B]">
                    {localize({ es: "Tiempo de efecto", en: "Time to effect" }, language)}
                  </td>
                  <td className="px-6 py-4 text-center text-[#5c746d]">
                    {localize({ es: "1–2 horas", en: "1–2 hours" }, language)}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-[#2E5F9A]">
                    {localize({ es: "15–45 minutos", en: "15–45 minutes" }, language)}
                  </td>
                </tr>
                <tr className="hover:bg-[#D4E4F4]/20">
                  <td className="px-6 py-4 font-medium text-[#1B3A6B]">
                    {localize({ es: "Lo que llega a tu cuerpo", en: "What reaches your body" }, language)}
                  </td>
                  <td className="px-6 py-4 text-center text-[#5c746d]">
                    {localize({ es: "Una fracción", en: "A fraction" }, language)}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-[#2E5F9A]">
                    {localize({ es: "La mayoría", en: "Most of it" }, language)}
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
