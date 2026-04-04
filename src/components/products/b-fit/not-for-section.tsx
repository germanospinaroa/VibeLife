"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitNotForSection() {
  const { language } = useLanguage();

  const notFor = [
    { es: "Buscas soluciones rápidas", en: "You're looking for quick fixes" },
    { es: "No estás dispuesta a cambiar nada", en: "You're not willing to change anything" },
    { es: "Esperas resultados sin proceso", en: "You expect results without effort" },
  ];

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Esto no es para ti si…",
                en: "This is not for you if…",
              },
              language,
            )}
          />
        </Reveal>

        <StaggerGroup className="mt-12 space-y-3">
          {notFor.map((item, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-4 rounded-xl bg-white/60 p-5 border border-[#e0e7df]">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100/30 font-semibold text-red-600/60 text-sm">
                  ✕
                </span>
                <p className="text-base leading-7 text-[#5c746d] sm:text-lg">
                  {localize(item, language)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
