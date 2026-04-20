"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { SectionShell } from "@/components/shared/section-shell";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { localize } from "@/lib/i18n";

const catalogProducts = [
  {
    slug: "ice",
    name: "UltraICE",
    image: "/images/products/ice.png",
    tagline: {
      es: "Para la que siente que su cuerpo ya no responde igual",
      en: "For the one who feels her body doesn't respond the same anymore",
    },
    description: {
      es: "Con Resveratrol y Cúrcuma para que tu cuerpo no viva en desgaste constante. Menos pesadez, menos carga acumulada, más energía real.",
      en: "With Resveratrol and Turmeric so your body doesn't live in constant wear. Less heaviness, less accumulated burden, more real energy.",
    },
    href: "/ice",
    gradient: "from-[#1B3A6B]/12 to-[#D4E4F4]/40",
    accent: "#1B3A6B",
    accentLight: "#e8f0f9",
    mixBlend: true,
  },
  {
    slug: "rise",
    name: "Rise",
    image: "/images/products/rise.png",
    tagline: {
      es: "Para la que se arrastra en las mañanas",
      en: "For the one who drags herself through mornings",
    },
    description: {
      es: "Energía funcional para empezar el día sin depender del café ni exigirte de más.",
      en: "Functional energy to start the day without depending on coffee or pushing yourself too hard.",
    },
    href: "/rise",
    gradient: "from-[#456F78]/16 to-[#9BC56A]/30",
    accent: "#456F78",
    accentLight: "#edf6e4",
    mixBlend: false,
  },
  {
    slug: "amalaki",
    name: "Amalaki",
    image: "/images/products/amalaki.png",
    tagline: {
      es: "Para la que siente que algo no está bien adentro",
      en: "For the one who feels something isn't right inside",
    },
    description: {
      es: "Apoyo digestivo y nutricional cuando sientes inflamación, pesadez o desorden interno.",
      en: "Digestive and nutritional support when you feel inflammation, heaviness or internal disorder.",
    },
    href: "/amalaki",
    gradient: "from-[#B8C9A3]/35 to-[#9BC56A]/25",
    accent: "#6f9d49",
    accentLight: "#edf6e4",
    mixBlend: false,
  },
  {
    slug: "accell",
    name: "Accell",
    image: "/images/products/accell.png",
    tagline: {
      es: "Para la que quiere volver a moverse",
      en: "For the one who wants to move again",
    },
    description: {
      es: "Acompaña tu energía física y recuperación cuando quieres retomar actividad, pero tu cuerpo no responde igual.",
      en: "Supports your physical energy and recovery when you want to resume activity, but your body doesn't respond the same.",
    },
    href: "/accell",
    gradient: "from-[#456F78]/16 to-[#B8C9A3]/40",
    accent: "#456F78",
    accentLight: "#eef4f5",
    mixBlend: false,
  },
  {
    slug: "b-fit",
    name: "B-Fit",
    image: "/images/products/b-fit.png",
    tagline: {
      es: "Para la que quiere sentirse bien en su cuerpo",
      en: "For the one who wants to feel good in her body",
    },
    description: {
      es: "Apoyo en procesos de bienestar físico sin presión, desde el acompañamiento y la constancia.",
      en: "Support in physical wellness processes without pressure, through accompaniment and consistency.",
    },
    href: "/b-fit",
    gradient: "from-[#9BC56A]/32 to-[#456F78]/16",
    accent: "#6f9d49",
    accentLight: "#edf6e4",
    mixBlend: false,
  },
];

