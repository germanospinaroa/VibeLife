"use client";

import Link from "next/link";
import { ArrowRight, Compass, Heart, Leaf, Sparkles, SunMedium } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

const values = [
  { title: { es: "Bienestar intencional", en: "Intentional wellbeing" }, icon: Leaf },
  { title: { es: "Crecimiento con propósito", en: "Growth with purpose" }, icon: SunMedium },
  { title: { es: "Energía positiva", en: "Positive energy" }, icon: Sparkles },
  { title: { es: "Equilibrio diario", en: "Daily balance" }, icon: Heart },
  { title: { es: "Estilo de vida natural", en: "Natural lifestyle alignment" }, icon: Compass },
];

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <>
      <SectionShell className="pt-10" tone="soft">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <Badge>
              {localize(
                {
                  es: "Sobre VibeLife",
                  en: "About VibeLife",
                },
                language,
              )}
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl">
              {localize(
                {
                  es: "Una experiencia enfocada en bienestar natural y hábitos más conscientes",
                  en: "An experience focused on natural wellness and more conscious habits",
                },
                language,
              )}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
              {localize(
                {
                  es: "VibeLife reúne productos seleccionados, bienestar natural y crecimiento personal en una propuesta más clara, cercana y útil.",
                  en: "VibeLife brings together selected products, natural wellness and personal growth in a clearer, closer and more useful proposition.",
                },
                language,
              )}
            </p>
          </Reveal>

          <Reveal delay={0.08} preset="scale">
            <div className="story-gradient rounded-[36px] px-6 py-10 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6e847d]">
                {localize(
                  {
                    es: "Historia",
                    en: "Story",
                  },
                  language,
                )}
              </p>
              <p className="mt-5 text-lg leading-9 text-[#39554f] sm:text-xl">
                {localize(
                  {
                    es: "La idea detrás de VibeLife es ofrecer una experiencia más fácil de entender, con productos seleccionados para bienestar diario y una conversación directa para acompañar mejor a cada persona.",
                    en: "The idea behind VibeLife is to offer an experience that is easier to understand, with selected products for daily wellness and a direct conversation to better support each person.",
                  },
                  language,
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="leaf">
        <SectionHeading
          eyebrow={localize(
            {
              es: "Nuestro enfoque",
              en: "Our approach",
            },
            language,
          )}
          title={localize(
            {
              es: "Una forma más clara de conectar bienestar, hábitos y estilo de vida",
              en: "A clearer way to connect wellness, habits and lifestyle",
            },
            language,
          )}
          description={localize(
            {
              es: "VibeLife busca comunicar bienestar de forma directa, confiable y útil.",
              en: "VibeLife aims to communicate wellness in a direct, trustworthy and useful way.",
            },
            language,
          )}
        />

        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <StaggerItem key={value.title.es}>
                <Card className="h-full bg-white/84 p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf6e4] text-[#6f9d49]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-6 text-lg font-semibold">
                    {localize(value.title, language)}
                  </h2>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </SectionShell>

      <SectionShell className="bg-white/24" tone="teal">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow={localize(
                {
                  es: "Enfoque",
                  en: "Approach",
                },
                language,
              )}
              title={localize(
                {
                  es: "Bienestar natural con una propuesta más simple de entender",
                  en: "Natural wellness with a simpler value proposition",
                },
                language,
              )}
              description={localize(
                {
                  es: "La intención es ayudarte a descubrir productos, entender cómo encajan en tu rutina y resolver dudas rápido.",
                  en: "The goal is to help you discover products, understand how they fit your routine and resolve questions quickly.",
                },
                language,
              )}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="bg-white/82">
              <p className="text-sm leading-8 text-muted sm:text-base">
                {localize(
                  {
                    es: "Por eso la web prioriza claridad, productos, pasos simples y conversación directa por WhatsApp.",
                    en: "That is why the website prioritizes clarity, products, simple steps and direct conversation through WhatsApp.",
                  },
                  language,
                )}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link className={buttonVariants()} href="/#products">
                  {localize(
                    {
                      es: "Ver productos",
                      en: "View products",
                    },
                    language,
                  )}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link className={buttonVariants({ variant: "ghost" })} href="/community">
                  {localize(
                    {
                      es: "Ver comunidad",
                      en: "Visit community",
                    },
                    language,
                  )}
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}
