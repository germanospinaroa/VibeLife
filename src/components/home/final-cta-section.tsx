"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

export function FinalCtaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <Reveal preset="scale">
        <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#2f4c53_0%,#456F78_45%,#6a9680_100%)] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14">
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold text-white sm:text-5xl">
            {localize(
              {
                es: "Empieza hoy a sentirte mejor",
                en: "Start feeling better today",
              },
              language,
            )}
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-white/82 sm:text-lg">
            {localize(
              {
                es: "No necesitas cambiar todo de golpe. A veces, el primer paso es simplemente elegir mejor.",
                en: "You do not need to change everything at once. Sometimes the first step is simply choosing better.",
              },
              language,
            )}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              className={buttonVariants({ className: "bg-white text-[#2f4c53] hover:bg-stone" })}
              href="/#products"
            >
              {localize(
                {
                  es: "Ver productos",
                  en: "View products",
                },
                language,
              )}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppCta
              className="border border-white/16 bg-white/10 text-white hover:bg-white/18"
              message={{
                es: "Hola, quiero empezar hoy y me gustaría saber qué opción puede ser mejor para mí.",
                en: "Hi, I want to get started today and would like to know which option may be best for me.",
              }}
              variant="ghost"
            >
              {{
                es: "Hablar por WhatsApp",
                en: "Chat on WhatsApp",
              }}
            </WhatsAppCta>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
