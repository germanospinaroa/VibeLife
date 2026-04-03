"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { PageContainer } from "@/components/layout/page-container";
import { localize } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const validationPoints = [
  {
    es: "Ya ayudamos a mujeres que pensaban que nada les funcionaba",
    en: "We have already helped women who thought nothing would work for them",
  },
  {
    es: "Acompañamiento directo — no estás sola en el proceso",
    en: "Direct support — you are not alone in the process",
  },
  {
    es: "Empieza con un paso pequeño, no con una transformación completa",
    en: "Start with one small step, not a complete transformation",
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
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal className="max-w-2xl">
              {/* Shiny badge */}
              <div className="inline-flex items-center rounded-full border border-[#9BC56A]/40 bg-[#f0f9e8] px-4 py-1.5">
                <AnimatedShinyText
                  className="text-xs font-semibold text-[#3e6b30] sm:text-sm"
                  shimmerWidth={180}
                >
                  {localize(
                    {
                      es: "✦ Para la mujer que ya lo intentó todo — y sigue cansada",
                      en: "✦ For the woman who has tried everything — and is still tired",
                    },
                    language,
                  )}
                </AnimatedShinyText>
              </div>

              {/* Headline */}
              <h1 className="mt-6 text-balance text-4xl font-semibold sm:text-5xl lg:text-[3.6rem] lg:leading-[1.1]">
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
                    es: "Productos naturales + acompañamiento real para mujeres que quieren más energía, mejor rutina y dejar de funcionar en piloto automático. Sin fuerza de voluntad de acero. Sin cambiar todo de golpe.",
                    en: "Natural products + real support for women who want more energy, a better routine and to stop running on autopilot. No iron willpower required. No changing everything at once.",
                  },
                  language,
                )}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppCta
                  message={{
                    es: "Hola, quiero saber qué producto es para mí.",
                    en: "Hi, I want to know which product is right for me.",
                  }}
                  size="lg"
                >
                  {{
                    es: "Quiero saber cuál es para mí →",
                    en: "I want to know which one is for me →",
                  }}
                </WhatsAppCta>
                <Link
                  className={buttonVariants({ size: "lg", variant: "ghost" })}
                  href="/#products"
                >
                  {localize({ es: "Ver productos", en: "View products" }, language)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 space-y-3">
                {validationPoints.map((point) => (
                  <div className="flex items-start gap-3" key={point.es}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#6f9d49]" />
                    <span className="text-sm font-semibold text-[#45605a] sm:text-base">
                      {localize(point, language)}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} preset="scale">
              <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(145deg,rgba(255,255,255,0.74),rgba(244,250,239,0.94))] p-4 shadow-[0_22px_48px_rgba(62,102,112,0.14)] sm:p-5">
                <BorderBeam
                  colorFrom="#9BC56A"
                  colorTo="#456F78"
                  duration={8}
                  size={80}
                  borderWidth={1.5}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.88),transparent_42%)]" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-[linear-gradient(165deg,rgba(255,255,255,0.96),rgba(235,245,231,0.9))] px-5 py-6 sm:px-7 sm:py-7">
                  <div aria-hidden="true" className="absolute inset-x-[8%] top-5 h-24 rounded-full bg-white/85 blur-2xl" />
                  <div aria-hidden="true" className="absolute -right-6 top-8 h-24 w-24 rounded-full bg-[#9BC56A]/20 blur-2xl" />
                  <div aria-hidden="true" className="absolute -left-10 bottom-4 h-28 w-28 rounded-full bg-[#456F78]/10 blur-3xl" />

                  {/* Stats strip */}
                  <div className="relative mb-5 grid grid-cols-3 gap-3">
                    {[
                      { n: "100", label: { es: "% Natural", en: "% Natural" } },
                      { n: "4", label: { es: "Productos", en: "Products" } },
                      { n: "1", label: { es: "Persona real", en: "Real person" } },
                    ].map((s) => (
                      <div
                        key={s.n}
                        className={cn(
                          "rounded-2xl bg-white/80 px-3 py-3 text-center shadow-[0_4px_16px_rgba(62,102,112,0.08)]",
                        )}
                      >
                        <p className="text-xl font-bold text-[#2f4c53] sm:text-2xl">
                          {s.n}
                          <span className="text-[#6f9d49]">+</span>
                        </p>
                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#6e847d]">
                          {localize(s.label, language)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative flex min-h-[200px] items-center justify-center sm:min-h-[240px]">
                    <div className="relative w-full max-w-[16rem] sm:max-w-[19rem]">
                      <div aria-hidden="true" className="absolute inset-[-10%] rounded-full bg-white/82 blur-3xl" />
                      <Image
                        alt="VibeLife"
                        className="relative mx-auto h-auto w-full drop-shadow-[0_22px_40px_rgba(62,102,112,0.14)]"
                        height={340}
                        priority
                        src="/images/brand/vibelife-logo-transparent.png"
                        width={340}
                      />
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
