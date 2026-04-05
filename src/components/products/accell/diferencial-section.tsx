"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellDiferencialSection() {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: "⚡",
      title: { es: "Energía sostenida", en: "Sustained energy" },
      desc: {
        es: "Activa tu energía sin picos ni caídas bruscas. Te mantiene activo por más tiempo.",
        en: "Activates your energy without spikes or sudden crashes. Keeps you active for longer.",
      },
    },
    {
      icon: "🧠",
      title: { es: "Enfoque mental", en: "Mental focus" },
      desc: {
        es: "Mejora tu claridad mental y concentración. Ideal para trabajo, estudio o entrenamiento.",
        en: "Improves your mental clarity and concentration. Ideal for work, study, or training.",
      },
    },
    {
      icon: "💪",
      title: { es: "Rendimiento físico", en: "Physical performance" },
      desc: {
        es: "Soporte para el músculo activo. Menos fatiga, más resistencia.",
        en: "Support for active muscle. Less fatigue, more endurance.",
      },
    },
    {
      icon: "🔥",
      title: { es: "Soporte metabólico", en: "Metabolic support" },
      desc: {
        es: "Activa el metabolismo de forma gradual para un mejor uso de la energía.",
        en: "Activates metabolism gradually for better energy utilization.",
      },
    },
    {
      icon: "🍽️",
      title: { es: "Control del apetito", en: "Appetite control" },
      desc: {
        es: "Reduce los picos de hambre entre comidas gracias a su formulación funcional.",
        en: "Reduces hunger spikes between meals thanks to its functional formulation.",
      },
    },
    {
      icon: "🌿",
      title: { es: "Digestión + absorción", en: "Digestion + absorption" },
      desc: {
        es: "Enzimas digestivas que mejoran la absorción de nutrientes.",
        en: "Digestive enzymes that improve nutrient absorption.",
      },
    },
    {
      icon: "💧",
      title: { es: "Hidratación celular", en: "Cellular hydration" },
      desc: {
        es: "Minerales esenciales para mantener el equilibrio hídrico.",
        en: "Essential minerals to maintain hydric balance.",
      },
    },
  ];

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que Accell hace por ti",
                en: "What Accell does for you",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-6 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-2xl shrink-0">{b.icon}</span>
              <div className="space-y-1">
                <p className="font-semibold text-[#2f4541]">{localize(b.title, language)}</p>
                <p className="text-sm leading-relaxed text-[#5c746d]">{localize(b.desc, language)}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </SectionShell>
  );
}
