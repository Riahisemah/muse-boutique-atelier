import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Price } from "@/components/Price";
import { useI18n } from "@/i18n";
import { discountPercent, totalStock } from "@/data/products";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { t, tl } = useI18n();
  const { toggleWishlist, isWished, addToCart } = useStore();
  const [quickOpen, setQuickOpen] = useState(false);
  const discount = discountPercent(product);
  const stock = totalStock(product);
  const wished = isWished(product.id);

  const quickAdd = (size: string) => {
    addToCart({
      productId: product.id,
      size,
      colorId: product.colors[0]!.id,
      qty: 1,
    });
    setQuickOpen(false);
    toast.success(t("product.added"), { description: `${tl(product.name)} · ${size}` });
  };

  return (
    <article className="group relative">
      <div className="relative overflow-hidden bg-secondary">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="block"
          aria-label={tl(product.name)}
        >
          <img
            src={product.images[0]}
            alt={tl(product.name)}
            width={1000}
            height={1333}
            loading={priority ? "eager" : "lazy"}
            className="aspect-[3/4] w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:opacity-0"
          />
          <img
            src={product.images[1] ?? product.images[0]}
            alt=""
            aria-hidden
            width={1000}
            height={1333}
            loading="lazy"
            className="absolute inset-0 aspect-[3/4] w-full object-cover opacity-0 transition-opacity duration-[900ms] group-hover:opacity-100"
          />
        </Link>

        <div className="pointer-events-none absolute start-3 top-3 flex flex-col items-start gap-1">
          {product.bestseller && (
            <span className="bg-gold/20 px-2.5 py-1 text-[10px] tracking-[0.18em] text-gold uppercase font-semibold">
              ⭐ {t("product.bestseller")}
            </span>
          )}
          {product.newArrival && (
            <span className="bg-background/95 px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase">
              {t("product.new")}
            </span>
          )}
          {discount !== null && (
            <span className="bg-foreground px-2.5 py-1 text-[10px] tracking-[0.18em] text-primary-foreground uppercase font-semibold">
              -{discount}%
            </span>
          )}
          {stock === 0 && (
            <span className="bg-muted px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase">
              {t("product.soldOut")}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={t("product.wishlist")}
          aria-pressed={wished}
          className="absolute end-3 top-3 grid size-9 place-items-center bg-background/90 transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <Heart
            className={cn("size-4 transition-colors", wished && "fill-foreground text-foreground")}
          />
        </button>

        {stock > 0 && (
          <div className="absolute inset-x-0 bottom-0 hidden translate-y-full p-3 transition-transform duration-500 ease-out group-hover:translate-y-0 md:block">
            {quickOpen ? (
              <div className="flex items-center justify-center gap-1 bg-background/95 p-2">
                {product.sizes.map((s) => (
                  <button
                    key={s.size}
                    type="button"
                    disabled={s.stock === 0}
                    onClick={() => quickAdd(s.size)}
                    className="min-w-9 px-2 py-1.5 text-xs tracking-wide transition-colors hover:bg-foreground hover:text-primary-foreground disabled:opacity-30"
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setQuickOpen(true)}
                className="w-full bg-background/95 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                {t("product.quickAdd")}
              </button>
            )}
          </div>
        )}
      </div>

      <div className="pt-4">
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <h3 className="text-lg leading-snug group-hover:text-gold transition-colors">
            {tl(product.name)}
          </h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <Price price={product.price} compareAt={product.compareAt} className="mt-1" />
          {product.bestseller && (
            <span className="text-[10px] font-semibold tracking-[0.12em] text-gold uppercase">
              ⭐ Best
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
