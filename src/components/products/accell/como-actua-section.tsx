"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellComoActuaSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Lo que empieza a cambiar internamente",
                en: "What starts changing internally",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-10 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p className="text-[#5c746d]">
            {localize(
              { es: "Cuando tu metabolismo empieza a activarse, notas:", en: "When your metabolism starts activating, you notice:" },
              language,
            )}
          </p>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#2f4541]">
                🔹 {localize({ es: "Energía metabólica", en: "Metabolic energy" }, language)}
              </h3>
              <ul className="space-y-2 pl-2">
                {[
                  { es: "tu cuerpo usa mejor lo que consumes", en: "your body uses what you consume better" },
                  { es: "menos sensación de pesadez", en: "less feeling of heaviness" },
                  { es: "mayor activación interna", en: "greater internal activation" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                    <span className="text-[#5c746d]">{localize(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#2f4541]">
                🔹 {localize({ es: "Control del apetito", en: "Appetite control" }, language)}
              </h3>
              <ul className="space-y-2 pl-2">
                {[
                  { es: "menos ansiedad por comer", en: "less eating anxiety" },
                  { es: "mayor sensación de saciedad", en: "greater feeling of satiety" },
                  { es: "decisiones más fáciles", en: "easier decisions" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                    <span className="text-[#5c746d]">{localize(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#2f4541]">
                🔹 {localize({ es: "Respuesta física", en: "Physical response" }, language)}
              </h3>
              <ul className="space-y-2 pl-2">
                {[
                  { es: "mayor facilidad para perder grasa", en: "easier fat loss" },
                  { es: "mejor respuesta al ejercicio", en: "better response to exercise" },
                  { es: "menos estancamiento", en: "less plateauing" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                    <span className="text-[#5c746d]">{localize(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "No se trata de forzar", en: "It's not about forcing" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "se trata de activar correctamente", en: "it's about activating correctly" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
