import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CUSTOMERS, ORDERS, PROMOTIONS, REVENUE_BY_MONTH } from "@/data/admin";
import { PRODUCTS, totalStock } from "@/data/products";
import { useI18n } from "@/i18n";
import { MARKETS, SHIPPING } from "@/lib/markets";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Administration | El Wafa Création" },
      { name: "description", content: "Tableau de bord : produits, stock, commandes, clients, promotions." },
      { property: "og:title", content: "Administration | El Wafa Création" },
      { property: "og:description", content: "Dashboard interne El Wafa Création." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const { t, tl } = useI18n();
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    Object.values(p.name).join(" ").toLowerCase().includes(query.toLowerCase()),
  );
  const revenue = ORDERS.filter((o) => o.paymentStatus === "paid").reduce(
    (n, o) => n + (o.currency === "TND" ? o.total / 3.35 : o.total),
    0,
  );

  const togglePublish = (id: string) =>
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: p.status === "published" ? "draft" : "published" } : p,
      ),
    );

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-8">
      <h1 className="text-4xl">{t("admin.title")}</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: t("admin.revenue"), value: `${Math.round(revenue)} €` },
          { label: t("admin.orders"), value: ORDERS.length },
          { label: t("admin.products"), value: products.length },
          { label: t("admin.customers"), value: CUSTOMERS.length },
        ].map((kpi) => (
          <div key={kpi.label} className="border border-border p-5">
            <p className="eyebrow">{kpi.label}</p>
            <p className="mt-2 font-display text-3xl">{kpi.value}</p>
          </div>
        ))}
      </div>

      <Tabs defaultValue="products" className="mt-10">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="products">{t("admin.products")}</TabsTrigger>
          <TabsTrigger value="stock">{t("admin.stock")}</TabsTrigger>
          <TabsTrigger value="orders">{t("admin.orders")}</TabsTrigger>
          <TabsTrigger value="customers">{t("admin.customers")}</TabsTrigger>
          <TabsTrigger value="promotions">{t("admin.promotions")}</TabsTrigger>
          <TabsTrigger value="shipping">{t("admin.shippingRules")}</TabsTrigger>
          <TabsTrigger value="i18n">{t("admin.translations")}</TabsTrigger>
          <TabsTrigger value="overview">{t("admin.overview")}</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("admin.search")}
              className="flex-1 border-b border-border bg-transparent py-2 text-sm outline-none"
            />
            <button
              type="button"
              onClick={() => toast.success(t("admin.newProduct"))}
              className="bg-foreground px-5 py-2.5 text-[11px] tracking-[0.16em] text-primary-foreground uppercase"
            >
              {t("admin.newProduct")}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-start eyebrow">
                  <th className="py-3 text-start">SKU</th>
                  <th className="py-3 text-start">FR / AR / IT</th>
                  <th className="py-3 text-start">{t("admin.price")}</th>
                  <th className="py-3 text-start">{t("admin.stockLabel")}</th>
                  <th className="py-3 text-start">{t("admin.status")}</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.id} className="border-b border-border">
                    <td className="py-3">{p.sku}</td>
                    <td className="py-3">
                      {p.name.fr} · {p.name.ar} · {p.name.it}
                    </td>
                    <td className="py-3">
                      {p.compareAt ? (
                        <span>
                          <s className="text-muted-foreground">{p.compareAt} €</s> {p.price} €
                        </span>
                      ) : (
                        `${p.price} €`
                      )}
                    </td>
                    <td className="py-3">{totalStock(p)}</td>
                    <td className="py-3">
                      <span
                        className={cn(
                          "text-xs tracking-[0.12em] uppercase",
                          p.status === "published" ? "text-foreground" : "text-muted-foreground",
                        )}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3 text-end">
                      <button
                        type="button"
                        onClick={() => togglePublish(p.id)}
                        className="text-xs tracking-[0.12em] uppercase hover:opacity-60"
                      >
                        {p.status === "published" ? t("admin.unpublish") : t("admin.publish")}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="stock" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className="border border-border p-5">
              <p className="text-sm">{tl(p.name)}</p>
              <p className="eyebrow mt-1">{p.sku}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {p.sizes.map((s) => (
                  <li key={s.size} className="flex justify-between">
                    <span>{s.size}</span>
                    <span className={cn(s.stock === 0 && "text-destructive")}>{s.stock}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                {p.colors.map((c) => tl(c.name)).join(" · ")}
              </p>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="orders" className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border eyebrow">
                <th className="py-3 text-start">#</th>
                <th className="py-3 text-start">{t("admin.customers")}</th>
                <th className="py-3 text-start">{t("checkout.country")}</th>
                <th className="py-3 text-start">{t("cart.total")}</th>
                <th className="py-3 text-start">{t("checkout.step4")}</th>
                <th className="py-3 text-start">{t("admin.status")}</th>
                <th className="py-3 text-start">Date</th>
              </tr>
            </thead>
            <tbody>
              {ORDERS.map((o) => (
                <tr key={o.id} className="border-b border-border">
                  <td className="py-3">{o.id}</td>
                  <td className="py-3">{o.customer}</td>
                  <td className="py-3">{o.market}</td>
                  <td className="py-3">
                    {o.total} {o.currency}
                  </td>
                  <td className="py-3">{o.paymentStatus}</td>
                  <td className="py-3">{o.status}</td>
                  <td className="py-3">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>

        <TabsContent value="customers" className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border eyebrow">
                <th className="py-3 text-start">Nom</th>
                <th className="py-3 text-start">Email</th>
                <th className="py-3 text-start">Tél.</th>
                <th className="py-3 text-start">{t("checkout.country")}</th>
                <th className="py-3 text-start">{t("admin.orders")}</th>
                <th className="py-3 text-start">Total</th>
              </tr>
            </thead>
            <tbody>
              {CUSTOMERS.map((c) => (
                <tr key={c.id} className="border-b border-border">
                  <td className="py-3">{c.name}</td>
                  <td className="py-3">{c.email}</td>
                  <td className="py-3">{c.phone}</td>
                  <td className="py-3">{c.market}</td>
                  <td className="py-3">{c.orders}</td>
                  <td className="py-3">
                    {c.spent} {c.currency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>

        <TabsContent value="promotions" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROMOTIONS.map((p) => (
            <div key={p.id} className="border border-border p-5">
              <div className="flex items-center justify-between">
                <p className="font-display text-2xl">{p.code}</p>
                <span className="text-xs tracking-[0.12em] uppercase text-muted-foreground">
                  {p.active ? "active" : "inactive"}
                </span>
              </div>
              <p className="mt-2 text-sm">
                {p.type === "percent" ? `-${p.value}%` : `-${p.value}`}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {p.from} → {p.to} · {p.markets.join(", ")}
              </p>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="shipping" className="mt-6 space-y-6">
          {SHIPPING.map((g) => (
            <div key={g.market} className="border border-border p-5">
              <p className="eyebrow">{tl(MARKETS.find((m) => m.code === g.market)!.label)}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {g.methods.map((m) => (
                  <li key={m.id} className="flex flex-wrap justify-between gap-2">
                    <span>
                      {tl(m.label)} · {tl(m.eta)}
                    </span>
                    <span className="text-muted-foreground">
                      {m.price} · {m.freeOver ? `free > ${m.freeOver}` : "—"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="i18n" className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border eyebrow">
                <th className="py-3 text-start">SKU</th>
                <th className="py-3 text-start">FR</th>
                <th className="py-3 text-start">AR</th>
                <th className="py-3 text-start">IT</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-border align-top">
                  <td className="py-3">{p.sku}</td>
                  <td className="py-3">{p.name.fr}</td>
                  <td className="py-3">{p.name.ar}</td>
                  <td className="py-3">{p.name.it}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>

        <TabsContent value="overview" className="mt-6">
          <div className="border border-border p-6">
            <p className="eyebrow">{t("admin.revenue")} (EUR)</p>
            <div className="mt-6 flex h-48 items-end gap-4">
              {REVENUE_BY_MONTH.map((m) => (
                <div key={m.month} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full bg-accent"
                    style={{ height: `${(m.eur / 24000) * 100}%` }}
                  />
                  <span className="text-xs text-muted-foreground">{m.month}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
