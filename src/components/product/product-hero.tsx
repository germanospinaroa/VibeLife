"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import type { Product } from "@/data/products";
import { PageContainer } from "@/components/layout/page-container";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { cn } from "@/lib/utils";
import { localize } from "@/lib/i18n";

type ProductHeroProps = {
  product: Product;
};

export function ProductHero({ product }: ProductHeroProps) {
  const { language } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden px-3 pb-14 pt-6 sm:pb-18 lg:pb-20">
      <div aria-hidden="true" className="hero-glow absolute inset-0" />
      <PageContainer className="relative z-10 max-w-[84rem] px-0">
        <div className="surface-panel rounded-[36px] px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <Reveal>
              <Badge>{localize(product.kicker, language)}</Badge>
              <h1 className="mt-6 text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
                {localize(product.heroDescription, language)}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppCta
                  message={{
                    es: `Hola, quiero más información sobre ${product.name}.`,
                    en: `Hi, I want more information about ${product.name}.`,
                  }}
                  size="lg"
                >
                  {{
                    es: "Hablar por WhatsApp",
                    en: "Ask on WhatsApp",
                  }}
                </WhatsAppCta>
                <Link
                  className={buttonVariants({ size: "lg", variant: "ghost" })}
                  href="/#products"
                >
                  {localize(
                    {
                      es: "Ver productos",
                      en: "View products",
                    },
                    language,
                  )}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08} preset="scale">
              <div
                className={cn(
                  "relative overflow-hidden rounded-[32px] bg-gradient-to-br p-6 sm:p-8",
                  product.gradientClassName,
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.88),transparent_38%)]" />
                <div className="absolute bottom-[-10%] left-[-10%] h-44 w-44 rounded-full bg-white/50 blur-3xl" />
                <div className="relative grid gap-4 sm:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-[28px] bg-white/80 p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6e847d]">
                      {localize(
                        {
                          es: "Opción disponible",
                          en: "Available option",
                        },
                        language,
                      )}
                    </span>
                    <p className="mt-4 text-lg font-semibold text-[#2f4541]">
                      {localize(
                        {
                          es: "Una opción pensada para acompañar tu bienestar diario con una propuesta clara y directa.",
                          en: "An option designed to support your daily wellness with a clear and direct proposition.",
                        },
                        language,
                      )}
                    </p>
                  </div>
                  <div className="rounded-[28px] bg-[#2f4c53] p-5 text-white">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
                      {localize(
                        {
                          es: "En tu rutina",
                          en: "In your routine",
                        },
                        language,
                      )}
                    </span>
                    <p className="mt-4 text-sm leading-7 text-white/82">
                      {localize(
                        {
                          es: "Puede integrarse como parte de hábitos saludables, más constancia y una rutina más equilibrada.",
                          en: "It can fit as part of healthier habits, more consistency and a more balanced routine.",
                        },
                        language,
                      )}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[30px] border border-white/60 bg-white/72 p-6 shadow-[0_24px_60px_rgba(62,102,112,0.1)]">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[24px] bg-[#f8fbf5] px-4 py-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6e847d]">
                        {localize(
                          {
                            es: "Enfoque",
                            en: "Approach",
                          },
                          language,
                        )}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#35525b]">
                        {localize(
                          {
                            es: "Producto seleccionado para acompañar tu bienestar diario.",
                            en: "Product selected to support your daily wellness.",
                          },
                          language,
                        )}
                      </p>
                    </div>
                    <div className="rounded-[24px] bg-[#fbfcfa] px-4 py-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6e847d]">
                        {localize(
                          {
                            es: "Estilo",
                            en: "Style",
                          },
                          language,
                        )}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#35525b]">
                        {localize(
                          {
                            es: "Claro, confiable y fácil de entender.",
                            en: "Clear, trustworthy and easy to understand.",
                          },
                          language,
                        )}
                      </p>
                    </div>
                    <div className="rounded-[24px] bg-[#f5f8fb] px-4 py-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6e847d]">
                        {localize(
                          {
                            es: "Más información",
                            en: "More information",
                          },
                          language,
                        )}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#35525b]">
                        {localize(
                          {
                            es: "Recíbela directamente por WhatsApp.",
                            en: "Get it directly through WhatsApp.",
                          },
                          language,
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
