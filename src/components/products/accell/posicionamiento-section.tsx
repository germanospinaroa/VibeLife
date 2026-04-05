"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellPosicionamientoSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Product image mid-page */}
        <Reveal className="flex justify-center">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(155,197,106,0.12)] bg-gradient-to-br from-[#f0f9e8]/60 to-[#e8f4d8]/60 p-6 max-w-xs">
            <Image
              alt="Accell - VibeLife"
              className="h-full w-full object-cover rounded-lg"
              height={480}
              src="/images/products/accell.png"
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
                  es: "No es una solución aislada… es parte del proceso",
                  en: "It's not an isolated solution… it's part of the process",
                },
                language,
              )}
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-10 text-base leading-8 text-[#5c746d] sm:text-lg">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-[#2f4541]">
                {localize({ es: "Accell funciona mejor cuando:", en: "Accell works better when:" }, language)}
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  { es: "tu cuerpo está equilibrado (Amalaki)", en: "your body is balanced (Amalaki)" },
                  { es: "tu energía está estable (Rise)", en: "your energy is stable (Rise)" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                    <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-semibold text-[#2f4541]">
                👉 {localize({ es: "Por eso el proceso correcto es:", en: "That's why the right process is:" }, language)}
              </p>
              <ol className="space-y-3 pl-1">
                {[
                  { es: "Equilibras → Amalaki", en: "Balance → Amalaki" },
                  { es: "Estabilizas → Rise", en: "Stabilize → Rise" },
                  { es: "Activas → Accell", en: "Activate → Accell" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 font-bold text-[#9BC56A]">{i + 1}.</span>
                    <span className="font-semibold text-[#2f4541]">{localize(item, language)}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
              <p className="text-lg font-semibold text-[#2f4541]">
                👉 {localize({ es: "Así el cuerpo responde mejor", en: "That's how the body responds better" }, language)}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
