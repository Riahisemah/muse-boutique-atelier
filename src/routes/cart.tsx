import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { Price } from "@/components/Price";
import { getProduct } from "@/data/products";
import { useI18n } from "@/i18n";
import { shippingFor, useMarket } from "@/lib/markets";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Panier | El Wafa Création" },
      { name: "description", content: "Vérifiez votre sélection avant de passer commande." },
      { property: "og:title", content: "Panier | El Wafa Création" },
      { property: "og:description", content: "Votre sélection El Wafa Création." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { t, tl } = useI18n();
  const { cart, updateQty, removeLine, subtotal } = useStore();
  const { market, format, formatRaw, convert } = useMarket();

  const method = shippingFor(market.code)[0]!;
  const subtotalLocal = convert(subtotal);
  const freeShipping = method.freeOver !== null && subtotalLocal >= method.freeOver;
  const shipping = cart.length === 0 || freeShipping ? 0 : method.price;

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="text-4xl">{t("cart.title")}</h1>
        <p className="mt-4 text-sm text-muted-foreground">{t("cart.empty")}</p>
        <div className="mt-8 space-y-3">
          <Link
            to="/shop"
            className="btn-sweep block bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase font-semibold transition-colors hover:text-foreground"
          >
            🛍️ {t("cart.continue")}
          </Link>
          <Link
            to="/shop"
            search={{ sort: "best" }}
            className="block border-2 border-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-foreground hover:text-primary-foreground"
          >
            ⭐ Voir les bestsellers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-8">
      <h1 className="mb-10 text-4xl">{t("cart.title")}</h1>

      {/* Free shipping message */}
      {!freeShipping && method.freeOver !== null && (
        <div className="mb-8 bg-background/80 border border-gold/30 p-4 text-center text-sm">
          <p className="text-foreground font-semibold">
            🎁{" "}
            {t("cart.freeHint", {
              amount: `${format(method.freeOver / market.rate)} ${market.currency}`,
            })}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {t("cart.subtotal")}:{" "}
            <span className="font-semibold text-foreground">{format(subtotalLocal)}</span>
          </p>
        </div>
      )}

      <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
        <ul className="divide-y divide-border">
          {cart.map((line, i) => {
            const p = getProduct(line.productId);
            if (!p) return null;
            const color = p.colors.find((c) => c.id === line.colorId);
            return (
              <li
                key={`${line.productId}-${line.size}-${line.colorId}`}
                className="flex gap-4 py-6"
              >
                <Link to="/product/$slug" params={{ slug: p.slug }} className="shrink-0">
                  <img
                    src={p.images[0]}
                    alt={tl(p.name)}
                    width={120}
                    height={160}
                    loading="lazy"
                    className="w-24 object-cover"
                  />
                </Link>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-lg">{tl(p.name)}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t("product.size")}: {line.size}
                        {color ? ` · ${t("product.color")}: ${tl(color.name)}` : ""}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLine(i)}
                      aria-label={t("cart.remove")}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button
                        type="button"
                        onClick={() => updateQty(i, line.qty - 1)}
                        className="p-2"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{line.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(i, line.qty + 1)}
                        className="p-2"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>
                    <Price
                      price={p.price * line.qty}
                      compareAt={p.compareAt ? p.compareAt * line.qty : null}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="h-fit border border-border p-6">
          <p className="eyebrow mb-6">{t("checkout.summary")}</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("cart.subtotal")}</span>
              <span>{format(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("cart.shipping")}</span>
              <span>{shipping === 0 ? t("cart.free") : formatRaw(shipping)}</span>
            </div>
            {method.freeOver !== null && !freeShipping && (
              <p className="text-xs text-muted-foreground">
                {t("cart.freeHint", { amount: `${method.freeOver} ${market.currency}` })}
              </p>
            )}
            <div className="flex justify-between border-t border-border pt-3 text-base">
              <span>{t("cart.total")}</span>
              <span>{formatRaw(subtotalLocal + shipping)}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="btn-sweep mt-6 block bg-foreground py-4 text-center text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:text-foreground"
          >
            {t("cart.checkout")}
          </Link>
          <Link
            to="/shop"
            className="mt-3 block border border-border py-4 text-center text-[11px] tracking-[0.2em] uppercase"
          >
            {t("cart.continue")}
          </Link>
        </aside>
      </div>
    </div>
  );
}
