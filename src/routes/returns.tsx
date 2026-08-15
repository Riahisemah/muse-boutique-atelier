import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: "Retours & échanges sous 14 jours | El Wafa Création" },
      {
        name: "description",
        content: "Retours et échanges sous 14 jours pour toute pièce non portée, dans les trois marchés.",
      },
      { property: "og:title", content: "Retours & échanges | El Wafa Création" },
      { property: "og:description", content: "Politique de retour El Wafa Création." },
    ],
  }),
  component: ReturnsPage,
});

function ReturnsPage() {
  const { t, locale } = useI18n();
  const text = {
    fr: "Vous disposez de 14 jours après réception pour nous retourner une pièce non portée, dans son emballage d'origine et avec ses étiquettes. Le remboursement est effectué sous 5 jours ouvrés après réception du colis. Les frais de retour sont à la charge du client, sauf en cas de défaut.",
    ar: "لديك 14 يوماً من تاريخ الاستلام لإرجاع قطعة غير ملبوسة في عبوتها الأصلية ومع بطاقاتها. يتم الاسترجاع المالي خلال 5 أيام عمل من استلام الشحنة. تكاليف الإرجاع على عاتق العميل إلا في حالة وجود عيب.",
    it: "Hai 14 giorni dalla consegna per restituire un capo non indossato, nella confezione originale e con le etichette. Il rimborso avviene entro 5 giorni lavorativi dalla ricezione. Le spese di reso sono a carico del cliente, salvo difetti.",
  } as const;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl">{t("pages.returns.title")}</h1>
      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{text[locale]}</p>
    </div>
  );
}
