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

export function BFitHeroSection() {
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
                  es: "No es solo bajar de peso…",
                  en: "It's not just about losing weight…",
                },
                language,
              )}
            </h1>
            <h2 className="text-3xl font-semibold leading-tight text-[#6f9d49] sm:text-4xl mt-2">
              {localize(
                {
                  es: "es volver a sentirte bien contigo",
                  en: "it's about feeling good with yourself again",
                },
                language,
              )}
            </h2>
          </div>

          <p className="mt-8 text-base leading-8 text-[#5c746d] sm:text-lg space-y-4">
            {localize(
              {
                es: "B-Fit no es un producto aislado.\n\nEs un sistema completo que trabaja tu metabolismo, tu energía y tu estilo de vida.\n\nPorque el cambio real no viene de hacer más…\nviene de hacerlo mejor.",
                en: "B-Fit is not an isolated product.\n\nIt's a complete system that works on your metabolism, energy, and lifestyle.\n\nBecause real change doesn't come from doing more…\nit comes from doing it better.",
              },
              language,
            )}
          </p>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
            <Link
              className={buttonVariants({ size: "lg", className: "sm:flex-1" })}
              href="#contact"
            >
              {localize({ es: "Quiero empezar", en: "I want to start" }, language)}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppCta
              className="sm:flex-1"
              message={{
                es: "Hola, quiero saber más sobre B-Fit y cómo puede ayudarme.",
                en: "Hi, I want to know more about B-Fit and how it can help me.",
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
          <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(62,102,112,0.12)]">
            <Image
              alt="B-Fit - VibeLife"
              className="h-full w-full object-contain"
              height={600}
              priority
              src="/images/products/b-fit.png"
              width={400}
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
