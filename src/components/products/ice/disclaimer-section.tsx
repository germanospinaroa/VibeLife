"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

export function IceDisclaimerSection() {
  const { language } = useLanguage();

  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="rounded-2xl bg-[#fff5f0] p-8 border-l-4 border-[#d97706]">
            <p className="text-sm leading-7 text-[#5c746d]">
              {localize(
                {
                  es: "* Estos productos no han sido evaluados por la FDA. No están destinados a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Los resultados pueden variar según cada persona. Consulta a tu médico si tienes preguntas relacionadas con tu salud.",
                  en: "* These products have not been evaluated by the FDA. They are not intended to diagnose, treat, cure or prevent any disease. Results may vary from person to person. Consult your doctor if you have questions related to your health.",
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
