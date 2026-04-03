"use client";

import { Quote } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { localize } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "María C.",
    city: { es: "Bogotá", en: "Bogotá" },
    initial: "M",
    color: "bg-[#35525b]",
    quote: {
      es: "Llevaba 2 años sin poder sostener nada. Empecé con Rise y la primera semana ya noté diferencia en mis mañanas.",
      en: "I had gone 2 years without being able to stick to anything. I started Rise and in the first week I already noticed a difference in my mornings.",
    },
  },
  {
    name: "Juliana R.",
    city: { es: "Medellín", en: "Medellín" },
    initial: "J",
    color: "bg-[#456f78]",
    quote: {
      es: "No creía en esto. Lo intenté porque una amiga me insistió. Tres semanas después le dije que me perdonara por no haberle hecho caso antes.",
      en: "I didn't believe in this. I tried it because a friend kept insisting. Three weeks later I told her I was sorry for not listening sooner.",
    },
  },
  {
    name: "Sandra M.",
    city: { es: "Cali", en: "Cali" },
    initial: "S",
    color: "bg-[#6a8f5e]",
    quote: {
      es: "Lo que más me sorprendió fue que no fue difícil. Era lo que mi cuerpo necesitaba, no otro esfuerzo.",
      en: "What surprised me most was that it was not hard. It was what my body needed, not another effort.",
    },
  },
  {
    name: "Patricia V.",
    city: { es: "Barranquilla", en: "Barranquilla" },
    initial: "P",
    color: "bg-[#5c7a6b]",
    quote: {
      es: "Pensé que era otro suplemento más. Pero el acompañamiento marcó la diferencia. Alguien real que me explicó y me siguió.",
      en: "I thought it was just another supplement. But the support made the difference. A real person who explained and followed up with me.",
    },
  },
  {
    name: "Carolina G.",
    city: { es: "Bucaramanga", en: "Bucaramanga" },
    initial: "C",
    color: "bg-[#3e6670]",
    quote: {
      es: "A los 10 días de usar Amalaki sentí que mi digestión cambió. Llevaba meses con malestar y no lo relacionaba con nada.",
      en: "After 10 days of using Amalaki I felt my digestion change. I had been uncomfortable for months and hadn't connected it to anything.",
    },
  },
  {
    name: "Lorena T.",
    city: { es: "Manizales", en: "Manizales" },
    initial: "L",
    color: "bg-[#486860]",
    quote: {
      es: "Me costaba levantarme. Ahora no espero el café para funcionar. Rise fue el cambio más pequeño con el impacto más grande.",
      en: "I struggled to get up. Now I don't wait for coffee to function. Rise was the smallest change with the biggest impact.",
    },
  },
];

function TestimonialCard({ t, language }: { t: typeof testimonials[0]; language: string }) {
  return (
    <div className="relative flex w-[320px] flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(62,102,112,0.09)] sm:w-[360px]">
      <Quote className="h-5 w-5 shrink-0 text-[#9BC56A]" />
      <p className="mt-3 flex-1 text-sm leading-7 text-[#3d5550] sm:text-base">
        &ldquo;{localize(t.quote, language as "es" | "en")}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-[#eef2ee] pt-4">
        <span className={cn("inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white", t.color)}>
          {t.initial}
        </span>
        <div>
          <p className="text-sm font-semibold text-[#2f4541]">{t.name}</p>
          <p className="text-xs text-[#6e847d]">{localize(t.city, language as "es" | "en")}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const { language } = useLanguage();
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <SectionShell tone="leaf">
      <SectionHeading
        align="center"
        title={localize(
          {
            es: "Ellas también pensaban que nada les funcionaba",
            en: "They also thought nothing would work for them",
          },
          language,
        )}
        description={localize(
          {
            es: "Resultados reales de mujeres con vidas reales — sin transformaciones imposibles.",
            en: "Real results from real women with real lives — no impossible transformations.",
          },
          language,
        )}
      />

      <div className="relative mt-12 overflow-hidden">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f5f9f2] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f5f9f2] to-transparent" />

        <Marquee pauseOnHover repeat={3} className="[--duration:38s] [--gap:1.25rem]">
          {firstRow.map((t) => (
            <TestimonialCard key={t.name} t={t} language={language} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover repeat={3} className="mt-4 [--duration:32s] [--gap:1.25rem]">
          {secondRow.map((t) => (
            <TestimonialCard key={t.name} t={t} language={language} />
          ))}
        </Marquee>
      </div>
    </SectionShell>
  );
}
