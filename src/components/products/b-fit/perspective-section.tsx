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
                es: "Cuando tu cuerpo empieza a sentirse mejor… todo cambia",
                en: "When your body starts to feel better… everything changes",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="font-semibold text-[#2f4541] text-lg">
            {localize(
              {
                es: "No necesitas hacerlo perfecto.",
                en: "You don't need to do it perfectly.",
              },
              language,
            )}
          </p>

          <p className="font-semibold text-[#2f4541] text-lg">
            {localize(
              {
                es: "Necesitas sentirte mejor.",
                en: "You need to feel better.",
              },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "Porque cuando eso pasa:",
                en: "Because when that happens:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-6 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "tienes más energía sin forzarte", en: "you have more energy without forcing it" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "te sientes más ligera", en: "you feel lighter" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "recuperas claridad mental", en: "you regain mental clarity" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
              <p>
                {localize(
                  { es: "te es más fácil sostener hábitos", en: "it becomes easier to maintain habits" },
                  language,
                )}
              </p>
            </div>
          </div>

          <p className="italic text-[#2f4541] font-semibold">
            {localize(
              {
                es: "Y desde ahí… todo empieza a fluir diferente.",
                en: "And from there… everything starts to flow differently.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
