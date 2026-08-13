import { createFileRoute } from "@tanstack/react-router";
import { ShopBrowser } from "@/components/ShopBrowser";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    const title = cat ? `${cat.name.fr} | Maison Noor` : "Catégorie | Maison Noor";
    const description = cat
      ? `Découvrez notre sélection de ${cat.name.fr.toLowerCase()} faites main. Livraison Tunisie, France, Italie.`
      : "Découvrez nos robes faites main.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const { tl } = useI18n();
  const cat = CATEGORIES.find((c) => c.slug === slug);

  const pool =
    slug === "best-sellers"
      ? PRODUCTS.filter((p) => p.bestseller)
      : slug === "nouvelles-collections"
        ? PRODUCTS.filter((p) => p.newArrival)
        : PRODUCTS;

  const isVirtual = slug === "best-sellers" || slug === "nouvelles-collections";

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-8">
      <h1 className="mb-10 text-4xl">{cat ? tl(cat.name) : slug}</h1>
      {isVirtual ? (
        <ShopBrowser key={slug} pool={pool} />
      ) : (
        <ShopBrowser key={slug} pool={pool} initialCategory={slug} />
      )}

    </div>
  );
}
