"use client";

import { Users, MessageCircle, Sprout } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { localize } from "@/lib/i18n";

const communityBlocks = [
  {
    icon: MessageCircle,
    title: { es: "Espacio real", en: "Real space" },
    description: {
      es: "Un lugar donde puedes hablar, preguntar y compartir sin sentirte juzgada",
      en: "A place where you can talk, ask and share without feeling judged",
    },
  },
  {
    icon: Users,
    title: { es: "Acompañamiento", en: "Support" },
    description: {
      es: "Personas que entienden exactamente cómo te sientes",
      en: "People who understand exactly how you feel",
    },
  },
  {
    icon: Sprout,
    title: { es: "Proceso compartido", en: "Shared process" },
    description: {
      es: "No se trata de hacerlo perfecto, se trata de avanzar",
      en: "It is not about being perfect, it is about progressing",
    },
  },
];

export function NoEresSolaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <Reveal>
        <SectionHeading
          align="center"
          title={localize(
            { es: "No eres la única", en: "You are not alone" },
            language,
          )}
          description={localize(
            {
              es: "Muchas mujeres están pasando por lo mismo que tú.\n\nCansancio. Desorden. Intentar una y otra vez sin lograr sostenerlo.\n\nAquí no empiezas desde cero.\nAquí entras a un espacio donde otras ya están caminando contigo.",
              en: "Many women are going through the same thing as you.\n\nExhaustion. Disorder. Trying over and over without sustaining it.\n\nYou do not start from scratch here.\nHere you enter a space where others are already walking with you.",
            },
            language,
          )}
        />
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
        {communityBlocks.map((block) => {
          const Icon = block.icon;
          return (
            <StaggerItem key={block.title.es}>
              <Card className="h-full bg-white/84 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef7e6] text-[#6f9d49]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">
                  {localize(block.title, language)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {localize(block.description, language)}
                </p>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      <Reveal delay={0.3}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap justify-center">
          <WhatsAppCta
            message={{
              es: "Hola, quiero unirme a la comunidad de VibeLife.",
              en: "Hi, I want to join the VibeLife community.",
            }}
            size="lg"
          >
            {{ es: "Unirme a la comunidad →", en: "Join the community →" }}
          </WhatsAppCta>
        </div>
      </Reveal>
    </SectionShell>
  );
}
