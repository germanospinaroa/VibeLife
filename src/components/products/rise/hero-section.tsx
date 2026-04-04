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

export function RiseHeroSection() {
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
                  es: "No necesitas más café…",
                  en: "You don't need more coffee…",
                },
                language,
              )}
            </h1>
            <h2 className="text-3xl font-semibold leading-tight text-[#9BC56A] sm:text-4xl mt-2">
              {localize(
                {
                  es: "necesitas sentirte bien de verdad",
                  en: "you need to feel truly good",
                },
                language,
              )}
            </h2>
          </div>

          <p className="mt-8 text-base leading-8 text-[#5c746d] sm:text-lg space-y-4">
            {localize(
              {
                es: "Si dependes del café para funcionar, pero igual te sientes cansada, ansiosa o saturada…\nel problema no es tu energía.\nEs cómo la estás generando.",
                en: "If you depend on coffee to function, but still feel tired, anxious, or overwhelmed…\nthe problem isn't your energy.\nIt's how you're creating it.",
              },
              language,
            )}
          </p>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
            <Link
              className={buttonVariants({ size: "lg", className: "sm:flex-1" })}
              href="#contact"
            >
              {localize({ es: "Quiero probar RISE", en: "I want to try RISE" }, language)}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppCta
              className="sm:flex-1"
              message={{
                es: "Hola, quiero saber más sobre RISE.",
                en: "Hi, I want to know more about RISE.",
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
          <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(155,197,106,0.15)]">
            <Image
              alt="RISE - VibeLife"
              className="h-full w-full object-contain"
              height={600}
              priority
              src="/images/products/rise-portrait.png"
              width={400}
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
