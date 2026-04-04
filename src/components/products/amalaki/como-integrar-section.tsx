"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiComoIntegrarSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No necesitas cambiar todo",
                en: "You don't need to change everything",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Amalaki funciona como base.",
                en: "Amalaki works as a foundation.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Puedes:",
                en: "You can:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "usarlo solo", en: "use it alone" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "combinarlo con otros productos", en: "combine it with other products" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "integrarlo en tu rutina diaria", en: "integrate it into your daily routine" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#9BC56A]">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "Es el punto de partida ideal",
                  en: "It's the ideal starting point",
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
