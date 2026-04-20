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
    title: { es: "Se levanta cansada aunque haya dormido", en: "Wakes up tired even though she slept" },
    body: {
      es: "El descanso llega, pero la recuperación no. Algo en tu cuerpo sigue sin reponerse del todo — y lo sientes desde que abres los ojos.",
      en: "Rest comes, but recovery doesn't. Something in your body still hasn't fully replenished — and you feel it from the moment you open your eyes.",
    },
  },
  {
    icon: "🔄",
    title: { es: "Siente que su cuerpo ya no responde igual", en: "Feels like her body doesn't respond the same anymore" },
    body: {
      es: "No es edad. Es desgaste acumulado. Tu cuerpo puede volver a funcionar mejor — solo necesita el apoyo correcto.",
      en: "It's not age. It's accumulated wear. Your body can work better again — it just needs the right support.",
    },
  },
  {
    icon: "🔁",
    title: { es: "Ha intentado muchas cosas, pero nada se sostiene", en: "Has tried many things, but nothing sticks" },
    body: {
      es: "No es que hayas fallado. Es que muchas soluciones no llegan al fondo del problema. UltraICE trabaja en el origen, no en el síntoma.",
      en: "You haven't failed. It's that many solutions don't reach the root of the problem. UltraICE works at the source, not the symptom.",
    },
  },
  {
    icon: "✨",
    title: { es: "Quiere sentirse mejor sin complicarse la vida", en: "Wants to feel better without overcomplicating things" },
    body: {
      es: "No tienes que hacerlo perfecto. Solo empezar por algo que sí tenga sentido — y ser constante con eso.",
      en: "You don't have to do it perfectly. Just start with something that actually makes sense — and be consistent with it.",
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
              { es: "Para quién es UltraICE", en: "Who UltraICE is for" },
              language,
            )}
            description={localize(
              { es: "Para la mujer que:", en: "For the woman who:" },
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
