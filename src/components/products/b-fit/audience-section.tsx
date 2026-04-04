"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitAudienceSection() {
  const { language } = useLanguage();

  const forWho = [
    { es: "Te sientes cansada de empezar y no sostener", en: "You're tired of starting and not sticking with it" },
    { es: "Sientes que tu cuerpo está fuera de equilibrio", en: "You feel your body is out of balance" },
    { es: "Quieres algo que puedas mantener en el tiempo", en: "You want something you can maintain over time" },
    { es: "Estás lista para priorizarte", en: "You're ready to prioritize yourself" },
  ];

  return (
    <SectionShell tone="teal">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Esto es para ti si…",
                en: "This is for you if…",
              },
              language,
            )}
          />
        </Reveal>

        <StaggerGroup className="mt-12 space-y-3">
          {forWho.map((item, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-4 rounded-xl bg-white/70 p-5">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#6f9d49]/15 font-semibold text-[#6f9d49] text-sm">
                  ✓
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
