"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellParaQuienSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Esto es para ti si…",
                en: "This is for you if…",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <ul className="space-y-3 pl-1">
            {[
              { es: "sientes que tu metabolismo está lento", en: "you feel your metabolism is slow" },
              { es: "te cuesta bajar de peso", en: "losing weight is hard for you" },
              { es: "tienes antojos constantes", en: "you have constant cravings" },
              { es: "te frustras porque no ves cambios", en: "you get frustrated because you see no changes" },
              { es: "quieres activar tu cuerpo de forma inteligente", en: "you want to activate your body intelligently" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  );
}
