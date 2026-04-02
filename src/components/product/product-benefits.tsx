"use client";

import type { Product } from "@/data/products";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

type ProductBenefitsProps = {
  product: Product;
};

export function ProductBenefits({ product }: ProductBenefitsProps) {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <SectionHeading
        eyebrow={localize(
          {
            es: "Beneficios generales",
            en: "General benefits",
          },
          language,
        )}
        title={localize(
          {
            es: `Lo que comunica ${product.name}`,
            en: `What ${product.name} communicates`,
          },
          language,
        )}
        description={localize(
          {
            es: "Un resumen claro de cómo se presenta el producto dentro de una rutina de bienestar.",
            en: "A clear summary of how the product is presented within a wellness routine.",
          },
          language,
        )}
      />

      <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {product.benefits.map((benefit) => (
          <StaggerItem key={benefit.es}>
            <Card className="h-full bg-white/82 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6e847d]">
                {localize(
                  {
                    es: "Punto clave",
                    en: "Key point",
                  },
                  language,
                )}
              </span>
              <p className="mt-6 text-base font-semibold leading-7 text-[#35525b]">
                {localize(benefit, language)}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
