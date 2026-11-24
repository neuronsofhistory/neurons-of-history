import { defineRouting } from "next-intl/routing";
import { ENABLED_LOCALES } from "./languages";

export const routing = defineRouting({
  locales: ENABLED_LOCALES,
  defaultLocale: "en",
  // English lives at "/", other languages at "/ka", "/el", ... once enabled.
  localePrefix: "as-needed",
});
