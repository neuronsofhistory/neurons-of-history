import { getLocale, getTranslations } from "next-intl/server";
import { LANGUAGES } from "@/i18n/languages";
import { Link } from "@/i18n/navigation";

// Lists every planned interface language. Enabled ones are links;
// placeholders are shown greyed out as "coming soon".
export async function LanguageSwitcher() {
  const t = await getTranslations("LanguageSwitcher");
  const current = await getLocale();

  return (
    <nav aria-label={t("label")} className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
      {LANGUAGES.map((lang) =>
        lang.enabled ? (
          <Link
            key={lang.code}
            href="/"
            locale={lang.code}
            lang={lang.code}
            aria-current={lang.code === current ? "true" : undefined}
            className={
              lang.code === current
                ? "font-semibold underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            {lang.label}
          </Link>
        ) : (
          <span
            key={lang.code}
            lang={lang.code}
            aria-disabled="true"
            title={t("soon")}
            className="cursor-not-allowed text-muted"
          >
            {lang.label}
          </span>
        ),
      )}
    </nav>
  );
}
