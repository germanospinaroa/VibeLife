"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionShell } from "@/components/shared/section-shell";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { localize } from "@/lib/i18n";

const gallery = [
  {
    src: "/images/community/comunidad-1.jpg",
    alt: "Naturaleza abierta - VibeLife comunidad",
    caption: {
      es: "Respirar profundo…\ny recordar que también necesitas espacios para ti",
      en: "Breathe deep…\nand remember you also need space for yourself",
    },
  },
  {
    src: "/images/community/comunidad-2.jpg",
    alt: "Grupo con productos - VibeLife comunidad",
    caption: {
      es: "Personas reales\nhistorias reales\nenergía real",
      en: "Real people\nreal stories\nreal energy",
    },
  },
  {
    src: "/images/community/comunidad-3.jpg",
    alt: "Padre e hijo caminando - VibeLife comunidad",
    caption: {
      es: "Porque esto también se trata\nde compartir con quienes amas",
      en: "Because this is also about\nsharing with those you love",
    },
  },
  {
    src: "/images/community/comunidad-4.jpg",
    alt: "Familia caminando - VibeLife comunidad",
    caption: {
      es: "No se trata de llegar rápido\nse trata de caminar mejor",
      en: "It's not about getting there fast\nit's about walking better",
    },
  },
  {
    src: "/images/community/comunidad-5.jpg",
    alt: "Niño en la caminata - VibeLife comunidad",
    caption: {
      es: "Aquí no hay presión\nsolo presencia",
      en: "No pressure here\njust presence",
    },
  },
];

