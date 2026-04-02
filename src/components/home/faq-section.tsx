"use client";

import { Accordion } from "@/components/ui/accordion";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/data/faq";
import { SectionShell } from "@/components/shared/section-shell";
import { localize } from "@/lib/i18n";

export function FaqSection() {
  const { language } = useLanguage();
  const items = faqItems.map((item) => ({
    question: localize(item.question, language),
    answer: localize(item.answer, language),
  }));

  return (
    <SectionShell className="bg-white/24" tone="soft">
      <SectionHeading
        align="center"
        title={localize(
          {
            es: "Preguntas frecuentes",
            en: "Frequently asked questions",
          },
          language,
        )}
        description={localize(
          {
            es: "Queremos que llegues a la conversación por WhatsApp con más claridad, menos dudas y mejores decisiones.",
            en: "We want you to reach the WhatsApp conversation with more clarity, fewer doubts and better decisions.",
          },
          language,
        )}
      />

      <div className="mx-auto mt-12 max-w-4xl">
        <Accordion items={items} />
      </div>
    </SectionShell>
  );
}
