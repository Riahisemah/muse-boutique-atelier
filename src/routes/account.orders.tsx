import { createFileRoute, Link } from "@tanstack/react-router";
import { ORDERS } from "@/data/admin";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/account/orders")({
  head: () => ({
    meta: [
      { title: "Mes commandes | Maison Noor" },
      { name: "description", content: "Suivez l'état de vos commandes Maison Noor." },
      { property: "og:title", content: "Mes commandes | Maison Noor" },
      { property: "og:description", content: "Historique et suivi de vos commandes." },
    ],
  }),
  component: OrdersPage,
});

function OrdersPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-[1000px] px-6 py-14 md:px-8">
      <h1 className="text-4xl">{t("account.orders")}</h1>
      <ul className="mt-10 divide-y divide-border">
        {ORDERS.slice(0, 4).map((o) => (
          <li key={o.id} className="py-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-lg">{o.id}</span>
              <span className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
                {o.status}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {o.date} · {o.items.map((i) => `${i.name} (${i.size}) ×${i.qty}`).join(", ")} ·{" "}
              {o.total} {o.currency}
            </p>
          </li>
        ))}
      </ul>
      <Link to="/account" className="link-underline mt-10 inline-block text-xs uppercase">
        {t("account.title")}
      </Link>
    </div>
  );
}
