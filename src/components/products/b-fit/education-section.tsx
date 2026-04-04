"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitEducationSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Por qué haces esfuerzo… pero no ves resultados?",
                en: "Why do you try… but see no results?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Tu cuerpo no es una máquina simple.",
                en: "Your body is not a simple machine.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Funciona como un sistema.",
                en: "It works like a system.",
              },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "Y cuando ese sistema está desbalanceado:",
                en: "And when that system is out of balance:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "quemas menos energía", en: "you burn less energy" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "acumulas más grasa", en: "you accumulate more fat" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "te sientes más cansada", en: "you feel more tired" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "pierdes constancia más rápido", en: "you lose consistency faster" },
                  language,
                )}
              </p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Esto no significa que estés haciendo algo mal.",
                en: "This doesn't mean you're doing something wrong.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Significa que tu cuerpo necesita soporte interno.",
                en: "It means your body needs internal support.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
