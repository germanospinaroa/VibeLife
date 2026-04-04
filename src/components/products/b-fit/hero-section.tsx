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
          <h1 className="text-balance text-4xl font-semibold leading-tight text-[#2f4541] sm:text-5xl">
            {localize(
              {
                es: "Sentirte bien en tu cuerpo no debería sentirse como una lucha constante",
                en: "Feeling good in your body shouldn't feel like a constant struggle",
              },
              language,
            )}
          </h1>

          <p className="mt-8 text-base leading-8 text-[#5c746d] sm:text-lg space-y-4">
            {localize(
              {
                es: "Si te cuesta bajar de peso, mantener hábitos o sentirte con energía, no es falta de disciplina.\n\nMuchas veces es porque tu metabolismo, tu energía y tu equilibrio interno no están funcionando correctamente.\n\nY cuando eso pasa, todo se vuelve más difícil de sostener.",
                en: "If it's hard to lose weight, maintain habits or feel energized, it's not a lack of discipline.\n\nOften it's because your metabolism, energy and internal balance aren't functioning correctly.\n\nAnd when that happens, everything becomes harder to sustain.",
              },
              language,
            )}
          </p>

          <ul className="space-y-3 text-sm leading-7 text-[#5c746d] sm:text-base">
            <li className="flex gap-3">
              <span className="shrink-0 font-semibold text-[#6f9d49]">•</span>
              <span>
                {localize(
                  { es: "Apoya tu metabolismo de forma natural", en: "Supports your metabolism naturally" },
                  language,
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-semibold text-[#6f9d49]">•</span>
              <span>
                {localize(
                  { es: "Te ayuda a sentirte más ligera", en: "Helps you feel lighter" },
                  language,
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-semibold text-[#6f9d49]">•</span>
              <span>
                {localize(
                  { es: "Complementa hábitos sostenibles", en: "Complements sustainable habits" },
                  language,
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-semibold text-[#6f9d49]">•</span>
              <span>
                {localize(
                  { es: "Fácil de integrar en tu rutina", en: "Easy to integrate into your routine" },
                  language,
                )}
              </span>
            </li>
          </ul>

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
