import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { getProduct } from "@/data/products";
import { useI18n } from "@/i18n";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Mes favoris | Maison Noor" },
      { name: "description", content: "Retrouvez les robes que vous avez sauvegardées." },
      { property: "og:title", content: "Mes favoris | Maison Noor" },
      { property: "og:description", content: "Vos robes favorites Maison Noor." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { t } = useI18n();
  const { wishlist } = useStore();
  const items = wishlist.map(getProduct).filter((p) => !!p);

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-8">
      <h1 className="mb-10 text-4xl">{t("wishlist.title")}</h1>
      {items.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-sm text-muted-foreground">{t("wishlist.empty")}</p>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
          >
            {t("cart.continue")}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p!.id} product={p!} />
          ))}
        </div>
      )}
    </div>
  );
}
