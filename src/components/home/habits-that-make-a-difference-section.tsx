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
      es: "El descanso impacta todo tu sistema.",
      en: "Rest impacts your whole system.",
    },
    icon: Moon,
  },
  {
    title: {
      es: "Alimentarte mejor",
      en: "Eat better",
    },
    description: {
      es: "Lo que consumes influye directamente en tu energía.",
      en: "What you consume directly influences your energy.",
    },
    icon: Apple,
  },
  {
    title: {
      es: "Mantenerte activo",
      en: "Stay active",
    },
    description: {
      es: "El movimiento es clave para el bienestar.",
      en: "Movement is key to wellbeing.",
    },
    icon: Activity,
  },
  {
    title: {
      es: "Apoyarte en soluciones adecuadas",
      en: "Support yourself with suitable solutions",
    },
    description: {
      es: "Algunos productos pueden complementar tu proceso.",
      en: "Some products can complement your process.",
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
            es: "Hábitos que marcan la diferencia",
            en: "Habits that make a difference",
          },
          language,
        )}
        description={localize(
          {
            es: "El bienestar no suele depender de una sola decisión, sino de hábitos que se repiten y se sostienen en el tiempo.",
            en: "Wellness usually does not depend on a single decision, but on habits that are repeated and sustained over time.",
          },
          language,
        )}
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-[#5c746d] sm:text-base">
        {localize(
          {
            es: "Cuando mejoras tu descanso, tu alimentación, tu movimiento y el apoyo que eliges para tu rutina, también mejora la forma en la que te sientes cada día.",
            en: "When you improve your rest, nutrition, movement and the support you choose for your routine, the way you feel each day also improves.",
          },
          language,
        )}
      </p>

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
