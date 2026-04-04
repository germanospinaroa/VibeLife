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
                es: "No estás fallando… estás agotada",
                en: "You're not failing… you're exhausted",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <div className="space-y-4 font-semibold text-[#2f4541]">
            <p>
              {localize(
                { es: "Has intentado hacer cambios.", en: "You've tried to make changes." },
                language,
              )}
            </p>
            <p>
              {localize(
                { es: "Comer mejor.", en: "Eat better." },
                language,
              )}
            </p>
            <p>
              {localize(
                { es: "Ser constante.", en: "Be consistent." },
                language,
              )}
            </p>
            <p>
              {localize(
                { es: "Volver a empezar.", en: "Start again." },
                language,
              )}
            </p>
          </div>

          <p>
            {localize(
              {
                es: "Pero algo pasa…",
                en: "But something happens…",
              },
              language,
            )}
          </p>

          <p className="font-semibold text-[#2f4541]">
            {localize(
              {
                es: "No logras sostenerlo.",
                en: "You can't sustain it.",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/60 p-8 space-y-4 font-semibold text-[#2f4541]">
            <p>
              {localize(
                { es: "Tu energía baja.", en: "Your energy drops." },
                language,
              )}
            </p>
            <p>
              {localize(
                { es: "Tu cuerpo no responde igual.", en: "Your body doesn't respond the same." },
                language,
              )}
            </p>
            <p>
              {localize(
                {
                  es: "Te sientes inflamada, cansada… desconectada de ti.",
                  en: "You feel bloated, tired… disconnected from yourself.",
                },
                language,
              )}
            </p>
          </div>

          <p>
            {localize(
              {
                es: "Y lo peor no es eso.",
                en: "And the worst part is not that.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541] italic">
            {localize(
              {
                es: "Es esa sensación interna de: \"¿por qué nada me funciona a mí?\"",
                en: "It's that inner feeling of: \"Why doesn't anything work for me?\"",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
