import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { useI18n } from "@/i18n";
import { clearOrderReference, getOrderReference } from "@/lib/orderService";

export const Route = createFileRoute("/order/confirmation")({
  head: () => ({
    meta: [
      { title: "Confirmation | El Wafa Création" },
      { name: "description", content: "Votre demande de commande a bien été envoyée." },
      { property: "og:title", content: "Confirmation | El Wafa Création" },
      { property: "og:description", content: "Demande de commande confirmée." },
    ],
  }),
  component: OrderConfirmationPage,
});

function OrderConfirmationPage() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const orderNumber = getOrderReference();

  useEffect(() => {
    if (!orderNumber) {
      navigate({ to: "/shop" });
    }
  }, [orderNumber, navigate]);

  if (!orderNumber) return null;

  return (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full border-2 border-foreground">
        <Check className="size-8" strokeWidth={1.5} />
      </div>

      <h1 className="mt-8 text-3xl md:text-4xl">{t("checkout.confirm.title")}</h1>
      <p className="mt-4 text-sm text-muted-foreground">{t("checkout.confirm.text")}</p>

      <div className="mt-8 border border-border p-6 text-sm">
        <p className="text-muted-foreground">{t("checkout.confirm.reference")}</p>
        <p className="mt-2 text-lg font-medium tracking-wide">{orderNumber}</p>
        <p className="mt-4 text-xs text-muted-foreground">{t("checkout.confirm.referenceHint")}</p>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{t("checkout.confirm.followup")}</p>

      <Link
        to="/shop"
        onClick={() => clearOrderReference()}
        className="mt-10 inline-block bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
      >
        {t("cart.continue")}
      </Link>
    </div>
  );
}
