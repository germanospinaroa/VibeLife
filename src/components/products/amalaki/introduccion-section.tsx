"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiIntroduccionSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Aquí es donde entra Amalaki",
                en: "This is where Amalaki comes in",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Amalaki no es una moda.",
                en: "Amalaki isn't a trend.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Es un ingrediente utilizado por siglos en medicina tradicional por su capacidad de:",
                en: "It's an ingredient used for centuries in traditional medicine for its ability to:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "regenerar", en: "regenerate" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "equilibrar", en: "balance" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "proteger", en: "protect" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#9BC56A] to-[#6f9d49] p-8 text-white space-y-3">
            <p className="text-lg font-semibold">
              👉 {localize({ es: "No estimula", en: "It doesn't stimulate" }, language)}
            </p>
            <p className="text-lg font-semibold">
              👉 {localize({ es: "No fuerza", en: "It doesn't force" }, language)}
            </p>
            <p className="text-lg font-semibold">
              👉 {localize({ es: "No engaña al cuerpo", en: "It doesn't trick your body" }, language)}
            </p>
            <p className="text-lg font-semibold">
              👉 {localize({ es: "Lo ayuda a funcionar como debería", en: "It helps it function as it should" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
