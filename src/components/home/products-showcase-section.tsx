"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
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
          { es: "Opciones para acompañarte", en: "Options to support you" },
          language,
        )}
        description={localize(
          {
            es: "No mostramos un catálogo. Te mostramos opciones que se adaptan a lo que realmente necesitas.",
            en: "We do not show a catalog. We show you options that fit what you really need.",
          },
          language,
        )}
      />

      <div className="mx-auto mt-8 grid max-w-5xl gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-2xl bg-white/82 p-6">
          <BorderBeam colorFrom="#9BC56A" colorTo="#456F78" duration={10} size={60} borderWidth={1} />
          <p className="text-base leading-8 text-[#35525b] sm:text-lg">
            {localize(
              {
                es: "Trabajamos con productos seleccionados para bienestar real. No milagros. No promesas vacías. Productos que complementan lo que ya estás intentando hacer — y le dan más fuerza.",
                en: "We work with products selected for real wellness. No miracles. No empty promises. Products that complement what you are already trying to do — and give it more force.",
              },
              language,
            )}
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(155deg,rgba(69,111,120,0.16),rgba(255,255,255,0.98))] p-6">
          <p className="text-sm leading-7 text-[#35525b] sm:text-base">
            {localize(
              {
                es: "¿No sabes por cuál empezar? Cuéntanos cómo te sientes en un mensaje y te decimos cuál tiene más sentido para ti. Sin presión, sin catálogo.",
                en: "Not sure where to start? Tell us how you feel in a message and we will tell you which one makes the most sense for you. No pressure, no catalog.",
              },
              language,
            )}
          </p>
        </div>
      </div>

      <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <StaggerItem key={product.slug}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/84 p-6 shadow-[0_2px_12px_rgba(62,102,112,0.06)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(62,102,112,0.12)] hover:-translate-y-1">
              {/* Etiqueta/Kicker */}
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6f9d49]">
                {localize(product.kicker, language)}
              </p>

              {/* Contenedor de imagen */}
              <div className="relative mt-5 flex h-[200px] items-center justify-center rounded-xl bg-gradient-to-br from-white/80 to-[#f5f5f5] p-4">
                <Image
                  alt={product.name}
                  className="h-full w-full object-contain"
                  height={200}
                  src={product.image}
                  width={160}
                  priority={false}
                  quality={85}
                />
              </div>

              {/* Nombre */}
              <h3 className="mt-6 text-2xl font-semibold text-[#2f4541]">
                {product.name}
              </h3>

              {/* Subtítulo */}
              <p className="mt-2 text-sm font-medium text-[#6f9d49]">
                {product.name === "Rise" && localize(
                  { es: "Café funcional con amalaki", en: "Functional coffee with amalaki" },
                  language
                )}
                {product.name === "Amalaki" && localize(
                  { es: "Apoyo interno natural", en: "Natural internal support" },
                  language
                )}
                {product.name === "Accell" && localize(
                  { es: "Apoyo físico", en: "Physical support" },
                  language
                )}
                {product.name === "B-Fit" && localize(
                  { es: "Apoyo metabólico", en: "Metabolic support" },
                  language
                )}
              </p>

              {/* Descripción breve */}
              <p className="mt-4 flex-1 text-sm leading-6 text-[#5c746d]">
                {product.name === "Rise" && localize(
                  { es: "Una opción para acompañar tus mañanas cuando necesitas más energía y enfoque.", en: "An option to support your mornings when you need more energy and focus." },
                  language
                )}
                {product.name === "Amalaki" && localize(
                  { es: "Una forma simple de cuidar tu bienestar desde adentro.", en: "A simple way to take care of your wellness from within." },
                  language
                )}
                {product.name === "Accell" && localize(
                  { es: "Pensado para quienes quieren sentirse mejor en su día a día.", en: "Designed for those who want to feel better every day." },
                  language
                )}
                {product.name === "B-Fit" && localize(
                  { es: "Una opción para acompañar hábitos más sostenibles.", en: "An option to support more sustainable habits." },
                  language
                )}
              </p>

              {/* Botones */}
              <div className="mt-6 space-y-2">
                <Link
                  className={buttonVariants({ className: "w-full justify-center text-sm", variant: "ghost" })}
                  href={`/products/${product.slug}`}
                >
                  {localize({ es: "Ver producto", en: "View product" }, language)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <WhatsAppCta
                  className="w-full justify-center text-sm"
                  message={{
                    es: `Hola, me gustaría saber más sobre ${product.name}.`,
                    en: `Hi, I would like to know more about ${product.name}.`,
                  }}
                  variant="light"
                >
                  {{ es: "Conocer más", en: "Learn more" }}
                </WhatsAppCta>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
