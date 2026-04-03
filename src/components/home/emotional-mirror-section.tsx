"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { BlurFade } from "@/components/ui/blur-fade";
import { localize } from "@/lib/i18n";

const mirrorLines = [
  { es: "Te levantas cansada aunque dormiste.", en: "You wake up tired even though you slept." },
  { es: "Sabes lo que tienes que hacer — pero no puedes.", en: "You know what you need to do — but you just can't." },
  { es: "Ya intentaste rutinas, dietas, suplementos. Nada te duró.", en: "You have already tried routines, diets, supplements. Nothing stuck." },
  { es: "Sientes que antes eras diferente y no sabes qué te pasó.", en: "You feel like you used to be different and you don't know what happened." },
  { es: "El día se va entero y tú quedaste de última en la lista.", en: "The whole day goes by and you were last on the list — again." },
];

export function EmotionalMirrorSection() {
  const { language } = useLanguage();

  return (
    <SectionShell className="bg-[#f7f5f0]/60" tone="soft">
      <div className="mx-auto max-w-3xl text-center">
        <BlurFade inView delay={0}>
          <h2 className="text-balance text-3xl font-semibold text-[#2f4541] sm:text-4xl lg:text-5xl">
            {localize({ es: "¿Te suena familiar?", en: "Does this sound familiar?" }, language)}
          </h2>
        </BlurFade>

        <ul className="mt-10 space-y-4 text-left">
          {mirrorLines.map((line, i) => (
            <BlurFade key={line.es} inView delay={0.08 + i * 0.07}>
              <li className="flex items-start gap-4 rounded-2xl bg-white/80 px-6 py-4 shadow-[0_2px_14px_rgba(62,102,112,0.08)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(62,102,112,0.14)] hover:-translate-y-0.5">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8ece9] text-[#7a9c8e] text-sm font-bold select-none">
                  —
                </span>
                <span className="text-base leading-7 text-[#3d5550] sm:text-lg">
                  {localize(line, language)}
                </span>
              </li>
            </BlurFade>
          ))}
        </ul>

        <BlurFade inView delay={0.55}>
          <div className="mt-10 rounded-2xl bg-[#eef4f1] px-6 py-6 text-left sm:px-8">
            <p className="text-base leading-8 text-[#35525b] sm:text-lg">
              {localize(
                {
                  es: "No es falta de disciplina. No es excusa. Es que tu cuerpo y tu mente necesitan un apoyo real — no otro reto de 21 días.",
                  en: "It is not a lack of discipline. It is not an excuse. Your body and mind need real support — not another 21-day challenge.",
                },
                language,
              )}
            </p>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.65}>
          <div className="mt-8">
            <WhatsAppCta
              message={{
                es: "Hola, quiero contarles cómo me siento y saber si VibeLife puede ayudarme.",
                en: "Hi, I want to share how I am feeling and see if VibeLife can help me.",
              }}
              size="lg"
            >
              {{ es: "Cuéntame cómo te sientes →", en: "Tell me how you feel →" }}
            </WhatsAppCta>
          </div>
        </BlurFade>
      </div>
    </SectionShell>
  );
}
