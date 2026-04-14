"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const perfiles = [
  {
    icon: "🌙",
    title: { es: "No descansas aunque duermas", en: "You don't rest even though you sleep" },
    body: {
      es: "El sueño llega, pero el descanso no. Te despiertas cansada, tensa, sin haber recuperado. UltraICE apoya los ciclos naturales de descanso desde el sistema que los regula.",
      en: "Sleep comes, but rest doesn't. You wake up tired, tense, unrecovered. UltraICE supports natural rest cycles from the system that regulates them.",
    },
  },
  {
    icon: "🧠",
    title: { es: "Tu mente no para — aunque quieras", en: "Your mind won't stop — even when you want it to" },
    body: {
      es: "Pensamientos, estrés, ansiedad baja que siempre está ahí. La fórmula Mimetix™ incluye ingredientes que apoyan el manejo del estrés y protegen las células cerebrales.",
      en: "Thoughts, stress, low-grade anxiety that's always there. The Mimetix™ formula includes ingredients that support stress management and protect brain cells.",
    },
  },
  {
    icon: "🔥",
    title: { es: "Inflamación, tensión o molestias frecuentes", en: "Frequent inflammation, tension or discomfort" },
    body: {
      es: "Ese malestar difuso, esa sensación de que algo no está bien. Cúrcuma, resveratrol y jengibre trabajan juntos para apoyar una respuesta inflamatoria saludable.",
      en: "That diffuse discomfort, that feeling that something's off. Turmeric, resveratrol and ginger work together to support a healthy inflammatory response.",
    },
  },
  {
    icon: "✨",
    title: { es: "Quieres bienestar general — no un producto para un síntoma", en: "You want general wellbeing — not a product for one symptom" },
    body: {
      es: "No buscas un parche. Buscas sentirte bien de forma sostenida. UltraICE trabaja en el sistema que coordina todo lo demás.",
      en: "You're not looking for a patch. You want to feel genuinely well, sustainably. UltraICE works on the system that coordinates everything else.",
    },
  },
];

export function IceParaQuienSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              { es: "UltraICE es para ti si...", en: "UltraICE is for you if..." },
              language,
            )}
          />
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2">
          {perfiles.map((perfil, index) => (
            <StaggerItem key={index}>
              <div className="flex flex-col gap-4 rounded-2xl bg-white/80 border border-[#D4E4F4] p-7 shadow-sm h-full">
                <span className="text-3xl">{perfil.icon}</span>
                <h3 className="text-lg font-semibold text-[#1B3A6B]">
                  {localize(perfil.title, language)}
                </h3>
                <p className="text-sm leading-7 text-[#5c746d]">
                  {localize(perfil.body, language)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
