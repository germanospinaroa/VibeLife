"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiPosicionamientoSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Por eso está presente en otros productos",
                en: "That's why it's in other products",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Muchos productos lo incluyen…",
                en: "Many products include it…",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <p className="font-semibold text-[#2f4541]">
              👉 {localize({ es: "porque potencia resultados", en: "because it amplifies results" }, language)}
            </p>
            <p className="font-semibold text-[#2f4541]">
              👉 {localize({ es: "porque mejora la absorción", en: "because it improves absorption" }, language)}
            </p>
            <p className="font-semibold text-[#2f4541]">
              👉 {localize({ es: "porque optimiza el cuerpo", en: "because it optimizes the body" }, language)}
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#9BC56A] to-[#6f9d49] p-8 text-white">
            <p className="text-lg font-semibold">
              👉 {localize(
                {
                  es: "Pero aquí lo tienes en su forma directa",
                  en: "But here you have it in its direct form",
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
