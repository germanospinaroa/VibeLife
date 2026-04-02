export type Language = "es" | "en";

export type LocalizedString = Record<Language, string>;

export const defaultLanguage: Language = "es";
export const languageStorageKey = "vibelife-language";

export function localize(
  value: LocalizedString,
  language: Language = defaultLanguage,
) {
  return value[language] ?? value[defaultLanguage];
}

export function isLanguage(value: string): value is Language {
  return value === "es" || value === "en";
}
