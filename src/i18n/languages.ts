// Every interface language the project plans to support.
// `enabled: false` = placeholder: shown in the language switcher as "coming soon",
// but no routes are served for it yet. Flip to `true` (and add messages/<code>.json)
// when a translation is ready — routing picks it up automatically.
export const LANGUAGES = [
  { code: "en", label: "English", enabled: true },
  { code: "ka", label: "ქართული", enabled: false }, // Georgian
  { code: "el", label: "Ελληνικά", enabled: false }, // Greek
  { code: "tr", label: "Türkçe", enabled: false }, // Turkish
  { code: "ru", label: "Русский", enabled: false }, // Russian
] as const;

export const ENABLED_LOCALES = LANGUAGES.filter((l) => l.enabled).map(
  (l) => l.code,
);
