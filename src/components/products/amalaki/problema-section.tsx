"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiProblemaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Tu cuerpo no está fallando… está saturado",
                en: "Your body isn't failing… it's overwhelmed",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Te sientes:",
                en: "You feel:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "cansada sin razón", en: "tired for no reason" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "inflamada constantemente", en: "constantly inflamed" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "con digestión pesada", en: "with heavy digestion" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "sin energía real", en: "without real energy" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#d97706] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "desconectada de tu cuerpo", en: "disconnected from your body" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#fff5f0] p-8 border-l-4 border-[#d97706] space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "Y crees que necesitas más cosas…",
                  en: "And you think you need more things…",
                },
                language,
              )}
            </p>

            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "Pero en realidad: tu cuerpo necesita funcionar mejor desde adentro",
                  en: "But really: your body needs to work better from within",
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
