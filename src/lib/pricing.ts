import { PROMOTIONS } from "@/data/admin";
import type { Localized, MarketCode, Promotion, TaxRule } from "@/types";

/**
 * Fiscal rules per market. Displayed prices are always VAT included.
 * The atelier ships from Tunis, so EU markets can incur customs duty
 * above the de minimis threshold (150 € for FR/IT).
 */
export const TAX_RULES: TaxRule[] = [
  { market: "TN", vatRate: 0.19, customsRate: 0, customsFreeUnder: Infinity, customsHandling: 0 },
  { market: "FR", vatRate: 0.2, customsRate: 0.12, customsFreeUnder: 150, customsHandling: 5 },
  { market: "IT", vatRate: 0.22, customsRate: 0.12, customsFreeUnder: 150, customsHandling: 5.9 },
];

export function taxRuleFor(market: MarketCode) {
  return TAX_RULES.find((r) => r.market === market)!;
}

export type PromoError = "unknown" | "expired" | "market" | "min";

export interface PromoResult {
  promo: Promotion | null;
  error: PromoError | null;
  /** minimum subtotal in base EUR, when the error is "min" */
  min?: number;
}

/** Real validation: existence, active flag, date window, market, minimum basket. */
export function validatePromo(
  code: string,
  market: MarketCode,
  subtotalEur: number,
  today = new Date(),
): PromoResult {
  const normalized = code.trim().toUpperCase();
  if (!normalized) return { promo: null, error: "unknown" };
  const promo = PROMOTIONS.find((p) => p.code.toUpperCase() === normalized);
  if (!promo) return { promo: null, error: "unknown" };
  const day = today.toISOString().slice(0, 10);
  if (!promo.active || day < promo.from || day > promo.to) return { promo: null, error: "expired" };
  if (!promo.markets.includes(market)) return { promo: null, error: "market" };
  if (promo.minSubtotal && subtotalEur < promo.minSubtotal)
    return { promo: null, error: "min", min: promo.minSubtotal };
  return { promo, error: null };
}

export interface TotalsInput {
  /** basket subtotal in base EUR */
  subtotalEur: number;
  market: MarketCode;
  /** EUR -> market currency converter */
  convert: (eur: number) => number;
  /** shipping price in market currency */
  shippingPrice: number;
  /** free-shipping threshold in market currency, or null */
  freeOver: number | null;
  promo?: Promotion | null;
}

export interface Totals {
  /** all amounts below are expressed in the market currency */
  subtotal: number;
  discount: number;
  goods: number;
  shipping: number;
  freeShipping: boolean;
  customs: number;
  vat: number;
  excludingVat: number;
  total: number;
  vatRate: number;
  customsApplies: boolean;
}

export function computeTotals({
  subtotalEur,
  market,
  convert,
  shippingPrice,
  freeOver,
  promo,
}: TotalsInput): Totals {
  const rule = taxRuleFor(market);
  const subtotal = convert(subtotalEur);

  let discount = 0;
  if (promo?.type === "percent") discount = (subtotal * promo.value) / 100;
  if (promo?.type === "fixed") discount = Math.min(subtotal, convert(promo.value));
  discount = Math.round(discount * 100) / 100;

  const goods = Math.max(0, subtotal - discount);

  const freeByThreshold = freeOver !== null && goods >= freeOver;
  const freeByPromo = promo?.type === "freeShipping";
  const freeShipping = subtotalEur === 0 || freeByThreshold || freeByPromo;
  const shipping = freeShipping ? 0 : shippingPrice;

  const customsApplies = goods > rule.customsFreeUnder && rule.customsRate > 0;
  const customs = customsApplies
    ? Math.round((goods * rule.customsRate + rule.customsHandling) * 100) / 100
    : 0;

  const total = Math.round((goods + shipping + customs) * 100) / 100;
  const vat = Math.round(((goods + shipping) - (goods + shipping) / (1 + rule.vatRate)) * 100) / 100;

  return {
    subtotal,
    discount,
    goods,
    shipping,
    freeShipping,
    customs,
    vat,
    excludingVat: Math.round((total - customs - vat) * 100) / 100,
    total,
    vatRate: rule.vatRate,
    customsApplies,
  };
}

export function promoLabel(promo: Promotion): Localized {
  if (promo.type === "percent")
    return {
      fr: `-${promo.value}%`,
      ar: `-${promo.value}%`,
      it: `-${promo.value}%`,
    };
  if (promo.type === "fixed")
    return {
      fr: `-${promo.value} € (base)`,
      ar: `-${promo.value} € `,
      it: `-${promo.value} € `,
    };
  return { fr: "Livraison offerte", ar: "توصيل مجاني", it: "Spedizione gratuita" };
}
