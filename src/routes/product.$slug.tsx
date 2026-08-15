import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Heart, Minus, Plus, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Price } from "@/components/Price";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CATEGORIES, PRODUCTS, discountPercent, getProductBySlug } from "@/data/products";
import { useI18n } from "@/i18n";
import { shippingFor, useMarket } from "@/lib/markets";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { ProductReviews } from "@/components/ProductReviews";


export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => {
    const p = getProductBySlug(params.slug);
    const title = p?.seo.title.fr ?? "Robe | El Wafa Création";
    const description = p?.seo.description.fr ?? "Robe faite main — El Wafa Création.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const { t, tl } = useI18n();
  const { market, format } = useMarket();
  const { addToCart, toggleWishlist, isWished } = useStore();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  const [size, setSize] = useState<string | null>(null);
  const [colorId, setColorId] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [zoom, setZoom] = useState(false);

  const similar = useMemo(
    () =>
      product
        ? PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category)
            .concat(PRODUCTS.filter((p) => p.id !== product.id))
            .slice(0, 4)
        : [],
    [product],
  );

  if (!product) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="text-3xl">{t("shop.empty")}</h1>
        <Link to="/shop" className="link-underline mt-6 inline-block text-xs uppercase">
          {t("cart.continue")}
        </Link>
      </div>
    );
  }

  const color = colorId ?? product.colors[0]!.id;
  const discount = discountPercent(product);
  const sizeStock = product.sizes.find((s) => s.size === size)?.stock ?? 0;
  const category = CATEGORIES.find((c) => c.slug === product.category);
  const methods = shippingFor(market.code);

  const add = (buyNow = false) => {
    if (!size) {
      toast.error(t("product.selectSize"));
      return;
    }
    addToCart({ productId: product.id, size, colorId: color, qty });
    toast.success(t("product.added"), { description: `${tl(product.name)} · ${size}` });
    if (buyNow) navigate({ to: "/checkout" });
  };

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-8">
      <nav className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          El Wafa
        </Link>
        <span>/</span>
        {category && (
          <>
            <Link
              to="/category/$slug"
              params={{ slug: category.slug }}
              className="hover:text-foreground"
            >
              {tl(category.name)}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-foreground">{tl(product.name)}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div
            className={cn("overflow-hidden bg-secondary", zoom && "cursor-zoom-out")}
            onClick={() => setZoom((z) => !z)}
          >
            <img
              src={product.images[activeImage]}
              alt={tl(product.name)}
              width={1000}
              height={1333}
              className={cn(
                "aspect-[3/4] w-full object-cover transition-transform duration-700",
                zoom ? "scale-150" : "scale-100 cursor-zoom-in",
              )}
            />
          </div>
          <div className="mt-3 flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img + i}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn("w-20 border", i === activeImage ? "border-foreground" : "border-transparent")}
              >
                <img src={img} alt="" width={80} height={107} loading="lazy" className="aspect-[3/4] object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-3">
            {product.newArrival && <span className="eyebrow">{t("product.new")}</span>}
            {discount !== null && (
              <span className="bg-foreground px-2 py-1 text-[10px] tracking-[0.16em] text-primary-foreground uppercase">
                -{discount}%
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl">{tl(product.name)}</h1>
          <div className="mt-4">
            <Price price={product.price} compareAt={product.compareAt} size="lg" />
          </div>
          {product.promoEndsAt && discount !== null && (
            <p className="mt-2 text-xs text-muted-foreground">
              {t("product.promoEnds", { date: product.promoEndsAt })}
            </p>
          )}

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            {tl(product.description)}
          </p>

          <div className="mt-8">
            <p className="eyebrow mb-3">{t("product.color")}</p>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-label={tl(c.name)}
                  onClick={() => setColorId(c.id)}
                  style={{ backgroundColor: c.hex }}
                  className={cn(
                    "size-8 rounded-full border border-border",
                    color === c.id && "ring-1 ring-foreground ring-offset-2",
                  )}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <p className="eyebrow">{t("product.size")}</p>
              <span className="text-xs text-muted-foreground">{t("product.sizeGuide")}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s.size}
                  type="button"
                  disabled={s.stock === 0}
                  onClick={() => setSize(s.size)}
                  className={cn(
                    "min-w-14 border border-border py-3 text-xs tracking-[0.1em]",
                    size === s.size && "bg-foreground text-primary-foreground",
                    s.stock === 0 && "text-muted-foreground line-through opacity-40",
                  )}
                >
                  {s.size}
                </button>
              ))}
            </div>
            {size && (
              <p className="mt-2 text-xs text-muted-foreground">
                {sizeStock === 0
                  ? t("product.outOfStock")
                  : sizeStock <= 3
                    ? t("product.lowStock")
                    : t("product.inStock")}
              </p>
            )}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-border">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3">
                <Minus className="size-3.5" />
              </button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button type="button" onClick={() => setQty((q) => Math.min(10, q + 1))} className="p-3">
                <Plus className="size-3.5" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-label={t("product.wishlist")}
              className="grid size-12 place-items-center border border-border transition-transform hover:scale-105"
            >
              <Heart className={cn("size-4", isWished(product.id) && "fill-foreground")} />
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => add()}
              className="bg-foreground py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-85"
            >
              {t("product.addToCart")}
            </button>
            <button
              type="button"
              onClick={() => add(true)}
              className="border border-foreground py-4 text-[11px] tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              {t("product.buyNow")}
            </button>
          </div>

          <div className="mt-6 space-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
            {methods.map((m) => (
              <p key={m.id} className="flex items-center gap-2">
                <Truck className="size-3.5" />
                {tl(m.label)} — {tl(m.eta)} · {m.price === 0 ? t("cart.free") : format(m.price / market.rate)}
                {m.freeOver ? ` · ${t("cart.freeHint", { amount: `${m.freeOver} ${market.currency}` })}` : ""}
              </p>
            ))}
            <p>{t("product.sku")}: {product.sku}</p>
          </div>

          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="info">
              <AccordionTrigger className="text-xs tracking-[0.16em] uppercase">
                {t("product.info")}
              </AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">{t("product.composition")}:</strong>{" "}
                  {tl(product.details.composition)}
                </p>
                <p>
                  <strong className="text-foreground">{t("product.fabric")}:</strong>{" "}
                  {tl(product.details.fabric)}
                </p>
                <p>
                  <strong className="text-foreground">{t("product.fit")}:</strong>{" "}
                  {tl(product.details.fit)}
                </p>
                <p>
                  <strong className="text-foreground">{t("product.care")}:</strong>{" "}
                  {tl(product.details.care)}
                </p>
                <p>
                  <strong className="text-foreground">{t("product.origin")}:</strong>{" "}
                  {tl(product.details.origin)}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <ProductReviews product={product} />


      <section className="mt-24">
        <h2 className="mb-10 text-3xl">{t("product.similar")}</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {similar.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
