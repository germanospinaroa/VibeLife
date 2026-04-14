"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const testimonios = [
  {
    texto: {
      es: '"Llevaba meses durmiendo mal sin entender por qué. A la segunda semana con UltraICE empecé a notar que me despertaba diferente. No de golpe — pero sí descansada."',
      en: '"I\'d been sleeping poorly for months without understanding why. In the second week with UltraICE I started noticing I woke up differently. Not suddenly — but rested."',
    },
    nombre: "Marcela R.",
    ciudad: { es: "Bogotá", en: "Bogotá" },
  },
  {
    texto: {
      es: '"Lo que más me sorprendió fue la claridad mental. Siempre tenía esa neblina encima. No sabía que eso podía mejorar hasta que mejoró."',
      en: '"What surprised me most was the mental clarity. I always had that fog over me. I didn\'t know that could improve until it did."',
    },
    nombre: "Patricia G.",
    ciudad: { es: "Medellín", en: "Medellín" },
  },
  {
    texto: {
      es: '"Soy escéptica de todo esto. Lo probé porque una amiga me insistió. Tres semanas después le dije que tenía razón. El malestar que cargaba todo el tiempo simplemente fue bajando."',
      en: '"I\'m skeptical of all this. I tried it because a friend insisted. Three weeks later I told her she was right. The discomfort I\'d been carrying all the time just gradually faded."',
    },
    nombre: "Lorena T.",
    ciudad: { es: "Cali", en: "Cali" },
  },
];

export function IceTestimoniosSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="teal">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que sienten quienes ya lo usan",
                en: "What those who already use it feel",
              },
              language,
            )}
            description={localize(
              {
                es: "Resultados reales de personas reales — sin transformaciones imposibles.",
                en: "Real results from real people — no impossible transformations.",
              },
              language,
            )}
          />
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <StaggerItem key={index}>
              <div className="flex flex-col justify-between gap-6 rounded-2xl bg-white/80 border border-[#D4E4F4] p-7 shadow-sm h-full">
                <p className="text-sm leading-7 text-[#5c746d] italic">
                  {localize(testimonio.texto, language)}
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#1B3A6B]/10 flex items-center justify-center text-[#1B3A6B] font-bold text-sm">
                    {testimonio.nombre.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1B3A6B]">{testimonio.nombre}</p>
                    <p className="text-xs text-[#9aada9]">{localize(testimonio.ciudad, language)}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
