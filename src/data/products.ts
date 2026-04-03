import type { LocalizedString } from "@/lib/i18n";

export type Product = {
  slug: "rise" | "amalaki" | "accell" | "b-fit";
  name: string;
  kicker: LocalizedString;
  shortDescription: LocalizedString;
  heroDescription: LocalizedString;
  overview: LocalizedString;
  lifestyle: LocalizedString;
  benefits: LocalizedString[];
  audience: LocalizedString[];
  relatedProducts: Product["slug"][];
  gradientClassName: string;
};

export const products: Product[] = [
  {
    slug: "rise",
    name: "Rise",
    kicker: {
      es: "Para la que necesita encenderse en las mañanas",
      en: "For the one who needs to wake up and ignite",
    },
    shortDescription: {
      es: "Energía sostenida para el día completo. No el pico del café que cae a las 10am. Enfoque real para la que tiene mucho que dar y poco combustible.",
      en: "Sustained energy for the whole day. Not the coffee spike that crashes at 10am. Real focus for the woman who has a lot to give and little fuel left.",
    },
    heroDescription: {
      es: "Una opción pensada para acompañar rutinas enfocadas en energía, enfoque y bienestar diario.",
      en: "An option designed to support routines focused on energy, focus and daily wellness.",
    },
    overview: {
      es: "Rise está orientado a personas que buscan sostener un mejor ritmo durante el día con hábitos más claros y consistentes.",
      en: "Rise is designed for people who want to support a better rhythm during the day with clearer, more consistent habits.",
    },
    lifestyle: {
      es: "Puede integrarse en rutinas de mañana, jornadas activas y momentos en los que necesitas mantener enfoque y constancia.",
      en: "It can fit into morning routines, active schedules and moments when you want to maintain focus and consistency.",
    },
    benefits: [
      {
        es: "Acompaña rutinas orientadas a energía y enfoque",
        en: "Supports routines focused on energy and focus",
      },
      {
        es: "Se integra bien en hábitos diarios más consistentes",
        en: "Fits well into more consistent daily habits",
      },
      {
        es: "Complementa un estilo de vida activo y equilibrado",
        en: "Complements an active and balanced lifestyle",
      },
      {
        es: "Se presenta con un enfoque claro y responsable",
        en: "Presented with a clear and responsible approach",
      },
    ],
    audience: [
      {
        es: "Personas que buscan más energía en su rutina",
        en: "People looking for more energy in their routine",
      },
      {
        es: "Personas que quieren mantener mejor enfoque durante el día",
        en: "People who want to maintain better focus during the day",
      },
      {
        es: "Personas que están construyendo hábitos más consistentes",
        en: "People building more consistent habits",
      },
      {
        es: "Personas interesadas en bienestar diario",
        en: "People interested in daily wellness",
      },
    ],
    relatedProducts: ["accell", "amalaki"],
    gradientClassName:
      "from-[#456F78]/28 via-white to-[#9BC56A]/55",
  },
  {
    slug: "amalaki",
    name: "Amalaki",
    kicker: {
      es: "Para la que quiere recuperar el equilibrio desde adentro",
      en: "For the one who wants to restore balance from within",
    },
    shortDescription: {
      es: "Bienestar que empieza en lo que no se ve. Digestión, inflamación, vitalidad. Para la que siente que algo no está bien aunque no sabe exactamente qué.",
      en: "Wellness that starts where you cannot see. Digestion, inflammation, vitality. For the woman who feels something is off but cannot quite name it.",
    },
    heroDescription: {
      es: "Una opción alineada con rutinas que priorizan equilibrio, cuidado diario y bienestar natural.",
      en: "An option aligned with routines that prioritize balance, daily care and natural wellness.",
    },
    overview: {
      es: "Amalaki está pensado para quienes buscan integrar una solución más conectada con equilibrio, nutrición y cuidado constante.",
      en: "Amalaki is designed for people who want a solution more connected to balance, nourishment and consistent care.",
    },
    lifestyle: {
      es: "Puede acompañar momentos de autocuidado, rutinas más equilibradas y hábitos orientados a una vida más consciente.",
      en: "It can support self-care moments, more balanced routines and habits oriented toward more conscious living.",
    },
    benefits: [
      {
        es: "Acompaña hábitos relacionados con equilibrio diario",
        en: "Supports habits related to daily balance",
      },
      {
        es: "Se integra en rutinas de cuidado constante",
        en: "Fits into consistent care routines",
      },
      {
        es: "Complementa estilos de vida más conscientes",
        en: "Complements more conscious lifestyles",
      },
      {
        es: "Mantiene un enfoque responsable y claro",
        en: "Maintains a clear and responsible approach",
      },
    ],
    audience: [
      {
        es: "Personas que buscan equilibrio en su día a día",
        en: "People looking for more balance in everyday life",
      },
      {
        es: "Personas interesadas en bienestar natural",
        en: "People interested in natural wellness",
      },
      {
        es: "Personas que valoran rutinas de autocuidado",
        en: "People who value self-care routines",
      },
      {
        es: "Personas que quieren una rutina más consciente",
        en: "People who want a more conscious routine",
      },
    ],
    relatedProducts: ["rise", "b-fit"],
    gradientClassName:
      "from-[#B8C9A3]/45 via-white to-[#9BC56A]/38",
  },
  {
    slug: "accell",
    name: "Accell",
    kicker: {
      es: "Para la que quiere volver a moverse sin agotarse",
      en: "For the one who wants to move again without exhausting herself",
    },
    shortDescription: {
      es: "Apoya tu rendimiento físico y tu recuperación. Para la que quiere ser más activa pero el cuerpo no le responde como antes.",
      en: "Supports your physical performance and recovery. For the woman who wants to be more active but whose body no longer responds the way it used to.",
    },
    heroDescription: {
      es: "Una opción pensada para acompañar rutinas con movimiento, enfoque y constancia.",
      en: "An option designed to support routines with movement, focus and consistency.",
    },
    overview: {
      es: "Accell está orientado a personas que quieren sostener un ritmo activo con hábitos claros y una mejor organización diaria.",
      en: "Accell is aimed at people who want to support an active rhythm with clear habits and better daily structure.",
    },
    lifestyle: {
      es: "Puede integrarse en jornadas activas, rutinas con movimiento y estilos de vida que requieren enfoque y continuidad.",
      en: "It can fit into active schedules, movement-based routines and lifestyles that require focus and continuity.",
    },
    benefits: [
      {
        es: "Acompaña hábitos relacionados con actividad y enfoque",
        en: "Supports habits related to activity and focus",
      },
      {
        es: "Se adapta a rutinas con movimiento",
        en: "Adapts well to routines with movement",
      },
      {
        es: "Complementa un estilo de vida dinámico",
        en: "Complements a dynamic lifestyle",
      },
      {
        es: "Mantiene una comunicación simple y clara",
        en: "Keeps a simple and clear communication style",
      },
    ],
    audience: [
      {
        es: "Personas con un estilo de vida activo",
        en: "People with an active lifestyle",
      },
      {
        es: "Personas que quieren sumar enfoque a su rutina",
        en: "People who want to add focus to their routine",
      },
      {
        es: "Personas que buscan constancia en sus hábitos",
        en: "People seeking consistency in their habits",
      },
      {
        es: "Personas orientadas a bienestar diario",
        en: "People focused on daily wellness",
      },
    ],
    relatedProducts: ["rise", "b-fit"],
    gradientClassName:
      "from-[#456F78]/24 via-white to-[#B8C9A3]/50",
  },
  {
    slug: "b-fit",
    name: "B-Fit",
    kicker: {
      es: "Para la que quiere sentirse bien en su cuerpo, no perfecta",
      en: "For the one who wants to feel good in her body, not perfect",
    },
    shortDescription: {
      es: "Acompaña hábitos de bienestar físico de forma consistente. No para cambiar todo — para sostener lo que ya estás construyendo.",
      en: "Supports physical wellness habits consistently. Not to change everything — to sustain what you are already building.",
    },
    heroDescription: {
      es: "Una opción enfocada en acompañar hábitos constantes dentro de una rutina orientada a bienestar físico.",
      en: "An option focused on supporting consistent habits within a routine oriented to physical wellness.",
    },
    overview: {
      es: "B-Fit está pensado para personas que quieren reforzar hábitos de constancia y bienestar físico en su día a día.",
      en: "B-Fit is designed for people who want to strengthen habits connected to consistency and physical wellness.",
    },
    lifestyle: {
      es: "Puede integrarse en rutinas con movimiento, horarios más balanceados y hábitos que buscan sostenerse en el tiempo.",
      en: "It can fit into movement routines, more balanced schedules and habits meant to be sustained over time.",
    },
    benefits: [
      {
        es: "Acompaña hábitos de bienestar físico",
        en: "Supports physical wellness habits",
      },
      {
        es: "Se integra en rutinas constantes",
        en: "Fits into consistent routines",
      },
      {
        es: "Complementa estilos de vida más equilibrados",
        en: "Complements more balanced lifestyles",
      },
      {
        es: "Comunica valor de forma directa y responsable",
        en: "Communicates value in a direct and responsible way",
      },
    ],
    audience: [
      {
        es: "Personas enfocadas en bienestar físico",
        en: "People focused on physical wellness",
      },
      {
        es: "Personas que quieren crear hábitos más constantes",
        en: "People who want to build more consistent habits",
      },
      {
        es: "Personas con interés en una rutina más equilibrada",
        en: "People interested in a more balanced routine",
      },
      {
        es: "Personas que buscan apoyo para su estilo de vida",
        en: "People seeking support for their lifestyle",
      },
    ],
    relatedProducts: ["accell", "amalaki"],
    gradientClassName:
      "from-[#9BC56A]/44 via-white to-[#456F78]/24",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
