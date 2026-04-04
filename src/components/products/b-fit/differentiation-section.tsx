"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitDifferentiationSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Por qué no es 'otro producto más'?",
                en: "Why isn't it just 'another product'?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="font-semibold text-[#2f4541] text-lg">
            {localize(
              {
                es: "Porque no busca obligarte a cambiar.",
                en: "Because it doesn't try to force you to change.",
              },
              language,
            )}
          </p>

          <p className="font-semibold text-[#2f4541] text-lg">
            {localize(
              {
                es: "Busca ayudarte a que cambiar sea más fácil.",
                en: "It helps make change easier.",
              },
              language,
            )}
          </p>

          <p>
            {localize(
              {
                es: "La mayoría de soluciones fallan porque:",
                en: "Most solutions fail because:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/60 p-8 space-y-4">
            <div className="flex gap-4">
              <span className="shrink-0 text-[#d97706] font-bold text-lg">×</span>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "te exigen demasiado", en: "they demand too much" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 text-[#d97706] font-bold text-lg">×</span>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "no consideran tu estado actual", en: "they don't consider where you are now" },
                  language,
                )}
              </p>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 text-[#d97706] font-bold text-lg">×</span>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "no trabajan desde adentro", en: "they don't work from the inside out" },
                  language,
                )}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f9e8] p-8">
            <p className="font-semibold text-[#2f4541] text-lg">
              {localize(
                {
                  es: "B-Fit cambia ese enfoque.",
                  en: "B-Fit changes that approach.",
                },
                language,
              )}
            </p>
            <p className="mt-4 text-[#5c746d]">
              {localize(
                {
                  es: "Trabaja apoyando tu cuerpo en el lugar exacto donde lo necesitas.",
                  en: "It works by supporting your body exactly where you need it.",
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
