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
    es: "Guía para mejorar tus hábitos",
    en: "Guidance to improve your habits",
  },
  {
    es: "Consejos aplicables en tu día a día",
    en: "Tips you can apply in your daily life",
  },
  {
    es: "Acompañamiento en tu proceso",
    en: "Support throughout your process",
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
                es: "Acompañamiento para mejorar tu estilo de vida",
                en: "Support to improve your lifestyle",
              },
              language,
            )}
            description={localize(
              {
                es: "No solo encuentras productos, también guía, contenido y acompañamiento para ayudarte a construir hábitos más saludables.",
                en: "You will not only find products, but also guidance, content and support to help you build healthier habits.",
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
                    es: "Acompañamiento para sostener mejores hábitos",
                    en: "Support to sustain better habits",
                  },
                  language,
                )}
              </h3>
              <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
                {localize(
                  {
                    es: "Un espacio para seguir aprendiendo, resolver dudas y mantener hábitos con más constancia.",
                    en: "A space to keep learning, resolve questions and sustain habits more consistently.",
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
