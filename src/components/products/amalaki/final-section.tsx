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
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold leading-tight text-[#2f4541] sm:text-4xl">
              {localize(
                {
                  es: "Si tu base no está bien… nada lo estará",
                  en: "If your foundation isn't solid… nothing else will be",
                },
                language,
              )}
            </h2>

            <div className="space-y-4 text-base leading-8 text-[#5c746d] sm:text-lg">
              <p>
                {localize(
                  { es: "Puedes intentar muchas cosas.", en: "You can try many things." },
                  language,
                )}
              </p>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "Pero si tu cuerpo no está equilibrado… nada será suficiente.", en: "But if your body isn't balanced… nothing will be enough." },
                  language,
                )}
              </p>
              <p>
                {localize(
                  { es: "Amalaki es donde todo empieza a cambiar.", en: "Amalaki is where everything starts to change." },
                  language,
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
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
      </div>
    </SectionShell>
  );
}
