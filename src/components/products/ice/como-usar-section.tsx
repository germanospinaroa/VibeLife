"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const pasos = [
  {
    numero: "1",
    titulo: { es: "Agitar", en: "Shake" },
    descripcion: {
      es: "Agita bien la botella antes de cada uso.",
      en: "Shake the bottle well before each use.",
    },
    icono: "🔄",
  },
  {
    numero: "2",
    titulo: { es: "Medir", en: "Measure" },
    descripcion: {
      es: "2 goteros = 1 porción (2 mL). Cada botella tiene 30 porciones.",
      en: "2 droppers = 1 serving (2 mL). Each bottle has 30 servings.",
    },
    icono: "💧",
  },
  {
    numero: "3",
    titulo: { es: "Aplicar", en: "Apply" },
    descripcion: {
      es: "Coloca el líquido bajo la lengua para máxima absorción. Sostén 30–60 segundos antes de tragar.",
      en: "Place the liquid under your tongue for maximum absorption. Hold for 30–60 seconds before swallowing.",
    },
    icono: "👅",
  },
  {
    numero: "4",
    titulo: { es: "Constancia", en: "Consistency" },
    descripcion: {
      es: "Úsalo diariamente. Puedes repetir cada 4 horas si lo necesitas. El equilibrio se construye con consistencia, no con una sola dosis.",
      en: "Use it daily. You can repeat every 4 hours if needed. Balance is built with consistency, not a single dose.",
    },
    icono: "📅",
  },
];

export function IceComoUsarSection() {
  const { language } = useLanguage();

  return (
    <SectionShell id="como-usar" tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Simple. Diario. Sin complicaciones.",
                en: "Simple. Daily. No complications.",
              },
              language,
            )}
          />
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2">
          {pasos.map((paso) => (
            <StaggerItem key={paso.numero}>
              <div className="flex gap-5 rounded-2xl bg-white/80 border border-[#D4E4F4] p-6 h-full">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <span className="text-2xl">{paso.icono}</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1B3A6B] text-white text-xs font-bold">
                    {paso.numero}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#1B3A6B] mb-1">
                    {localize(paso.titulo, language)}
                  </p>
                  <p className="text-sm leading-7 text-[#5c746d]">
                    {localize(paso.descripcion, language)}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.3} className="mt-8 space-y-4">
          <div className="rounded-xl bg-[#D4E4F4]/60 border border-[#2E5F9A]/20 p-5">
            <p className="text-sm leading-7 text-[#2E5F9A] font-medium">
              💧 {localize(
                {
                  es: "Mantenerse bien hidratada durante el día potencia los resultados. El cuerpo en equilibrio necesita agua para funcionar.",
                  en: "Staying well hydrated during the day enhances results. A balanced body needs water to function.",
                },
                language,
              )}
            </p>
          </div>
          <p className="text-xs leading-6 text-[#9aada9] text-center">
            {localize(
              {
                es: "Precaución: evitar derramar sobre ropa y superficies — el color es intenso.",
                en: "Caution: avoid spilling on clothing and surfaces — the color is intense.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
