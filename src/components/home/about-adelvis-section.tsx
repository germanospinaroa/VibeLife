"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { localize } from "@/lib/i18n";

export function AboutAdelvisSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <Reveal>
        <SectionHeading
          align="center"
          title={localize({ es: "Sobre mí", en: "About me" }, language)}
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        {/* Imagen - Left en desktop, Top en mobile */}
        <Reveal delay={0.1} preset="scale" className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(62,102,112,0.12)]">
            <Image
              alt="Adelvis - VibeLife"
              className="h-full w-full object-cover"
              height={600}
              priority
              src="/images/brand/adelvis.png"
              width={400}
            />
          </div>
        </Reveal>

        {/* Contenido - Right en desktop, Bottom en mobile */}
        <Reveal delay={0.2} className="order-1 lg:order-2">
          <div className="space-y-6">
            {/* Headline */}
            <h3 className="text-balance text-2xl font-semibold leading-tight text-[#2f4541] sm:text-3xl">
              {localize(
                {
                  es: "No tienes que seguir sintiéndote cansada, desconectada o en piloto automático.",
                  en: "You don't have to keep feeling tired, disconnected or on autopilot.",
                },
                language,
              )}
            </h3>

            {/* Texto principal */}
            <div className="space-y-4 text-base leading-8 text-[#5c746d] sm:text-lg">
              <p>
                {localize(
                  {
                    es: "Durante mucho tiempo, como muchas mujeres, viví en el ritmo de cumplir, resolver y seguir… sin detenerme a escuchar lo que mi cuerpo y mi vida realmente necesitaban.",
                    en: "For a long time, like many women, I lived in the rhythm of fulfilling, solving and continuing… without stopping to listen to what my body and life really needed.",
                  },
                  language,
                )}
              </p>

              <p>
                {localize(
                  {
                    es: "Y entendí algo importante: no se trata de hacer más, sino de empezar a cuidarte mejor.",
                    en: "And I understood something important: it is not about doing more, but about starting to take care of yourself better.",
                  },
                  language,
                )}
              </p>

              <p>
                {localize(
                  {
                    es: "Hoy acompaño a mujeres que están listas para volver a sentirse bien, recuperar su energía y construir una vida más consciente, paso a paso, sin presión y sin fórmulas imposibles.",
                    en: "Today I support women who are ready to feel good again, recover their energy and build a more conscious life, step by step, without pressure and without impossible formulas.",
                  },
                  language,
                )}
              </p>
            </div>

            {/* Bloque de conexión */}
            <div className="rounded-xl bg-[#f0f9e8] p-6">
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "Si sientes que:", en: "If you feel that:" },
                  language,
                )}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[#5c746d] sm:text-base">
                <li>
                  • {localize(
                    { es: "te falta energía constantemente", en: "you constantly lack energy" },
                    language,
                  )}
                </li>
                <li>
                  • {localize(
                    { es: "te cuesta mantener hábitos", en: "it is hard for you to maintain habits" },
                    language,
                  )}
                </li>
                <li>
                  • {localize(
                    { es: "sientes que te has dejado en último lugar", en: "you feel like you have put yourself last" },
                    language,
                  )}
                </li>
              </ul>
              <p className="mt-4 font-semibold text-[#2f4541]">
                {localize(
                  { es: "no estás sola… y no tienes que hacerlo sola.", en: "you are not alone… and you don't have to do it alone." },
                  language,
                )}
              </p>
            </div>

            {/* Cierre persuasivo */}
            <div className="rounded-xl bg-white/80 p-6">
              <p className="font-semibold text-[#2f4541]">
                {localize(
                  { es: "Este puede ser el momento en el que decides empezar diferente.", en: "This could be the moment you decide to start differently." },
                  language,
                )}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5c746d] sm:text-base">
                {localize(
                  {
                    es: "No perfecto. No radical. Pero sí consciente.",
                    en: "Not perfect. Not radical. But conscious.",
                  },
                  language,
                )}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Link
                className={buttonVariants({ size: "lg", className: "sm:flex-1" })}
                href="/adelvis"
              >
                {localize({ es: "Quiero empezar", en: "I want to start" }, language)}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <WhatsAppCta
                className="sm:flex-1"
                message={{
                  es: "Hola Adelvis, quiero conocer más sobre cómo puedo empezar a sentirme mejor.",
                  en: "Hi Adelvis, I want to know more about how I can start feeling better.",
                }}
                size="lg"
              >
                {{
                  es: "Hablar por WhatsApp",
                  en: "Chat on WhatsApp",
                }}
              </WhatsAppCta>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
