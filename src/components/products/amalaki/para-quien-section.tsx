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

        <Reveal delay={0.1} className="mt-8 space-y-8">
          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "Te sientes inflamada", en: "You feel inflamed" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "Estás cansada constantemente", en: "You're constantly tired" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "Tu digestión no es la mejor", en: "Your digestion isn't the best" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "Has probado cosas y no ves resultados", en: "You've tried things and see no results" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "Quieres sentirte mejor desde adentro", en: "You want to feel better from within" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#9BC56A] space-y-3">
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
