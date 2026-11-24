import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const LAYERS = [
  { key: "l1", tag: "L1", color: "var(--layer-l1)" },
  { key: "l2", tag: "L2", color: "var(--layer-l2)" },
  { key: "l3", tag: "L3", color: "var(--layer-l3)" },
  { key: "l4", tag: "L4", color: "var(--layer-l4)" },
  { key: "ref", tag: "Ref", color: "var(--layer-ref)" },
] as const;

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 sm:px-6">
      <header className="flex flex-wrap items-center justify-between gap-3 py-6">
        <span className="font-semibold tracking-tight">{t("Meta.title")}</span>
        <LanguageSwitcher />
      </header>

      <main className="flex-1 py-12 sm:py-20">
        <p className="mb-4 inline-block rounded-full border border-line px-3 py-1 text-xs uppercase tracking-wider text-muted">
          {t("Home.status")}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("Meta.title")}
        </h1>
        <p className="mt-4 text-xl text-muted">{t("Home.tagline")}</p>
        <p className="mt-8 max-w-2xl leading-relaxed">{t("Home.intro")}</p>

        <section className="mt-12 rounded-lg border border-line p-5">
          <h2 className="font-semibold">{t("Home.pilotTitle")}</h2>
          <p className="mt-2 leading-relaxed text-muted">{t("Home.pilotText")}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-semibold">{t("Home.layersTitle")}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {LAYERS.map((layer) => (
              <li key={layer.key} className="flex items-center gap-3">
                <span
                  className="inline-flex h-7 w-10 items-center justify-center rounded text-xs font-semibold text-white"
                  style={{ backgroundColor: layer.color }}
                >
                  {layer.tag}
                </span>
                {t(`Home.layers.${layer.key}`)}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-line py-6 text-sm text-muted">
        {t("Footer.license")}
      </footer>
    </div>
  );
}
