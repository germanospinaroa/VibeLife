"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

export function AmalakiDisclaimerSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal className="rounded-xl bg-white/70 p-8 border-l-4 border-[#456F78] text-center">
          <p className="text-sm text-[#5c746d] leading-relaxed">
            {localize(
              {
                es: "Este producto no sustituye recomendaciones médicas. Los resultados pueden variar según cada persona.",
                en: "This product does not substitute medical recommendations. Results may vary from person to person.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
