"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiExpectativaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Esto no es inmediato… es profundo",
                en: "This isn't immediate… it's profound",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize({ es: "Con uso constante puedes notar:", en: "With consistent use you can notice:" }, language)}
          </p>

          <ul className="space-y-2 pl-1">
            {[
              { es: "menos inflamación", en: "less inflammation" },
              { es: "mejor digestión", en: "better digestion" },
              { es: "más energía", en: "more energy" },
              { es: "sensación real de bienestar", en: "real sense of well-being" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                { es: "Y lo más importante: tu cuerpo empieza a responder otra vez", en: "And most importantly: your body starts responding again" },
                language,
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
