import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Conditions générales de vente | Maison Noor" },
      {
        name: "description",
        content: "Conditions générales de vente applicables aux commandes passées sur Maison Noor.",
      },
      { property: "og:title", content: "Conditions générales | Maison Noor" },
      { property: "og:description", content: "CGV Maison Noor." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const { t, locale } = useI18n();
  const text = {
    fr: "Toute commande passée sur maisonnoor.com implique l'acceptation des présentes conditions. Les prix sont affichés en euros pour la France et l'Italie, et en dinars tunisiens pour la Tunisie, taxes comprises. Les pièces sont fabriquées en série limitée ; la disponibilité affichée peut évoluer avant validation du paiement.",
    ar: "كل طلب على maisonnoor.com يعني قبول هذه الشروط. الأسعار معروضة باليورو لفرنسا وإيطاليا وبالدينار التونسي لتونس، مع احتساب الرسوم. تُصنع القطع بكميات محدودة، وقد يتغير التوفر المعروض قبل تأكيد الدفع.",
    it: "Ogni ordine su maisonnoor.com implica l'accettazione delle presenti condizioni. I prezzi sono in euro per Francia e Italia e in dinari tunisini per la Tunisia, tasse incluse. I capi sono realizzati in serie limitata; la disponibilità può variare prima della conferma del pagamento.",
  } as const;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl">{t("pages.terms.title")}</h1>
      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{text[locale]}</p>
    </div>
  );
}
