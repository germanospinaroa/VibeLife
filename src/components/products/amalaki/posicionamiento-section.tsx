"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiPosicionamientoSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Product image mid-page */}
        <Reveal className="flex justify-center">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(155,197,106,0.12)] bg-gradient-to-br from-[#f0f9e8]/60 to-[#e8f4d8]/60 p-6 max-w-xs">
            <Image
              alt="Amalaki - VibeLife"
              className="h-full w-full object-cover rounded-lg"
              height={480}
              src="/images/products/amalaki.png"
              width={320}
            />
          </div>
        </Reveal>

        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              title={localize(
                {
                  es: "Esto no es el final… es el inicio",
                  en: "This isn't the end… it's the beginning",
                },
                language,
              )}
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-10 text-base leading-8 text-[#5c746d] sm:text-lg">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-[#2f4541]">
                {localize({ es: "Muchas personas intentan:", en: "Many people try to:" }, language)}
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  { es: "mejorar energía", en: "improve energy" },
                  { es: "bajar de peso", en: "lose weight" },
                  { es: "cambiar hábitos", en: "change habits" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-[#d97706] font-bold">•</span>
                    <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#5c746d]">
                {localize({ es: "Pero empiezan por el lugar equivocado.", en: "But they start in the wrong place." }, language)}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-semibold text-[#2f4541]">
                {localize({ es: "Amalaki es la base que permite que:", en: "Amalaki is the foundation that allows:" }, language)}
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  { es: "Rise funcione mejor", en: "Rise to work better" },
                  { es: "B-Fit tenga mayor impacto", en: "B-Fit to have greater impact" },
                  { es: "tu cuerpo responda realmente", en: "your body to truly respond" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                    <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
              <p className="text-lg font-semibold text-[#2f4541]">
                👉 {localize({ es: "Sin base… nada se sostiene", en: "Without foundation… nothing holds" }, language)}
              </p>
              <p className="text-lg font-semibold text-[#2f4541]">
                👉 {localize({ es: "Con base… todo mejora", en: "With foundation… everything improves" }, language)}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
