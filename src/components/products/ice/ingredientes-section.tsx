"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const mezclaSoporte = [
  {
    nombre: { es: "Cúrcuma (Extracto de raíz)", en: "Turmeric (Root Extract)" },
    descripcion: {
      es: "La reina antiinflamatoria. Apoya la respuesta inflamatoria natural del cuerpo, protege las células del daño oxidativo y trabaja en sinergia con el sistema endocannabinoide para amplificar sus efectos.",
      en: "The anti-inflammatory queen. Supports the body's natural inflammatory response, protects cells from oxidative damage and works in synergy with the endocannabinoid system to amplify its effects.",
    },
    emoji: "🌾",
  },
  {
    nombre: { es: "Resveratrol", en: "Resveratrol" },
    descripcion: {
      es: "El antioxidante más poderoso de la fórmula. Protege las células del daño causado por el estrés y los radicales libres. Propiedades antiinflamatorias que llegan a todo el cuerpo, no solo a una parte.",
      en: "The most powerful antioxidant in the formula. Protects cells from damage caused by stress and free radicals. Anti-inflammatory properties that reach the whole body, not just one part.",
    },
    emoji: "🍇",
  },
  {
    nombre: { es: "Extracto de Hongo Shiitake", en: "Shiitake Mushroom Extract" },
    descripcion: {
      es: "Inmunidad y desintoxicación desde la tradición herbal con respaldo moderno. Sus betaglucanos modulan el sistema inmunológico y ayudan a reducir la inflamación sistémica.",
      en: "Immunity and detoxification from herbal tradition with modern backing. Its beta-glucans modulate the immune system and help reduce systemic inflammation.",
    },
    emoji: "🍄",
  },
  {
    nombre: { es: "Extracto de Baya de Açaí", en: "Açaí Berry Extract" },
    descripcion: {
      es: "Antioxidantes, vitaminas, minerales y ácidos grasos esenciales. Apoya la función cognitiva y la salud cerebral. Uno de los alimentos más nutricionalmente densos del planeta.",
      en: "Antioxidants, vitamins, minerals and essential fatty acids. Supports cognitive function and brain health. One of the most nutritionally dense foods on the planet.",
    },
    emoji: "🫐",
  },
];

const mimetix = [
  {
    nombre: { es: "Extracto de Hoja de Té Verde", en: "Green Tea Leaf Extract" },
    descripcion: {
      es: "Reduce el cortisol (la hormona del estrés). Activa los receptores CB1 y aumenta el factor de crecimiento neuronal. Claridad sin nerviosismo.",
      en: "Reduces cortisol (the stress hormone). Activates CB1 receptors and increases nerve growth factor. Clarity without jitteriness.",
    },
    emoji: "🍵",
  },
  {
    nombre: { es: "Extracto de Flor de Lúpulo", en: "Hops Flower Extract" },
    descripcion: {
      es: "Antiviral, antiinflamatorio, y — quizás lo más relevante — apoya el sueño saludable y el manejo del estrés. Protege las células cerebrales.",
      en: "Antiviral, anti-inflammatory, and — perhaps most relevantly — supports healthy sleep and stress management. Protects brain cells.",
    },
    emoji: "🌼",
  },
  {
    nombre: { es: "Extracto de Raíz de Cúrcuma (Mimetix)", en: "Turmeric Root Extract (Mimetix)" },
    descripcion: {
      es: "Aumenta los niveles de endocannabinoides propios del cuerpo. Actúa de forma similar al CBD sobre los receptores CB1 — sin ser CBD.",
      en: "Increases the body's own endocannabinoid levels. Acts similarly to CBD on CB1 receptors — without being CBD.",
    },
    emoji: "🟡",
  },
  {
    nombre: { es: "Extracto de Raíz de Jengibre", en: "Ginger Root Extract" },
    descripcion: {
      es: "Reduce la inflamación y activa los receptores CB2 — los que están más relacionados con el sistema inmunológico y la respuesta al dolor.",
      en: "Reduces inflammation and activates CB2 receptors — the ones most related to the immune system and pain response.",
    },
    emoji: "🫚",
  },
  {
    nombre: { es: "Extracto de Equinácea", en: "Echinacea Extract" },
    descripcion: {
      es: "Apoya la función inmunológica y activa receptores CB2. Inhibe la FAAH — la enzima que descompone la anandamida, el endocannabinoide del bienestar que el cuerpo produce naturalmente.",
      en: "Supports immune function and activates CB2 receptors. Inhibits FAAH — the enzyme that breaks down anandamide, the wellbeing endocannabinoid the body produces naturally.",
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
                es: "Dos mezclas botánicas que trabajan juntas para apoyar tu sistema endocannabinoide.",
                en: "Two botanical blends that work together to support your endocannabinoid system.",
              },
              language,
            )}
          />
        </Reveal>

        {/* Bloque A */}
        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-2xl bg-[#1B3A6B]/5 border border-[#1B3A6B]/10 p-8">
            <h3 className="text-xl font-semibold text-[#1B3A6B] mb-2">
              {localize(
                { es: "Mezcla de Soporte Homeostático", en: "Homeostatic Support Blend" },
                language,
              )}
            </h3>
            <p className="text-sm text-[#5c746d] mb-6">
              {localize(
                { es: "Los ingredientes que llegan al equilibrio profundo.", en: "The ingredients that reach deep balance." },
                language,
              )}
            </p>
            <StaggerGroup className="space-y-4">
              {mezclaSoporte.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex gap-4 rounded-xl bg-white/80 p-5">
                    <span className="shrink-0 text-2xl">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-[#1B3A6B] mb-1">
                        {localize(item.nombre, language)}
                      </p>
                      <p className="text-sm leading-7 text-[#5c746d]">
                        {localize(item.descripcion, language)}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>

        {/* Bloque B — Mimetix */}
        <Reveal delay={0.2} className="mt-8">
          <div className="rounded-2xl bg-[#2E5F9A]/5 border border-[#2E5F9A]/15 p-8">
            <h3 className="text-xl font-semibold text-[#2E5F9A] mb-2">
              {localize(
                { es: "Mezcla Mimetix™", en: "Mimetix™ Blend" },
                language,
              )}
            </h3>
            <p className="text-sm text-[#5c746d] mb-2">
              {localize(
                { es: "La fórmula que imita lo que tu cuerpo ya sabe hacer.", en: "The formula that mimics what your body already knows how to do." },
                language,
              )}
            </p>
            <div className="rounded-xl bg-white/60 p-5 mb-6">
              <p className="text-sm leading-7 text-[#5c746d]">
                {localize(
                  {
                    es: "Mimetix™ no es cannabidiol. Son compuestos botánicos que actúan de forma similar sobre los receptores del sistema endocannabinoide — sin cáñamo, sin THC, sin restricciones. La ciencia lleva a un nivel completamente nuevo lo que el cuerpo ya quiere hacer.",
                    en: "Mimetix™ is not cannabidiol. It's botanical compounds that act similarly on endocannabinoid system receptors — without hemp, without THC, without restrictions. Science takes what the body already wants to do to a completely new level.",
                  },
                  language,
                )}
              </p>
            </div>
            <StaggerGroup className="space-y-4">
              {mimetix.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex gap-4 rounded-xl bg-white/80 p-5">
                    <span className="shrink-0 text-2xl">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-[#2E5F9A] mb-1">
                        {localize(item.nombre, language)}
                      </p>
                      <p className="text-sm leading-7 text-[#5c746d]">
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
