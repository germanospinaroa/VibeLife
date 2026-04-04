"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseEducacionSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "La energía no es solo café… es biología",
                en: "Energy isn't just coffee… it's biology",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Tu energía depende de:",
                en: "Your energy depends on:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "inflamación", en: "inflammation" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "metabolismo", en: "metabolism" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "sistema nervioso", en: "nervous system" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p>{localize({ es: "nutrición", en: "nutrition" }, language)}</p>
            </div>
          </div>

          <p className="text-lg leading-8 text-[#5c746d]">
            {localize(
              {
                es: "Cuando solo tomas café… estás estimulando.\nCuando usas RISE… estás apoyando tu sistema.",
                en: "When you just drink coffee… you're stimulating.\nWhen you use RISE… you're supporting your system.",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-gradient-to-r from-[#9BC56A] to-[#6f9d49] p-8 text-white">
            <p className="text-lg font-semibold">
              👉 {localize(
                {
                  es: "Esa es la diferencia",
                  en: "That's the difference",
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
