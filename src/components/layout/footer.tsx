"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { useLanguage } from "@/components/providers/language-provider";
import { products } from "@/data/products";
import { navigation } from "@/data/navigation";
import { getDefaultWhatsAppMessage, getWhatsAppLink, site } from "@/data/site";
import { localize } from "@/lib/i18n";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-white/60 bg-[#edf3e8]/70 py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#456F78]/20 to-transparent" />
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <Image
              alt="VibeLife logo"
              className="h-auto w-48"
              height={180}
              priority
              src="/images/brand/vibelife-logo-transparent.png"
              width={192}
            />
            <p className="mt-5 text-sm leading-7 text-muted">
              {localize(site.footerNote, language)}
            </p>
            <Link
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#35525b] transition hover:text-[#203733]"
              href={getWhatsAppLink(getDefaultWhatsAppMessage(language))}
              rel="noopener noreferrer"
              target="_blank"
            >
              {localize(
                {
                  es: "Hablar por WhatsApp",
                  en: "Contact on WhatsApp",
                },
                language,
              )}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#57716a]">
              {localize(
                {
                  es: "Navegación",
                  en: "Navigate",
                },
                language,
              )}
            </h3>
            <div className="mt-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  className="block text-sm text-muted transition hover:text-[#2f4541]"
                  href={item.href}
                  key={item.href}
                >
                  {localize(item.label, language)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#57716a]">
              {localize(
                {
                  es: "Productos",
                  en: "Products",
                },
                language,
              )}
            </h3>
            <div className="mt-4 space-y-3">
              {products.map((product) => (
                <Link
                  className="block text-sm text-muted transition hover:text-[#2f4541]"
                  href={`/products/${product.slug}`}
                  key={product.slug}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#456F78]/10 pt-6 text-xs uppercase tracking-[0.18em] text-[#6f817b] sm:flex-row sm:items-center sm:justify-between">
          <span>{site.name}</span>
          <span>{localize(site.tagline, language)}</span>
          <span>{site.whatsapp.number}</span>
        </div>
      </PageContainer>
    </footer>
  );
}
