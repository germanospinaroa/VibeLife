"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import type { Product } from "@/data/products";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

type ProductCtaProps = {
  product: Product;
};

export function ProductCta({ product }: ProductCtaProps) {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <Reveal preset="scale">
        <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#2f4c53_0%,#456F78_52%,#7fa866_100%)] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/66">
            {localize(
              {
                es: "Más información",
                en: "Product CTA",
              },
              language,
            )}
          </span>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold text-white sm:text-5xl">
            {localize(
              {
                es: `¿Quieres saber más sobre ${product.name}?`,
                en: `Want to learn more about ${product.name}?`,
              },
              language,
            )}
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-white/82 sm:text-lg">
            {localize(
              {
                es: "Escríbenos por WhatsApp y te ayudamos con más información sobre el producto y cómo puede encajar en tu rutina.",
                en: "Message us on WhatsApp and we will help you with more information about the product and how it may fit your routine.",
              },
              language,
            )}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppCta
              className="bg-white text-[#2f4c53] hover:bg-stone"
              message={{
                es: `Hola, quiero más información sobre ${product.name}.`,
                en: `Hi, I want more information about ${product.name}.`,
              }}
              variant="light"
            >
              {{
                es: "Hablar por WhatsApp",
                en: "Chat on WhatsApp",
              }}
            </WhatsAppCta>
            <Link
              className={buttonVariants({
                className:
                  "border border-white/16 bg-white/10 text-white hover:bg-white/18",
                variant: "ghost",
              })}
              href="/community"
            >
              {localize(
                {
                  es: "Ver comunidad",
                  en: "Explore community",
                },
                language,
              )}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
