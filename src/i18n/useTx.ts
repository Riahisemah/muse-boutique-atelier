import { useCallback } from "react";
import { useI18n } from "@/i18n";
import { EXTRA } from "@/i18n/extra";

/** Translator for the EXTRA dictionary (reviews, promo, taxes, orders, admin). */
export function useTx() {
  const { locale } = useI18n();
  return useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const entry = EXTRA[key];
      let text = entry ? entry[locale] : key;
      if (vars)
        for (const [k, v] of Object.entries(vars)) text = text.replaceAll(`{${k}}`, String(v));
      return text;
    },
    [locale],
  );
}
