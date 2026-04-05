"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellUsoSection() {
  const { language } = useLanguage();

  const steps = [
    {
      num: "1",
      title: { es: "Abre", en: "Open" },
      desc: { es: "Un sobre o una cucharadita (7 g)", en: "One sachet or one teaspoon (7 g)" },
    },
    {
      num: "2",
      title: { es: "Mezcla", en: "Mix" },
      desc: { es: "En agua fría o caliente — como más te guste", en: "In cold or hot water — however you like it" },
    },
    {
      num: "3",
      title: { es: "Disfruta", en: "Enjoy" },
      desc: { es: "1 a 2 porciones al día, cuando lo necesites", en: "1 to 2 servings a day, when you need it" },
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
                es: "Así de fácil se prepara",
                en: "This easy to prepare",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-1 gap-4 items-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9BC56A] text-white font-bold text-lg">
                {step.num}
              </span>
              <div className="space-y-1">
                <p className="font-semibold text-[#2f4541]">{localize(step.title, language)}</p>
                <p className="text-sm leading-relaxed text-[#5c746d]">{localize(step.desc, language)}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <p className="text-base leading-relaxed text-[#5c746d] sm:text-lg">
            {localize(
              {
                es: "Su tamaño compacto lo hace perfecto para llevarlo a todas partes. En el gym, en el trabajo, en el avión.",
                en: "Its compact size makes it perfect for taking everywhere. At the gym, at work, on the plane.",
              },
              language,
            )}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
