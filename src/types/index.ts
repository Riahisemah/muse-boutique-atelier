export type Locale = "fr" | "ar" | "it";
export type CurrencyCode = "EUR" | "TND";
export type MarketCode = "TN" | "FR" | "IT";

export type Localized = Record<Locale, string>;

export interface Market {
  code: MarketCode;
  currency: CurrencyCode;
  flag: string;
  label: Localized;
  /** rate applied to the base EUR price */
  rate: number;
}

export interface ShippingMethod {
  id: string;
  label: Localized;
  eta: Localized;
  price: number; // in market currency
  freeOver: number | null;
}

export interface MarketShipping {
  market: MarketCode;
  methods: ShippingMethod[];
}

export interface PaymentMethod {
  id: string;
  provider: "stripe" | "cod" | "bank_transfer" | "manual";
  label: Localized;
  markets: MarketCode[];
  enabled: boolean;
}

export interface ProductColor {
  id: string;
  name: Localized;
  hex: string;
}

export interface SizeStock {
  size: string;
  stock: number;
}

export interface Category {
  slug: string;
  name: Localized;
  image: string;
}

export interface Collection {
  slug: string;
  name: Localized;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: Localized;
  description: Localized;
  category: string;
  collection: string;
  images: string[];
  /** base price in EUR */
  price: number;
  /** base compare-at (original) price in EUR, when on sale */
  compareAt: number | null;
  promoEndsAt?: string;
  colors: ProductColor[];
  sizes: SizeStock[];
  status: "published" | "draft";
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
  popularity: number;
  createdAt: string;
  details: {
    composition: Localized;
    fabric: Localized;
    fit: Localized;
    care: Localized;
    origin: Localized;
  };
  seo: { title: Localized; description: Localized };
}

export interface CartLine {
  productId: string;
  size: string;
  colorId: string;
  qty: number;
}

export type OrderStatus =
  | "pending"
  | "paid"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export interface OrderEvent {
  status: OrderStatus;
  date: string;
  label: Localized;
}

export interface OrderLine {
  name: string;
  qty: number;
  size: string;
  /** unit price in the order currency */
  unitPrice: number;
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  market: MarketCode;
  currency: CurrencyCode;
  items: OrderLine[];
  total: number;
  paymentStatus: "pending" | "paid" | "refunded";
  status: OrderStatus;
  date: string;
  /** shipping address block, used on the invoice */
  address?: string;
  shippingLabel?: Localized;
  shippingCost?: number;
  discount?: number;
  customs?: number;
  vat?: number;
  carrier?: string;
  trackingNumber?: string;
  eta?: string;
  timeline?: OrderEvent[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  market: MarketCode;
  orders: number;
  spent: number;
  currency: CurrencyCode;
}

export interface Promotion {
  id: string;
  code: string;
  type: "percent" | "fixed" | "freeShipping";
  value: number;
  from: string;
  to: string;
  markets: MarketCode[];
  active: boolean;
  /** minimum subtotal in base EUR */
  minSubtotal?: number;
}

export interface TaxRule {
  market: MarketCode;
  /** VAT rate applied (prices are displayed VAT included) */
  vatRate: number;
  /** customs/duty rate applied on the goods value */
  customsRate: number;
  /** no customs below this amount (market currency) */
  customsFreeUnder: number;
  /** flat customs handling fee (market currency) */
  customsHandling: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  market: MarketCode;
  rating: number;
  date: string;
  title: string;
  body: string;
  size?: string;
  verified: boolean;
}

