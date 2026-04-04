"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

export function FinalCtaSection() {
  const { language } = useLanguage();

  return (
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

          <div className="relative z-10">
            <h2 className="max-w-3xl text-balance text-4xl font-semibold text-white sm:text-5xl">
              {localize(
                {
                  es: "No necesitas hacerlo perfecto\nSolo necesitas empezar",
                  en: "You don't need to do it perfectly\nYou just need to start",
                },
                language,
              )}
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-white/82 sm:text-lg">
              {localize(
                {
                  es: "El momento perfecto no llega.\n\nPero el primer paso sí puede ser hoy.",
                  en: "The perfect moment never comes.\n\nBut the first step can be today.",
                },
                language,
              )}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppCta
                className="bg-white text-[#2f4c53] hover:bg-[#f0f9e8]"
                message={{
                  es: "Hola, quiero saber qué producto de VibeLife es para mí. Cuéntame por dónde empezar.",
                  en: "Hi, I want to know which VibeLife product is right for me. Tell me where to start.",
                }}
                variant="ghost"
              >
                {{ es: "Hablar por WhatsApp →", en: "Chat on WhatsApp →" }}
              </WhatsAppCta>
              <Link
                className={buttonVariants({ className: "border border-white/20 bg-white/12 text-white hover:bg-white/20" })}
                href="/#products"
              >
                {localize({ es: "Ver opciones", en: "View options" }, language)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
