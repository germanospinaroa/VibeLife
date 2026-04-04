"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitIntroductionSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "B-Fit trabaja donde la mayoría de soluciones no llega",
                en: "B-Fit works where most solutions don't reach",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "B-Fit está diseñado para apoyar el metabolismo y la función energética del cuerpo desde adentro.",
                en: "B-Fit is designed to support your metabolism and energy function from within.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "No actúa como un estimulante.",
                en: "It doesn't work as a stimulant.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Actúa como un regulador.",
                en: "It works as a regulator.",
              },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "Esto significa que ayuda a que tu cuerpo funcione con más estabilidad y eficiencia, sin forzar artificialmente los resultados.",
                en: "This means it helps your body function with more stability and efficiency, without artificially forcing results.",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <p className="font-semibold text-[#2f4541] mb-4">
              {localize(
                {
                  es: "Ayudando a que tu cuerpo:",
                  en: "Helping your body to:",
                },
                language,
              )}
            </p>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>{localize({ es: "procese mejor lo que consumes", en: "better process what you consume" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "convierta mejor los nutrientes en energía", en: "better convert nutrients into energy" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "reduzca el estado de estancamiento metabólico", en: "reduce metabolic stagnation" },
                  language,
                )}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#6f9d49]">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Tu cuerpo no necesita ser estimulado. Necesita estar regulado.",
                  en: "Your body doesn't need to be stimulated. It needs to be regulated.",
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
