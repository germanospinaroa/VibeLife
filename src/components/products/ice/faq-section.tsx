"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Language } from "@/lib/i18n";
import { localize } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const faqs = [
  {
    pregunta: {
      es: "¿UltraICE contiene CBD o cáñamo?",
      en: "Does UltraICE contain CBD or hemp?",
    },
    respuesta: {
      es: "No. UltraICE es una fórmula libre de cáñamo y libre de THC. Trabaja con compuestos botánicos (cannabimiméticos) que actúan sobre el sistema endocannabinoide sin ser cannabidiol. Es completamente legal y sin efectos psicoactivos.",
      en: "No. UltraICE is a hemp-free and THC-free formula. It works with botanical compounds (cannabimimetics) that act on the endocannabinoid system without being cannabidiol. It is completely legal and has no psychoactive effects.",
    },
  },
  {
    pregunta: {
      es: "¿Cuánto tiempo tarda en hacer efecto?",
      en: "How long does it take to take effect?",
    },
    respuesta: {
      es: "Gracias a la tecnología UltraCell®, muchas personas reportan efectos iniciales entre 15 y 45 minutos. Para resultados sostenidos, recomendamos uso diario durante al menos 2–3 semanas.",
      en: "Thanks to UltraCell® technology, many people report initial effects within 15 to 45 minutes. For sustained results, we recommend daily use for at least 2–3 weeks.",
    },
  },
  {
    pregunta: {
      es: "¿Se puede tomar con otros suplementos o medicamentos?",
      en: "Can it be taken with other supplements or medications?",
    },
    respuesta: {
      es: "UltraICE es un suplemento natural. Sin embargo, si estás tomando medicamentos recetados, te recomendamos consultarlo con tu médico antes de empezar. Escríbenos y con gusto te orientamos.",
      en: "UltraICE is a natural supplement. However, if you are taking prescription medications, we recommend consulting your doctor before starting. Write to us and we'll be happy to guide you.",
    },
  },
  {
    pregunta: {
      es: "¿Tiene sabor? ¿Es difícil de tomar?",
      en: "Does it have a taste? Is it hard to take?",
    },
    respuesta: {
      es: "El sabor es suave y neutro. La mayoría de personas lo toman directamente bajo la lengua sin problema. También puedes mezclarlo en agua si lo prefieres.",
      en: "The taste is mild and neutral. Most people take it directly under the tongue without any problem. You can also mix it in water if you prefer.",
    },
  },
  {
    pregunta: {
      es: "¿Es para mujeres solamente?",
      en: "Is it for women only?",
    },
    respuesta: {
      es: "No — UltraICE funciona para hombres y mujeres. El sistema endocannabinoide existe en todos los cuerpos. En VibeLife lo orientamos especialmente a mujeres porque es nuestro foco principal, pero los beneficios aplican para todos.",
      en: "No — UltraICE works for both men and women. The endocannabinoid system exists in all bodies. At VibeLife we especially direct it to women because that is our main focus, but the benefits apply to everyone.",
    },
  },
  {
    pregunta: {
      es: "¿Qué pasa si no noto nada?",
      en: "What if I don't notice anything?",
    },
    respuesta: {
      es: "Escríbenos. Revisamos contigo la dosis, la frecuencia y si el producto es el correcto para tu situación. No te quedas sola con una duda — ese es nuestro compromiso.",
      en: "Write to us. We'll review with you the dose, frequency and whether the product is right for your situation. You won't be left alone with a doubt — that's our commitment.",
    },
  },
];

function FaqItem({
  pregunta,
  respuesta,
  language,
}: {
  pregunta: { es: string; en: string };
  respuesta: { es: string; en: string };
  language: Language;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl bg-white/80 border border-[#D4E4F4] overflow-hidden">
      <button
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="font-semibold text-[#1B3A6B]">
          {localize(pregunta, language)}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-[#2E5F9A] transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-sm leading-7 text-[#5c746d]">
            {localize(respuesta, language)}
          </p>
        </div>
      )}
    </div>
  );
}

export function IceFaqSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="default">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que más nos preguntan sobre UltraICE",
                en: "What we're most asked about UltraICE",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              pregunta={faq.pregunta}
              respuesta={faq.respuesta}
              language={language}
            />
          ))}
        </Reveal>
      </div>
    </SectionShell>
  );
}
