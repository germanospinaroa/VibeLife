"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  defaultLanguage,
  isLanguage,
  languageStorageKey,
  type Language,
} from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageChangeEvent = "vibelife-language-change";

function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);
  if (storedLanguage && isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];

  const hasEnglishPreference = browserLanguages.some((language) =>
    language.toLowerCase().startsWith("en"),
  );

  return hasEnglishPreference ? "en" : defaultLanguage;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener(languageChangeEvent, handler);

  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(languageChangeEvent, handler);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    detectBrowserLanguage,
    () => defaultLanguage,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage: Language) => {
        if (typeof window === "undefined") {
          return;
        }

        window.localStorage.setItem(languageStorageKey, nextLanguage);
        window.dispatchEvent(new Event(languageChangeEvent));
      },
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
