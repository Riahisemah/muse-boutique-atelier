import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Price } from "@/components/Price";
import { CATEGORIES, COLLECTIONS, PRODUCTS } from "@/data/products";
import { useI18n } from "@/i18n";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, tl } = useI18n();
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return PRODUCTS.filter((p) => {
      const haystack = [
        ...Object.values(p.name),
        ...p.colors.flatMap((c) => Object.values(c.name)),
        tl(CATEGORIES.find((c) => c.slug === p.category)?.name),
        tl(COLLECTIONS.find((c) => c.slug === p.collection)?.name),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    }).slice(0, 6);
  }, [q, tl]);

  if (!open) return null;

  return (
    <div className="animate-soft-in fixed inset-0 z-100 bg-background/98 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-6 pt-10">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <Search className="size-5 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("search.placeholder")}
            className="w-full bg-transparent font-display text-2xl outline-none placeholder:text-muted-foreground"
          />
          <button type="button" onClick={onClose} aria-label={t("nav.menu")}>
            <X className="size-5" />
          </button>
        </div>

        {!q && (
          <div className="mt-8">
            <p className="eyebrow">{t("search.hint")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  onClick={onClose}
                  className="border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
                >
                  {tl(c.name)}
                </Link>
              ))}
            </div>
          </div>
        )}

        {q && results.length === 0 && (
          <p className="mt-10 text-sm text-muted-foreground">{t("search.empty")}</p>
        )}

        <ul className="mt-8 space-y-4">
          {results.map((p) => (
            <li key={p.id}>
              <Link
                to="/product/$slug"
                params={{ slug: p.slug }}
                onClick={onClose}
                className="flex items-center gap-4 transition-opacity hover:opacity-70"
              >
                <img
                  src={p.images[0]}
                  alt={tl(p.name)}
                  width={80}
                  height={107}
                  loading="lazy"
                  className="h-24 w-18 object-cover"
                />
                <span>
                  <span className="block text-lg">{tl(p.name)}</span>
                  <Price price={p.price} compareAt={p.compareAt} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
