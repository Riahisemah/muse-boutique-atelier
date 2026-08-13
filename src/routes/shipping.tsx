import { createFileRoute } from "@tanstack/react-router";
import { MARKETS, SHIPPING } from "@/lib/markets";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Livraison — Tunisie, France, Italie | Maison Noor" },
      {
        name: "description",
        content:
          "Tarifs, délais et seuils de livraison gratuite pour la Tunisie, la France et l'Italie.",
      },
      { property: "og:title", content: "Livraison | Maison Noor" },
      { property: "og:description", content: "Tarifs et délais par pays." },
    ],
  }),
  component: ShippingPage,
});

function ShippingPage() {
  const { t, tl } = useI18n();
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl">{t("pages.shipping.title")}</h1>
      <div className="mt-10 space-y-10">
        {SHIPPING.map((group) => {
          const market = MARKETS.find((m) => m.code === group.market)!;
          return (
            <section key={group.market}>
              <p className="eyebrow">
                {market.flag} {tl(market.label)} — {market.currency}
              </p>
              <ul className="mt-4 divide-y divide-border">
                {group.methods.map((m) => (
                  <li key={m.id} className="flex flex-wrap justify-between gap-2 py-3 text-sm">
                    <span>
                      {tl(m.label)} <span className="text-muted-foreground">· {tl(m.eta)}</span>
                    </span>
                    <span className="text-muted-foreground">
                      {m.price} {market.currency}
                      {m.freeOver
                        ? ` · ${t("cart.freeHint", { amount: `${m.freeOver} ${market.currency}` })}`
                        : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
