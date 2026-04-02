"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/site";
import { localize } from "@/lib/i18n";

export function ContactForm() {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const defaultInterest = localize(
    {
      es: "Orientación general",
      en: "General guidance",
    },
    language,
  );
  const [interest, setInterest] = useState(defaultInterest);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lines = [
      localize(
        {
          es: "Hola, me gustaría recibir más información sobre VibeLife.",
          en: "Hi, I would like more information about VibeLife.",
        },
        language,
      ),
      `${localize({ es: "Nombre", en: "Name" }, language)}: ${name || localize({ es: "No indicado", en: "Not provided" }, language)}`,
      `${localize({ es: "Email", en: "Email" }, language)}: ${email || localize({ es: "No indicado", en: "Not provided" }, language)}`,
      `${localize({ es: "Interés", en: "Interest" }, language)}: ${interest || defaultInterest}`,
      `${localize({ es: "Mensaje", en: "Message" }, language)}: ${message || localize({ es: "Quiero conocer más sobre las opciones disponibles y cuál puede ajustarse mejor a mí.", en: "I want to know more about the available options and which one may fit me best." }, language)}`,
    ];

    const whatsappHref = getWhatsAppLink(lines.join("\n"));
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="surface-panel rounded-[32px] p-6 sm:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-[#35525b]">
            {localize(
              {
                es: "Nombre",
                en: "Name",
              },
              language,
            )}
          </span>
          <input
            className="mt-2 w-full rounded-2xl border border-[#456F78]/12 bg-white/82 px-4 py-3 text-sm text-[#35525b] outline-none transition focus:border-[#456F78]/30"
            onChange={(event) => setName(event.target.value)}
            placeholder={localize(
              {
                es: "Tu nombre",
                en: "Your name",
              },
              language,
            )}
            value={name}
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#35525b]">Email</span>
          <input
            className="mt-2 w-full rounded-2xl border border-[#456F78]/12 bg-white/82 px-4 py-3 text-sm text-[#35525b] outline-none transition focus:border-[#456F78]/30"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@example.com"
            type="email"
            value={email}
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-[#35525b]">
          {localize(
            {
              es: "Interés principal",
              en: "Main interest",
            },
            language,
          )}
        </span>
        <select
          className="mt-2 w-full rounded-2xl border border-[#456F78]/12 bg-white/82 px-4 py-3 text-sm text-[#35525b] outline-none transition focus:border-[#456F78]/30"
          onChange={(event) => setInterest(event.target.value)}
          value={interest}
        >
          <option>{defaultInterest}</option>
          <option>Rise</option>
          <option>Amalaki</option>
          <option>Accell</option>
          <option>B-Fit</option>
          <option>
            {localize(
              {
                es: "Comunidad",
                en: "Community",
              },
              language,
            )}
          </option>
        </select>
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-[#35525b]">
          {localize(
            {
              es: "Mensaje",
              en: "Message",
            },
            language,
          )}
        </span>
        <textarea
          className="mt-2 min-h-36 w-full rounded-[24px] border border-[#456F78]/12 bg-white/82 px-4 py-3 text-sm text-[#35525b] outline-none transition focus:border-[#456F78]/30"
          onChange={(event) => setMessage(event.target.value)}
          placeholder={localize(
            {
              es: "Cuéntanos qué te gustaría explorar.",
              en: "Tell us what you would like to explore.",
            },
            language,
          )}
          value={message}
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-6 text-muted">
          {localize(
            {
              es: "Este formulario abre WhatsApp con tu mensaje listo para continuar la conversación de inmediato.",
              en: "This form opens WhatsApp with your message prefilled so the conversation can continue right away.",
            },
            language,
          )}
        </p>
        <Button className="sm:min-w-48" type="submit">
          {localize(
            {
              es: "Abrir WhatsApp",
              en: "Open WhatsApp",
            },
            language,
          )}
        </Button>
      </div>
    </form>
  );
}
