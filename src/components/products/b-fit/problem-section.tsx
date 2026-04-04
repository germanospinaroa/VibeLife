"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitProblemSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Si sientes que tu cuerpo ya no responde igual…",
                en: "If you feel like your body isn't responding the way it used to…",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Tal vez has intentado varias cosas.\nDietas, rutinas, cambios… y vuelves al mismo punto.",
                en: "Maybe you've tried several things.\nDiets, routines, changes… and you keep coming back to the same place.",
              },
              language,
            )}
          </p>

          <div className="space-y-3 rounded-xl bg-white/60 p-6">
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "Cansancio.", en: "Fatigue." },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "Inflamación.", en: "Inflammation." },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "Falta de constancia.", en: "Lack of consistency." },
                language,
              )}
            </p>
          </div>

          <p>
            {localize(
              {
                es: "Y esa sensación de que estás haciendo esfuerzo, pero no ves resultados.",
                en: "And that feeling that you're making an effort, but you don't see results.",
              },
              language,
            )}
          </p>

          <p className="rounded-xl bg-[#f0f9e8] p-6 font-semibold text-[#2f4541]">
            {localize(
              {
                es: "No es falta de disciplina.\nEs que necesitas un enfoque diferente.",
                en: "It's not a lack of discipline.\nIt's that you need a different approach.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
