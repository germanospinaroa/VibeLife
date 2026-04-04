"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { localize } from "@/lib/i18n";

export function FloatingHelpButton() {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <WhatsAppCta
        className="shadow-lg hover:shadow-xl transition-shadow"
        message={{
          es: "Hola, no sé bien por dónde empezar con B-Fit. ¿Me ayudas?",
          en: "Hi, I'm not sure where to start with B-Fit. Can you help me?",
        }}
        size="lg"
      >
        {{
          es: "¿No sabes por dónde empezar?",
          en: "Not sure where to start?",
        }}
      </WhatsAppCta>
    </div>
  );
}
