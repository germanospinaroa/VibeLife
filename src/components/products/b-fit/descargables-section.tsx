"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function BFitDescargablesSection() {
  const { language } = useLanguage();

  const guias = [
    {
      titulo: { es: "Plan completo B-Fit", en: "Complete B-Fit Plan" },
      descripcion: { es: "Guía paso a paso del proceso", en: "Step-by-step process guide" },
      archivo: "The_B-FIT_Plan_ES",
      icono: "📘",
    },
    {
      titulo: { es: "Dieta B-Fit", en: "B-Fit Diet" },
      descripcion: { es: "Qué comer, qué evitar y cómo organizarte", en: "What to eat, what to avoid, how to organize" },
      archivo: "The_B-FIT_Diet_ES",
      icono: "🥗",
    },
    {
      titulo: { es: "Ciencia detrás de B-Fit", en: "Science Behind B-Fit" },
      descripcion: { es: "Explicación detallada de cómo funciona", en: "Detailed explanation of how it works" },
      archivo: "The_Science_Behind_B-FIT_ES",
      icono: "🔬",
    },
  ];

  return (
    <SectionShell tone="teal">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Todo lo que necesitas para hacerlo bien (y sostenerlo)",
                en: "Everything you need to do it right (and sustain it)",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 mb-10 text-base leading-8 text-[#5c746d] sm:text-lg">
          <p>
            {localize(
              {
                es: "Aquí tienes las guías completas para acompañar tu proceso:",
                en: "Here you have the complete guides to support your journey:",
              },
              language,
            )}
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 space-y-6">
          {guias.map((guia, index) => (
            <Reveal key={index} delay={0.1 + index * 0.1}>
              <a
                href={`/downloads/${guia.archivo}.pdf`}
                download
                className="group block rounded-2xl bg-white/70 p-8 transition-all hover:shadow-[0_12px_24px_rgba(62,102,112,0.15)] hover:bg-white"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 text-4xl">{guia.icono}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#2f4541] mb-2 group-hover:text-[#6f9d49] transition-colors">
                      {localize(guia.titulo, language)}
                    </h3>
                    <p className="text-[#5c746d] mb-4">
                      {localize(guia.descripcion, language)}
                    </p>
                    <div className="flex items-center gap-2 text-[#6f9d49] font-semibold text-sm">
                      <Download className="h-4 w-4" />
                      {localize({ es: "Descargar aquí", en: "Download here" }, language)}
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-12 rounded-2xl bg-[#f0f9e8] p-8 border-l-4 border-[#6f9d49]">
          <p className="text-sm text-[#5c746d]">
            {localize(
              {
                es: "Los PDFs están disponibles para descargar directamente. Úsalos como referencia durante tu proceso.",
                en: "PDFs are available for direct download. Use them as reference throughout your journey.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
