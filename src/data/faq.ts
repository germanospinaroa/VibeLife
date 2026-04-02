import type { LocalizedString } from "@/lib/i18n";

type FaqItem = {
  question: LocalizedString;
  answer: LocalizedString;
};

export const faqItems: readonly FaqItem[] = [
  {
    question: {
      es: "¿Qué es VibeLife?",
      en: "What is VibeLife?",
    },
    answer: {
      es: "Es una marca enfocada en bienestar, hábitos saludables y acompañamiento.",
      en: "It is a brand focused on wellness, healthy habits and guidance.",
    },
  },
  {
    question: {
      es: "¿Qué tipo de productos manejan?",
      en: "What kind of products do you offer?",
    },
    answer: {
      es: "Trabajamos con productos Zilis enfocados en bienestar y pensados para complementar tu rutina.",
      en: "We work with Zilis products focused on wellness and designed to complement your routine.",
    },
  },
  {
    question: {
      es: "¿Cómo sé cuál producto es para mí?",
      en: "How do I know which product is right for me?",
    },
    answer: {
      es: "Puedes contactarnos por WhatsApp y te orientamos según tu rutina, tus objetivos y lo que estás buscando.",
      en: "You can contact us on WhatsApp and we will guide you based on your routine, goals and what you are looking for.",
    },
  },
  {
    question: {
      es: "¿Los productos sustituyen tratamientos médicos?",
      en: "Do the products replace medical treatments?",
    },
    answer: {
      es: "No. Son complementos dentro de un estilo de vida saludable y no sustituyen la orientación médica profesional.",
      en: "No. They are complements within a healthy lifestyle and do not replace professional medical guidance.",
    },
  },
  {
    question: {
      es: "¿Necesito cambiar mi rutina?",
      en: "Do I need to change my routine?",
    },
    answer: {
      es: "No necesariamente, pero pequeños cambios pueden ayudarte a obtener mejores resultados con más constancia.",
      en: "Not necessarily, but small changes can help you get better results with more consistency.",
    },
  },
] as const;
