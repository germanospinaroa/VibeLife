"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const cards = [
  {
    icon: "⚖️",
    title: { es: "Equilibrio desde adentro", en: "Balance from within" },
    description: {
      es: "Apoya los procesos naturales que regulan el sueño, el estado de ánimo, la respuesta al estrés y la inflamación. No lo fuerza — lo acompaña.",
      en: "Supports the natural processes that regulate sleep, mood, stress response and inflammation. It doesn't force it — it accompanies it.",
    },
  },
  {
    icon: "💧",
    title: { es: "Absorción excepcional", en: "Exceptional absorption" },
    description: {
      es: "La tecnología UltraCell® convierte los compuestos en formato soluble en agua. Tu cuerpo lo absorbe hasta 10x mejor que un suplemento en cápsula o aceite convencional.",
      en: "UltraCell® technology converts compounds into a water-soluble format. Your body absorbs it up to 10x better than a conventional capsule or oil supplement.",
    },
  },
  {
    icon: "🌿",
    title: { es: "Botánica que sí funciona", en: "Botanicals that actually work" },
    description: {
      es: "Cúrcuma, resveratrol, shiitake, açaí, té verde, jengibre, equinácea y lúpulo — ingredientes con respaldo científico real, en las cantidades correctas.",
      en: "Turmeric, resveratrol, shiitake, açaí, green tea, ginger, echinacea and hops — scientifically backed ingredients in the right amounts.",
    },
  },
];

export function IceQueEsSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="default">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No es un suplemento más. Es apoyo desde donde el cuerpo lo necesita.",
                en: "Not just another supplement. Support from where the body needs it.",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <div className="rounded-2xl bg-[#1B3A6B]/5 border border-[#1B3A6B]/10 p-8 text-center">
            <p className="text-base leading-8 text-[#5c746d] sm:text-lg">
              {localize(
                {
                  es: "UltraICE™ es una fórmula líquida de espectro completo diseñada para apoyar la homeostasis — la capacidad natural de tu cuerpo de encontrar y mantener su propio equilibrio.",
                  en: "UltraICE™ is a full-spectrum liquid formula designed to support homeostasis — your body's natural ability to find and maintain its own balance.",
                },
                language,
              )}
            </p>
            <p className="mt-4 text-base leading-8 text-[#5c746d] sm:text-lg">
              {localize(
                {
                  es: "No contiene cáñamo. No es CBD. Es una solución botánica avanzada que trabaja con tu sistema endocannabinoide para que tu cuerpo funcione como fue diseñado: en equilibrio.",
                  en: "It contains no hemp. It's not CBD. It's an advanced botanical solution that works with your endocannabinoid system so your body functions as it was designed: in balance.",
                },
                language,
              )}
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3">
          {cards.map((card, index) => (
            <StaggerItem key={index}>
              <div className="flex flex-col gap-4 rounded-2xl bg-white/80 border border-[#D4E4F4] p-7 shadow-sm h-full">
                <span className="text-3xl">{card.icon}</span>
                <h3 className="text-lg font-semibold text-[#1B3A6B]">
                  {localize(card.title, language)}
                </h3>
                <p className="text-sm leading-7 text-[#5c746d]">
                  {localize(card.description, language)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
