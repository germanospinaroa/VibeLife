"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { localize } from "@/lib/i18n";

export function IceHeroSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        {/* Left: Text Content */}
        <Reveal delay={0.1} className="flex flex-col gap-6">
          <div>
            <Badge className="mb-4 bg-[#D4E4F4] text-[#1B3A6B] hover:bg-[#D4E4F4]">
              {localize(
                { es: "BIENESTAR DESDE ADENTRO", en: "WELLNESS FROM WITHIN" },
                language,
              )}
            </Badge>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#1B3A6B] sm:text-5xl">
              {localize(
                {
                  es: "No es la edad.",
                  en: "It's not your age.",
                },
                language,
              )}
            </h1>
            <h2 className="text-3xl font-semibold leading-tight text-[#2E5F9A] sm:text-4xl mt-2">
              {localize(
                {
                  es: "Es lo que tu cuerpo viene acumulando.",
                  en: "It's what your body has been accumulating.",
                },
                language,
              )}
            </h2>
          </div>

          <p className="text-base leading-8 text-[#5c746d] sm:text-lg">
            {localize(
              {
                es: "UltraICE es una forma simple de ayudar a tu cuerpo a volver a sentirse ligero, con más energía y menos carga — con Resveratrol y Cúrcuma para que no vivas en desgaste constante.",
                en: "UltraICE is a simple way to help your body feel lighter again, with more energy and less burden — with Resveratrol and Turmeric so you don't live in constant wear.",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-[#D4E4F4]/60 px-5 py-3 text-sm font-medium text-[#1B3A6B]">
            UltraICE™ · {localize({ es: "Soporte Homeostático", en: "Homeostatic Support" }, language)} · 60 mL · {localize({ es: "30 porciones", en: "30 servings" }, language)}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <WhatsAppCta
              className="sm:flex-1"
              message={{
                es: "Hola, quiero saber si UltraICE es el producto correcto para mí.",
                en: "Hi, I want to know if UltraICE is the right product for me.",
              }}
              size="lg"
            >
              {{
                es: "Quiero saber si es para mí →",
                en: "Find out if it's for me →",
              }}
            </WhatsAppCta>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg", className: "sm:flex-1" })}
              href="#como-usar"
            >
              {localize({ es: "¿Cómo se usa?", en: "How is it used?" }, language)}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        {/* Right: Product Image */}
        <Reveal delay={0.2} preset="scale" className="flex justify-center">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#D4E4F4]/70 to-[#2E5F9A]/20 p-8 shadow-[0_8px_32px_rgba(27,58,107,0.15)]">
            <Image
              alt="UltraICE - VibeLife"
              className="h-full w-full object-contain mix-blend-multiply"
              height={600}
              priority
              src="/images/products/ice.png"
              width={400}
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
