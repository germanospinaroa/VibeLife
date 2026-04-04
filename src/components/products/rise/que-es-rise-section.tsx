"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseQueEsSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Más que café… es cómo empieza tu día",
                en: "More than coffee… it's how your day starts",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "RISE combina:",
                en: "RISE combines:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-4">
            <div className="flex gap-3">
              <span className="shrink-0 text-xl">☕</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "café arábica colombiano", en: "Colombian arabica coffee" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-xl">🌿</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "amalaki (uno de los antioxidantes más potentes del mundo)", en: "amalaki (one of the world's most potent antioxidants)" }, language)}</p>
            </div>
          </div>

          <p className="text-lg leading-8 text-[#5c746d]">
            👉 {localize(
              {
                es: "creando una bebida que no solo despierta tu cuerpo… sino que también apoya tu sistema.",
                en: "creating a drink that not only wakes your body… but also supports your system.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
