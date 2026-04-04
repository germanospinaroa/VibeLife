"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseBeneficiosSection() {
  const { language } = useLanguage();

  const beneficios = [
    {
      titulo: { es: "Energía más limpia", en: "Cleaner Energy" },
      descripcion: {
        es: "No es el típico pico + caída del café.",
        en: "It's not the typical coffee spike + crash.",
      },
      benefit: { es: "Es energía estable, sin ansiedad ni bajones bruscos", en: "It's stable energy, without anxiety or sudden crashes" },
      icono: "⚡",
    },
    {
      titulo: { es: "Claridad mental", en: "Mental Clarity" },
      descripcion: {
        es: "Te ayuda a:",
        en: "It helps you:",
      },
      benefits: [
        { es: "concentrarte mejor", en: "concentrate better" },
        { es: "tomar decisiones con más claridad", en: "make clearer decisions" },
        { es: "sentirte más presente", en: "feel more present" },
      ],
      benefit: { es: "Menos ruido mental, más enfoque", en: "Less mental noise, more focus" },
      icono: "🧠",
    },
    {
      titulo: { es: "Menos inflamación", en: "Less Inflammation" },
      descripcion: {
        es: "Gracias a sus componentes antioxidantes",
        en: "Thanks to its antioxidant components",
      },
      benefit: { es: "Tu cuerpo trabaja mejor cuando no está inflamado", en: "Your body works better when it's not inflamed" },
      icono: "🛡️",
    },
    {
      titulo: { es: "Apoyo digestivo", en: "Digestive Support" },
      descripcion: {
        es: "Más suave para el sistema que el café tradicional",
        en: "Gentler on your system than traditional coffee",
      },
      benefit: { es: "Menos pesadez, menos incomodidad", en: "Less heaviness, less discomfort" },
      icono: "🌿",
    },
    {
      titulo: { es: "Bienestar general", en: "Overall Wellbeing" },
      descripcion: {
        es: "No es solo energía física",
        en: "It's not just physical energy",
      },
      benefit: { es: "Es sentirte mejor contigo durante el día", en: "It's feeling better with yourself throughout the day" },
      icono: "💚",
    },
  ];

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que hace… y lo que vas a sentir",
                en: "What it does… and what you'll feel",
              },
              language,
            )}
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {beneficios.map((beneficio, index) => (
            <Reveal key={index} delay={0.05 + index * 0.05}>
              <div className="rounded-2xl bg-white/70 p-8 border-l-4 border-[#9BC56A]">
                <div className="mb-4">
                  <div className="flex items-start gap-4 mb-2">
                    <span className="text-3xl">{beneficio.icono}</span>
                    <h3 className="text-xl font-semibold text-[#2f4541]">
                      {localize(beneficio.titulo, language)}
                    </h3>
                  </div>
                  <p className="text-[#5c746d] ml-16">
                    {localize(beneficio.descripcion, language)}
                  </p>
                </div>

                {beneficio.benefits && (
                  <div className="ml-16 mb-4 space-y-2">
                    {beneficio.benefits.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="shrink-0 text-[#9BC56A]">•</span>
                        <p className="text-[#5c746d]">{localize(item, language)}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="rounded-lg bg-[#f0f9e8] p-4 border-l-4 border-[#9BC56A] ml-16">
                  <p className="text-[#5c746d] font-medium">
                    👉 {localize(beneficio.benefit, language)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
