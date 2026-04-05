"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiComunidadSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Esto no es solo un producto",
                en: "This isn't just a product",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-[#5c746d]">
            {localize({ es: "Es parte de un proceso donde:", en: "It's part of a process where:" }, language)}
          </p>

          <ul className="space-y-2 pl-1">
            {[
              { es: "aprendes a entender tu cuerpo", en: "you learn to understand your body" },
              { es: "tienes acompañamiento", en: "you have guidance" },
              { es: "puedes avanzar con claridad", en: "you can move forward with clarity" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "Aquí no se trata de rapidez", en: "Here it's not about speed" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "se trata de transformación real", en: "it's about real transformation" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
