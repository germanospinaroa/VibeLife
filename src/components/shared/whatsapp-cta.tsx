"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { MessageCircleMore } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { buttonVariants } from "@/components/ui/button";
import { getDefaultWhatsAppMessage, getWhatsAppLink } from "@/data/site";
import type { Language, LocalizedString } from "@/lib/i18n";
import { localize } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type WhatsAppCtaProps = {
  children?: ReactNode | LocalizedString;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  message?: string | LocalizedString;
};

function resolveContent(
  value: ReactNode | LocalizedString | undefined,
  language: Language,
) {
  if (!value) {
    return undefined;
  }

  if (typeof value === "object" && "es" in value && "en" in value) {
    return localize(value, language);
  }

  return value;
}

export function WhatsAppCta({
  children,
  className,
  variant = "primary",
  size = "md",
  message,
}: WhatsAppCtaProps) {
  const { language } = useLanguage();
  const label =
    resolveContent(children, language) ??
    localize(
      {
        es: "Hablar por WhatsApp",
        en: "Chat on WhatsApp",
      },
      language,
    );
  const resolvedMessage =
    typeof message === "string"
      ? message
      : message
        ? localize(message, language)
        : getDefaultWhatsAppMessage(language);

  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      href={getWhatsAppLink(resolvedMessage)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircleMore className="h-4 w-4" />
      {label}
    </Link>
  );
}
