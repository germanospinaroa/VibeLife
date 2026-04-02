"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import type { Product } from "@/data/products";
import { localize } from "@/lib/i18n";

type ProductBreadcrumbProps = {
  product: Product;
};

export function ProductBreadcrumb({ product }: ProductBreadcrumbProps) {
  const { language } = useLanguage();

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 rounded-full bg-white/56 px-4 py-3 text-sm text-muted backdrop-blur"
    >
      <Link className="transition hover:text-[#2f4541]" href="/">
        {localize(
          {
            es: "Inicio",
            en: "Home",
          },
          language,
        )}
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link className="transition hover:text-[#2f4541]" href="/#products">
        {localize(
          {
            es: "Productos",
            en: "Products",
          },
          language,
        )}
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="font-semibold text-[#35525b]">{product.name}</span>
    </nav>
  );
}
