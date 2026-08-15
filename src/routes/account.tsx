import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { CUSTOMER_ORDERS } from "@/data/admin";
import { useI18n } from "@/i18n";
import { LanguageSelector, MarketSelector } from "@/components/Selectors";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Mon compte | El Wafa Création" },
      { name: "description", content: "Gérez vos informations, commandes, adresses et favoris." },
      { property: "og:title", content: "Mon compte | El Wafa Création" },
      { property: "og:description", content: "Espace client El Wafa Création." },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const { t } = useI18n();
  const { user, logout } = useStore();

  return (
    <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl">{t("account.title")}</h1>
        {user && (
          <button type="button" onClick={logout} className="link-underline text-xs uppercase">
            {t("auth.logout")}
          </button>
        )}
      </div>

      {!user ? (
        <div className="mt-10 border border-border p-8">
          <p className="text-sm text-muted-foreground">{t("auth.noAccount")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/login"
              className="bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
            >
              {t("auth.login")}
            </Link>
            <Link to="/register" className="border border-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase">
              {t("auth.register")}
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <section className="border border-border p-6">
            <p className="eyebrow">{t("account.profile")}</p>
            <p className="mt-4 text-sm">{user.email}</p>
            <button
              type="button"
              onClick={() => toast.success(t("account.saved"))}
              className="mt-6 bg-foreground px-6 py-3 text-[11px] tracking-[0.18em] text-primary-foreground uppercase"
            >
              {t("account.save")}
            </button>
          </section>

          <section className="border border-border p-6">
            <p className="eyebrow">{t("account.orders")}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {CUSTOMER_ORDERS.map((o) => (
                <li key={o.id} className="flex justify-between">
                  <span>{o.id}</span>
                  <span className="text-muted-foreground">
                    {o.date} · {o.status}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/account/orders" className="link-underline mt-6 inline-block text-xs uppercase">
              {t("account.orders")}
            </Link>
          </section>

          <section className="border border-border p-6">
            <p className="eyebrow">{t("account.addresses")}</p>
            <p className="mt-4 text-sm text-muted-foreground">12 rue de la Kasbah, Tunis 1006</p>
            <Link to="/account/addresses" className="link-underline mt-6 inline-block text-xs uppercase">
              {t("account.addresses")}
            </Link>
          </section>

          <section className="border border-border p-6">
            <p className="eyebrow">{t("account.preferences")}</p>
            <div className="mt-4 flex items-center gap-6">
              <MarketSelector />
              <LanguageSelector />
            </div>
            <Link to="/wishlist" className="link-underline mt-6 inline-block text-xs uppercase">
              {t("account.wishlist")}
            </Link>
          </section>
        </div>
      )}
    </div>
  );
}
