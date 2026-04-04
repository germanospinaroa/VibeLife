"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function RiseRealidadSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "No es falta de energía… es cómo la estás manejando",
                en: "It's not lack of energy… it's how you're managing it",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-8 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-lg font-semibold text-[#2f4541]">
            {localize(
              {
                es: "Te levantas… y lo primero que haces es buscar café.",
                en: "You wake up… and the first thing you do is reach for coffee.",
              },
              language,
            )}
          </p>

          <div className="rounded-xl bg-white/70 p-8 space-y-6">
            <div>
              <p className="text-lg font-semibold text-[#2f4541] mb-4">
                {localize(
                  { es: "A media mañana:", en: "By mid-morning:" },
                  language,
                )}
              </p>
              <div className="space-y-2 ml-4">
                <div className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                  <p>{localize({ es: "ya te sientes cansada otra vez", en: "you're tired again" }, language)}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                  <p>{localize({ es: "necesitas otro estímulo", en: "you need another boost" }, language)}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                  <p>{localize({ es: "tu mente está saturada", en: "your mind is overwhelmed" }, language)}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#9BC56A]/20 pt-6">
              <p className="text-lg font-semibold text-[#2f4541] mb-4">
                {localize(
                  { es: "Y en la tarde:", en: "And in the afternoon:" },
                  language,
                )}
              </p>
              <div className="space-y-2 ml-4">
                <div className="flex gap-3">
                  <span className="shrink-0 text-[#d97706] font-bold">•</span>
                  <p>{localize({ es: "llega el bajón", en: "the crash hits" }, language)}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 text-[#d97706] font-bold">•</span>
                  <p>{localize({ es: "aparece la ansiedad", en: "anxiety appears" }, language)}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 text-[#d97706] font-bold">•</span>
                  <p>{localize({ es: "pierdes el enfoque", en: "you lose focus" }, language)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#9BC56A] space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "No es falta de disciplina",
                  en: "It's not lack of discipline",
                },
                language,
              )}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize(
                {
                  es: "Es un sistema que no está funcionando bien",
                  en: "It's a system that isn't working well",
                },
                language,
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
