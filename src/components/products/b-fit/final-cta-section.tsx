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

export function BFitFinalCtaSection() {
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
                  es: "Puedes seguir igual… o empezar diferente hoy",
                  en: "You can stay the same… or start differently today",
                },
                language,
              )}
            </h2>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-white/82 sm:text-lg">
              {localize(
                {
                  es: "No necesitas hacerlo perfecto.\nSolo empezar.",
                  en: "You don't need to do it perfectly.\nJust start.",
                },
                language,
              )}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                className={buttonVariants({ className: "bg-white text-[#2f4c53] hover:bg-[#f0f9e8]" })}
                href="#contact"
              >
                {localize({ es: "Quiero empezar", en: "I want to start" }, language)}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <WhatsAppCta
                className="border border-white/20 bg-white/12 text-white hover:bg-white/20"
                message={{
                  es: "Hola, quiero empezar con B-Fit. ¿Por dónde comienzo?",
                  en: "Hi, I want to start with B-Fit. Where do I begin?",
                }}
                variant="ghost"
              >
                {{ es: "Hablar por WhatsApp →", en: "Chat on WhatsApp →" }}
              </WhatsAppCta>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
