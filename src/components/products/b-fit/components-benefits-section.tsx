"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitComponentsBenefitsSection() {
  const { language } = useLanguage();

  const components = [
    {
      title: { es: "🔹 Soporte metabólico", en: "🔹 Metabolic Support" },
      description: {
        es: "Ingredientes que ayudan a optimizar cómo tu cuerpo utiliza la energía.",
        en: "Ingredients that help optimize how your body uses energy.",
      },
      impact: { es: "¿Qué significa esto para ti?", en: "What does this mean for you?" },
      benefits: [
        { es: "tu cuerpo quema mejor lo que consumes", en: "your body burns what you consume better" },
        { es: "disminuye la acumulación innecesaria", en: "unnecessary accumulation decreases" },
        { es: "sientes menos estancamiento", en: "you feel less stagnation" },
      ],
    },
    {
      title: { es: "🔹 Regulación energética", en: "🔹 Energy Regulation" },
      description: {
        es: "Componentes que apoyan la producción de energía celular.",
        en: "Components that support cellular energy production.",
      },
      impact: { es: "En tu día a día se traduce en:", en: "In your daily life this translates to:" },
      benefits: [
        { es: "más energía sostenida (no picos y caídas)", en: "more sustained energy (no spikes and crashes)" },
        { es: "menos fatiga", en: "less fatigue" },
        { es: "mayor claridad mental", en: "better mental clarity" },
      ],
    },
    {
      title: { es: "🔹 Apoyo digestivo y absorción", en: "🔹 Digestive & Absorption Support" },
      description: {
        es: "Cuando tu cuerpo absorbe mejor, funciona mejor.",
        en: "When your body absorbs better, it works better.",
      },
      impact: { es: "Esto impacta en:", en: "This impacts:" },
      benefits: [
        { es: "menor inflamación", en: "less inflammation" },
        { es: "mejor digestión", en: "better digestion" },
        { es: "mayor aprovechamiento de nutrientes", en: "better nutrient utilization" },
      ],
    },
    {
      title: { es: "🔹 Equilibrio interno", en: "🔹 Internal Balance" },
      description: {
        es: "El cuerpo necesita estabilidad para responder.",
        en: "Your body needs stability to respond.",
      },
      impact: { es: "Esto ayuda a:", en: "This helps:" },
      benefits: [
        { es: "reducir el estrés interno del cuerpo", en: "reduce internal body stress" },
        { es: "mejorar la respuesta metabólica", en: "improve metabolic response" },
        { es: "facilitar cambios sostenibles", en: "facilitate sustainable changes" },
      ],
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
                es: "¿Qué tiene B-Fit y cómo te ayuda realmente?",
                en: "What's in B-Fit and how does it really help you?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 mb-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "B-Fit combina ingredientes diseñados para apoyar funciones clave del cuerpo.\n\nMás allá de los nombres, esto es lo importante:",
                en: "B-Fit combines ingredients designed to support key body functions.\n\nBeyond the names, here's what matters:",
              },
              language,
            )}
          </p>
        </Reveal>

        <div className="space-y-8">
          {components.map((component, index) => (
            <Reveal key={index} delay={0.1 + index * 0.1}>
              <div className="rounded-xl bg-white/70 p-8 space-y-4">
                <p className="text-lg font-semibold text-[#2f4541]">
                  {localize(component.title, language)}
                </p>

                <p className="text-[#5c746d]">
                  {localize(component.description, language)}
                </p>

                <p className="font-semibold text-[#2f4541] pt-2">
                  👉 {localize(component.impact, language)}
                </p>

                <div className="space-y-2 ml-4">
                  {component.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex gap-2">
                      <span className="shrink-0 text-[#6f9d49]">•</span>
                      <p className="text-[#5c746d]">
                        {localize(benefit, language)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
