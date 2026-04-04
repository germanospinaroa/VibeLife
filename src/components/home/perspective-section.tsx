"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

export function PerspectiveSection() {
  const { language } = useLanguage();

  return (
    <SectionShell className="bg-[#eef4f1]/40" tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold text-[#2f4541] sm:text-4xl lg:text-5xl">
            {localize(
              { es: "No es falta de disciplina", en: "It is not a lack of discipline" },
              language,
            )}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl bg-white/80 p-8 shadow-[0_2px_14px_rgba(62,102,112,0.08)]">
            <p className="text-base leading-8 text-[#3d5550] sm:text-lg">
              {localize(
                {
                  es: "No se trata de que no puedas.\n\nSe trata de que nadie te ha enseñado a hacerlo de forma realista, sostenible y alineada con tu vida.\n\nAquí no buscamos cambios extremos.\nBuscamos que vuelvas a sentirte bien contigo misma.",
                  en: "It is not that you can not.\n\nIt is that no one has taught you how to do it in a realistic, sustainable way that is aligned with your life.\n\nHere we do not seek extreme changes.\nWe want you to feel good about yourself again.",
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
