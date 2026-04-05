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
                  es: "No es falta de motivación…",
                  en: "It's not lack of motivation…",
                },
                language,
              )}
            </h1>
            <h2 className="text-3xl font-semibold leading-tight text-[#9BC56A] sm:text-4xl mt-2">
              {localize(
                {
                  es: "es que tu metabolismo no está respondiendo",
                  en: "your metabolism isn't responding",
                },
                language,
              )}
            </h2>
          </div>

          <div className="mt-4 space-y-4 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p>
              {localize(
                {
                  es: "Si sientes que haces esfuerzos y tu cuerpo no cambia, no es que te falte disciplina.",
                  en: "If you feel like you're making effort and your body isn't changing, it's not that you lack discipline.",
                },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Es que tu sistema no está funcionando como debería.",
                  en: "Your system isn't working the way it should.",
                },
                language,
              )}
            </p>
            <p>
              {localize(
                {
                  es: "Accell está diseñado para activar ese proceso desde adentro.",
                  en: "Accell is designed to activate that process from within.",
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
