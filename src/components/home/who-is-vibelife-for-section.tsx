"use client";

import { Bolt, Heart, Leaf, Target } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { MagicCard } from "@/components/ui/magic-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const audiences = [
  {
    title: { es: "La que se levanta cansada aunque durmió", en: "The one who wakes up tired even though she slept" },
    description: {
      es: "Siente que su cuerpo no arranca. Lleva meses funcionando en modo supervivencia y ya olvidó cómo es tener energía de verdad.",
      en: "She feels like her body won't start. She has been running on survival mode for months and has forgotten what real energy feels like.",
    },
    icon: Bolt,
  },
  {
    title: { es: "La que empieza y no sostiene", en: "The one who starts and doesn't stick with it" },
    description: {
      es: "Ha intentado rutinas, dietas, suplementos. Sabe lo que tiene que hacer. El problema es que nada le dura más de dos semanas.",
      en: "She has tried routines, diets, supplements. She knows what she needs to do. The problem is nothing ever lasts more than two weeks.",
    },
    icon: Leaf,
  },
  {
    title: { es: "La que pone a todos primero", en: "The one who puts everyone else first" },
    description: {
      es: "Mamá, profesional, pareja, amiga. Siempre lista para los demás. Pero cuando llega su turno, ya no queda nada para ella.",
      en: "Mom, professional, partner, friend. Always ready for everyone else. But when it is her turn, there is nothing left for her.",
    },
    icon: Heart,
  },
  {
    title: { es: "La que quiere sentirse bien — sin drama", en: "The one who wants to feel good — without the drama" },
    description: {
      es: "No busca transformación radical. Solo quiere tener energía, dormir bien y mirarse al espejo sin que le cueste. Algo real, sin heroísmo.",
      en: "She is not looking for a radical transformation. She just wants energy, good sleep and to look in the mirror without it costing her. Something real, without heroics.",
    },
    icon: Target,
  },
];

export function WhoIsVibeLifeForSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <SectionHeading
        align="center"
        title={localize(
          {
            es: "Si te identificas con alguna de estas, este es tu lugar",
            en: "If you recognize yourself in any of these, this is your place",
          },
          language,
        )}
      />

      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2">
        {audiences.map((audience) => {
          const Icon = audience.icon;
          return (
            <StaggerItem key={audience.title.es}>
              <MagicCard
                className="h-full rounded-[20px] bg-white/84 p-6"
                gradientFrom="#9BC56A"
                gradientTo="#456F78"
                gradientColor="rgba(155,197,106,0.05)"
                gradientOpacity={1}
                gradientSize={200}
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef7e6] text-[#6f9d49]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2f4541]">
                      {localize(audience.title, language)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                      {localize(audience.description, language)}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-[#6e847d] sm:text-base">
        {localize(
          {
            es: "VibeLife también acompaña a hombres y familias que quieren mejorar su bienestar de forma natural. Si ese es tu caso, escríbenos — tenemos opciones para ti también.",
            en: "VibeLife also supports men and families who want to improve their wellness naturally. If that is your case, write to us — we have options for you too.",
          },
          language,
        )}
      </p>
    </SectionShell>
  );
}
