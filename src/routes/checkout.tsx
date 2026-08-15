import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getProduct } from "@/data/products";
import { useI18n } from "@/i18n";
import { MARKETS, shippingFor, useMarket } from "@/lib/markets";
import {
  generateOrderNumber,
  saveOrderReference,
  submitOrder,
  type OrderLineItem,
} from "@/lib/orderService";
import { validateOrderForm, type OrderFormValues } from "@/lib/orderValidation";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Commande | El Wafa Création" },
      { name: "description", content: "Finalisez votre demande de commande." },
      { property: "og:title", content: "Commande | El Wafa Création" },
      { property: "og:description", content: "Demande de commande El Wafa Création." },
    ],
  }),
  component: CheckoutPage,
});

const EMPTY_FORM: OrderFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  countryCode: "FR",
  city: "",
  address: "",
  postalCode: "",
  note: "",
};

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}

function inputClass(hasError?: boolean) {
  return cn(
    "mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground",
    hasError && "border-destructive",
  );
}

function CheckoutPage() {
  const { t, tl, locale } = useI18n();
  const { market, setMarket, formatRaw, convert, currency } = useMarket();
  const { cart, subtotal, clearCart } = useStore();
  const navigate = useNavigate();

  const methods = shippingFor(market.code);
  const [shippingId, setShippingId] = useState(methods[0]!.id);
  const [form, setForm] = useState<OrderFormValues>({ ...EMPTY_FORM, countryCode: market.code });
  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitErrorDetail, setSubmitErrorDetail] = useState<string>("");

  const method = methods.find((m) => m.id === shippingId) ?? methods[0]!;
  const subtotalLocal = convert(subtotal);
  const freeShipping = method.freeOver !== null && subtotalLocal >= method.freeOver;
  const shippingAmount = freeShipping ? 0 : method.price;
  const totalLocal = subtotalLocal + shippingAmount;

  useEffect(() => {
    setForm((prev) => ({ ...prev, countryCode: market.code }));
    setShippingId(shippingFor(market.code)[0]!.id);
  }, [market.code]);

  const errorMessage = useCallback(
    (key: string | undefined) => {
      if (!key) return undefined;
      if (key === "required") return t("checkout.error.required");
      if (key === "invalidEmail") return t("checkout.error.invalidEmail");
      if (key === "invalidPhone") return t("checkout.error.invalidPhone");
      return key;
    },
    [t],
  );

  const orderLines = useMemo(() => {
    return cart
      .map((line) => {
        const p = getProduct(line.productId);
        if (!p) return null;
        const color = p.colors.find((c) => c.id === line.colorId);
        const unitLocal = convert(p.price);
        const lineTotal = unitLocal * line.qty;
        return {
          line,
          product: p,
          color,
          unitPrice: formatRaw(unitLocal),
          lineTotal: formatRaw(lineTotal),
        };
      })
      .filter(Boolean) as Array<{
      line: (typeof cart)[number];
      product: Product;
      color: Product["colors"][number] | undefined;
      unitPrice: string;
      lineTotal: string;
    }>;
  }, [cart, convert, formatRaw]);

  const updateField = (field: keyof OrderFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitError(false);
  };

  const handleCountryChange = (code: typeof market.code) => {
    setMarket(code);
    updateField("countryCode", code);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || cart.length === 0) return;

    const validationErrors = validateOrderForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError(false);

    const orderNumber = generateOrderNumber();
    const marketEntry = MARKETS.find((m) => m.code === form.countryCode)!;
    const lines: OrderLineItem[] = orderLines.map(({ line, product, color, unitPrice, lineTotal }) => ({
      name: tl(product.name),
      size: line.size,
      color: color ? tl(color.name) : "—",
      qty: line.qty,
      unitPrice,
      lineTotal,
    }));

    try {
      await submitOrder({
        orderNumber,
        customer: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
        },
        shipping: {
          country: tl(marketEntry.label),
          countryCode: form.countryCode,
          city: form.city.trim(),
          address: form.address.trim(),
          postalCode: form.postalCode.trim(),
          method: tl(method.label),
        },
        lines,
        totals: {
          subtotal: formatRaw(subtotalLocal),
          shipping: shippingAmount === 0 ? t("cart.free") : formatRaw(shippingAmount),
          total: formatRaw(totalLocal),
          currency,
        },
        note: form.note.trim(),
        locale,
        orderDate: new Date().toLocaleString(locale === "ar" ? "ar-TN" : locale === "it" ? "it-IT" : "fr-FR"),
      });

      saveOrderReference(orderNumber);
      clearCart();
      navigate({ to: "/order/confirmation" });
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : String(error);
      const errStack = error instanceof Error ? error.stack : "no stack";
      console.error("[checkout] submit error:", errMsg);
      console.error("[checkout] submit stack:", errStack);
      setSubmitErrorDetail(`${errMsg}\n\n${errStack}`);
      setSubmitError(true);
      setSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="text-4xl">{t("checkout.title")}</h1>
        <p className="mt-4 text-sm text-muted-foreground">{t("cart.empty")}</p>
        <Link to="/shop" className="link-underline mt-6 inline-block text-xs uppercase">
          {t("cart.continue")}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-8">
      <h1 className="text-4xl">{t("checkout.title")}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{t("checkout.subtitle")}</p>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
        <div className="order-2 space-y-10 lg:order-none">
          <section>
            <h2 className="eyebrow mb-6">{t("checkout.section.personal")}</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label={t("checkout.firstName")} error={errorMessage(errors.firstName)}>
                <input
                  value={form.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className={inputClass(!!errors.firstName)}
                  autoComplete="given-name"
                />
              </Field>
              <Field label={t("checkout.lastName")} error={errorMessage(errors.lastName)}>
                <input
                  value={form.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className={inputClass(!!errors.lastName)}
                  autoComplete="family-name"
                />
              </Field>
              <Field label={t("checkout.email")} error={errorMessage(errors.email)}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={inputClass(!!errors.email)}
                  autoComplete="email"
                />
              </Field>
              <Field label={t("checkout.phone")} error={errorMessage(errors.phone)}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={inputClass(!!errors.phone)}
                  autoComplete="tel"
                />
              </Field>
            </div>
          </section>

          <section>
            <h2 className="eyebrow mb-6">{t("checkout.section.delivery")}</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label={t("checkout.country")}>
                <select
                  value={form.countryCode}
                  onChange={(e) => handleCountryChange(e.target.value as typeof market.code)}
                  className={inputClass()}
                >
                  {MARKETS.map((m) => (
                    <option key={m.code} value={m.code}>
                      {tl(m.label)} — {m.currency}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t("checkout.city")} error={errorMessage(errors.city)}>
                <input
                  value={form.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className={inputClass(!!errors.city)}
                  autoComplete="address-level2"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label={t("checkout.address")} error={errorMessage(errors.address)}>
                  <input
                    value={form.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    className={inputClass(!!errors.address)}
                    autoComplete="street-address"
                  />
                </Field>
              </div>
              <Field label={t("checkout.zip")}>
                <input
                  value={form.postalCode}
                  onChange={(e) => updateField("postalCode", e.target.value)}
                  className={inputClass()}
                  autoComplete="postal-code"
                />
              </Field>
            </div>
          </section>

          <section>
            <h2 className="eyebrow mb-6">{t("checkout.section.shipping")}</h2>
            <div className="space-y-3">
              {methods.map((m) => (
                <label
                  key={m.id}
                  className={cn(
                    "flex cursor-pointer items-center justify-between border p-4 text-sm",
                    shippingId === m.id ? "border-foreground" : "border-border",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={shippingId === m.id}
                      onChange={() => setShippingId(m.id)}
                      className="accent-foreground"
                    />
                    <span>
                      <span className="block">{tl(m.label)}</span>
                      <span className="text-xs text-muted-foreground">{tl(m.eta)}</span>
                    </span>
                  </span>
                  <span>
                    {m.freeOver !== null && subtotalLocal >= m.freeOver
                      ? t("cart.free")
                      : formatRaw(m.price)}
                  </span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <h2 className="eyebrow mb-6">{t("checkout.section.note")}</h2>
            <Field label={t("checkout.comment")}>
              <textarea
                value={form.note}
                onChange={(e) => updateField("note", e.target.value)}
                rows={3}
                className="mt-2 w-full resize-none border border-border bg-transparent p-3 text-sm outline-none focus:border-foreground"
              />
            </Field>
          </section>

          {submitError && (
            <div className="border border-destructive/30 bg-destructive/5 p-4 text-sm">
              <p>{t("checkout.error.submit")}</p>
              {submitErrorDetail ? (
                <pre className="mt-2 text-xs text-muted-foreground overflow-auto max-h-40 whitespace-pre-wrap font-mono">
                  {submitErrorDetail}
                </pre>
              ) : null}
              <button
                type="submit"
                disabled={submitting}
                className="mt-3 border border-border px-6 py-2.5 text-[11px] tracking-[0.18em] uppercase"
              >
                {t("checkout.retry")}
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase disabled:opacity-60 sm:w-auto"
          >
            {submitting ? t("checkout.submitting") : t("checkout.submit")}
          </button>
        </div>

        <aside className="order-1 h-fit border border-border p-6 lg:order-2 lg:sticky lg:top-24">
          <p className="eyebrow mb-6">{t("checkout.summary")}</p>

          <ul className="space-y-4">
            {orderLines.map(({ line, product, color, unitPrice, lineTotal }) => (
              <li
                key={`${line.productId}-${line.size}-${line.colorId}`}
                className="flex gap-3 border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <img
                  src={product.images[0]}
                  alt={tl(product.name)}
                  width={64}
                  height={80}
                  className="size-16 shrink-0 object-cover"
                />
                <div className="min-w-0 flex-1 text-sm">
                  <p className="font-medium">{tl(product.name)}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t("product.size")}: {line.size}
                    {color ? ` · ${t("product.color")}: ${tl(color.name)}` : ""}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t("checkout.qty")}: {line.qty} · {t("checkout.unitPrice")}: {unitPrice}
                  </p>
                  <p className="mt-2 font-medium">{lineTotal}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("cart.subtotal")}</span>
              <span>{formatRaw(subtotalLocal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("cart.shipping")}</span>
              <span>{shippingAmount === 0 ? t("cart.free") : formatRaw(shippingAmount)}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base font-medium">
              <span>{t("cart.total")}</span>
              <span>{formatRaw(totalLocal)}</span>
            </div>
          </div>

          <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
            {t("checkout.noPayment")}
          </p>
        </aside>
      </form>
    </div>
  );
}
