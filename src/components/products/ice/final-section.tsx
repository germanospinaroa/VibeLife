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
            <h2 className="max-w-3xl text-balance text-4xl font-semibold text-white sm:text-5xl">
              {localize(
                {
                  es: "¿Listo para probarlo?",
                  en: "Ready to try it?",
                },
                language,
              )}
            </h2>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-white/80 sm:text-lg">
              {localize(
                {
                  es: "No necesitas tener todo claro. Escríbenos y te contamos si UltraICE es el correcto para ti — en 5 minutos, sin presión.",
                  en: "You don't need to have everything figured out. Write to us and we'll tell you if UltraICE is right for you — in 5 minutes, no pressure.",
                },
                language,
              )}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppCta
                className="bg-white text-[#1B3A6B] hover:bg-[#D4E4F4]"
                message={{
                  es: "Hola, quiero saber más sobre UltraICE y si es el producto correcto para mí.",
                  en: "Hi, I want to know more about UltraICE and if it's the right product for me.",
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
