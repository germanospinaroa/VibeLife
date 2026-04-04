"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseQueSentirásSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Esto es lo que realmente cambia",
                en: "This is what really changes",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Con el uso constante, puedes empezar a notar:",
                en: "With consistent use, you can start to notice:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "Te levantas sin sentirte pesada", en: "You wake up without feeling heavy" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "No necesitas 'otro café' para seguir", en: "You don't need 'another coffee' to keep going" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "Tu mente está más clara", en: "Your mind is clearer" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "Te concentras mejor", en: "You concentrate better" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "No sientes ese vacío o ansiedad constante", en: "You don't feel that constant emptiness or anxiety" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#9BC56A] to-[#6f9d49] p-8 text-white">
            <p className="text-lg font-semibold">
              👉 {localize(
                {
                  es: "No es un pico… es una sensación sostenida",
                  en: "It's not a spike… it's a sustained feeling",
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
