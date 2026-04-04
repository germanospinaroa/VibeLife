"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";
import { BorderBeam } from "@/components/ui/border-beam";

export function BFitSupportSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No se trata solo de un producto",
                en: "It's not just about a product",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-[#f0f9e8]/60 p-8 sm:p-10">
          <BorderBeam
            colorFrom="#6f9d49"
            colorTo="#456F78"
            duration={12}
            size={80}
            borderWidth={1}
          />
          <div className="relative z-10 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p>
              {localize(
                {
                  es: "Aquí no estás comprando algo y ya.",
                  en: "Here, you're not just buying something.",
                },
                language,
              )}
            </p>

            <p className="font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "Estás entrando a un proceso donde:",
                  en: "You're entering a process where:",
                },
                language,
              )}
            </p>

            <div className="space-y-3 my-4">
              <div className="flex gap-3">
                <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
                <p>{localize({ es: "tienes acompañamiento", en: "you have support" }, language)}</p>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
                <p>{localize({ es: "puedes resolver dudas", en: "you can get answers to questions" }, language)}</p>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
                <p>{localize({ es: "recibes orientación", en: "you receive guidance" }, language)}</p>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 text-[#6f9d49] font-bold">•</span>
                <p>
                  {localize(
                    { es: "no tienes que hacerlo sola", en: "you don't have to do it alone" },
                    language,
                  )}
                </p>
              </div>
            </div>

            <p className="font-semibold text-[#2f4541] mt-6">
              {localize(
                {
                  es: "Porque la diferencia no es solo lo que tomas.",
                  en: "Because the difference isn't just what you take.",
                },
                language,
              )}
            </p>

            <p className="font-semibold text-[#2f4541]">
              👉{" "}
              {localize(
                {
                  es: "Es el entorno que te ayuda a sostenerlo.",
                  en: "It's the environment that helps you sustain it.",
                },
                language,
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
