"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiDiferenteSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Esto no es un 'quick fix'… es una base",
                en: "This isn't a 'quick fix'… it's a foundation",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-10 text-base leading-8 text-[#5c746d] sm:text-lg">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "La mayoría de productos:", en: "Most products:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "estimulan", en: "stimulate" },
                { es: "aceleran", en: "accelerate" },
                { es: "prometen resultados rápidos", en: "promise quick results" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#d97706] font-bold">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#5c746d]">
              {localize({ es: "Pero no corrigen el problema real.", en: "But they don't fix the real problem." }, language)}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Amalaki:", en: "Amalaki:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "no estimula", en: "doesn't stimulate" },
                { es: "no fuerza", en: "doesn't force" },
                { es: "no engaña", en: "doesn't deceive" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "regula", en: "regulates" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "equilibra", en: "balances" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "fortalece", en: "strengthens" }, language)}
            </p>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            👉 {localize({ es: "Por eso los resultados se sostienen", en: "That's why the results last" }, language)}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
