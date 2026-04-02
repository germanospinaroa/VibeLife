import type { Language, LocalizedString } from "@/lib/i18n";

const whatsappNumber = "+507 6288-2188";
const whatsappRawNumber = "50762882188";
const defaultMessage: LocalizedString = {
  es: "Hola, me gustaría recibir más información sobre VibeLife y las opciones disponibles.",
  en: "Hi, I would like more information about VibeLife and the available options.",
};
const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "vibelife-dusky.vercel.app";
const siteUrl = resolvedSiteUrl.startsWith("http")
  ? resolvedSiteUrl
  : `https://${resolvedSiteUrl}`;

export const site = {
  name: "VibeLife",
  tagline: {
    es: "Bienestar Natural y Crecimiento Personal",
    en: "Natural Wellness & Personal Growth",
  },
  url: siteUrl,
  description: {
    es: "Una experiencia enfocada en bienestar natural, hábitos saludables y crecimiento personal.",
    en: "An experience focused on natural wellness, healthy habits and personal growth.",
  },
  whatsapp: {
    number: whatsappNumber,
    link: `https://wa.me/${whatsappRawNumber}`,
    defaultMessage,
  },
  socials: {
    instagram: {
      label: {
        es: "Instagram próximamente",
        en: "Instagram coming soon",
      },
      href: "#",
      active: false,
    },
  },
  footerNote: {
    es: "VibeLife comparte opciones orientadas a bienestar natural, hábitos saludables y conversaciones directas por WhatsApp.",
    en: "VibeLife shares options focused on natural wellness, healthy habits and direct conversations through WhatsApp.",
  },
} as const;

export function getWhatsAppLink(message: string) {
  return `${site.whatsapp.link}?text=${encodeURIComponent(message)}`;
}

export function getDefaultWhatsAppMessage(language: Language) {
  return site.whatsapp.defaultMessage[language];
}
