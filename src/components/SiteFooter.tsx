import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Music2 } from "lucide-react";
import { Newsletter } from "@/components/Newsletter";
import { LanguageSelector, MarketSelector } from "@/components/Selectors";
import { CATEGORIES } from "@/data/products";
import { useI18n } from "@/i18n";

export function SiteFooter() {
  const { t, tl } = useI18n();

  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl tracking-[0.28em] uppercase">Noor</p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t("brand.tagline")}</p>
            <Newsletter compact />
            <div className="mt-6 flex items-center gap-4">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:opacity-60">
                <Instagram className="size-4" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:opacity-60">
                <Facebook className="size-4" />
              </a>
              <a href="https://tiktok.com" aria-label="TikTok" className="hover:opacity-60">
                <Music2 className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">{t("footer.shop")}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/category/$slug"
                    params={{ slug: c.slug }}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {tl(c.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">{t("footer.help")}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-foreground">
                  {t("footer.shippingInfo")}
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-foreground">
                  {t("footer.returns")}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground">
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">{t("footer.legal")}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  {t("footer.house")}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-muted-foreground hover:text-foreground">
                  {t("nav.admin")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} El Wafa Création. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <MarketSelector />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </footer>
  );
}
