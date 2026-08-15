import { submitOrderEmail } from "./orderMailer.functions";
import type { Locale, MarketCode } from "@/types";

export interface OrderLineItem {
  name: string;
  size: string;
  color: string;
  qty: number;
  unitPrice: string;
  lineTotal: string;
}

export interface OrderCustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface OrderShipping {
  country: string;
  countryCode: MarketCode;
  city: string;
  address: string;
  postalCode: string;
  method: string;
}

export interface OrderTotals {
  subtotal: string;
  shipping: string;
  total: string;
  currency: string;
}

export interface OrderRequest {
  orderNumber: string;
  customer: OrderCustomer;
  shipping: OrderShipping;
  lines: OrderLineItem[];
  totals: OrderTotals;
  note: string;
  locale: Locale;
  orderDate: string;
}

const ORDER_REF_KEY = "mn.lastOrderRef";

const ORDER_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/** Generates a temporary frontend order reference: ORD-2026-XXXXXX */
export function generateOrderNumber(): string {
  let suffix = "";
  for (let i = 0; i < 6; i++) {
    suffix += ORDER_CHARS[Math.floor(Math.random() * ORDER_CHARS.length)];
  }
  return `ORD-2026-${suffix}`;
}

export function saveOrderReference(orderNumber: string): void {
  sessionStorage.setItem(ORDER_REF_KEY, orderNumber);
}

export function getOrderReference(): string | null {
  return sessionStorage.getItem(ORDER_REF_KEY);
}

export function clearOrderReference(): void {
  sessionStorage.removeItem(ORDER_REF_KEY);
}

/**
 * Submits an order request through the server (SMTP via nodemailer).
 * Sends the admin notification and the client confirmation email.
 */
export async function submitOrder(order: OrderRequest): Promise<void> {
  await submitOrderEmail({ data: order });
}
