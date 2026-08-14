import { useState } from "react";
import { toast } from "sonner";
import { Stars, StarPicker } from "@/components/Stars";
import { useTx } from "@/i18n/useTx";
import { useMarket } from "@/lib/markets";
import { useReviews } from "@/lib/reviews";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

export function RatingBadge({ productId, className }: { productId: string; className?: string }) {
  const { summary } = useReviews();
  const tx = useTx();
  const { count, average } = summary(productId);
  if (count === 0) return null;
  return (
    <span className={cn("inline-flex items-center gap-2 text-xs text-muted-foreground", className)}>
      <Stars rating={average} size={12} />
      <span>{tx("reviews.count", { count })}</span>
    </span>
  );
}

export function ProductReviews({ product }: { product: Product }) {
  const tx = useTx();
  const { market } = useMarket();
  const { forProduct, summary, addReview } = useReviews();
  const reviews = forProduct(product.id);
  const { count, average, distribution } = summary(product.id);

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [size, setSize] = useState(product.sizes[0]?.size ?? "");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !body.trim()) {
      toast.error(tx("reviews.required"));
      return;
    }
    addReview({
      productId: product.id,
      author: author.trim(),
      market: market.code,
      rating,
      title: title.trim() || tx("reviews.noTitle"),
      body: body.trim(),
      size,
    });
    setAuthor("");
    setTitle("");
    setBody("");
    setRating(5);
    setOpen(false);
    toast.success(tx("reviews.thanks"));
  };

  return (
    <section className="mt-24 border-t border-border pt-16">
      <h2 className="text-3xl">{tx("reviews.title")}</h2>

      <div className="mt-8 grid gap-10 lg:grid-cols-[280px_1fr]">
        <div>
          {count > 0 ? (
            <>
              <div className="flex items-end gap-3">
                <span className="font-display text-5xl">{average.toFixed(1)}</span>
                <span className="pb-2 text-sm text-muted-foreground">/ 5</span>
              </div>
              <Stars rating={average} size={18} className="mt-2" />
              <p className="mt-2 text-xs text-muted-foreground">
                {tx("reviews.based", { count })}
              </p>
              <ul className="mt-6 space-y-1.5">
                {[5, 4, 3, 2, 1].map((star) => {
                  const n = distribution[star] ?? 0;
                  return (
                    <li key={star} className="flex items-center gap-3 text-xs">
                      <span className="w-3 text-muted-foreground">{star}</span>
                      <span className="h-1.5 flex-1 bg-secondary">
                        <span
                          className="block h-full bg-gold"
                          style={{ width: `${count ? (n / count) * 100 : 0}%` }}
                        />
                      </span>
                      <span className="w-5 text-end text-muted-foreground">{n}</span>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">{tx("reviews.empty")}</p>
          )}

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="mt-8 w-full border border-foreground py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            {tx("reviews.write")}
          </button>
        </div>

        <div>
          {open && (
            <form onSubmit={submit} className="mb-10 space-y-5 border border-border p-6">
              <div>
                <p className="eyebrow mb-2">{tx("reviews.rating")}</p>
                <StarPicker value={rating} onChange={setRating} label={tx("reviews.rating")} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow">{tx("reviews.name")}</span>
                  <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow">{tx("reviews.sizeWorn")}</span>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none"
                  >
                    {product.sizes.map((s) => (
                      <option key={s.size} value={s.size}>
                        {s.size}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="eyebrow">{tx("reviews.titleField")}</span>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
                />
              </label>
              <label className="block">
                <span className="eyebrow">{tx("reviews.body")}</span>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={4}
                  className="mt-2 w-full border border-border bg-transparent p-3 text-sm outline-none focus:border-foreground"
                />
              </label>
              <button
                type="submit"
                className="bg-foreground px-8 py-3.5 text-[11px] tracking-[0.18em] text-primary-foreground uppercase"
              >
                {tx("reviews.submit")}
              </button>
            </form>
          )}

          <ul className="divide-y divide-border">
            {reviews.map((r) => (
              <li key={r.id} className="py-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Stars rating={r.rating} />
                  <span className="text-sm">{r.title}</span>
                  {r.verified && (
                    <span className="border border-border px-2 py-0.5 text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                      {tx("reviews.verified")}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {r.author} · {r.market} · {r.date}
                  {r.size ? ` · ${tx("reviews.sizeWorn")} ${r.size}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
