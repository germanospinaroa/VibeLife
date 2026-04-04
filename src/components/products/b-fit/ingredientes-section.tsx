"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitIngredientesSection() {
  const { language } = useLanguage();

  const ingredientes = [
    {
      nombre: { es: "Berberina", en: "Berberine" },
      benefit: { es: "Mejora cómo tu cuerpo usa la energía", en: "Improves how your body uses energy" },
      scientific: [
        { es: "ayuda a reducir almacenamiento de grasa", en: "helps reduce fat storage" },
        { es: "mejora sensibilidad a la insulina", en: "improves insulin sensitivity" },
        { es: "activa procesos naturales de quema de grasa", en: "activates natural fat-burning processes" },
      ],
      experience: { es: "menos estancamiento, más respuesta del cuerpo", en: "less stagnation, better body response" },
    },
    {
      nombre: { es: "Beta-Cariofileno (BCP)", en: "Beta-Caryophyllene (BCP)" },
      benefit: { es: "Reduce inflamación y regula apetito", en: "Reduces inflammation and regulates appetite" },
      scientific: [
        { es: "actúa sobre el sistema endocannabinoide", en: "acts on the endocannabinoid system" },
        { es: "ayuda a disminuir antojos", en: "helps reduce cravings" },
        { es: "mejora función metabólica", en: "improves metabolic function" },
      ],
      experience: { es: "menos ansiedad por comer, más control", en: "less eating anxiety, more control" },
    },
    {
      nombre: { es: "Fenogreco", en: "Fenugreek" },
      benefit: { es: "Control natural del hambre", en: "Natural hunger control" },
      scientific: [
        { es: "genera saciedad", en: "creates satiety" },
        { es: "estabiliza azúcar en sangre", en: "stabilizes blood sugar" },
        { es: "apoya reducción de grasa", en: "supports fat reduction" },
      ],
      experience: { es: "comes menos… sin sentir que te estás restringiendo", en: "eat less… without feeling restricted" },
    },
    {
      nombre: { es: "Inulina", en: "Inulin" },
      benefit: { es: "Salud intestinal = mejor metabolismo", en: "Gut health = better metabolism" },
      scientific: [
        { es: "mejora microbiota", en: "improves microbiota" },
        { es: "aumenta saciedad", en: "increases satiety" },
        { es: "regula glucosa", en: "regulates glucose" },
      ],
      experience: { es: "menos inflamación, mejor digestión", en: "less inflammation, better digestion" },
    },
    {
      nombre: { es: "OEA (Oleiletanolamida)", en: "OEA (Oleoylethanolamide)" },
      benefit: { es: "Señales reales de saciedad", en: "Real satiety signals" },
      scientific: [
        { es: "reduce hambre desde el cerebro", en: "reduces hunger from the brain" },
        { es: "promueve uso de grasa como energía", en: "promotes fat use as energy" },
      ],
      experience: { es: "dejas de comer por impulso", en: "you stop eating on impulse" },
    },
    {
      nombre: { es: "Psyllium", en: "Psyllium" },
      benefit: { es: "Limpieza y control digestivo", en: "Digestive cleansing and control" },
      scientific: [
        { es: "mejora tránsito intestinal", en: "improves intestinal transit" },
        { es: "prolonga sensación de llenura", en: "extends feeling of fullness" },
        { es: "regula absorción de azúcar", en: "regulates sugar absorption" },
      ],
      experience: { es: "te sientes más ligera, menos inflamada", en: "you feel lighter, less bloated" },
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
                es: "Lo que tiene… y lo que eso significa para ti",
                en: "What's in it… and what that means for you",
              },
              language,
            )}
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {ingredientes.map((ingrediente, index) => (
            <Reveal key={index} delay={0.05 + index * 0.05}>
              <div className="rounded-2xl bg-white/70 p-8 border-l-4 border-[#6f9d49]">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-[#2f4541] mb-2">
                    🔹 {localize(ingrediente.nombre, language)}
                  </h3>
                  <p className="text-lg font-semibold text-[#6f9d49]">
                    👉 {localize(ingrediente.benefit, language)}
                  </p>
                </div>

                <div className="mb-6 space-y-2">
                  {ingrediente.scientific.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="shrink-0 text-[#456F78] font-bold">•</span>
                      <p className="text-[#5c746d]">{localize(item, language)}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-[#f0f9e8] p-4 border-l-4 border-[#6f9d49]">
                  <p className="text-sm font-semibold text-[#2f4541]">
                    {localize({ es: "En tu vida:", en: "In your life:" }, language)}
                  </p>
                  <p className="text-[#5c746d] font-medium mt-2">
                    {localize(ingrediente.experience, language)}
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
