"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Compass, MessageCircleMore, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { SectionShell } from "@/components/shared/section-shell";
import { site } from "@/data/site";
import { localize } from "@/lib/i18n";

const finds = [
  { es: "Ideas útiles", en: "Useful ideas" },
  { es: "Contenido sobre bienestar", en: "Wellness content" },
  { es: "Hábitos saludables", en: "Healthy habits" },
  { es: "Consejos aplicables", en: "Practical tips" },
  { es: "Acompañamiento continuo", en: "Ongoing support" },
];

const philosophy = [
  {
    title: { es: "Crecimiento con intención", en: "Growth through intention" },
    description: {
      es: "Los mejores hábitos empiezan cuando entiendes mejor qué necesitas.",
      en: "Better habits begin when you better understand what you need.",
    },
    icon: Compass,
  },
  {
    title: { es: "Energía positiva", en: "Positive energy" },
    description: {
      es: "El bienestar también se construye con una rutina más clara y constante.",
      en: "A clearer and more consistent routine also supports your wellbeing.",
    },
    icon: Sparkles,
  },
  {
    title: { es: "Hábitos con sentido", en: "Meaningful habits" },
    description: {
      es: "Pequeños cambios diarios pueden ayudarte a sostener un mejor estilo de vida.",
      en: "Small daily changes can help you maintain a better lifestyle.",
    },
    icon: BookOpen,
  },
];

export default function CommunityPage() {
  const { language } = useLanguage();

  return (
    <>
      <SectionShell className="pt-10" tone="teal">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <Badge>
              {localize(
                {
                  es: "Comunidad",
                  en: "Community",
                },
                language,
              )}
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl">
              {localize(
                {
                  es: "Un espacio para seguir mejorando tu estilo de vida",
                  en: "A space to keep improving your lifestyle",
                },
                language,
              )}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
              {localize(
                {
                  es: "La comunidad está pensada para compartir orientación, contenido útil y apoyo práctico relacionado con bienestar y hábitos saludables.",
                  en: "The community is designed to share guidance, useful content and practical support related to wellness and healthy habits.",
                },
                language,
              )}
            </p>
          </Reveal>

          <Reveal delay={0.08} preset="scale">
            <div className="grid gap-4 md:grid-cols-2">
              {finds.map((item) => (
                <Card className="bg-white/82 p-5" key={item.es}>
                  <p className="text-base font-semibold text-[#35525b]">
                    {localize(item, language)}
                  </p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="soft">
        <SectionHeading
          eyebrow={localize(
            {
              es: "Qué encontrarás aquí",
              en: "What you will find here",
            },
            language,
          )}
          title={localize(
            {
              es: "Guía, contenido útil y acompañamiento",
              en: "Guidance, useful content and support",
            },
            language,
          )}
          description={localize(
            {
              es: "La comunidad busca aportar ideas claras, seguimiento y una conversación abierta para ayudarte a sostener mejores hábitos.",
              en: "The community aims to provide clear ideas, follow-up and an open conversation to help you sustain better habits.",
            },
            language,
          )}
        />

        <StaggerGroup className="mt-12 grid gap-5 lg:grid-cols-3">
          {philosophy.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.title.es}>
                <Card className="h-full bg-white/84">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6e4] text-[#6f9d49]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold">
                    {localize(item.title, language)}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                    {localize(item.description, language)}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </SectionShell>

      <SectionShell className="bg-white/24" tone="leaf">
        <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={localize(
                {
                  es: "Formas de conectar",
                  en: "Ways to connect",
                },
                language,
              )}
              title={localize(
                {
                  es: "Empieza hoy por WhatsApp y mantente atento a los próximos canales",
                  en: "Start today on WhatsApp and stay tuned for future channels",
                },
                language,
              )}
              description={localize(
                {
                  es: "WhatsApp ya funciona como el canal principal para resolver dudas y recibir orientación.",
                  en: "WhatsApp already works as the main channel to resolve questions and receive guidance.",
                },
                language,
              )}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4">
              <Card className="flex items-center gap-4 bg-white/84">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6e4] text-[#6f9d49]">
                  <MessageCircleMore className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-semibold text-[#35525b]">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {localize(
                      {
                        es: "Disponible ahora para dudas, opciones disponibles y orientación directa.",
                        en: "Available now for questions, available options and direct guidance.",
                      },
                      language,
                    )}
                  </p>
                </div>
              </Card>
              <Card className="flex items-center gap-4 bg-white/84">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f8fb] text-[#456F78]">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-semibold text-[#35525b]">
                    {localize(site.socials.instagram.label, language)}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {localize(
                      {
                        es: "Un canal futuro para compartir contenido, inspiración y novedades.",
                        en: "A future channel to share content, inspiration and updates.",
                      },
                      language,
                    )}
                  </p>
                </div>
              </Card>
              <div className="flex flex-col gap-3 sm:flex-row">
                <WhatsAppCta>
                  {{
                    es: "Hablar por WhatsApp",
                    en: "Contact on WhatsApp",
                  }}
                </WhatsAppCta>
                <Link className={buttonVariants({ variant: "ghost" })} href="/contact">
                  {localize(
                    {
                      es: "Ir a contacto",
                      en: "Contact page",
                    },
                    language,
                  )}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}
