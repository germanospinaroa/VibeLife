"use client";

import type { Product } from "@/data/products";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

type ProductOverviewProps = {
  product: Product;
};

export function ProductOverview({ product }: ProductOverviewProps) {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow={localize(
              {
                es: "Descripción",
                en: "Overview",
              },
              language,
            )}
            title={localize(
              {
                es: `${product.name} en tu rutina`,
                en: `${product.name} in your routine`,
              },
              language,
            )}
            description={localize(product.overview, language)}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="bg-white/82">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6e847d]">
              {localize(
                {
                  es: "Información clara",
                  en: "Clear information",
                },
                language,
              )}
            </span>
            <p className="mt-5 text-lg leading-8 text-[#38534d] sm:text-xl">
              {localize(
                {
                  es: `${product.name} se presenta como una opción para acompañar hábitos más saludables y una rutina más equilibrada.`,
                  en: `${product.name} is presented as an option to support healthier habits and a more balanced routine.`,
                },
                language,
              )}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-[#f8fbf5] px-5 py-5">
                <p className="text-sm font-semibold text-[#35525b]">
                  {localize(
                    {
                      es: "Uso diario",
                      en: "Daily use",
                    },
                    language,
                  )}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {localize(
                    {
                      es: "Pensado para integrarse de forma práctica dentro de tu estilo de vida.",
                      en: "Designed to fit practically within your lifestyle.",
                    },
                    language,
                  )}
                </p>
              </div>
              <div className="rounded-[24px] bg-[#f6f9fb] px-5 py-5">
                <p className="text-sm font-semibold text-[#35525b]">
                  {localize(
                    {
                      es: "Enfoque responsable",
                      en: "Responsible approach",
                    },
                    language,
                  )}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {localize(
                    {
                      es: "Sin promesas exageradas, con un mensaje claro sobre bienestar y hábitos.",
                      en: "Without exaggerated promises, with a clear message around wellness and habits.",
                    },
                    language,
                  )}
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </SectionShell>
  );
}
