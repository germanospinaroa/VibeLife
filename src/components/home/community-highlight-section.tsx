"use client";

import Link from "next/link";
import { ArrowRight, MessageCircleMore, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

const communityHighlights = [
  {
    es: "Orientación personalizada — te decimos cuál producto tiene más sentido para ti",
    en: "Personalized guidance — we tell you which product makes the most sense for you",
  },
  {
    es: "Seguimiento real — resolvemos tus dudas mientras usas el producto, no solo al comprarlo",
    en: "Real follow-up — we answer your questions while you use the product, not just when you buy it",
  },
  {
    es: "Comunidad de mujeres — un espacio donde otras están en el mismo camino",
    en: "Community of women — a space where others are on the same journey",
  },
];

export function CommunityHighlightSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <Reveal>
          <SectionHeading
            title={localize(
              {
                es: "No compras un producto y quedas sola",
                en: "You do not buy a product and get left alone",
              },
              language,
            )}
            description={localize(
              {
                es: "En VibeLife hay una persona real al otro lado. Alguien que te orienta, responde tus dudas y te acompaña en el proceso — no un chatbot, no un catálogo. Porque el producto ayuda. Pero lo que sostiene el proceso es saber que no estás sola.",
                en: "At VibeLife there is a real person on the other side. Someone who guides you, answers your questions and supports you through the process — not a chatbot, not a catalog. Because the product helps. But what sustains the process is knowing you are not alone.",
              },
              language,
            )}
          />
          <Link
            className={buttonVariants({ className: "mt-8", variant: "secondary" })}
            href="/community"
          >
            {localize(
              {
                es: "Ver comunidad",
                en: "Visit community",
              },
              language,
            )}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.1} preset="scale">
          <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <Card className="bg-[linear-gradient(160deg,rgba(69,111,120,0.16),rgba(255,255,255,0.96))]">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#35525b] text-white">
                <Users className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-3xl font-semibold">
                {localize(
                  {
                    es: "Una persona real, no un catálogo",
                    en: "A real person, not a catalog",
                  },
                  language,
                )}
              </h3>
              <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
                {localize(
                  {
                    es: "Te acompañamos desde el primer mensaje hasta que el proceso se sostiene solo.",
                    en: "We walk with you from the first message until the process holds itself.",
                  },
                  language,
                )}
              </p>
            </Card>

            <div className="grid gap-4">
              {communityHighlights.map((item) => (
                <Card className="bg-white/84 px-5 py-5" key={item.es}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef4f1] text-[#456F78]">
                      <MessageCircleMore className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-[#35525b] sm:text-base">
                      {localize(item, language)}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
