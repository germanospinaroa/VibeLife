"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/data/products";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

export function ProductsShowcaseSection() {
  const { language } = useLanguage();

  return (
    <SectionShell className="bg-white/30" id="products" tone="teal">
      <SectionHeading
        title={localize(
          {
            es: "Opciones para tu bienestar",
            en: "Options for your wellness",
          },
          language,
        )}
        description={localize(
          {
            es: "Productos que puedes integrar fácilmente a tu rutina diaria.",
            en: "Products you can easily integrate into your daily routine.",
          },
          language,
        )}
      />
      <div className="mx-auto mt-8 grid max-w-5xl gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="bg-white/82 p-6">
          <p className="text-base leading-8 text-[#35525b] sm:text-lg">
            {localize(
              {
                es: "En VibeLife trabajamos con productos Zilis que pueden complementar tu estilo de vida y ayudarte a mantener una rutina más equilibrada.",
                en: "At VibeLife, we work with Zilis products that can complement your lifestyle and help you maintain a more balanced routine.",
              },
              language,
            )}
          </p>
        </Card>
        <Card className="bg-[linear-gradient(155deg,rgba(69,111,120,0.16),rgba(255,255,255,0.98))] p-6">
          <p className="text-sm leading-7 text-[#35525b] sm:text-base">
            {localize(
              {
                es: "Si no sabes cuál opción puede ajustarse mejor a ti, te orientamos por WhatsApp para que tomes una mejor decisión.",
                en: "If you are not sure which option may fit you best, we can guide you on WhatsApp so you can make a better decision.",
              },
              language,
            )}
          </p>
        </Card>
      </div>

      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <StaggerItem key={product.slug}>
            <Card className="group flex h-full flex-col bg-white/84 p-5 hover:-translate-y-1.5">
              <div
                className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br ${product.gradientClassName} p-5`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_42%)]" />
                <div className="relative h-44">
                  <div className="absolute left-3 top-4 h-24 w-24 rounded-full bg-white/55 blur-xl" />
                  <div className="absolute bottom-2 right-3 h-24 w-24 rounded-full bg-[#456F78]/12 blur-2xl" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#57716a]">
                    {localize(product.kicker, language)}
                  </div>
                  <div className="absolute inset-x-4 top-4 flex translate-y-1 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="rounded-full bg-[#35525b] px-3 py-1.5 text-[11px] font-semibold text-white shadow-[0_10px_18px_rgba(62,102,112,0.2)]">
                      {localize(
                        {
                          es: "Ver beneficios",
                          en: "View benefits",
                        },
                        language,
                      )}
                    </span>
                    <span className="rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-[#35525b] shadow-[0_10px_18px_rgba(62,102,112,0.12)]">
                      {localize(
                        {
                          es: "Cómo usarlo",
                          en: "How to use it",
                        },
                        language,
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e847d]">
                  {localize(
                    {
                      es: "Producto de Zilis",
                      en: "Zilis product",
                    },
                    language,
                  )}
                </p>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted sm:text-base">
                  {localize(product.shortDescription, language)}
                </p>
                <div className="mt-6 space-y-3">
                  <Link
                    className={buttonVariants({
                      className: "w-full justify-center",
                      variant: "ghost",
                    })}
                    href={`/products/${product.slug}`}
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
                  <WhatsAppCta
                    className="w-full justify-center"
                    message={{
                      es: `Hola, me gustaría recibir más información sobre ${product.name}.`,
                      en: `Hi, I would like more information about ${product.name}.`,
                    }}
                    variant="light"
                  >
                    {{
                      es: "Cómo usarlo",
                      en: "How to use it",
                    }}
                  </WhatsAppCta>
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
