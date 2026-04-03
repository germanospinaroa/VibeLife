"use client";

import { Activity, Apple, Moon, PlusCircle } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const habits = [
  {
    title: {
      es: "Dormir mejor",
      en: "Sleep better",
    },
    description: {
      es: "El cansancio que no se va con dormir tiene nombre. Cuando el descanso mejora de verdad, el día cambia desde el principio.",
      en: "The tiredness that does not go away with sleep has a name. When rest truly improves, the day changes from the very beginning.",
    },
    icon: Moon,
  },
  {
    title: {
      es: "Alimentarte mejor",
      en: "Eat better",
    },
    description: {
      es: "No se trata de dieta perfecta. Se trata de que lo que comes te dé energía, no te la quite.",
      en: "It is not about a perfect diet. It is about what you eat giving you energy, not taking it away.",
    },
    icon: Apple,
  },
  {
    title: {
      es: "Mantenerte activa",
      en: "Stay active",
    },
    description: {
      es: "No hace falta una hora en el gimnasio. El movimiento diario, aunque sea poco, cambia cómo te sientes por dentro.",
      en: "You do not need an hour at the gym. Daily movement, even a little, changes how you feel on the inside.",
    },
    icon: Activity,
  },
  {
    title: {
      es: "Apoyarte en soluciones adecuadas",
      en: "Support yourself with the right solutions",
    },
    description: {
      es: "El apoyo correcto no reemplaza tus hábitos — los hace sostenibles cuando la vida está caótica.",
      en: "The right support does not replace your habits — it makes them sustainable when life is chaotic.",
    },
    icon: PlusCircle,
  },
];

export function HabitsThatMakeDifferenceSection() {
  const { language } = useLanguage();

  return (
    <SectionShell className="bg-white/24" tone="teal">
      <SectionHeading
        align="center"
        title={localize(
          {
            es: "No necesitas cambiar todo. Necesitas cambiar lo correcto.",
            en: "You do not need to change everything. You need to change the right things.",
          },
          language,
        )}
        description={localize(
          {
            es: "Cuando mejoras el descanso, la alimentación, el movimiento y el apoyo que le das a tu cuerpo, todo lo demás empieza a caer en su lugar. No de golpe — pero sí de forma real.",
            en: "When you improve rest, nutrition, movement and the support you give your body, everything else starts to fall into place. Not all at once — but genuinely.",
          },
          language,
        )}
      />

      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {habits.map((habit) => {
          const Icon = habit.icon;

          return (
            <StaggerItem key={habit.title.es}>
              <Card className="h-full bg-white/84 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4f1] text-[#456F78]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">
                  {localize(habit.title, language)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {localize(habit.description, language)}
                </p>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionShell>
  );
}
