"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

const options = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
] as const;

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label="Language selector"
      className="inline-flex items-center rounded-full border border-white/70 bg-white/78 p-0.5 shadow-[0_5px_10px_rgba(62,102,112,0.04)]"
      role="group"
    >
      {options.map((option) => (
        <button
          className={cn(
            "rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] transition sm:px-2.5",
            language === option.code
              ? "bg-[#35525b] text-white"
              : "text-[#5a746d] hover:bg-white",
          )}
          key={option.code}
          onClick={() => setLanguage(option.code)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
