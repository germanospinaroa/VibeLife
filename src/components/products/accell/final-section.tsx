"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { buttonVariants } from "@/components/ui/button";
import { localize } from "@/lib/i18n";

export function AccellFinalSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold leading-tight text-[#2f4541] sm:text-4xl">
              {localize(
                {
                  es: "Tu cuerpo puede cambiar… si trabajas con él, no contra él",
                  en: "Your body can change… if you work with it, not against it",
                },
                language,
              )}
            </h2>

            <div className="space-y-4 text-base leading-8 text-[#5c746d] sm:text-lg">
              <p>
                {localize(
                  { es: "No necesitas hacer más.", en: "You don't need to do more." },
                  language,
                )}
              </p>
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "Necesitas que tu cuerpo funcione mejor.", en: "You need your body to work better." },
                  language,
                )}
              </p>
              <p>
                {localize(
                  { es: "Y ese proceso… empieza aquí.", en: "And that process… starts here." },
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
              {localize({ es: "Quiero empezar con Accell", en: "I want to start with Accell" }, language)}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppCta
              className="sm:flex-1"
              message={{
                es: "Hola, quiero empezar con Accell y saber cómo usarlo correctamente",
                en: "Hi, I want to start with Accell and know how to use it correctly.",
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
