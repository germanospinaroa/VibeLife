"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { SectionShell } from "@/components/shared/section-shell";
import { buttonVariants } from "@/components/ui/button";
import { localize } from "@/lib/i18n";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";

export function IceFinalSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <Reveal preset="scale">
        <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#1B3A6B_0%,#2E5F9A_50%,#1B3A6B_100%)] px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-14">
          <BorderBeam
            colorFrom="#D4E4F4"
            colorTo="rgba(255,255,255,0.5)"
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

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              {localize(
                { es: "¿No sabes si es para ti?", en: "Not sure if it's for you?" },
                language,
              )}
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold text-white sm:text-5xl">
              {localize(
                {
                  es: "Escríbeme.",
                  en: "Write to me.",
                },
                language,
              )}
            </h2>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-white/80 sm:text-lg">
              {localize(
                {
                  es: "Cuéntame cómo te has estado sintiendo y te digo si este puede ser un buen punto de partida para ti.",
                  en: "Tell me how you've been feeling and I'll tell you if this could be a good starting point for you.",
                },
                language,
              )}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppCta
                className="bg-white text-[#1B3A6B] hover:bg-[#D4E4F4]"
                message={{
                  es: "Hola, quiero contarte cómo me he estado sintiendo y saber si UltraICE puede ser para mí.",
                  en: "Hi, I want to tell you how I've been feeling and find out if UltraICE could be right for me.",
                }}
                variant="light"
              >
                {{ es: "Hablar por WhatsApp →", en: "Chat on WhatsApp →" }}
              </WhatsAppCta>
              <Link
                className={buttonVariants({
                  variant: "ghost",
                  className: "border border-white/20 bg-white/10 text-white hover:bg-white/20",
                })}
                href="/#products"
              >
                {localize(
                  { es: "Ver todos los productos", en: "See all products" },
                  language,
                )}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
