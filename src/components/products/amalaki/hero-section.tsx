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

export function AmalakiHeroSection() {
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
                  es: "No es que estés haciendo algo mal…",
                  en: "It's not that you're doing something wrong…",
                },
                language,
              )}
            </h1>
            <h2 className="text-3xl font-semibold leading-tight text-[#9BC56A] sm:text-4xl mt-2">
              {localize(
                {
                  es: "es que tu cuerpo está saturado",
                  en: "your body is overwhelmed",
                },
                language,
              )}
            </h2>
          </div>

          <div className="mt-4 space-y-4 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p>
              {localize(
                {
                  es: "Inflamación, cansancio, digestión lenta, falta de energía… No son problemas aislados.",
                  en: "Inflammation, fatigue, slow digestion, lack of energy… These aren't isolated problems.",
                },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Son señales de que tu cuerpo no está en equilibrio.",
                  en: "They're signals that your body is out of balance.",
                },
                language,
              )}
            </p>
            <p>
              {localize(
                {
                  es: "Amalaki es el punto donde todo empieza a corregirse.",
                  en: "Amalaki is where everything starts to correct itself.",
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
              {localize({ es: "Quiero empezar con Amalaki", en: "I want to start with Amalaki" }, language)}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppCta
              className="sm:flex-1"
              message={{
                es: "Hola, quiero empezar con Amalaki y entender cómo usarlo correctamente",
                en: "Hi, I want to start with Amalaki and understand how to use it correctly.",
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
              alt="Amalaki - VibeLife"
              className="h-full w-full object-cover rounded-lg"
              height={600}
              priority
              src="/images/products/amalaki.png"
              width={400}
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
