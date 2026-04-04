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
          <div className="space-y-4">
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "Has intentado.", en: "You've tried." },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "Has empezado.", en: "You've started." },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "Has querido hacerlo bien.", en: "You've wanted to do it right." },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "Pero algo pasa…", en: "But something happens…" },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "Vuelves al mismo lugar.", en: "You go back to the same place." },
                language,
              )}
            </p>
          </div>

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
                es: "Y esa sensación silenciosa de frustración que nadie ve.",
                en: "And that silent feeling of frustration that no one sees.",
              },
              language,
            )}
          </p>

          <p className="rounded-xl bg-[#f0f9e8] p-6 font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Esto no es tu culpa.\nEs el enfoque.",
                en: "This is not your fault.\nIt's the approach.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
