"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { buttonVariants } from "@/components/ui/button";
import { localize } from "@/lib/i18n";

export function AccellHeroSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        {/* Left: Text Content */}
        <Reveal delay={0.1} className="flex flex-col gap-6">
          <div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#2f4541] sm:text-5xl">
              {localize(
                {
                  es: "Energía que funciona.",
                  en: "Energy that works.",
                },
                language,
              )}
            </h1>
            <h2 className="text-3xl font-semibold leading-tight text-[#9BC56A] sm:text-4xl mt-2">
              {localize(
                {
                  es: "No solo te activa — te mantiene.",
                  en: "It doesn't just activate you — it keeps you going.",
                },
                language,
              )}
            </h2>
          </div>

          <p className="text-base leading-relaxed text-[#5c746d] sm:text-lg">
            {localize(
              {
                es: "Accell es la bebida funcional que diseñamos para quienes viven en movimiento.",
                en: "Accell is the functional drink we designed for people who live in motion.",
              },
              language,
            )}
          </p>

          <div className="space-y-3 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p>
              {localize(
                {
                  es: "No más cafés de urgencia que te alteran.",
                  en: "No more emergency coffees that leave you jittery.",
                },
                language,
              )}
            </p>
            <p>
              {localize(
                {
                  es: "No más energizantes que te dan pico y caída.",
                  en: "No more energy drinks that spike and crash.",
                },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Accell activa tu energía, enfoca tu mente y apoya tu cuerpo — de forma natural, gradual y sostenida.",
                  en: "Accell activates your energy, focuses your mind, and supports your body — naturally, gradually, and sustainably.",
                },
                language,
              )}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
            <Link
              className={buttonVariants({ size: "lg", className: "sm:flex-1" })}
              href="#contact"
            >
              {localize({ es: "Quiero probar Accell", en: "I want to try Accell" }, language)}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppCta
              className="sm:flex-1"
              message={{
                es: "Hola, quiero saber más sobre Accell y cómo empezar",
                en: "Hi, I want to know more about Accell and how to get started.",
              }}
              size="lg"
            >
              {{
                es: "Hablar por WhatsApp",
                en: "Chat on WhatsApp",
              }}
            </WhatsAppCta>
          </div>
        </Reveal>

        {/* Right: Product Image */}
        <Reveal delay={0.2} preset="scale" className="flex justify-center">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(155,197,106,0.15)] bg-gradient-to-br from-[#f0f9e8]/50 to-[#e8f4d8]/50 p-4">
            <Image
              alt="Accell - VibeLife"
              className="h-full w-full object-cover rounded-lg"
              height={600}
              priority
              src="/images/products/accell.png"
              width={400}
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
