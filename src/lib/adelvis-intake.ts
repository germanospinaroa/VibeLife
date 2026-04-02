export type AdelvisFieldName =
  | "peopleNeedMost"
  | "approximateAge"
  | "audienceGender"
  | "occupationLifestyle"
  | "dailyProblems"
  | "lifeImprovements"
  | "energyDrainers"
  | "currentHabits"
  | "habitImprovements"
  | "pastAttempts"
  | "reasonToChange"
  | "actionMotivators"
  | "startTriggers"
  | "whyNotStart"
  | "doubtsOrFears"
  | "whatStopsThem"
  | "previousSupportStory"
  | "usualMessages"
  | "frequentQuestions"
  | "identifiedPerson"
  | "mostWantedToHelp"
  | "favoriteConversations"
  | "bestConnectedProduct"
  | "bestFitByProduct"
  | "mostCompellingBenefits"
  | "lifeChangeAfterImprovement"
  | "howTheyWouldFeel"
  | "whatTheyWouldAchieve"
  | "idealPersonOneLine";

export type AdelvisFormValues = Record<AdelvisFieldName, string>;

export type AdelvisFieldType = "text" | "textarea";

export type AdelvisFieldDefinition = {
  name: AdelvisFieldName;
  label: string;
  placeholder: string;
  helper: string;
  required: boolean;
  type?: AdelvisFieldType;
  rows?: number;
  minLength?: number;
  maxLength?: number;
};

export type AdelvisSectionDefinition = {
  eyebrow: string;
  title: string;
  description: string;
  fields: AdelvisFieldDefinition[];
};

export type AdelvisActionState = {
  status: "idle" | "error" | "success";
  message: string;
  respondentName: string;
  errors: Partial<Record<AdelvisFieldName | "consentAccepted" | "form", string>>;
  values: AdelvisFormValues;
};

export const initialAdelvisFormValues: AdelvisFormValues = {
  peopleNeedMost: "",
  approximateAge: "",
  audienceGender: "",
  occupationLifestyle: "",
  dailyProblems: "",
  lifeImprovements: "",
  energyDrainers: "",
  currentHabits: "",
  habitImprovements: "",
  pastAttempts: "",
  reasonToChange: "",
  actionMotivators: "",
  startTriggers: "",
  whyNotStart: "",
  doubtsOrFears: "",
  whatStopsThem: "",
  previousSupportStory: "",
  usualMessages: "",
  frequentQuestions: "",
  identifiedPerson: "",
  mostWantedToHelp: "",
  favoriteConversations: "",
  bestConnectedProduct: "",
  bestFitByProduct: "",
  mostCompellingBenefits: "",
  lifeChangeAfterImprovement: "",
  howTheyWouldFeel: "",
  whatTheyWouldAchieve: "",
  idealPersonOneLine: "",
};

export const initialAdelvisActionState: AdelvisActionState = {
  status: "idle",
  message: "",
  respondentName: "Adelvis",
  errors: {},
  values: initialAdelvisFormValues,
};

