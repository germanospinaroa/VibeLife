"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiComoIntegrarSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No necesitas cambiar todo",
                en: "You don't need to change everything",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize({ es: "Puedes usar Amalaki:", en: "You can use Amalaki:" }, language)}
          </p>

          <ul className="space-y-2 pl-1">
            {[
              { es: "solo", en: "alone" },
              { es: "junto a otros productos", en: "alongside other products" },
              { es: "como parte de tu rutina diaria", en: "as part of your daily routine" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No necesitas hacerlo perfecto", en: "You don't need to do it perfectly" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "necesitas hacerlo constante", en: "you need to do it consistently" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
