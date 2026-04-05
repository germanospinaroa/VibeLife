"use client";

import { Download } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellDescargablesSection() {
  const { language } = useLanguage();

  const docs = [
    {
      title: { es: "Brochure Accell", en: "Accell Brochure" },
      desc: {
        es: "Presentación completa del producto: beneficios, posicionamiento y estilo de vida.",
        en: "Full product presentation: benefits, positioning, and lifestyle.",
      },
      href: "/downloads/Accell-Brochure.pdf",
    },
    {
      title: { es: "Ficha Técnica (Datasheet)", en: "Technical Sheet (Datasheet)" },
      desc: {
        es: "Información nutricional detallada, ingredientes y modo de uso.",
        en: "Detailed nutritional information, ingredients, and usage instructions.",
      },
      href: "/downloads/Accell-Datasheet.pdf",
    },
  ];

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "Descarga la información completa",
                en: "Download the full information",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2">
          {docs.map((doc, i) => (
            <a
              key={i}
              href={doc.href}
              download
              className="flex items-start gap-4 rounded-xl border border-[#9BC56A]/30 bg-white/70 p-6 transition-colors hover:border-[#9BC56A] hover:bg-white"
            >
              <Download className="h-6 w-6 shrink-0 text-[#9BC56A] mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-[#2f4541]">{localize(doc.title, language)}</p>
                <p className="text-sm leading-relaxed text-[#5c746d]">{localize(doc.desc, language)}</p>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </SectionShell>
  );
}
