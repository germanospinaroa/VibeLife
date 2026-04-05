"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellQueEsSection() {
  const { language } = useLanguage();

  const tags = [
    { es: "Energizante natural", en: "Natural energizer" },
    { es: "Mejora el enfoque", en: "Improves focus" },
    { es: "Soporte digestivo", en: "Digestive support" },
    { es: "Hidratación celular", en: "Cellular hydration" },
  ];

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Accell — Tu bebida funcional de energía inteligente",
                en: "Accell — Your smart functional energy drink",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Accell es una bebida funcional en polvo — lista en segundos — con cafeína de fuentes naturales, vitaminas del grupo B, minerales esenciales y enzimas digestivas.",
                en: "Accell is a functional powdered drink — ready in seconds — with caffeine from natural sources, B-complex vitamins, essential minerals, and digestive enzymes.",
              },
              language,
            )}
          </p>
          <p className="font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Formulada para darte energía real, enfoque sostenido y soporte metabólico. Sin picos artificiales. Sin colapsos.",
                en: "Formulated to give you real energy, sustained focus, and metabolic support. No artificial spikes. No crashes.",
              },
              language,
            )}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-[#9BC56A]/20 px-4 py-2 text-sm font-medium text-[#2f4541]"
            >
              {localize(tag, language)}
            </span>
          ))}
        </Reveal>
      </div>
    </SectionShell>
  );
}
