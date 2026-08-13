import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | Maison Noor" },
      {
        name: "description",
        content: "Comment Maison Noor collecte, utilise et protège vos données personnelles.",
      },
      { property: "og:title", content: "Politique de confidentialité | Maison Noor" },
      { property: "og:description", content: "Protection des données Maison Noor." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t, locale } = useI18n();
  const text = {
    fr: "Nous collectons uniquement les données nécessaires au traitement de vos commandes : identité, coordonnées, adresse de livraison et historique d'achat. Ces données ne sont jamais revendues. Vous pouvez demander leur suppression à tout moment en écrivant à contact@maisonnoor.com.",
    ar: "نجمع فقط البيانات اللازمة لمعالجة طلباتك: الهوية، بيانات الاتصال، عنوان التوصيل وسجل الشراء. لا نبيع هذه البيانات أبداً. يمكنك طلب حذفها في أي وقت عبر contact@maisonnoor.com.",
    it: "Raccogliamo solo i dati necessari alla gestione degli ordini: identità, contatti, indirizzo di spedizione e storico acquisti. Questi dati non vengono mai rivenduti. Puoi chiederne la cancellazione scrivendo a contact@maisonnoor.com.",
  } as const;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl">{t("pages.privacy.title")}</h1>
      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{text[locale]}</p>
    </div>
  );
}
