"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiDiferenteSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No es un 'quick fix'… es una base",
                en: "It's not a 'quick fix'… it's a foundation",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <div>
            <p className="text-lg font-semibold text-[#2f4541] mb-4">
              {localize(
                {
                  es: "La mayoría de productos:",
                  en: "Most products:",
                },
                language,
              )}
            </p>
            <div className="rounded-xl bg-white/70 p-8 space-y-2">
              <p className="font-semibold text-[#2f4541]">👉 {localize({ es: "estimulan", en: "stimulate" }, language)}</p>
              <p className="font-semibold text-[#2f4541]">👉 {localize({ es: "aceleran", en: "accelerate" }, language)}</p>
              <p className="font-semibold text-[#2f4541]">👉 {localize({ es: "prometen resultados rápidos", en: "promise quick results" }, language)}</p>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-[#2f4541] mb-4">
              {localize(
                {
                  es: "Amalaki:",
                  en: "Amalaki:",
                },
                language,
              )}
            </p>
            <div className="rounded-xl bg-white/70 p-8 space-y-2">
              <p className="font-semibold text-[#2f4541]">👉 {localize({ es: "repara", en: "repairs" }, language)}</p>
              <p className="font-semibold text-[#2f4541]">👉 {localize({ es: "equilibra", en: "balances" }, language)}</p>
              <p className="font-semibold text-[#2f4541]">👉 {localize({ es: "fortalece", en: "strengthens" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#9BC56A] to-[#6f9d49] p-8 text-white">
            <p className="text-lg font-semibold">
              👉 {localize(
                {
                  es: "Por eso funciona diferente",
                  en: "That's why it works differently",
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
