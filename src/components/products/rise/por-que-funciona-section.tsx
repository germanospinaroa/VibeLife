"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RisePorQueFuncionaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No se trata de más energía… sino de mejor energía",
                en: "It's not about more energy… it's about better energy",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Tu cuerpo no necesita más estímulos.",
                en: "Your body doesn't need more stimulation.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Necesita:",
                en: "It needs:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "menos inflamación", en: "less inflammation" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "más equilibrio", en: "more balance" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-semibold text-[#2f4541]">{localize({ es: "mejor regulación", en: "better regulation" }, language)}</p>
            </div>
          </div>

          <p className="text-lg leading-8 text-[#5c746d]">
            {localize(
              {
                es: "RISE ayuda a crear ese entorno.",
                en: "RISE helps create that environment.",
              },
              language,
            )}
          </p>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#9BC56A]">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "Por eso se siente diferente",
                  en: "That's why it feels different",
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
