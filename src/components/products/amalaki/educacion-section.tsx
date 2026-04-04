"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiEducacionSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Tu cuerpo no necesita más… necesita mejor",
                en: "Your body doesn't need more… it needs better",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "El problema no es que te falte energía.",
                en: "The problem isn't that you lack energy.",
              },
              language,
            )}
          </p>

          <p className="text-lg leading-8 text-[#5c746d]">
            {localize(
              {
                es: "Es que:",
                en: "It's that:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "tu sistema está inflamado", en: "your system is inflamed" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "tu digestión no está optimizada", en: "your digestion isn't optimized" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "tu cuerpo no está absorbiendo bien", en: "your body isn't absorbing well" }, language)}</p>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "👉 Por eso todo lo demás falla",
                en: "👉 That's why everything else fails",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#9BC56A] space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Amalaki ayuda a corregir eso.",
                  en: "Amalaki helps correct that.",
                },
                language,
              )}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "Y cuando eso mejora… todo lo demás empieza a funcionar",
                  en: "And when that improves… everything else starts working",
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
