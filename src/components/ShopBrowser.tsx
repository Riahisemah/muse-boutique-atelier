import { SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { ALL_COLORS, ALL_SIZES, CATEGORIES, COLLECTIONS, PRODUCTS } from "@/data/products";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

export type SortKey = "new" | "priceAsc" | "priceDesc" | "popular" | "best";

const PAGE = 6;

export function ShopBrowser({
  initialCategory,
  initialSort = "new",
  pool = PRODUCTS,
}: {
  initialCategory?: string;
  initialSort?: SortKey;
  pool?: Product[];
}) {
  const { t, tl } = useI18n();
  const [category, setCategory] = useState<string | null>(initialCategory ?? null);
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [collection, setCollection] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState(400);
  const [inStock, setInStock] = useState(false);
  const [onSale, setOnSale] = useState(false);
  const [sort, setSort] = useState<SortKey>(initialSort);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE);
  const [drawer, setDrawer] = useState(false);

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    let list = pool.filter((p) => p.status === "published");
    if (category) list = list.filter((p) => p.category === category);
    if (collection) list = list.filter((p) => p.collection === collection);
    if (sizes.length)
      list = list.filter((p) => p.sizes.some((s) => sizes.includes(s.size) && s.stock > 0));
    if (colors.length) list = list.filter((p) => p.colors.some((c) => colors.includes(c.id)));
    if (inStock) list = list.filter((p) => p.sizes.some((s) => s.stock > 0));
    if (onSale) list = list.filter((p) => !!p.compareAt);
    list = list.filter((p) => p.price <= maxPrice);
    if (term)
      list = list.filter((p) =>
        Object.values(p.name).join(" ").toLowerCase().includes(term),
      );
    const sorted = [...list];
    if (sort === "priceAsc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "popular") sorted.sort((a, b) => b.popularity - a.popularity);
    if (sort === "best")
      sorted.sort((a, b) => Number(b.bestseller) - Number(a.bestseller) || b.popularity - a.popularity);
    if (sort === "new") sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return sorted;
  }, [pool, category, collection, sizes, colors, inStock, onSale, maxPrice, query, sort]);

  const clear = () => {
    setCategory(initialCategory ?? null);
    setSizes([]);
    setColors([]);
    setCollection(null);
    setMaxPrice(400);
    setInStock(false);
    setOnSale(false);
    setQuery("");
  };

  const filters = (
    <div className="space-y-8">
      <div>
        <p className="eyebrow mb-3">{t("shop.filter.category")}</p>
        <div className="space-y-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCategory(category === c.slug ? null : c.slug)}
              className={cn(
                "block text-start text-sm transition-colors",
                category === c.slug ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tl(c.name)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">{t("shop.filter.size")}</p>
        <div className="flex flex-wrap gap-2">
          {ALL_SIZES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggle(sizes, setSizes, s)}
              className={cn(
                "min-w-10 border border-border px-3 py-1.5 text-xs",
                sizes.includes(s) && "bg-foreground text-primary-foreground",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">{t("shop.filter.color")}</p>
        <div className="flex flex-wrap gap-2">
          {ALL_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-label={tl(c.name)}
              onClick={() => toggle(colors, setColors, c.id)}
              style={{ backgroundColor: c.hex }}
              className={cn(
                "size-7 rounded-full border border-border transition-transform",
                colors.includes(c.id) && "ring-1 ring-foreground ring-offset-2",
              )}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">{t("shop.filter.collection")}</p>
        <div className="space-y-2">
          {COLLECTIONS.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCollection(collection === c.slug ? null : c.slug)}
              className={cn(
                "block text-start text-sm transition-colors",
                collection === c.slug ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tl(c.name)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">{t("shop.filter.price")}</p>
        <input
          type="range"
          min={80}
          max={400}
          step={10}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-foreground"
        />
        <p className="mt-1 text-xs text-muted-foreground">≤ {maxPrice} € (base)</p>
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
            className="accent-foreground"
          />
          {t("shop.filter.inStock")}
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={onSale}
            onChange={(e) => setOnSale(e.target.checked)}
            className="accent-foreground"
          />
          {t("shop.filter.promo")}
        </label>
      </div>

      <button type="button" onClick={clear} className="link-underline text-xs tracking-[0.16em] uppercase">
        {t("shop.clear")}
      </button>
    </div>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
      <aside className="hidden lg:block">{filters}</aside>

      <div>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search.placeholder")}
            className="min-w-40 flex-1 border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
          />
          <button
            type="button"
            onClick={() => setDrawer(true)}
            className="flex items-center gap-2 border border-border px-4 py-2 text-xs tracking-[0.14em] uppercase lg:hidden"
          >
            <SlidersHorizontal className="size-3.5" />
            {t("shop.filters")}
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-border bg-transparent px-3 py-2 text-xs tracking-[0.12em] uppercase"
            aria-label={t("shop.sort")}
          >
            <option value="new">{t("shop.sort.new")}</option>
            <option value="priceAsc">{t("shop.sort.priceAsc")}</option>
            <option value="priceDesc">{t("shop.sort.priceDesc")}</option>
            <option value="popular">{t("shop.sort.popular")}</option>
            <option value="best">{t("shop.sort.best")}</option>
          </select>
          <span className="text-xs text-muted-foreground">
            {t("shop.results", { count: results.length })}
          </span>
        </div>

        {results.length === 0 ? (
          <p className="py-20 text-center text-sm text-muted-foreground">{t("shop.empty")}</p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3">
              {results.slice(0, visible).map((p, i) => (
                <Reveal key={p.id} delay={i * 50}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
            {visible < results.length && (
              <div className="mt-14 text-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE)}
                  className="border border-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground"
                >
                  {t("shop.loadMore")}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {drawer && (
        <div className="fixed inset-0 z-100 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setDrawer(false)} />
          <div className="absolute inset-y-0 end-0 w-[85%] max-w-sm overflow-y-auto bg-background p-6">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-display text-xl">{t("shop.filters")}</p>
              <button type="button" onClick={() => setDrawer(false)} className="text-sm">
                ✕
              </button>
            </div>
            {filters}
            <button
              type="button"
              onClick={() => setDrawer(false)}
              className="mt-8 w-full bg-foreground py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
            >
              {t("shop.apply")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
