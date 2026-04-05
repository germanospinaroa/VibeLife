"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellQueEsSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Un soporte real para activar tu metabolismo",
                en: "Real support to activate your metabolism",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              { es: "Accell es un suplemento diseñado para apoyar:", en: "Accell is a supplement designed to support:" },
              language,
            )}
          </p>

          <ul className="space-y-2 pl-1">
            {[
              { es: "la función metabólica", en: "metabolic function" },
              { es: "el control del apetito", en: "appetite control" },
              { es: "el equilibrio energético", en: "energy balance" },
              { es: "la quema eficiente de energía", en: "efficient energy burning" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <p className="text-[#5c746d]">
            {localize(
              { es: "No trabaja desde la restricción.", en: "It doesn't work from restriction." },
              language,
            )}
          </p>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "trabaja desde la regulación del cuerpo", en: "it works from body regulation" }, language)}
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No es un \"quemador mágico\"", en: "It's not a \"magic burner\"" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "es un activador funcional", en: "it's a functional activator" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
