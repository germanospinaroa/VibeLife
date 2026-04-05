"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellComunidadSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No estás sola en este proceso",
                en: "You're not alone in this process",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-[#5c746d]">
            {localize({ es: "Aquí no solo tienes un producto.", en: "Here you don't just have a product." }, language)}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize({ es: "Tienes:", en: "You have:" }, language)}
          </p>

          <ul className="space-y-2 pl-1">
            {[
              { es: "guía", en: "guidance" },
              { es: "acompañamiento", en: "support" },
              { es: "claridad", en: "clarity" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "Porque el cambio real no se hace sola", en: "Because real change doesn't happen alone" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
