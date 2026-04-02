"use client";

import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { getDefaultWhatsAppMessage, getWhatsAppLink } from "@/data/site";
import { localize } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const { language } = useLanguage();

  return (
    <Link
      aria-label={localize(
        {
          es: "Hablar por WhatsApp",
          en: "Chat on WhatsApp",
        },
        language,
      )}
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 items-center gap-3 rounded-full bg-[#2e4e56] px-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(62,102,112,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-teal sm:bottom-7 sm:right-7"
      href={getWhatsAppLink(getDefaultWhatsAppMessage(language))}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="whatsapp-pulse relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/14 transition group-hover:bg-white/22">
        <MessageCircleMore className="relative z-10 h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </Link>
  );
}
