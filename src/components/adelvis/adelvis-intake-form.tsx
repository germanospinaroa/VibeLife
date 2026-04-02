"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, SendHorizonal } from "lucide-react";
import { submitAdelvisIntake } from "@/app/adelvis/actions";
import { Button } from "@/components/ui/button";
import {
  adelvisIntakeSections,
  initialAdelvisActionState,
  type AdelvisFieldDefinition,
} from "@/lib/adelvis-intake";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full sm:w-auto" size="lg" type="submit">
      <SendHorizonal className="h-4 w-4" />
      {pending ? "Guardando respuestas..." : "Enviar definicion"}
    </Button>
  );
}

type FieldProps = {
  field: AdelvisFieldDefinition;
  error?: string;
};

function FormField({ field, error }: FieldProps) {
  const baseClassName = cn(
    "mt-3 w-full rounded-[24px] border bg-white/90 px-4 py-3.5 text-sm leading-6 text-[#29433f] outline-none transition placeholder:text-[#7b8e87] focus:border-[#456F78]/30 focus:bg-white",
    error
      ? "border-[#c96f64]/40 bg-[#fff6f4]"
      : "border-[#456F78]/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]",
  );

  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#294640]">{field.label}</span>
      <span className="mt-1 block text-sm leading-6 text-muted">{field.helper}</span>
      {field.type === "textarea" ? (
        <textarea
          aria-invalid={Boolean(error)}
          className={cn(baseClassName, "min-h-36 resize-y")}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          rows={field.rows ?? 4}
        />
      ) : (
        <input
          aria-invalid={Boolean(error)}
          className={baseClassName}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          type="text"
        />
      )}
      <span
        aria-live="polite"
        className={cn(
          "mt-2 block min-h-5 text-sm",
          error ? "text-[#b2594d]" : "text-transparent",
        )}
      >
        {error ?? "."}
      </span>
    </label>
  );
}

export function AdelvisIntakeForm() {
  const [state, formAction] = useActionState(
    submitAdelvisIntake,
    initialAdelvisActionState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }

    if (state.status !== "idle") {
      statusRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [state.status]);

  return (
    <div className="surface-panel relative rounded-[34px] p-5 shadow-[0_24px_80px_rgba(62,102,112,0.16)] sm:p-7 lg:p-8">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#456F78]/30 to-transparent" />

      <div className="border-b border-[#456F78]/10 pb-6">
        <h2 className="text-2xl text-[#24403b] sm:text-[2rem]">
          Definicion de cliente ideal
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          Encontraras el formulario organizado por bloques para que responder sea
          facil, claro y comodo. Puedes tomarte el tiempo que necesites.
        </p>
      </div>

      <div
        aria-live="polite"
        className={cn(
          "mt-6 rounded-[28px] border px-4 py-4 text-sm leading-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:px-5",
          state.status === "success" &&
            "border-[#9BC56A]/40 bg-[#f3fbeb] text-[#31513a]",
          state.status === "error" && "border-[#d7a29a]/45 bg-[#fff7f5] text-[#8f4b40]",
          state.status === "idle" &&
            "border-[#456F78]/10 bg-white/70 text-[#5a6d66]",
        )}
        ref={statusRef}
      >
        {state.status === "success" ? (
          <span className="inline-flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <span>{state.message}</span>
          </span>
        ) : (
          <span>
            {state.message ||
              "Todas las respuestas se enviaran a Supabase para que queden guardadas de forma ordenada."}
          </span>
        )}
      </div>

      <form action={formAction} className="mt-8 space-y-6" ref={formRef}>
        {adelvisIntakeSections.map((section, index) => (
          <section
            className="rounded-[30px] border border-[#456F78]/10 bg-white/72 p-4 sm:p-5"
            key={section.title}
          >
            <div className="border-b border-[#456F78]/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eef5ea] text-sm font-semibold text-[#456F78]">
                  {index + 1}
                </span>
                <h3 className="text-xl text-[#26413c]">{section.title}</h3>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                {section.description}
              </p>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {section.fields.map((field) => (
                <div
                  className={field.type === "textarea" ? "sm:col-span-2" : undefined}
                  key={field.name}
                >
                  <FormField error={state.errors[field.name]} field={field} />
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-[30px] border border-[#456F78]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(237,243,232,0.92))] p-5">
          <label className="flex items-start gap-3">
            <input
              className="mt-1 h-4 w-4 rounded border border-[#456F78]/25 text-[#456F78]"
              name="consentAccepted"
              required
              type="checkbox"
            />
            <span className="text-sm leading-6 text-[#385651]">
              Autorizo a VibeLife a guardar este formulario en Supabase para usar
              la informacion en la construccion del perfil de cliente ideal.
            </span>
          </label>
          <span
            aria-live="polite"
            className={cn(
              "mt-2 block min-h-5 text-sm",
              state.errors.consentAccepted ? "text-[#b2594d]" : "text-transparent",
            )}
          >
            {state.errors.consentAccepted ?? "."}
          </span>

          <div className="mt-4 flex flex-col gap-4 border-t border-[#456F78]/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-muted">
              No hay respuestas correctas o incorrectas. Lo mas importante es que
              suene real, claro y alineado contigo.
            </p>
            <SubmitButton />
          </div>

          {state.errors.form ? (
            <p className="mt-4 rounded-[22px] border border-[#d7a29a]/45 bg-[#fff6f4] px-4 py-3 text-sm leading-6 text-[#8f4b40]">
              {state.errors.form}
            </p>
          ) : null}
        </section>
      </form>
    </div>
  );
}
