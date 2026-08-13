import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { CurrencyCode, Market, MarketCode, MarketShipping, PaymentMethod } from "@/types";

/** Adding a new country = adding one entry here. */
export const MARKETS: Market[] = [
  {
    code: "TN",
    currency: "TND",
    flag: "🇹🇳",
    rate: 3.35,
    label: { fr: "Tunisie", ar: "تونس", it: "Tunisia" },
  },
  {
    code: "FR",
    currency: "EUR",
    flag: "🇫🇷",
    rate: 1,
    label: { fr: "France", ar: "فرنسا", it: "Francia" },
  },
  {
    code: "IT",
    currency: "EUR",
    flag: "🇮🇹",
    rate: 1,
    label: { fr: "Italie", ar: "إيطاليا", it: "Italia" },
  },
];

export const SHIPPING: MarketShipping[] = [
  {
    market: "TN",
    methods: [
      {
        id: "tn-standard",
        label: { fr: "Livraison standard", ar: "توصيل عادي", it: "Spedizione standard" },
        eta: { fr: "3 – 5 jours", ar: "3 – 5 أيام", it: "3 – 5 giorni" },
        price: 8,
        freeOver: 300,
      },
      {
        id: "tn-express",
        label: { fr: "Livraison express", ar: "توصيل سريع", it: "Spedizione express" },
        eta: { fr: "24 – 48 h", ar: "24 – 48 ساعة", it: "24 – 48 h" },
        price: 15,
        freeOver: null,
      },
    ],
  },
  {
    market: "FR",
    methods: [
      {
        id: "fr-standard",
        label: { fr: "Livraison standard", ar: "توصيل عادي", it: "Spedizione standard" },
        eta: { fr: "3 – 5 jours", ar: "3 – 5 أيام", it: "3 – 5 giorni" },
        price: 6.9,
        freeOver: 100,
      },
      {
        id: "fr-express",
        label: { fr: "Livraison express", ar: "توصيل سريع", it: "Spedizione express" },
        eta: { fr: "48 h", ar: "48 ساعة", it: "48 h" },
        price: 14.9,
        freeOver: null,
      },
    ],
  },
  {
    market: "IT",
    methods: [
      {
        id: "it-standard",
        label: { fr: "Livraison standard", ar: "توصيل عادي", it: "Spedizione standard" },
        eta: { fr: "4 – 6 jours", ar: "4 – 6 أيام", it: "4 – 6 giorni" },
        price: 7.9,
        freeOver: 120,
      },
      {
        id: "it-express",
        label: { fr: "Livraison express", ar: "توصيل سريع", it: "Spedizione express" },
        eta: { fr: "48 – 72 h", ar: "48 – 72 ساعة", it: "48 – 72 h" },
        price: 16.9,
        freeOver: null,
      },
    ],
  },
];

/** Payment provider layer — new providers plug in here, never in components. */
export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "card",
    provider: "stripe",
    label: { fr: "Carte bancaire", ar: "بطاقة بنكية", it: "Carta di credito" },
    markets: ["FR", "IT"],
    enabled: true,
  },
  {
    id: "wallet",
    provider: "stripe",
    label: { fr: "Apple Pay / Google Pay", ar: "Apple Pay / Google Pay", it: "Apple Pay / Google Pay" },
    markets: ["FR", "IT"],
    enabled: true,
  },
  {
    id: "cod",
    provider: "cod",
    label: {
      fr: "Paiement à la livraison",
      ar: "الدفع عند الاستلام",
      it: "Pagamento alla consegna",
    },
    markets: ["TN"],
    enabled: true,
  },
  {
    id: "transfer",
    provider: "bank_transfer",
    label: { fr: "Virement bancaire", ar: "تحويل بنكي", it: "Bonifico bancario" },
    markets: ["TN"],
    enabled: true,
  },
];

export function paymentMethodsFor(market: MarketCode) {
  return PAYMENT_METHODS.filter((m) => m.enabled && m.markets.includes(market));
}

export function shippingFor(market: MarketCode) {
  return SHIPPING.find((s) => s.market === market)!.methods;
}

interface MarketValue {
  market: Market;
  setMarket: (code: MarketCode) => void;
  /** converts a base EUR price into the active market currency */
  convert: (eur: number) => number;
  format: (eur: number) => string;
  formatRaw: (amount: number) => string;
  currency: CurrencyCode;
}

const MarketContext = createContext<MarketValue | null>(null);
const STORAGE_KEY = "mn.market";

function detectMarket(): MarketCode {
  if (typeof Intl === "undefined") return "FR";
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  if (tz.includes("Tunis")) return "TN";
  if (tz.includes("Rome")) return "IT";
  if (tz.includes("Paris")) return "FR";
  const lang = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "fr";
  if (lang.includes("ar") || lang.includes("tn")) return "TN";
  if (lang.includes("it")) return "IT";
  return "FR";
}

export function MarketProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState<MarketCode>("FR");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as MarketCode | null;
    setCode(stored ?? detectMarket());
  }, []);

  const setMarket = useCallback((c: MarketCode) => {
    setCode(c);
    localStorage.setItem(STORAGE_KEY, c);
  }, []);

  const value = useMemo<MarketValue>(() => {
    const market = MARKETS.find((m) => m.code === code)!;
    const convert = (eur: number) => Math.round(eur * market.rate * 100) / 100;
    const formatRaw = (amount: number) => {
      const rounded = market.currency === "TND" ? Math.round(amount) : amount;
      const n = new Intl.NumberFormat(market.currency === "TND" ? "fr-TN" : "fr-FR", {
        minimumFractionDigits: market.currency === "TND" ? 0 : rounded % 1 === 0 ? 0 : 2,
        maximumFractionDigits: market.currency === "TND" ? 0 : 2,
      }).format(rounded);
      return market.currency === "TND" ? `${n} TND` : `${n} €`;
    };
    return {
      market,
      setMarket,
      convert,
      format: (eur: number) => formatRaw(convert(eur)),
      formatRaw,
      currency: market.currency,
    };
  }, [code, setMarket]);

  return <MarketContext.Provider value={value}>{children}</MarketContext.Provider>;
}

export function useMarket() {
  const ctx = useContext(MarketContext);
  if (!ctx) throw new Error("useMarket must be used inside MarketProvider");
  return ctx;
}
