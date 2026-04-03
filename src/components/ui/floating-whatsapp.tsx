"use client";

import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { getDefaultWhatsAppMessage, getWhatsAppLink } from "@/data/site";
import { localize } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 sm:bottom-7 sm:right-7">
      {showTooltip && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[220px] rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[#2f4c53] shadow-[0_8px_24px_rgba(62,102,112,0.18)]">
          {localize(
            {
              es: "¿No sabes por dónde empezar? Escríbenos — te orientamos sin compromiso.",
              en: "Not sure where to start? Write to us — we'll guide you, no strings attached.",
            },
            language,
          )}
          <button
            aria-label="Cerrar"
            className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#dce8e5] text-[#456F78] text-xs hover:bg-[#c8ddd9]"
            onClick={() => setShowTooltip(false)}
            type="button"
          >
            ×
          </button>
        </div>
      )}
      <Link
        aria-label={localize(
          {
            es: "Hablar por WhatsApp",
            en: "Chat on WhatsApp",
          },
          language,
        )}
        className="group inline-flex h-14 items-center gap-3 rounded-full bg-[#2e4e56] px-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(62,102,112,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-teal"
        href={getWhatsAppLink(getDefaultWhatsAppMessage(language))}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="whatsapp-pulse relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/14 transition group-hover:bg-white/22">
          <MessageCircleMore className="relative z-10 h-5 w-5" />
        </span>
        <span className="hidden sm:inline">WhatsApp</span>
      </Link>
    </div>
  );
}
