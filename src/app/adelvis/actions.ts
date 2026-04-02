"use server";

import {
  type AdelvisActionState,
  type AdelvisFormValues,
  adelvisQuestionFields,
  initialAdelvisFormValues,
} from "@/lib/adelvis-intake";

const SUPABASE_URL =
  process.env.SUPABASE_URL ??
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://lbckrtgtnjknafjyskie.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  process.env.SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  "sb_publishable_XIaOdwNxPy6KaWNXZBd-Dw_kIx2VcXO";
const SUPABASE_TABLE =
  process.env.SUPABASE_ADELVIS_TABLE ?? "adelvis_intake_submissions";

function normalizeSingleLine(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function normalizeMultiline(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.replace(/\r\n/g, "\n").trim() : "";
}

function getFormValues(formData: FormData): AdelvisFormValues {
  return Object.fromEntries(
    adelvisQuestionFields.map((field) => [
      field.name,
      field.type === "textarea"
        ? normalizeMultiline(formData.get(field.name))
        : normalizeSingleLine(formData.get(field.name)),
    ]),
  ) as AdelvisFormValues;
}

function validateForm(values: AdelvisFormValues, consentAccepted: boolean) {
  const errors: AdelvisActionState["errors"] = {};

  for (const field of adelvisQuestionFields) {
    const value = values[field.name];
    const minLength = field.minLength ?? 3;
    const maxLength = field.maxLength ?? (field.type === "textarea" ? 2400 : 180);

    if (field.required && value.length < minLength) {
      errors[field.name] =
        minLength <= 4
          ? "Completa esta respuesta para poder continuar."
          : "Regalanos un poco mas de detalle en esta respuesta.";
    }

    if (value.length > maxLength) {
      errors[field.name] = `Mantengamos esta respuesta dentro de ${maxLength} caracteres para guardarla bien.`;
    }
  }

  if (!consentAccepted) {
    errors.consentAccepted =
      "Necesitamos tu autorizacion para guardar la informacion en Supabase.";
  }

  return errors;
}

async function readErrorDetails(response: Response) {
  const body = await response.text();

  if (!body) {
    return { status: response.status };
  }

  try {
    return JSON.parse(body);
  } catch {
    return { status: response.status, body };
  }
}

function getFirstInsight(values: AdelvisFormValues) {
  const firstSentence = values.idealPersonOneLine || values.peopleNeedMost;
  return firstSentence.split("\n")[0]?.slice(0, 80) || "tu perfil ideal";
}

export async function submitAdelvisIntake(
  _previousState: AdelvisActionState,
  formData: FormData,
): Promise<AdelvisActionState> {
  const values = getFormValues(formData);
  const consentAccepted = formData.get("consentAccepted") === "on";
  const errors = validateForm(values, consentAccepted);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Hay algunas respuestas que conviene completar un poco mejor antes de enviar.",
      respondentName: "Adelvis",
      errors,
      values,
    };
  }

  const payload = {
    intake_key: "adelvis-ideal-client-definition-v1",
    respondent_name: "Adelvis",
    questionnaire_type: "ideal-client-definition",
    answers: values,
    metadata: {
      source: "vibelife-adelvis-page",
      submitted_at: new Date().toISOString(),
      section_count: 10,
      question_count: adelvisQuestionFields.length,
      headline: getFirstInsight(values),
    },
  };

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/${encodeURIComponent(SUPABASE_TABLE)}`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const details = await readErrorDetails(response);
      console.error("Supabase insert failed for Adelvis ideal client form:", details);

      return {
        status: "error",
        message:
          "No pudimos guardar el formulario en este momento. Puedes intentarlo nuevamente en unos segundos.",
        respondentName: "Adelvis",
        errors: {
          form: "La tabla de Supabase aun no esta lista o la insercion fue rechazada.",
        },
        values,
      };
    }

    return {
      status: "success",
      message:
        "Gracias, Adelvis. Tu definicion de cliente ideal ya quedo guardada correctamente.",
      respondentName: "Adelvis",
      errors: {},
      values: initialAdelvisFormValues,
    };
  } catch (error) {
    console.error("Unexpected error while saving Adelvis ideal client form:", error);

    return {
      status: "error",
      message:
        "Tuvimos un inconveniente inesperado al guardar tus respuestas. Por favor intenta nuevamente.",
      respondentName: "Adelvis",
      errors: {
        form: "La conexion con Supabase no pudo completarse correctamente.",
      },
      values,
    };
  }
}
