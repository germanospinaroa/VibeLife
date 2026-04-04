"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseProblemaRealSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No estás cansada… estás saturada",
                en: "You're not tired… you're overwhelmed",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "No es solo falta de energía.",
                en: "It's not just lack of energy.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Es:",
                en: "It's:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "cansancio mental", en: "mental fatigue" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "ansiedad constante", en: "constant anxiety" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "falta de enfoque", en: "lack of focus" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "dependencia del café", en: "coffee dependency" }, language)}</p>
            </div>
          </div>

          <p className="text-lg leading-8 text-[#5c746d]">
            {localize(
              {
                es: "Te levantas… pero no estás realmente presente.\nSigues funcionando… pero no sintiéndote bien.",
                en: "You wake up… but you're not really present.\nYou keep functioning… but not feeling good.",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-[#fff5f0] p-8 border-l-4 border-[#d97706]">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "Y eso no se soluciona con más café.",
                  en: "And that's not solved with more coffee.",
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
