"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const ingredientesDestacados = [
  {
    nombre: { es: "Resveratrol", en: "Resveratrol" },
    descripcion: {
      es: "Ayuda a proteger tu cuerpo desde adentro. Es ese tipo de apoyo que hace que tu cuerpo no se deteriore igual con el tiempo. Como si le dieras herramientas para mantenerse mejor, por más tiempo.",
      en: "Helps protect your body from the inside. It's the kind of support that keeps your body from deteriorating the same way over time. Like giving it tools to stay better, for longer.",
    },
    emoji: "🍇",
    color: "#2E5F9A",
  },
  {
    nombre: { es: "Cúrcuma", en: "Turmeric" },
    descripcion: {
      es: "Ayuda a que tu cuerpo no viva en desgaste constante. Reduce esa sensación de pesadez, inflamación o lentitud que muchas veces normalizamos… pero que no debería ser parte de tu día a día.",
      en: "Helps your body stop living in constant wear. Reduces that feeling of heaviness, inflammation or sluggishness that we often normalize… but that shouldn't be part of your everyday life.",
    },
    emoji: "🌾",
    color: "#1B3A6B",
  },
];

const otrosIngredientes = [
  {
    nombre: { es: "Extracto de Hongo Shiitake", en: "Shiitake Mushroom Extract" },
    descripcion: {
      es: "Modula el sistema inmunológico y ayuda a reducir la inflamación sistémica.",
      en: "Modulates the immune system and helps reduce systemic inflammation.",
    },
    emoji: "🍄",
  },
  {
    nombre: { es: "Extracto de Baya de Açaí", en: "Açaí Berry Extract" },
    descripcion: {
      es: "Antioxidantes y ácidos grasos esenciales. Apoya la función cognitiva y la salud cerebral.",
      en: "Antioxidants and essential fatty acids. Supports cognitive function and brain health.",
    },
    emoji: "🫐",
  },
  {
    nombre: { es: "Extracto de Hoja de Té Verde", en: "Green Tea Leaf Extract" },
    descripcion: {
      es: "Reduce el cortisol. Claridad mental sin nerviosismo.",
      en: "Reduces cortisol. Mental clarity without jitteriness.",
    },
    emoji: "🍵",
  },
  {
    nombre: { es: "Extracto de Flor de Lúpulo", en: "Hops Flower Extract" },
    descripcion: {
      es: "Apoya el sueño saludable y el manejo del estrés.",
      en: "Supports healthy sleep and stress management.",
    },
    emoji: "🌼",
  },
  {
    nombre: { es: "Extracto de Raíz de Jengibre", en: "Ginger Root Extract" },
    descripcion: {
      es: "Reduce la inflamación y activa el sistema inmunológico desde los receptores CB2.",
      en: "Reduces inflammation and activates the immune system through CB2 receptors.",
    },
    emoji: "🫚",
  },
  {
    nombre: { es: "Extracto de Equinácea", en: "Echinacea Extract" },
    descripcion: {
      es: "Apoya la función inmunológica y el bienestar que el cuerpo produce naturalmente.",
      en: "Supports immune function and the wellbeing the body naturally produces.",
    },
    emoji: "🌸",
  },
];

export function IceIngredientesSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que hay adentro — y por qué importa",
                en: "What's inside — and why it matters",
              },
              language,
            )}
            description={localize(
              {
                es: "Dos ingredientes que las personas reconocen. Y que realmente hacen la diferencia.",
                en: "Two ingredients people recognize. And that truly make a difference.",
              },
              language,
            )}
          />
        </Reveal>

        {/* Ingredientes destacados */}
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {ingredientesDestacados.map((item, index) => (
            <StaggerItem key={index}>
              <div
                className="flex flex-col gap-4 rounded-2xl p-7 h-full border"
                style={{
                  background: `${item.color}08`,
                  borderColor: `${item.color}20`,
                }}
              >
                <span className="text-4xl">{item.emoji}</span>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: item.color }}
                >
                  {localize(item.nombre, language)}
                </h3>
                <p className="text-base leading-8 text-[#5c746d]">
                  {localize(item.descripcion, language)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Nota sobre absorción */}
        <Reveal delay={0.2} className="mt-8">
          <div className="rounded-2xl bg-white/80 border border-[#D4E4F4] p-8">
            <p className="text-lg font-semibold text-[#1B3A6B] mb-3">
              {localize(
                {
                  es: "Y algo clave que casi nadie te dice.",
                  en: "And something key almost no one tells you.",
                },
                language,
              )}
            </p>
            <p className="text-base leading-8 text-[#5c746d]">
              {localize(
                {
                  es: "No sirve de nada tomar algo… si tu cuerpo no lo absorbe. UltraICE está diseñado con tecnología UltraCell® para que realmente funcione en tu cuerpo, no solo para que lo tomes.",
                  en: "There's no point in taking something… if your body doesn't absorb it. UltraICE is designed with UltraCell® technology so it truly works in your body, not just for you to take it.",
                },
                language,
              )}
            </p>
          </div>
        </Reveal>

        {/* Otros ingredientes */}
        <Reveal delay={0.3} className="mt-8">
          <div className="rounded-2xl bg-[#2E5F9A]/5 border border-[#2E5F9A]/10 p-8">
            <h3 className="text-lg font-semibold text-[#2E5F9A] mb-5">
              {localize(
                { es: "También contiene", en: "Also contains" },
                language,
              )}
            </h3>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {otrosIngredientes.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex gap-3 rounded-xl bg-white/80 p-4">
                    <span className="shrink-0 text-xl">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-[#1B3A6B] text-sm mb-1">
                        {localize(item.nombre, language)}
                      </p>
                      <p className="text-xs leading-6 text-[#5c746d]">
                        {localize(item.descripcion, language)}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
