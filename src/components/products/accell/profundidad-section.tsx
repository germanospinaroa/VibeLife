"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellProfundidadSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Qué esperar con Accell?",
                en: "What to expect with Accell?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Accell no es un estimulante artificial. Es una bebida funcional formulada para darte energía real y sostenida — no un pico de 20 minutos seguido de un colapso.",
                en: "Accell is not an artificial stimulant. It's a functional drink formulated to give you real, sustained energy — not a 20-minute spike followed by a crash.",
              },
              language,
            )}
          </p>

          <p className="font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Lo que muchas personas notan desde los primeros días:",
                en: "What many people notice from the first days:",
              },
              language,
            )}
          </p>

          <ul className="space-y-2 pl-1">
            {[
              { es: "Más energía al entrenar o trabajar", en: "More energy when training or working" },
              { es: "Menos antojos entre comidas", en: "Fewer cravings between meals" },
              { es: "Mayor claridad mental", en: "Greater mental clarity" },
              { es: "Digestión más liviana", en: "Lighter digestion" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Los resultados se construyen con consistencia. Tómalo cada día y déjalo trabajar.",
                  en: "Results are built with consistency. Take it every day and let it work.",
                },
                language,
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
