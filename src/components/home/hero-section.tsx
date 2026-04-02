"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircleMore } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { PageContainer } from "@/components/layout/page-container";
import { localize } from "@/lib/i18n";

const supportPoints = [
  {
    es: "Más energía en tu día",
    en: "More energy in your day",
  },
  {
    es: "Mejores hábitos",
    en: "Better habits",
  },
  {
    es: "Bienestar más consciente",
    en: "More conscious wellness",
  },
];

const heroValueCards = [
  {
    title: {
      es: "Opciones para tu bienestar diario",
      en: "Options for your daily wellness",
    },
    description: {
      es: "Descubre opciones diseñadas para tu rutina.",
      en: "Discover options designed for your routine.",
    },
    icon: CheckCircle2,
  },
  {
    title: {
      es: "Atención directa por WhatsApp",
      en: "Direct support through WhatsApp",
    },
    description: {
      es: "Resolvemos tus dudas de forma rápida.",
      en: "We answer your questions quickly.",
    },
    icon: MessageCircleMore,
  },
  {
    title: {
      es: "Empieza fácilmente",
      en: "Start easily",
    },
    description: {
      es: "Te guiamos paso a paso.",
      en: "We guide you step by step.",
    },
    icon: ArrowRight,
  },
];

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden px-3 pb-10 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
      <div aria-hidden="true" className="hero-glow absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-20 mx-auto h-[34rem] max-w-7xl rounded-[3rem] bg-white/45 blur-3xl"
      />

      <PageContainer className="relative z-10 max-w-[84rem] px-0">
        <div className="surface-panel rounded-[36px] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <Reveal className="max-w-2xl">
              <Badge>
                {localize(
                  {
                    es: "Bienestar natural y crecimiento personal",
                    en: "Natural wellness and personal growth",
                  },
                  language,
                )}
              </Badge>
              <h1 className="mt-6 text-balance text-4xl font-semibold sm:text-5xl lg:text-7xl">
                {localize(
                  {
                    es: "Bienestar natural para verte bien, sentirte mejor y vivir con más energía cada día",
                    en: "Natural wellness to look good, feel better and live with more energy every day",
                  },
                  language,
                )}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
                {localize(
                  {
                    es: "Descubre productos diseñados para acompañar tu bienestar, ayudarte a construir hábitos saludables y mejorar tu estilo de vida de forma natural.",
                    en: "Discover products designed to support your wellness, help you build healthier habits and improve your lifestyle naturally.",
                  },
                  language,
                )}
              </p>
              <p className="mt-4 text-sm font-semibold text-[#35525b] sm:text-base">
                {localize(
                  {
                    es: "Productos seleccionados y acompañamiento para mejorar tu bienestar",
                    en: "Selected products and guidance to improve your wellness",
                  },
                  language,
                )}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  className={buttonVariants({ size: "lg" })}
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
                <WhatsAppCta
                  message={{
                    es: "Hola, quiero recibir orientación sobre cuál opción puede ayudarme mejor.",
                    en: "Hi, I would like guidance on which option may help me best.",
                  }}
                  size="lg"
                  variant="ghost"
                >
                  {{
                    es: "Hablar por WhatsApp",
                    en: "Chat on WhatsApp",
                  }}
                </WhatsAppCta>
              </div>

              <p className="mt-6 text-sm font-semibold text-[#5c746d]">
                {localize(
                  {
                    es: "Opciones disponibles para energía, equilibrio y bienestar diario",
                    en: "Available options for energy, balance and daily wellness",
                  },
                  language,
                )}
              </p>

              <div className="mt-8 space-y-3">
                {supportPoints.map((point) => (
                  <div className="flex items-center gap-3" key={point.es}>
                    <CheckCircle2 className="h-5 w-5 text-[#6f9d49]" />
                    <span className="text-sm font-semibold text-[#45605a] sm:text-base">
                      {localize(point, language)}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} preset="scale">
              <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(145deg,rgba(255,255,255,0.74),rgba(244,250,239,0.94))] p-4 shadow-[0_22px_48px_rgba(62,102,112,0.12)] sm:p-5">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.88),transparent_42%)]" />
                <div className="relative grid gap-3.5">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-[linear-gradient(165deg,rgba(255,255,255,0.96),rgba(235,245,231,0.9))] px-5 py-6 sm:px-7 sm:py-7">
                    <div aria-hidden="true" className="absolute inset-x-[8%] top-5 h-24 rounded-full bg-white/85 blur-2xl" />
                    <div aria-hidden="true" className="absolute -right-6 top-8 h-24 w-24 rounded-full bg-[#9BC56A]/20 blur-2xl" />
                    <div aria-hidden="true" className="absolute -left-10 bottom-4 h-28 w-28 rounded-full bg-[#456F78]/10 blur-3xl" />
                    <div className="relative flex min-h-[240px] items-center justify-center sm:min-h-[280px]">
                      <div className="relative w-full max-w-[18rem] sm:max-w-[21rem]">
                        <div aria-hidden="true" className="absolute inset-[-10%] rounded-full bg-white/82 blur-3xl" />
                        <Image
                          alt="VibeLife logo"
                          className="relative mx-auto h-auto w-full drop-shadow-[0_22px_40px_rgba(62,102,112,0.14)]"
                          height={360}
                          priority
                          src="/images/brand/vibelife-logo-transparent.png"
                          width={360}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                  {heroValueCards.map((card, index) => {
                    const Icon = card.icon;

                    return (
                      <Card
                        className={cn(
                          "bg-white/88 p-5 hover:-translate-y-1",
                          index === 2 && "sm:col-span-2",
                        )}
                        key={card.title.es}
                      >
                        <div className="flex items-start gap-4">
                          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eef7e6] text-[#6f9d49]">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="text-lg font-semibold text-[#2f4541]">
                              {localize(card.title, language)}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-muted">
                              {localize(card.description, language)}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
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
