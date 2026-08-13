import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct } from "@/data/products";
import { useI18n } from "@/i18n";
import { MARKETS, paymentMethodsFor, shippingFor, useMarket } from "@/lib/markets";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Commande | Maison Noor" },
      { name: "description", content: "Finalisez votre commande en quelques étapes." },
      { property: "og:title", content: "Commande | Maison Noor" },
      { property: "og:description", content: "Checkout sécurisé Maison Noor." },
    ],
  }),
  component: CheckoutPage,
});

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        {...rest}
        className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
      />
    </label>
  );
}

function CheckoutPage() {
  const { t, tl } = useI18n();
  const { market, setMarket, formatRaw, convert, format } = useMarket();
  const { cart, subtotal, clearCart } = useStore();
  const [step, setStep] = useState(0);
  const methods = shippingFor(market.code);
  const [shippingId, setShippingId] = useState(methods[0]!.id);
  const payments = paymentMethodsFor(market.code);
  const [paymentId, setPaymentId] = useState(payments[0]?.id ?? "");

  const method = methods.find((m) => m.id === shippingId) ?? methods[0]!;
  const subtotalLocal = convert(subtotal);
  const freeShipping = method.freeOver !== null && subtotalLocal >= method.freeOver;
  const shipping = freeShipping ? 0 : method.price;
  const steps = [t("checkout.step1"), t("checkout.step2"), t("checkout.step3"), t("checkout.step4"), t("checkout.step5")];

  if (cart.length === 0 && step < 4) {
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

      <ol className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {steps.map((label, i) => (
          <li
            key={label}
            className={cn(
              "text-[11px] tracking-[0.16em] uppercase",
              i === step ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {i + 1}. {label}
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {step === 0 && (
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label={t("checkout.firstName")} />
              <Field label={t("checkout.lastName")} />
              <Field label={t("checkout.email")} type="email" />
              <Field label={t("checkout.phone")} type="tel" />
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow">{t("checkout.country")}</span>
                <select
                  value={market.code}
                  onChange={(e) => setMarket(e.target.value as typeof market.code)}
                  className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none"
                >
                  {MARKETS.map((m) => (
                    <option key={m.code} value={m.code}>
                      {tl(m.label)} — {m.currency}
                    </option>
                  ))}
                </select>
              </label>
              <Field label={t("checkout.city")} />
              <Field label={t("checkout.address")} />
              <Field label={t("checkout.zip")} />
            </div>
          )}

          {step === 2 && (
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
                  <span>{m.freeOver !== null && subtotalLocal >= m.freeOver ? t("cart.free") : formatRaw(m.price)}</span>
                </label>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              {payments.map((p) => (
                <label
                  key={p.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 border p-4 text-sm",
                    paymentId === p.id ? "border-foreground" : "border-border",
                  )}
                >
                  <input
                    type="radio"
                    checked={paymentId === p.id}
                    onChange={() => setPaymentId(p.id)}
                    className="accent-foreground"
                  />
                  {tl(p.label)}
                  <span className="ms-auto text-xs text-muted-foreground">{p.provider}</span>
                </label>
              ))}
              <p className="text-xs text-muted-foreground">{t("trust.payment")}</p>
            </div>
          )}

          {step === 4 && (
            <div className="py-10 text-center">
              <h2 className="text-3xl">{t("checkout.done.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("checkout.done.text")}</p>
              <p className="mt-4 text-sm">
                {t("checkout.order")} MN-{Math.floor(10000 + Math.random() * 9000)}
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-block bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
              >
                {t("checkout.done.cta")}
              </Link>
            </div>
          )}

          {step < 4 && (
            <div className="flex items-center gap-3 pt-4">
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="border border-border px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase"
                >
                  {t("checkout.back")}
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  if (step === 3) clearCart();
                  setStep((s) => s + 1);
                }}
                className="bg-foreground px-8 py-3.5 text-[11px] tracking-[0.18em] text-primary-foreground uppercase"
              >
                {step === 3 ? t("checkout.pay") : t("checkout.next")}
              </button>
            </div>
          )}
        </div>

        {step < 4 && (
          <aside className="h-fit border border-border p-6">
            <p className="eyebrow mb-6">{t("checkout.summary")}</p>
            <ul className="space-y-3 text-sm">
              {cart.map((line) => {
                const p = getProduct(line.productId);
                if (!p) return null;
                return (
                  <li key={`${line.productId}-${line.size}`} className="flex justify-between gap-3">
                    <span className="text-muted-foreground">
                      {tl(p.name)} · {line.size} × {line.qty}
                    </span>
                    <span>{format(p.price * line.qty)}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("cart.shipping")}</span>
                <span>{shipping === 0 ? t("cart.free") : formatRaw(shipping)}</span>
              </div>
              <div className="flex justify-between text-base">
                <span>{t("cart.total")}</span>
                <span>{formatRaw(subtotalLocal + shipping)}</span>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
