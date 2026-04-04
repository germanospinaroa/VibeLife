"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiComunidadSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Esto no es solo un producto",
                en: "This isn't just a product",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Es parte de un proceso.",
                en: "It's part of a process.",
              },
              language,
            )}
          </p>

          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "De mujeres que:",
                en: "Of women who:",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "están priorizando su bienestar", en: "are prioritizing their well-being" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "están entendiendo su cuerpo", en: "are understanding their body" }, language)}</p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
              <p className="font-medium text-[#2f4541]">{localize({ es: "están cambiando desde adentro", en: "are changing from within" }, language)}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#9BC56A] to-[#6f9d49] p-8 text-white space-y-2">
            <p className="text-lg font-semibold">
              {localize(
                {
                  es: "👉 Aquí no se trata de rapidez",
                  en: "👉 Here it's not about speed",
                },
                language,
              )}
            </p>
            <p className="text-lg font-semibold">
              {localize(
                {
                  es: "se trata de transformación real",
                  en: "it's about real transformation",
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
