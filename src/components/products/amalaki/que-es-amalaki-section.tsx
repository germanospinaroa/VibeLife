"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiQueEsSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Uno de los antioxidantes más potentes del mundo",
                en: "One of the world's most powerful antioxidants",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Amalaki (también conocido como Amla) es una fruta rica en:",
                en: "Amalaki (also known as Amla) is a fruit rich in:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "vitamina C natural altamente biodisponible", en: "highly bioavailable natural vitamin C" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "antioxidantes potentes", en: "powerful antioxidants" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "compuestos que protegen tus células", en: "compounds that protect your cells" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#9BC56A] space-y-3">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No es vitamina C común", en: "It's not regular vitamin C" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "Es soporte celular real", en: "It's real cellular support" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
