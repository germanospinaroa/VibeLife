"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellResultadosSection() {
  const { language } = useLanguage();

  const moments = [
    {
      icon: "🏋️",
      title: { es: "Antes del ejercicio", en: "Before exercise" },
      desc: {
        es: "Prepara tu cuerpo, activa tu energía y mejora tu rendimiento físico.",
        en: "Prepare your body, activate your energy, and improve your physical performance.",
      },
    },
    {
      icon: "🍎",
      title: { es: "Entre comidas", en: "Between meals" },
      desc: {
        es: "Una alternativa de solo 30 calorías que controla el antojo sin romper tu dieta.",
        en: "A 30-calorie alternative that controls cravings without breaking your diet.",
      },
    },
    {
      icon: "✈️",
      title: { es: "Cuando viajes", en: "When you travel" },
      desc: {
        es: "Práctico, fácil de llevar. Tu energía donde quiera que estés.",
        en: "Practical and easy to carry. Your energy wherever you are.",
      },
    },
    {
      icon: "💼",
      title: { es: "Antes de una junta importante", en: "Before an important meeting" },
      desc: {
        es: "Activa tu desempeño mental. Más enfoque, más claridad, más seguridad.",
        en: "Activates your mental performance. More focus, more clarity, more confidence.",
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
                es: "¿Cuándo tomar Accell?",
                en: "When to take Accell?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-6 sm:grid-cols-2">
          {moments.map((m, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-2xl shrink-0">{m.icon}</span>
              <div className="space-y-1">
                <p className="font-semibold text-[#2f4541]">{localize(m.title, language)}</p>
                <p className="text-sm leading-relaxed text-[#5c746d]">{localize(m.desc, language)}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize(
                {
                  es: "¡Toma Accell en cualquier momento que necesites más energía!",
                  en: "Take Accell whenever you need more energy!",
                },
                language,
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
