import { createFileRoute } from "@tanstack/react-router";
import { ShopBrowser, type SortKey } from "@/components/ShopBrowser";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): { sort: SortKey } => ({
    sort: (search["sort"] as SortKey | undefined) ?? "new",
  }),
  head: () => ({
    meta: [
      { title: "Boutique — Robes de couture en série limitée | Maison Noor" },
      {
        name: "description",
        content:
          "Parcourez toutes nos robes : soirée, cérémonie, casual. Filtrez par taille, couleur, prix et collection. Prix en EUR ou TND.",
      },
      { property: "og:title", content: "Boutique Maison Noor" },
      {
        property: "og:description",
        content: "Toutes nos robes faites main, filtrables par taille, couleur et collection.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { t } = useI18n();
  const { sort } = Route.useSearch();

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-8">
      <h1 className="mb-10 text-4xl">{t("shop.title")}</h1>
      <ShopBrowser initialSort={sort} />
    </div>
  );
}
