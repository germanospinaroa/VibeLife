"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseParaQuienSection() {
  const { language } = useLanguage();

  const criterios = [
    { es: "Te sientes cansada aunque duermas", en: "You feel tired even though you sleep" },
    { es: "Dependes del café para funcionar", en: "You depend on coffee to function" },
    { es: "Te cuesta concentrarte", en: "You struggle to concentrate" },
    { es: "Sientes ansiedad o saturación mental", en: "You feel anxiety or mental overwhelm" },
    { es: "Quieres cuidarte… pero sin complicarte", en: "You want to take care of yourself… without overcomplicating it" },
  ];

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Si te identificas con esto… es para ti",
                en: "If you identify with this… it's for you",
              },
              language,
            )}
          />
        </Reveal>

        <StaggerGroup className="mt-12 space-y-3">
          {criterios.map((criterio, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-4 rounded-xl bg-white/70 p-5">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#9BC56A]/15 font-semibold text-[#9BC56A] text-sm flex-shrink-0">
                  ✓
                </span>
                <p className="text-base leading-7 text-[#5c746d] sm:text-lg">
                  {localize(criterio, language)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.5} className="mt-12 rounded-2xl bg-gradient-to-r from-[#9BC56A] to-[#6f9d49] p-8 text-white">
          <p className="text-lg font-semibold">
            👉 {localize(
              {
                es: "RISE está diseñado para mujeres reales",
                en: "RISE is designed for real women",
              },
              language,
            )}
          </p>
          <p className="text-lg font-semibold mt-2">
            {localize(
              {
                es: "no para rutinas perfectas",
                en: "not for perfect routines",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
