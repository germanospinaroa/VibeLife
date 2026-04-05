"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiParaQuienSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Si sientes que tu cuerpo no responde… esto es para ti",
                en: "If you feel your body isn't responding… this is for you",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <ul className="space-y-3 pl-1">
            {[
              { es: "has probado cosas y no te funcionan", en: "you've tried things and they don't work" },
              { es: "te sientes cansada constantemente", en: "you feel constantly tired" },
              { es: "sientes que tu cuerpo no reacciona", en: "you feel your body doesn't react" },
              { es: "quieres volver a sentirte bien", en: "you want to feel good again" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No necesitas más productos", en: "You don't need more products" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "necesitas una mejor base", en: "you need a better foundation" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
