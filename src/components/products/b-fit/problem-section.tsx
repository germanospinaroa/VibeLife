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
                es: "Tu cuerpo no necesita más exigencia… necesita equilibrio",
                en: "Your body doesn't need more pressure… it needs balance",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Cuando tu metabolismo no está funcionando correctamente:",
                en: "When your metabolism isn't functioning properly:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "tu cuerpo no procesa bien los nutrientes", en: "your body doesn't process nutrients well" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "la energía que produces no es suficiente", en: "the energy you produce isn't enough" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "acumulas más fácilmente grasa", en: "you accumulate fat more easily" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "te cuesta mantener constancia", en: "it's harder to stay consistent" },
                  language,
                )}
              </p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Esto genera un ciclo muy común:",
                en: "This creates a very common cycle:",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#6f9d49]">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Intentas cambiar → te cansas → no ves resultados → abandonas → vuelves a empezar",
                  en: "You try to change → you get tired → you see no results → you quit → you start again",
                },
                language,
              )}
            </p>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Y no es falta de disciplina.",
                en: "And it's not a lack of discipline.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Es falta de soporte interno.",
                en: "It's a lack of internal support.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
