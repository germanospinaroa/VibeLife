"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellComoActuaSection() {
  const { language } = useLanguage();

  const differentiators = [
    {
      title: { es: "Bajo en azúcar", en: "Low in sugar" },
      desc: {
        es: "Sin los picos glucémicos de los energizantes convencionales.",
        en: "Without the glycemic spikes of conventional energy drinks.",
      },
    },
    {
      title: { es: "Ingredientes naturales", en: "Natural ingredients" },
      desc: {
        es: "Sin colorantes artificiales, sin rellenos innecesarios.",
        en: "No artificial colors, no unnecessary fillers.",
      },
    },
    {
      title: { es: "Vegano y sin gluten", en: "Vegan and gluten-free" },
      desc: {
        es: "Para todos los estilos de vida.",
        en: "For every lifestyle.",
      },
    },
    {
      title: { es: "Frío o caliente", en: "Hot or cold" },
      desc: {
        es: "Lo preparas en segundos, como quieras.",
        en: "Ready in seconds, however you like it.",
      },
    },
    {
      title: { es: "Formulado con propósito", en: "Formulated with purpose" },
      desc: {
        es: "Cada ingrediente tiene una función. Nada es decorativo.",
        en: "Every ingredient has a function. Nothing is decorative.",
      },
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
                es: "Accell no es otro energizante más",
                en: "Accell is not just another energy drink",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 space-y-6">
          {differentiators.map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="shrink-0 text-[#9BC56A] font-bold mt-1">✓</span>
              <div className="space-y-1">
                <p className="font-semibold text-[#2f4541]">{localize(item.title, language)}</p>
                <p className="text-base leading-relaxed text-[#5c746d]">{localize(item.desc, language)}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </SectionShell>
  );
}
