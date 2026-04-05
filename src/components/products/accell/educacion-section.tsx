"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellEducacionSection() {
  const { language } = useLanguage();

  const ingredients = [
    {
      name: { es: "Extracto de Té Verde", en: "Green Tea Extract" },
      desc: {
        es: "Fuente natural de cafeína. Energía gradual, antioxidantes y termogénesis leve.",
        en: "Natural source of caffeine. Gradual energy, antioxidants, and mild thermogenesis.",
      },
    },
    {
      name: { es: "Vitaminas B (B2, B3, B5, B6, B12)", en: "B Vitamins (B2, B3, B5, B6, B12)" },
      desc: {
        es: "Esenciales para el metabolismo energético y la función neurológica.",
        en: "Essential for energy metabolism and neurological function.",
      },
    },
    {
      name: { es: "Jengibre", en: "Ginger" },
      desc: {
        es: "Anti-inflamatorio natural. Apoya la digestión y el bienestar general.",
        en: "Natural anti-inflammatory. Supports digestion and overall well-being.",
      },
    },
    {
      name: { es: "Trikatu", en: "Trikatu" },
      desc: {
        es: "Mezcla ayurvédica de pimienta negra, jengibre y pimienta larga. Activa el metabolismo.",
        en: "Ayurvedic blend of black pepper, ginger, and long pepper. Activates metabolism.",
      },
    },
    {
      name: { es: "Minerales (Zinc, Magnesio, Cromo)", en: "Minerals (Zinc, Magnesium, Chromium)" },
      desc: {
        es: "Regulan el azúcar en sangre, apoyan la función muscular e inmune.",
        en: "Regulate blood sugar, support muscle and immune function.",
      },
    },
    {
      name: { es: "Enzimas digestivas", en: "Digestive enzymes" },
      desc: {
        es: "Mejoran la absorción de nutrientes y reducen la hinchazón post-comida.",
        en: "Improve nutrient absorption and reduce post-meal bloating.",
      },
    },
  ];

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que hay dentro de Accell",
                en: "What's inside Accell",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 space-y-6">
          {ingredients.map((item, i) => (
            <div key={i} className="space-y-1">
              <p className="font-semibold text-[#2f4541]">{localize(item.name, language)}</p>
              <p className="text-base leading-relaxed text-[#5c746d]">{localize(item.desc, language)}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </SectionShell>
  );
}
