import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/account/addresses")({
  head: () => ({
    meta: [
      { title: "Mes adresses | Maison Noor" },
      { name: "description", content: "Gérez vos adresses de livraison et de facturation." },
      { property: "og:title", content: "Mes adresses | Maison Noor" },
      { property: "og:description", content: "Adresses de livraison Maison Noor." },
    ],
  }),
  component: AddressesPage,
});

const ADDRESSES = [
  { id: "a1", label: "Tunis", lines: "12 rue de la Kasbah, Tunis 1006, Tunisie" },
  { id: "a2", label: "Paris", lines: "8 rue du Faubourg Saint-Honoré, 75008 Paris, France" },
];

function AddressesPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-[900px] px-6 py-14 md:px-8">
      <h1 className="text-4xl">{t("account.addresses")}</h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {ADDRESSES.map((a) => (
          <div key={a.id} className="border border-border p-6">
            <p className="eyebrow">{a.label}</p>
            <p className="mt-3 text-sm text-muted-foreground">{a.lines}</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => toast.success(t("account.saved"))}
        className="mt-8 bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
      >
        {t("account.addAddress")}
      </button>
      <Link to="/account" className="link-underline mt-10 block text-xs uppercase">
        {t("account.title")}
      </Link>
    </div>
  );
}
