"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitPerspectiveSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No se trata de hacer más… se trata de hacerlo mejor",
                en: "It's not about doing more… it's about doing it better",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Cuando tu cuerpo recibe el apoyo correcto, todo empieza a sentirse distinto:",
                en: "When your body receives the right support, everything starts to feel different:",
              },
              language,
            )}
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="shrink-0 text-xl font-bold text-[#6f9d49]">→</span>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "más energía", en: "more energy" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 text-xl font-bold text-[#6f9d49]">→</span>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "más claridad", en: "more clarity" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 text-xl font-bold text-[#6f9d49]">→</span>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "más control", en: "more control" },
                  language,
                )}
              </p>
            </div>
          </div>

          <p className="rounded-xl bg-white/60 p-6 italic text-[#2f4541]">
            {localize(
              {
                es: "Y desde ahí, sostener hábitos deja de ser una lucha.",
                en: "And from there, maintaining habits stops being a struggle.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
