import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, LockKeyhole, MessageSquareHeart } from "lucide-react";
import { AdelvisIntakeForm } from "@/components/adelvis/adelvis-intake-form";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Definicion de Cliente Ideal",
  description:
    "Formulario personalizado de VibeLife para construir la definicion de cliente ideal de Adelvis y guardar las respuestas en Supabase.",
};

export default function AdelvisPage() {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-10 sm:pb-24 sm:pt-14"
      data-adelvis-page
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,197,106,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(69,111,120,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(241,248,236,0.96))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[linear-gradient(180deg,rgba(255,255,255,0.28),transparent)]"
      />

      <PageContainer className="relative">
        <div className="mx-auto max-w-6xl">
          <div className="surface-panel rounded-[36px] px-6 py-8 sm:px-10 sm:py-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex w-fit items-center justify-center rounded-[28px] bg-[linear-gradient(160deg,rgba(255,255,255,0.95),rgba(233,242,228,0.82))] p-5 shadow-[0_16px_36px_rgba(62,102,112,0.12)]">
                <Image
                  alt="Logo de VibeLife"
                  className="h-auto w-28 sm:w-32"
                  height={84}
                  priority
                  src="/images/brand/vibelife-logo-transparent.png"
                  width={128}
                />
              </div>

              <h1 className="mt-8 text-balance text-4xl leading-tight text-[#24403b] sm:text-[3.4rem]">
                Queremos conocerte mejor a ti y a las personas con las que mas conectas.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#4c625d] sm:text-lg">
                Este espacio fue preparado solo para ti. Responde con naturalidad,
                sin presion y a tu ritmo. Lo importante es capturar tu intuicion y
                tu experiencia real de una forma clara y agradable.
              </p>

              <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
                <div className="rounded-[26px] border border-white/80 bg-white/82 p-4 shadow-[0_12px_28px_rgba(62,102,112,0.08)]">
                  <CheckCircle2 className="h-5 w-5 text-[#456F78]" />
                  <p className="mt-3 text-sm leading-7 text-[#35525b]">
                    No hay respuestas correctas o incorrectas.
                  </p>
                </div>
                <div className="rounded-[26px] border border-white/80 bg-white/82 p-4 shadow-[0_12px_28px_rgba(62,102,112,0.08)]">
                  <MessageSquareHeart className="h-5 w-5 text-[#456F78]" />
                  <p className="mt-3 text-sm leading-7 text-[#35525b]">
                    La idea es que suene como una conversacion honesta y cercana.
                  </p>
                </div>
                <div className="rounded-[26px] border border-white/80 bg-white/82 p-4 shadow-[0_12px_28px_rgba(62,102,112,0.08)]">
                  <LockKeyhole className="h-5 w-5 text-[#456F78]" />
                  <p className="mt-3 text-sm leading-7 text-[#35525b]">
                    Tus respuestas se guardan para construir tu perfil ideal con mas precision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <AdelvisIntakeForm />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
