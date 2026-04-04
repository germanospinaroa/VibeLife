"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { PageContainer } from "@/components/layout/page-container";
import { localize } from "@/lib/i18n";

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
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal className="max-w-2xl">
              {/* Headline */}
              <h1 className="text-balance text-4xl font-semibold sm:text-5xl lg:text-[3.6rem] lg:leading-[1.1]">
                {localize({ es: "Esto no es otro plan.", en: "This is not another plan." }, language)}{" "}
                <br className="hidden sm:block" />
                {localize({ es: "Es ", en: "It is about " }, language)}
                <AnimatedGradientText
                  colorFrom="#456f78"
                  colorTo="#7eaf56"
                  speed={0.8}
                >
                  {localize(
                    { es: "volver a sentirte tú.", en: "feeling like yourself again." },
                    language,
                  )}
                </AnimatedGradientText>
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
                {localize(
                  {
                    es: "Un espacio creado para mujeres que están cansadas de intentar, empezar y no sostener… y que solo quieren volver a sentirse bien sin complicarse más la vida.",
                    en: "A space created for women who are tired of trying, starting and not sustaining… and who just want to feel good again without overcomplicating their lives.",
                  },
                  language,
                )}
              </p>

              <p className="mt-4 max-w-xl text-pretty text-base font-semibold leading-8 text-[#3e6b30] sm:text-lg">
                {localize(
                  {
                    es: "No tienes que hacerlo sola.",
                    en: "You don't have to do it alone.",
                  },
                  language,
                )}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppCta
                  message={{
                    es: "Hola, quiero hablar contigo sobre VibeLife.",
                    en: "Hi, I want to talk with you about VibeLife.",
                  }}
                  size="lg"
                >
                  {{
                    es: "Hablar por WhatsApp →",
                    en: "Chat on WhatsApp →",
                  }}
                </WhatsAppCta>
                <Link
                  className={buttonVariants({ size: "lg", variant: "ghost" })}
                  href="/#products"
                >
                  {localize({ es: "Ver cómo empezar", en: "How to start" }, language)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08} preset="scale">
              <div className="relative overflow-hidden rounded-[32px]">
                <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[400px]">
                  <Image
                    alt="Valentina - VibeLife"
                    className="h-full w-full rounded-[32px] object-cover shadow-[0_22px_48px_rgba(62,102,112,0.14)]"
                    height={500}
                    priority
                    src="/images/brand/valentina-avatar.jpg"
                    width={380}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
