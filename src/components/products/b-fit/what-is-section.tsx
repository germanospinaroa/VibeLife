"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitWhatIsSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "¿Qué es B-Fit?",
                en: "What is B-Fit?",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
          <div className="space-y-4 rounded-2xl bg-[#f0f9e8] p-8">
            <p className="text-2xl font-semibold text-[#2f4541]">
              {localize(
                { es: "B-Fit no es la solución.", en: "B-Fit is not the solution." },
                language,
              )}
            </p>
            <p className="text-2xl font-semibold text-[#2f4541]">
              {localize(
                { es: "Es el inicio.", en: "It's the start." },
                language,
              )}
            </p>
          </div>

          <p>
            {localize(
              {
                es: "Es una herramienta que te ayuda a crear un entorno más favorable en tu cuerpo para que empezar —y sostener— sea posible.",
                en: "It's a tool that helps you create a more favorable environment in your body so that starting —and sustaining— becomes possible.",
              },
              language,
            )}
          </p>

          <div className="space-y-3">
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "Pequeños cambios.", en: "Small changes." },
                language,
              )}
            </p>
            <p className="font-semibold text-[#2f4541]">
              {localize(
                { es: "Resultados reales.", en: "Real results." },
                language,
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
