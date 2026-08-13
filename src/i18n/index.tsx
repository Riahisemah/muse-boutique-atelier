import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Locale, Localized } from "@/types";
import { LOCALES, translations } from "./translations";

export { LOCALES };

interface I18nValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (l: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  tl: (value: Localized | undefined) => string;
}

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "mn.locale";

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "fr";
  const lang = navigator.language.slice(0, 2).toLowerCase();
  if (lang === "ar") return "ar";
  if (lang === "it") return "it";
  return "fr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    setLocaleState(stored ?? detectLocale());
  }, []);

  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      let out = translations[locale][key] ?? translations.fr[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) out = out.replace(`{${k}}`, String(v));
      }
      return out;
    },
    [locale],
  );

  const tl = useCallback(
    (value: Localized | undefined) => (value ? (value[locale] ?? value.fr) : ""),
    [locale],
  );

  const value = useMemo(() => ({ locale, dir, setLocale, t, tl }), [locale, dir, setLocale, t, tl]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
