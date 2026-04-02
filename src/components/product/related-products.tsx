"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import type { Product } from "@/data/products";
import { getProductBySlug } from "@/data/products";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

type RelatedProductsProps = {
  product: Product;
};

export function RelatedProducts({ product }: RelatedProductsProps) {
  const { language } = useLanguage();
  const relatedProducts = product.relatedProducts
    .map((slug) => getProductBySlug(slug))
    .filter((related): related is Product => Boolean(related));

  return (
    <SectionShell tone="leaf">
      <SectionHeading
        eyebrow={localize(
          {
            es: "Productos relacionados",
            en: "Related products",
          },
          language,
        )}
        title={localize(
          {
            es: "Más opciones disponibles",
            en: "More available options",
          },
          language,
        )}
        description={localize(
          {
            es: "Otras opciones que también pueden acompañar tu bienestar diario.",
            en: "Other options that may also support your daily wellness.",
          },
          language,
        )}
      />

      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2">
        {relatedProducts.map((related) => (
          <StaggerItem key={related.slug}>
            <Card className="flex h-full flex-col bg-white/84">
              <div
                className={`h-44 rounded-[26px] bg-gradient-to-br ${related.gradientClassName}`}
              />
              <h3 className="mt-6 text-2xl font-semibold">{related.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted sm:text-base">
                {localize(related.shortDescription, language)}
              </p>
              <Link
                className={buttonVariants({
                  className: "mt-6 w-full justify-center",
                  variant: "ghost",
                })}
                href={`/products/${related.slug}`}
              >
                {localize(
                  {
                    es: "Ver producto",
                    en: "View product",
                  },
                  language,
                )}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
