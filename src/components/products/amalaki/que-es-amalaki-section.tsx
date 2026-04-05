"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiQueEsSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Una base real para el equilibrio del cuerpo",
                en: "A real foundation for body balance",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Amalaki (también conocido como Amla) es una fruta utilizada durante siglos en medicina tradicional por su capacidad de:",
                en: "Amalaki (also known as Amla) is a fruit used for centuries in traditional medicine for its ability to:",
              },
              language,
            )}
          </p>

          <ul className="space-y-2 pl-1">
            {[
              { es: "regenerar procesos internos", en: "regenerate internal processes" },
              { es: "equilibrar el cuerpo", en: "balance the body" },
              { es: "proteger las células", en: "protect cells" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Es una de las fuentes naturales más potentes de:",
                en: "It's one of nature's most powerful sources of:",
              },
              language,
            )}
          </p>

          <ul className="space-y-2 pl-1">
            {[
              { es: "vitamina C biodisponible", en: "bioavailable vitamin C" },
              { es: "antioxidantes reales", en: "real antioxidants" },
              { es: "compuestos que apoyan la función celular", en: "compounds that support cellular function" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-3">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No es una moda", en: "It's not a trend" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "es una base funcional para el cuerpo", en: "it's a functional base for the body" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
