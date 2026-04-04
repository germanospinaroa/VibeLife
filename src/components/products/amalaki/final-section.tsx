"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { buttonVariants } from "@/components/ui/button";
import { localize } from "@/lib/i18n";

export function AmalakiFinalSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal className="space-y-8">
          <div>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-[#2f4541] sm:text-4xl mb-6">
              {localize(
                {
                  es: "Si tu base no está bien… nada lo estará",
                  en: "If your foundation isn't solid… nothing else will be",
                },
                language,
              )}
            </h2>

            <p className="text-base leading-8 text-[#5c746d] sm:text-lg space-y-4">
              {localize(
                {
                  es: "Puedes intentar muchas cosas.\n\nPero si tu cuerpo no está equilibrado…\nnada se sostiene.\n\nAmalaki no es la solución completa.\n\n👉 Es el inicio correcto",
                  en: "You can try many things.\n\nBut if your body isn't balanced…\nnothing holds.\n\nAmalaki isn't the complete solution.\n\n👉 It's the right beginning",
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
                es: "Hola, quiero saber más sobre Amalaki.",
                en: "Hi, I want to know more about Amalaki.",
              }}
              size="lg"
            >
              {
                {
                  es: "Hablar por WhatsApp",
                  en: "Chat on WhatsApp",
                }
              }
            </WhatsAppCta>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
