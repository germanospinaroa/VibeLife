"use client";

import type { Product } from "@/data/products";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

type ProductLifestyleProps = {
  product: Product;
};

export function ProductLifestyle({ product }: ProductLifestyleProps) {
  const { language } = useLanguage();

  return (
    <SectionShell className="bg-white/22" tone="leaf">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal delay={0.04} preset="scale">
          <div
            className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${product.gradientClassName} p-6 sm:p-8`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.82),transparent_42%)]" />
            <div className="relative grid gap-4">
              <div className="rounded-[24px] bg-white/78 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6e847d]">
                  {localize(
                    {
                      es: "Cómo se integra",
                      en: "How it fits",
                    },
                    language,
                  )}
                </p>
                <p className="mt-3 text-lg font-semibold text-[#2f4541]">
                  {localize(
                    {
                      es: "Una opción pensada para acompañar rutinas más claras, constantes y alineadas con bienestar diario.",
                      en: "An option designed to support routines that are clearer, more consistent and aligned with daily wellness.",
                    },
                    language,
                  )}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    es: "Rutinas de mañana o de día",
                    en: "Morning or daytime routines",
                  },
                  {
                    es: "Hábitos más constantes",
                    en: "More consistent habits",
                  },
                  {
                    es: "Mejor organización personal",
                    en: "Better personal organization",
                  },
                  {
                    es: "Bienestar diario con intención",
                    en: "Daily wellness with intention",
                  },
                ].map((item) => (
                  <div
                    className="rounded-[24px] bg-white/74 px-5 py-5 text-sm leading-7 text-[#35525b]"
                    key={item.es}
                  >
                    {localize(item, language)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <SectionHeading
            eyebrow={localize(
              {
                es: "Estilo de vida",
                en: "Lifestyle",
              },
              language,
            )}
            title={localize(
              {
                es: `Cómo encaja ${product.name} en tu rutina`,
                en: `How ${product.name} fits into your routine`,
              },
              language,
            )}
            description={localize(product.lifestyle, language)}
          />
        </Reveal>
      </div>
    </SectionShell>
  );
}
