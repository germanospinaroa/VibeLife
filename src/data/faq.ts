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
      es: "VibeLife es un espacio de bienestar natural donde encontrarás productos seleccionados y acompañamiento personalizado para ayudarte a tener más energía, mejores hábitos y sentirte mejor en tu día a día. No somos una farmacia ni un programa de dieta — somos una guía y un punto de partida real.",
      en: "VibeLife is a natural wellness space where you will find selected products and personalized guidance to help you have more energy, better habits and feel better every day. We are not a pharmacy or a diet program — we are a guide and a real starting point.",
    },
  },
  {
    question: {
      es: "¿Qué tipo de productos manejan?",
      en: "What kind of products do you offer?",
    },
    answer: {
      es: "Trabajamos con productos Zilis: suplementos naturales diseñados para apoyar la energía, el equilibrio, el bienestar físico y la nutrición. Cada producto tiene un perfil específico. Te ayudamos a elegir el correcto para ti.",
      en: "We work with Zilis products: natural supplements designed to support energy, balance, physical wellness and nutrition. Each product has a specific profile. We help you choose the right one for you.",
    },
  },
  {
    question: {
      es: "¿Cómo sé cuál producto es para mí?",
      en: "How do I know which product is right for me?",
    },
    answer: {
      es: "Escríbenos por WhatsApp y cuéntanos cómo te sientes. En 5 minutos te orientamos según tu situación — sin presión, sin catálogo, sin que tengas que saber de antemano qué necesitas.",
      en: "Write to us on WhatsApp and tell us how you are feeling. In 5 minutes we will guide you based on your situation — no pressure, no catalog, no need to know in advance what you need.",
    },
  },
  {
    question: {
      es: "¿Los productos sustituyen tratamientos médicos?",
      en: "Do the products replace medical treatments?",
    },
    answer: {
      es: "No. Nuestros productos son suplementos naturales de apoyo y bienestar. No reemplazan diagnósticos ni tratamientos médicos. Si tienes una condición de salud, consúltalo con tu médico. Podemos ser un complemento — no un reemplazo.",
      en: "No. Our products are natural supplements for support and wellness. They do not replace diagnoses or medical treatments. If you have a health condition, consult your doctor. We can be a complement — not a replacement.",
    },
  },
  {
    question: {
      es: "¿Necesito cambiar mi rutina completamente?",
      en: "Do I need to completely change my routine?",
    },
    answer: {
      es: "No. De hecho, ese es uno de los errores más comunes. Los productos están diseñados para integrarse en tu vida actual — no para exigirte una versión perfecta de ti misma. Empieza pequeño. Sostenlo. Crece desde ahí.",
      en: "No. In fact, that is one of the most common mistakes. The products are designed to integrate into your current life — not to demand a perfect version of yourself. Start small. Sustain it. Grow from there.",
    },
  },
  {
    question: {
      es: "¿Qué pasa si no me funciona?",
      en: "What if it doesn't work for me?",
    },
    answer: {
      es: "Nos importa que tengas resultados reales. Si en las primeras semanas no notas nada, escríbenos — revisamos contigo si el producto es el correcto, si la dosis es adecuada y qué ajuste tiene sentido. No te quedas sola con una duda.",
      en: "We care about you getting real results. If in the first few weeks you notice nothing, write to us — we will review with you whether the product is the right fit, whether the dosage is appropriate and what adjustment makes sense. You are not left alone with a question.",
    },
  },
] as const;
