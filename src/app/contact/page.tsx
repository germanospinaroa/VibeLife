"use client";

import { MessageCircleMore, Sparkles, Users } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { SectionShell } from "@/components/shared/section-shell";
import { site } from "@/data/site";
import { localize } from "@/lib/i18n";

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <>
      <SectionShell className="pt-10" tone="soft">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Badge>
              {localize(
                {
                  es: "Contacto",
                  en: "Contact",
                },
                language,
              )}
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl">
              {localize(
                {
                  es: "La forma más directa de conectar con VibeLife",
                  en: "The most direct way to connect with VibeLife",
                },
                language,
              )}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
              {localize(
                {
                  es: "Si quieres más información sobre VibeLife, las opciones disponibles o la comunidad, WhatsApp es la forma más rápida de continuar la conversación.",
                  en: "If you want more information about VibeLife, the available options or the community, WhatsApp is the fastest way to continue the conversation.",
                },
                language,
              )}
            </p>
            <div className="mt-8">
              <WhatsAppCta size="lg">
                {{
                  es: "Hablar por WhatsApp",
                  en: "Chat on WhatsApp",
                }}
              </WhatsAppCta>
            </div>
          </Reveal>

          <Reveal delay={0.08} preset="scale">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="bg-white/84 p-5">
                <MessageCircleMore className="h-6 w-6 text-[#456F78]" />
                <h2 className="mt-5 text-lg font-semibold">
                  {localize(
                    {
                      es: "Primero por WhatsApp",
                      en: "WhatsApp first",
                    },
                    language,
                  )}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {localize(
                    {
                      es: "Atención directa y rápida desde el canal principal disponible.",
                      en: "Direct and fast guidance from the main available channel.",
                    },
                    language,
                  )}
                </p>
              </Card>
              <Card className="bg-white/84 p-5">
                <Sparkles className="h-6 w-6 text-[#6f9d49]" />
                <h2 className="mt-5 text-lg font-semibold">
                  {localize(
                    {
                      es: "Orientación personalizada",
                      en: "Personal guidance",
                    },
                    language,
                  )}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {localize(
                    {
                      es: "Pregunta por las opciones disponibles y cuál puede ajustarse mejor a tu rutina.",
                      en: "Ask about the available options and which one may fit your routine best.",
                    },
                    language,
                  )}
                </p>
              </Card>
              <Card className="bg-white/84 p-5">
                <Users className="h-6 w-6 text-[#456F78]" />
                <h2 className="mt-5 text-lg font-semibold">
                  {localize(
                    {
                      es: "Comunidad",
                      en: "Community path",
                    },
                    language,
                  )}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {localize(
                    {
                      es: "Descubre cómo seguir acompañado en tu proceso y conectar con la comunidad.",
                      en: "Learn how to stay supported through your process and connect with the community.",
                    },
                    language,
                  )}
                </p>
              </Card>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="leaf">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={localize(
                {
                  es: "Opciones de contacto",
                  en: "Contact options",
                },
                language,
              )}
              title={localize(
                {
                  es: "Comparte tus datos y abre la conversación en WhatsApp",
                  en: "Share your details and open the conversation on WhatsApp",
                },
                language,
              )}
              description={localize(
                {
                  es: `Línea directa actual: ${site.whatsapp.number}. Usa el formulario para abrir el chat con tu mensaje listo.`,
                  en: `Current direct line: ${site.whatsapp.number}. Use the form to open the chat with your message ready.`,
                },
                language,
              )}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="bg-white/24" tone="teal">
        <Reveal>
          <Card className="bg-white/84 text-center">
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              {localize(
                {
                  es: "Productos, bienestar y comunidad terminan en una conversación directa",
                  en: "Products, wellness and community lead back to one direct conversation",
                },
                language,
              )}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-8 text-muted sm:text-lg">
              {localize(
                {
                  es: "Si ya quieres dar el siguiente paso, WhatsApp está disponible en toda la web para resolver tus dudas.",
                  en: "If you are ready for the next step, WhatsApp is available across the site to answer your questions.",
                },
                language,
              )}
            </p>
            <div className="mt-8">
              <WhatsAppCta size="lg">
                {{
                  es: "Abrir WhatsApp",
                  en: "Open WhatsApp",
                }}
              </WhatsAppCta>
            </div>
          </Card>
        </Reveal>
      </SectionShell>
    </>
  );
}
