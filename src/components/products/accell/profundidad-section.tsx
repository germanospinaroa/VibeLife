"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellProfundidadSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Esto no es solo perder peso… es recuperar el control",
                en: "This isn't just about losing weight… it's about regaining control",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-[#5c746d]">
            {localize({ es: "No se trata solo de verte mejor.", en: "It's not just about looking better." }, language)}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize({ es: "Se trata de:", en: "It's about:" }, language)}
          </p>

          <ul className="space-y-2 pl-1">
            {[
              { es: "sentir que tu cuerpo responde", en: "feeling that your body responds" },
              { es: "tener control sobre tu alimentación", en: "having control over your eating" },
              { es: "recuperar confianza", en: "regaining confidence" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "Ese es el verdadero cambio", en: "That's the real change" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
