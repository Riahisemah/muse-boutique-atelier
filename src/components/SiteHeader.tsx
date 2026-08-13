import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SearchOverlay } from "@/components/SearchOverlay";
import { LanguageSelector, MarketSelector } from "@/components/Selectors";
import { CATEGORIES } from "@/data/products";
import { useI18n } from "@/i18n";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t, tl } = useI18n();
  const { cartCount, wishlist } = useStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  const nav = [
    { to: "/shop" as const, label: t("nav.shop") },
    { to: "/shop" as const, label: t("nav.newArrivals"), search: { sort: "new" as const } },
    { to: "/about" as const, label: t("nav.about") },
    { to: "/contact" as const, label: t("nav.contact") },
  ];

  return (
    <>
      <div className="bg-foreground py-2 text-center text-[10px] tracking-[0.2em] text-primary-foreground uppercase">
        {t("trust.shipping")}
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-transparent bg-background/95 backdrop-blur transition-all duration-500",
          scrolled && "border-border",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-4 md:px-8">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label={t("nav.menu")}
          >
            <Menu className="size-5" />
          </button>

          <nav className="hidden flex-1 items-center gap-7 md:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="link-underline text-xs tracking-[0.16em] uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="flex-1 text-center font-display text-2xl tracking-[0.28em] uppercase md:flex-none"
          >
            Noor
          </Link>

          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="hidden items-center gap-4 lg:flex">
              <MarketSelector />
              <LanguageSelector />
            </div>
            <button type="button" onClick={() => setSearchOpen(true)} aria-label={t("nav.search")}>
              <Search className="size-5" />
            </button>
            <Link to="/wishlist" aria-label={t("nav.wishlist")} className="relative hidden sm:block">
              <Heart className="size-5" />
              {wishlist.length > 0 && (
                <span className="absolute -end-1.5 -top-1.5 grid size-4 place-items-center rounded-full bg-foreground text-[9px] text-primary-foreground">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/account" aria-label={t("nav.account")} className="hidden sm:block">
              <User className="size-5" />
            </Link>
            <Link to="/cart" aria-label={t("nav.cart")} className="relative">
              <ShoppingBag className="size-5" />
              {cartCount > 0 && (
                <span className="animate-rise absolute -end-1.5 -top-1.5 grid size-4 place-items-center rounded-full bg-foreground text-[9px] text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        <div className="hide-scrollbar hidden overflow-x-auto border-t border-border md:block">
          <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-8 px-8 py-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="link-underline text-[11px] whitespace-nowrap text-muted-foreground tracking-[0.16em] uppercase transition-colors hover:text-foreground"
              >
                {tl(c.name)}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="animate-soft-in fixed inset-0 z-100 bg-background md:hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-4">
            <span className="font-display text-xl tracking-[0.28em] uppercase">Noor</span>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close">
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-6">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-4 font-display text-2xl"
              >
                {item.label}
              </Link>
            ))}
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-3.5 text-sm tracking-[0.12em] uppercase"
              >
                {tl(c.name)}
              </Link>
            ))}
            <Link
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-3.5 text-sm tracking-[0.12em] uppercase"
            >
              {t("nav.wishlist")}
            </Link>
            <Link
              to="/account"
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-3.5 text-sm tracking-[0.12em] uppercase"
            >
              {t("nav.account")}
            </Link>
          </nav>
          <div className="flex items-center gap-6 px-6">
            <MarketSelector />
            <LanguageSelector />
          </div>
        </div>
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
