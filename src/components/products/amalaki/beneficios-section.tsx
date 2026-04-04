"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AmalakiBeneficiosSection() {
  const { language } = useLanguage();

  const benefits = [
    {
      title: { es: "Energía real", en: "Real Energy" },
      desc: { es: "No energía estimulada.\n👉 Energía que viene de un cuerpo funcionando mejor", en: "Not stimulated energy.\n👉 Energy that comes from a body working better" }
    },
    {
      title: { es: "Menos inflamación", en: "Less Inflammation" },
      desc: { es: "👉 Menos hinchazón\n👉 Mejor digestión\n👉 Sensación de ligereza", en: "👉 Less bloating\n👉 Better digestion\n👉 Feeling lighter" }
    },
    {
      title: { es: "Mejora digestiva", en: "Digestive Improvement" },
      desc: { es: "👉 Tu cuerpo absorbe mejor\n👉 Procesa mejor\n👉 Responde mejor", en: "👉 Your body absorbs better\n👉 Processes better\n👉 Responds better" }
    },
    {
      title: { es: "Sistema inmune más fuerte", en: "Stronger Immune System" },
      desc: { es: "👉 Menos desgaste\n👉 Más resistencia\n👉 Mayor equilibrio interno", en: "👉 Less depletion\n👉 More resilience\n👉 Greater internal balance" }
    },
    {
      title: { es: "Antienvejecimiento natural", en: "Natural Anti-Aging" },
      desc: { es: "👉 Protege tus células\n👉 Reduce daño acumulado\n👉 Mejora cómo te ves y te sientes", en: "👉 Protects your cells\n👉 Reduces accumulated damage\n👉 Improves how you look and feel" }
    }
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

        <Reveal delay={0.1} className="mt-12 space-y-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl bg-gradient-to-br from-white/70 to-white/50 p-8 border-l-4 border-[#9BC56A]"
            >
              <h3 className="text-2xl font-semibold text-[#2f4541] mb-4">
                🔹 {localize(benefit.title, language)}
              </h3>
              <p className="text-base leading-8 text-[#5c746d] sm:text-lg whitespace-pre-line">
                {localize(benefit.desc, language)}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </SectionShell>
  );
}