export function CommunityPageClient() {
  const { language } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Caminata VibeLife comunidad"
            className="object-cover object-center"
            fill
            priority
            src="/images/community/comunidad-1.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e27]/85 via-[#1a2e27]/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 pb-20 pt-32 sm:px-12 lg:px-24">
          <Reveal className="max-w-2xl space-y-6">
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {localize(
                { es: "No tienes que hacerlo sola", en: "You don't have to do it alone" },
                language,
              )}
            </h1>
            <p className="text-lg leading-relaxed text-white/85 sm:text-xl">
              {localize(
                {
                  es: "En VibeLife creemos que el bienestar no es un camino individual… es algo que se construye en comunidad.",
                  en: "At VibeLife we believe wellness isn't an individual journey… it's something built together.",
                },
                language,
              )}
            </p>
            <p className="text-base leading-relaxed text-white/70">
              {localize(
                {
                  es: "Cada domingo, un grupo de personas decide regalarse algo simple… caminar, respirar, compartir y volver a conectar consigo mismas.",
                  en: "Every Sunday, a group of people choose to give themselves something simple… walk, breathe, share, and reconnect with themselves.",
                },
                language,
              )}
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <WhatsAppCta
                message={{
                  es: "Hola, quiero unirme a las caminatas de VibeLife y saber cómo participar",
                  en: "Hi, I want to join VibeLife's walks and find out how to participate.",
                }}
                size="lg"
              >
                {{ es: "Quiero unirme", en: "I want to join" }}
              </WhatsAppCta>
              <Link
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "border border-white/40 text-white hover:bg-white/10 hover:text-white",
                })}
                href="#caminatas"
              >
                {localize({ es: "Ver próximas caminatas", en: "See upcoming walks" }, language)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECCIÓN 1 — QUÉ ES ESTO */}
      <SectionShell tone="soft">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              title={localize(
                { es: "Esto no es solo una caminata", en: "This is more than just a walk" },
                language,
              )}
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p>{localize({ es: "Esto es un espacio donde:", en: "This is a space where:" }, language)}</p>

            <ul className="space-y-3 pl-1">
              {[
                { es: "bajas el ritmo", en: "you slow down" },
                { es: "te desconectas del ruido", en: "you disconnect from the noise" },
                { es: "te reconectas contigo", en: "you reconnect with yourself" },
                { es: "compartes con personas que también están buscando sentirse mejor", en: "you share with people who are also looking to feel better" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold mt-1">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
              <p className="text-[#5c746d]">{localize({ es: "No importa tu nivel físico", en: "Your fitness level doesn't matter" }, language)}</p>
              <p className="text-[#5c746d]">{localize({ es: "No importa si nunca has hecho algo así", en: "It doesn't matter if you've never done anything like this" }, language)}</p>
              <p className="text-lg font-semibold text-[#2f4541]">
                {localize({ es: "Solo importa que quieras empezar.", en: "All that matters is that you want to start." }, language)}
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* SECCIÓN 2 — GALERÍA ALTERNADA */}
      <SectionShell tone="leaf">
        <Reveal>
          <SectionHeading
            align="center"
            title={localize(
              { es: "Así se vive un domingo con VibeLife", en: "This is what a Sunday with VibeLife feels like" },
              language,
            )}
          />
        </Reveal>

        <div className="mt-12 space-y-20">
          {gallery.map((item, i) => {
            const isEven = i % 2 === 0;
            const lines = localize(item.caption, language).split("\n");
            return (
              <Reveal key={i} delay={0.1}>
                <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${!isEven ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: "4/3" }}>
                    <Image
                      alt={item.alt}
                      className="object-cover object-center"
                      fill
                      src={item.src}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text */}
                  <div className="space-y-3 px-2 lg:px-8">
                    <p className="text-2xl font-semibold leading-snug text-[#2f4541] sm:text-3xl">
                      {lines[0]}
                    </p>
                    {lines.slice(1).map((line, j) => (
                      <p key={j} className="text-lg leading-relaxed text-[#5c746d]">{line}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>

      {/* SECCIÓN 3 — QUÉ PASA REALMENTE */}
      <SectionShell tone="soft">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              title={localize(
                { es: "Lo que empieza como una caminata… termina siendo algo más", en: "What starts as a walk… becomes something more" },
                language,
              )}
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p>{localize({ es: "Muchas personas llegan pensando que es solo salir a caminar.", en: "Many people arrive thinking it's just a walk." }, language)}</p>
            <p className="font-semibold text-[#2f4541]">
              {localize({ es: "Pero con el tiempo descubren que:", en: "But over time they discover that:" }, language)}
            </p>

            <ul className="space-y-3 pl-1">
              {[
                { es: "se sienten con más energía", en: "they feel more energized" },
                { es: "bajan el estrés", en: "their stress decreases" },
                { es: "se vuelven más constantes", en: "they become more consistent" },
                { es: "conectan con otras personas", en: "they connect with other people" },
                { es: "empiezan a priorizarse sin culpa", en: "they start prioritizing themselves without guilt" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold mt-1">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
              <p className="text-lg font-semibold text-[#2f4541]">
                {localize({ es: "Y eso cambia más de lo que imaginaban.", en: "And that changes more than they ever imagined." }, language)}
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* SECCIÓN 4 — PARA QUIÉN */}
      <SectionShell tone="leaf">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              title={localize(
                { es: "Este espacio es para ti si…", en: "This space is for you if…" },
                language,
              )}
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-3">
            {[
              { es: "sientes que necesitas un cambio, pero no sabes por dónde empezar", en: "you feel you need a change, but don't know where to start" },
              { es: "te cuesta ser constante sola", en: "it's hard to stay consistent on your own" },
              { es: "quieres sentirte mejor sin presión extrema", en: "you want to feel better without extreme pressure" },
              { es: "necesitas salir de la rutina", en: "you need a break from the routine" },
              { es: "quieres rodearte de personas con una energía diferente", en: "you want to be around people with a different kind of energy" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="shrink-0 text-[#9BC56A] font-bold mt-1">•</span>
                <p className="text-base leading-relaxed text-[#5c746d] sm:text-lg">{localize(item, language)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </SectionShell>

      {/* SECCIÓN 5 — COMUNIDAD + PRODUCTO */}
      <SectionShell tone="soft">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              title={localize(
                { es: "Aquí no solo hablamos de bienestar… lo vivimos", en: "Here we don't just talk about wellness… we live it" },
                language,
              )}
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p>
              {localize(
                { es: "Durante las caminatas también compartimos herramientas que pueden ayudarte en tu proceso:", en: "During the walks we also share tools that can support your journey:" },
                language,
              )}
            </p>

            <ul className="space-y-2 pl-1">
              {[
                { es: "productos que apoyan tu energía", en: "products that support your energy" },
                { es: "opciones que mejoran tu enfoque", en: "options that improve your focus" },
                { es: "soluciones prácticas para tu día a día", en: "practical solutions for your everyday life" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold mt-1">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>

            <p className="font-semibold text-[#2f4541]">
              {localize({ es: "Pero lo más importante:", en: "But most importantly:" }, language)}
            </p>

            <div className="border-l-4 border-[#9BC56A] pl-6 py-2 space-y-2">
              <p className="text-[#5c746d]">{localize({ es: "nadie te presiona", en: "nobody pressures you" }, language)}</p>
              <p className="text-[#5c746d]">{localize({ es: "nadie te vende encima", en: "nobody sells to you" }, language)}</p>
              <p className="text-lg font-semibold text-[#2f4541]">{localize({ es: "tú decides tu proceso", en: "you decide your own process" }, language)}</p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* SECCIÓN 6 — FRECUENCIA */}
      <SectionShell tone="leaf" id="caminatas">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              title={localize(
                { es: "Nos vemos todos los domingos", en: "We meet every Sunday" },
                language,
              )}
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p>
              {localize(
                { es: "Cada semana exploramos diferentes lugares en Ciudad de Panamá.", en: "Each week we explore different locations in Panama City." },
                language,
              )}
            </p>

            <ul className="space-y-2 pl-1">
              {[
                { es: "naturaleza", en: "nature" },
                { es: "aire libre", en: "open air" },
                { es: "espacios abiertos", en: "open spaces" },
                { es: "rutas accesibles para todos", en: "accessible routes for everyone" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold mt-1">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
              <p className="text-lg font-semibold text-[#2f4541]">
                {localize({ es: "Siempre con el mismo objetivo: sentirnos mejor.", en: "Always with the same goal: feel better." }, language)}
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* SECCIÓN 7 — LLAMADO EMOCIONAL */}
      <SectionShell tone="soft">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              title={localize(
                { es: "Tal vez no necesitas más información… necesitas empezar", en: "Maybe you don't need more information… you need to start" },
                language,
              )}
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-8 text-[#5c746d] sm:text-lg">
            <p>{localize({ es: "A veces no es falta de ganas.", en: "Sometimes it's not lack of motivation." }, language)}</p>
            <p className="font-semibold text-[#2f4541]">
              {localize({ es: "Es falta de un espacio correcto.", en: "It's lack of the right space." }, language)}
            </p>
            <p>{localize({ es: "Un lugar donde:", en: "A place where:" }, language)}</p>

            <ul className="space-y-2 pl-1">
              {[
                { es: "no te juzguen", en: "nobody judges you" },
                { es: "no te exijan", en: "nobody demands anything from you" },
                { es: "no te comparen", en: "nobody compares you to anyone" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-[#9BC56A] font-bold mt-1">•</span>
                  <span className="font-medium text-[#2f4541]">{localize(item, language)}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-4 border-[#9BC56A] pl-6 py-2">
              <p className="text-xl font-semibold text-[#2f4541]">
                {localize({ es: "Solo te acompañen.", en: "Just walk alongside you." }, language)}
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* CTA FINAL */}
      <SectionShell tone="leaf">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#9BC56A]">
                {localize({ es: "Esto no es solo bienestar… es pertenecer", en: "This isn't just wellness… it's belonging" }, language)}
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-tight text-[#2f4541] sm:text-4xl">
                {localize({ es: "Te esperamos el próximo domingo", en: "We'll be waiting for you this Sunday" }, language)}
              </h2>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <WhatsAppCta
                message={{
                  es: "Hola, quiero unirme a las caminatas de VibeLife y saber cómo participar",
                  en: "Hi, I want to join VibeLife's walks and find out how to participate.",
                }}
                size="lg"
              >
                {{ es: "Quiero unirme a la caminata", en: "I want to join the walk" }}
              </WhatsAppCta>
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}