export default function CatalogoPage() {
  const { language } = useLanguage();

  return (
    <>
      {/* ── Hero ── */}
      <SectionShell className="pt-10 pb-12" tone="soft">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <Badge>
              {localize({ es: "Catálogo", en: "Catalog" }, language)}
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
              {localize(
                {
                  es: "No es un plan perfecto.",
                  en: "It's not a perfect plan.",
                },
                language,
              )}
              <br />
              <span className="text-[#456F78]">
                {localize(
                  {
                    es: "Es encontrar lo que sí es para ti hoy.",
                    en: "It's finding what is right for you today.",
                  },
                  language,
                )}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
              {localize(
                {
                  es: "Cada producto cumple una función distinta. No necesitas todos — solo el que conecte con cómo te estás sintiendo ahora.",
                  en: "Each product serves a different purpose. You don't need all of them — just the one that connects with how you're feeling right now.",
                },
                language,
              )}
            </p>
          </Reveal>

          <Reveal delay={0.08} preset="scale">
            <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(155deg,rgba(69,111,120,0.14),rgba(255,255,255,0.95))] px-8 py-10">
              <BorderBeam
                colorFrom="#9BC56A"
                colorTo="#456F78"
                duration={12}
                size={80}
                borderWidth={1}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f9d49]">
                {localize({ es: "Opciones para acompañarte", en: "Options to support you" }, language)}
              </p>
              <p className="mt-5 text-lg leading-9 text-[#39554f] sm:text-xl">
                {localize(
                  {
                    es: "No mostramos un catálogo de promesas. Mostramos opciones reales para lo que estás viviendo ahora.",
                    en: "We don't show a catalog of promises. We show real options for what you're experiencing right now.",
                  },
                  language,
                )}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5c746d]">
                {localize(
                  {
                    es: "¿No sabes cuál elegir? Cuéntame cómo te sientes y te digo cuál tiene más sentido para ti.",
                    en: "Not sure which to choose? Tell me how you feel and I'll tell you which one makes the most sense for you.",
                  },
                  language,
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* ── Products Grid ── */}
      <SectionShell tone="teal" className="bg-white/30">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            {localize(
              { es: "Opciones para acompañarte", en: "Options to support you" },
              language,
            )}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-muted">
            {localize(
              {
                es: "Cada producto fue pensado para un momento distinto. Encuentra el tuyo.",
                en: "Each product was designed for a different moment. Find yours.",
              },
              language,
            )}
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {catalogProducts.map((product, i) => (
            <StaggerItem key={product.slug}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/88 shadow-[0_2px_12px_rgba(62,102,112,0.07)] transition-all duration-300 hover:shadow-[0_8px_28px_rgba(62,102,112,0.13)] hover:-translate-y-1 ${
                  i === 0 ? "md:col-span-2 xl:col-span-1" : ""
                }`}
              >
                {/* Gradient accent strip */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${product.gradient}`}
                />

                <div className="flex flex-1 flex-col p-6">
                  {/* Image */}
                  <div
                    className="relative flex h-[180px] items-center justify-center overflow-hidden rounded-xl p-4"
                    style={{
                      background: `linear-gradient(135deg, ${product.accentLight} 0%, rgba(255,255,255,0.92) 100%)`,
                    }}
                  >
                    <Image
                      alt={product.name}
                      className={`h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04] ${
                        product.mixBlend ? "mix-blend-multiply" : ""
                      }`}
                      height={180}
                      src={product.image}
                      width={140}
                      quality={85}
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-5 flex flex-1 flex-col">
                    <h3 className="text-2xl font-semibold text-[#2f4541]">
                      {product.name}
                    </h3>
                    <p
                      className="mt-1 text-sm font-semibold"
                      style={{ color: product.accent }}
                    >
                      {localize(product.tagline, language)}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-6 text-[#5c746d]">
                      {localize(product.description, language)}
                    </p>

                    {/* Actions */}
                    <div className="mt-6 flex flex-col gap-2">
                      <Link
                        className={buttonVariants({
                          variant: "ghost",
                          className: "w-full justify-center text-sm",
                        })}
                        href={product.href}
                      >
                        {localize({ es: "Ver producto", en: "View product" }, language)}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <WhatsAppCta
                        className="w-full justify-center text-sm"
                        message={{
                          es: `Hola, me gustaría saber más sobre ${product.name} de VibeLife.`,
                          en: `Hi, I'd like to know more about ${product.name} from VibeLife.`,
                        }}
                        variant="light"
                      >
                        {{ es: "Preguntar por WhatsApp", en: "Ask on WhatsApp" }}
                      </WhatsAppCta>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionShell>

      {/* ── Final CTA ── */}
      <SectionShell tone="teal">
        <Reveal preset="scale">
          <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#2f4c53_0%,#456F78_45%,#6a9680_100%)] px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-14">
            <BorderBeam
              colorFrom="#9BC56A"
              colorTo="rgba(255,255,255,0.6)"
              duration={10}
              size={120}
              borderWidth={1.5}
            />
            <DotPattern
              width={24}
              height={24}
              cr={0.8}
              className="text-white/10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
            />

            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                {localize(
                  { es: "¿No sabes cuál elegir?", en: "Not sure which to choose?" },
                  language,
                )}
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                {localize(
                  {
                    es: "No tienes que decidir sola.",
                    en: "You don't have to decide alone.",
                  },
                  language,
                )}
              </h2>
              <p className="mt-5 text-pretty text-base leading-8 text-white/80 sm:text-lg">
                {localize(
                  {
                    es: "Cuéntame cómo te has estado sintiendo y te digo cuál puede ser un buen punto de partida.",
                    en: "Tell me how you've been feeling and I'll tell you which one can be a good starting point.",
                  },
                  language,
                )}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppCta
                  className="bg-white text-[#2f4c53] hover:bg-[#f0f9e8]"
                  message={{
                    es: "Hola, quiero saber qué producto de VibeLife es para mí.",
                    en: "Hi, I want to know which VibeLife product is right for me.",
                  }}
                  variant="ghost"
                >
                  {{ es: "Hablar por WhatsApp →", en: "Chat on WhatsApp →" }}
                </WhatsAppCta>
                <Link
                  className={buttonVariants({
                    className:
                      "border border-white/20 bg-white/12 text-white hover:bg-white/20",
                  })}
                  href="/"
                >
                  {localize({ es: "Conocer VibeLife", en: "Learn about VibeLife" }, language)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