export const adelvisIntakeSections: AdelvisSectionDefinition[] = [
  {
    eyebrow: "1. Personas",
    title: "Sobre las personas que quieres ayudar",
    description:
      "Piensa en las personas con las que mas conectas y describe ese perfil con total naturalidad.",
    fields: [
      {
        name: "peopleNeedMost",
        label: "Que tipo de personas sientes que mas necesitan lo que tu compartes?",
        placeholder:
          "Describe el tipo de persona con la que mas conectas hoy",
        helper:
          "Piensa en sus necesidades, su actitud y el momento de vida en el que suelen estar.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "approximateAge",
        label: "Que edad aproximada tienen?",
        placeholder: "Ejemplo: entre 30 y 45 anos",
        helper: "Si manejas un rango, puedes escribirlo de forma simple.",
        required: true,
        minLength: 3,
        maxLength: 180,
      },
      {
        name: "audienceGender",
        label: "Son mas hombres, mujeres o ambos?",
        placeholder: "Ejemplo: principalmente mujeres",
        helper: "Responde segun lo que ves con mayor frecuencia.",
        required: true,
        minLength: 3,
        maxLength: 180,
      },
      {
        name: "occupationLifestyle",
        label: "A que se dedican normalmente? (trabajo, estilo de vida)",
        placeholder:
          "Cuentanos como viven, trabajan o distribuyen su tiempo",
        helper: "Puedes incluir ocupacion, ritmo de vida y responsabilidades.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
    ],
  },
  {
    eyebrow: "2. Problemas",
    title: "Problemas o situaciones",
    description:
      "Queremos entender que viven esas personas en el dia a dia y que tension cargan con mas frecuencia.",
    fields: [
      {
        name: "dailyProblems",
        label: "Que problemas ves que tienen esas personas en su dia a dia?",
        placeholder:
          "Describe las situaciones o dificultades que notas con mas frecuencia",
        helper: "Piensa en problemas reales, no teoricos.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "lifeImprovements",
        label: "Que cosas crees que les gustaria mejorar en su vida?",
        placeholder:
          "Habla de lo que ellas quisieran cambiar, ordenar o fortalecer",
        helper: "Puedes pensar en bienestar, energia, relaciones, tiempo o enfoque.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "energyDrainers",
        label: "Que les preocupa o les quita energia?",
        placeholder:
          "Cuentanos que les pesa, les agota o las mantiene preocupadas",
        helper: "Este punto ayuda a identificar su carga emocional y mental.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
    ],
  },
  {
    eyebrow: "3. Bienestar",
    title: "Bienestar y habitos",
    description:
      "En esta parte queremos ver como viven hoy esas personas y que han intentado para sentirse mejor.",
    fields: [
      {
        name: "currentHabits",
        label: "Como crees que viven actualmente? (habitos, rutina, salud)",
        placeholder:
          "Describe su rutina actual, su forma de cuidarse y su estado general",
        helper: "No hace falta ser tecnica, solo observa lo que ves.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "habitImprovements",
        label: "Que cosas estan haciendo mal o podrian mejorar?",
        placeholder:
          "Menciona los errores, descuidos o puntos de mejora que mas detectas",
        helper: "Puedes hablar de alimentacion, descanso, rutina, enfoque o constancia.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "pastAttempts",
        label: "Que han intentado antes para sentirse mejor?",
        placeholder:
          "Cuenta que soluciones, productos, rutinas o ideas han probado antes",
        helper: "Esto ayuda a entender lo que ya conocen y lo que no les ha funcionado.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
    ],
  },
  {
    eyebrow: "4. Motivacion",
    title: "Motivacion",
    description:
      "Ahora enfoquemonos en lo que impulsa a esas personas a querer cambiar y avanzar.",
    fields: [
      {
        name: "reasonToChange",
        label: "Por que crees que esas personas quieren cambiar?",
        placeholder:
          "Explica que las mueve por dentro a buscar algo diferente",
        helper: "Piensa en su necesidad emocional y practica.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "actionMotivators",
        label: "Que las motivaria a tomar accion?",
        placeholder:
          "Describe que estimulo o beneficio las haria avanzar",
        helper: "Puede ser claridad, alivio, acompanamiento, resultados visibles u otra cosa.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "startTriggers",
        label: 'Que las haria decir: "ok, voy a empezar"?',
        placeholder:
          "Comparte el momento o la senal que crees que activa su decision",
        helper: "Aqui buscamos ese clic mental o emocional que las pone en marcha.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
    ],
  },
  {
    eyebrow: "5. Objeciones",
    title: "Objeciones",
    description:
      "Esta parte es clave para entender por que muchas personas no avanzan aunque quieran hacerlo.",
    fields: [
      {
        name: "whyNotStart",
        label: "Por que crees que no empiezan?",
        placeholder:
          "Explica por que se quedan quietas aunque necesitan ayuda",
        helper: "Puedes hablar de decision, tiempo, confianza o prioridades.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "doubtsOrFears",
        label: "Que dudas o miedos podrian tener?",
        placeholder:
          "Cuenta que temores o preguntas frenarian su siguiente paso",
        helper: "Piensa en sus pensamientos reales antes de decidirse.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "whatStopsThem",
        label: "Que las frena?",
        placeholder:
          "Resume las barreras mas fuertes que ves en ellas",
        helper: "Este punto puede incluir factores emocionales, economicos o de habitos.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
    ],
  },
  {
    eyebrow: "6. Experiencia",
    title: "Experiencia personal",
    description:
      "Aqui queremos recoger tu experiencia directa, porque eso nos ayuda a construir algo mucho mas real.",
    fields: [
      {
        name: "previousSupportStory",
        label: "Has ayudado antes a alguien con esto? Cuentanos como fue",
        placeholder:
          "Comparte una experiencia real que recuerdes y por que fue importante",
        helper: "Si fueron varias personas, puedes contar el caso que mejor lo represente.",
        required: true,
        type: "textarea",
        rows: 5,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "usualMessages",
        label: "Que tipo de personas te escriben normalmente?",
        placeholder:
          "Describe el perfil de las personas que suelen buscarte",
        helper: "Piensa en quienes mas se acercan a conversar contigo.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "frequentQuestions",
        label: "Que te preguntan mas seguido?",
        placeholder:
          "Enumera las dudas o preguntas que mas se repiten cuando te escriben",
        helper: "Esto nos ayuda a entender necesidades y lenguaje real.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
    ],
  },
  {
    eyebrow: "7. Conexion",
    title: "Conexion emocional",
    description:
      "Estas respuestas nos muestran con quien te sientes mas alineada de forma natural.",
    fields: [
      {
        name: "identifiedPerson",
        label: "Con que tipo de persona te sientes mas identificada?",
        placeholder:
          "Describe a la persona con la que conectas de forma mas genuina",
        helper: "No pienses en la persona ideal teorica, sino en la que de verdad sientes cercana.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "mostWantedToHelp",
        label: "A quien te gustaria ayudar mas?",
        placeholder:
          "Cuentanos a quien te nace acompanar con mas fuerza",
        helper: "Puedes pensar en una etapa de vida, un problema o un perfil especifico.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "favoriteConversations",
        label: "Con quien disfrutas mas hablar o trabajar?",
        placeholder:
          "Describe con que tipo de persona las conversaciones fluyen mejor para ti",
        helper: "Aqui buscamos afinidad, no perfeccion.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
    ],
  },
  {
    eyebrow: "8. Productos",
    title: "Productos (Zilis)",
    description:
      "En esta parte queremos unir tu percepcion del cliente ideal con los productos que mas conectan con esas personas.",
    fields: [
      {
        name: "bestConnectedProduct",
        label: "Que producto sientes que mas conecta con las personas?",
        placeholder:
          "Menciona el producto que mas facil se entiende o mas interes despierta",
        helper: "Piensa en el producto que suele generar mas afinidad inicial.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "bestFitByProduct",
        label: "Para que tipo de persona funciona mejor cada uno?",
        placeholder:
          "Explica con que perfil conectaria mejor cada producto o linea",
        helper: "No hace falta mencionar todos si no aplica; enfocate en los que mejor conozcas.",
        required: true,
        type: "textarea",
        rows: 5,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "mostCompellingBenefits",
        label: "Que beneficios ves que mas llaman la atencion?",
        placeholder:
          "Comparte que beneficios suelen resonar mas en las conversaciones",
        helper: "Puedes hablar de energia, bienestar, enfoque, practicidad u otros.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
    ],
  },
  {
    eyebrow: "9. Resultado",
    title: "Resultado ideal",
    description:
      "Ahora imaginemos como cambia la vida de esa persona cuando realmente mejora.",
    fields: [
      {
        name: "lifeChangeAfterImprovement",
        label: "Si esa persona mejora, como cambia su vida?",
        placeholder:
          "Describe como se veria su vida diaria si logra avanzar",
        helper: "Piensa en cambios concretos y visibles.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "howTheyWouldFeel",
        label: "Que sentiria?",
        placeholder:
          "Cuentanos como crees que se sentiria emocionalmente despues de mejorar",
        helper: "Este punto ayuda a entender el beneficio interno, no solo el externo.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
      {
        name: "whatTheyWouldAchieve",
        label: "Que habria logrado?",
        placeholder:
          "Resume que resultado concreto o simbolico habria alcanzado",
        helper: "Puede ser una meta tangible, una sensacion o un nuevo estilo de vida.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 2400,
      },
    ],
  },
  {
    eyebrow: "10. Intuicion",
    title: "Intuicion",
    description:
      "Cerremos con una frase simple y poderosa que describa a esa persona ideal.",
    fields: [
      {
        name: "idealPersonOneLine",
        label: "Si tuvieras que describir a la persona ideal en una frase, como seria?",
        placeholder:
          'Ejemplo: "Mujer que quiere sentirse mejor pero no sabe por donde empezar"',
        helper: "Usa tu intuicion y escribelo como te salga naturalmente.",
        required: true,
        type: "textarea",
        rows: 4,
        minLength: 12,
        maxLength: 1000,
      },
    ],
  },
];

export const adelvisQuestionFields = adelvisIntakeSections.flatMap(
  (section) => section.fields,
);
