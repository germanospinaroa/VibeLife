"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

export function AccellEducacionSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="leaf">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              {
                es: "El problema no es lo que comes… es cómo responde tu cuerpo",
                en: "The problem isn't what you eat… it's how your body responds",
              },
              language,
            )}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-10 text-base leading-8 text-[#5c746d] sm:text-lg">
          <div className="space-y-4">
            <p className="text-[#5c746d]">
              {localize({ es: "Tu metabolismo no es solo calorías.", en: "Your metabolism isn't just calories." }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Es cómo tu cuerpo:", en: "It's how your body:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "usa la energía", en: "uses energy" },
                { es: "procesa los alimentos", en: "processes food" },
                { es: "regula el hambre", en: "regulates hunger" },
                { es: "decide almacenar o gastar", en: "decides to store or burn" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Cuando está desregulado:", en: "When it's dysregulated:" }, language)}
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { es: "acumulas grasa fácilmente", en: "you accumulate fat easily" },
                { es: "sientes más ansiedad por comida", en: "you feel more food anxiety" },
                { es: "te cuesta bajar de peso", en: "losing weight is hard" },
                { es: "te estancas", en: "you plateau" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#d97706] font-bold">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
            <p className="text-lg font-semibold text-[#2f4541]">
              {localize({ es: "Accell trabaja en ese punto:", en: "Accell works at that point:" }, language)}
            </p>
            <p className="text-lg font-semibold text-[#2f4541]">
              👉 {localize({ es: "la respuesta metabólica", en: "the metabolic response" }, language)}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
