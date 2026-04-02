"use client";

import type { Product } from "@/data/products";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

type ProductAudienceProps = {
  product: Product;
};

export function ProductAudience({ product }: ProductAudienceProps) {
  const { language } = useLanguage();

  return (
    <SectionShell className="bg-white/24" tone="soft">
      <SectionHeading
        eyebrow={localize(
          {
            es: "Para quién puede ser",
            en: "Who it may be for",
          },
          language,
        )}
        title={localize(
          {
            es: `¿Para quién puede ser ${product.name}?`,
            en: `Who may connect with ${product.name}?`,
          },
          language,
        )}
        description={localize(
          {
            es: "Personas interesadas en hábitos más saludables, mayor equilibrio y bienestar diario.",
            en: "People interested in healthier habits, better balance and daily wellness.",
          },
          language,
        )}
      />

      <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2">
        {product.audience.map((item) => (
          <StaggerItem key={item.es}>
            <Card className="h-full bg-white/84 p-6">
              <p className="text-base font-semibold leading-7 text-[#35525b]">
                {localize(item, language)}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
