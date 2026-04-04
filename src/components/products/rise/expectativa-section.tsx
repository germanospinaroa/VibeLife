"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseExpectativaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo vas a notar",
                en: "You're going to notice",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "En pocos días puedes empezar a sentir:",
                en: "In just a few days you can start feeling:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "más claridad", en: "more clarity" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "menos ansiedad", en: "less anxiety" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "energía más estable", en: "more stable energy" }, language)}</p>
            </div>
          </div>

          <p className="text-lg leading-8 text-[#5c746d]">
            {localize(
              {
                es: "👉 Y con el tiempo…\nuna versión tuya más presente, más ligera, más tú",
                en: "👉 And over time…\na version of you that's more present, lighter, more you",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
