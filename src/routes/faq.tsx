import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Livraison, tailles, retours | Maison Noor" },
      {
        name: "description",
        content: "Réponses aux questions fréquentes : délais de livraison, tailles, retours, paiement.",
      },
      { property: "og:title", content: "FAQ | Maison Noor" },
      { property: "og:description", content: "Livraison, tailles, retours et paiement." },
    ],
  }),
  component: FaqPage,
});

const ITEMS = [
  {
    q: { fr: "Quels sont les délais de livraison ?", ar: "ما هي مدة التوصيل؟", it: "Quali sono i tempi di consegna?" },
    a: {
      fr: "3 à 5 jours en Tunisie et en France, 4 à 6 jours en Italie. L'express est disponible partout.",
      ar: "من 3 إلى 5 أيام في تونس وفرنسا، ومن 4 إلى 6 أيام في إيطاليا. التوصيل السريع متوفر في كل الأسواق.",
      it: "3–5 giorni in Tunisia e Francia, 4–6 giorni in Italia. L'express è disponibile in tutti i mercati.",
    },
  },
  {
    q: { fr: "Comment choisir ma taille ?", ar: "كيف أختار مقاسي؟", it: "Come scelgo la taglia?" },
    a: {
      fr: "Nos robes taillent normalement. Le guide des tailles se trouve sur chaque fiche produit.",
      ar: "مقاساتنا مطابقة للمعتاد. دليل المقاسات متوفر في كل صفحة منتج.",
      it: "Le nostre taglie sono conformi. La guida è su ogni scheda prodotto.",
    },
  },
  {
    q: { fr: "Puis-je retourner une robe ?", ar: "هل يمكنني إرجاع فستان؟", it: "Posso restituire un abito?" },
    a: {
      fr: "Oui, sous 14 jours, non portée et avec ses étiquettes.",
      ar: "نعم، خلال 14 يوماً، غير ملبوس ومع بطاقاته.",
      it: "Sì, entro 14 giorni, non indossato e con le etichette.",
    },
  },
  {
    q: { fr: "Quels moyens de paiement acceptez-vous ?", ar: "ما هي وسائل الدفع المتاحة؟", it: "Quali pagamenti accettate?" },
    a: {
      fr: "Carte bancaire, Apple Pay et Google Pay en France et en Italie ; paiement à la livraison et virement en Tunisie.",
      ar: "البطاقة البنكية وApple Pay وGoogle Pay في فرنسا وإيطاليا؛ الدفع عند الاستلام والتحويل البنكي في تونس.",
      it: "Carta, Apple Pay e Google Pay in Francia e Italia; contrassegno e bonifico in Tunisia.",
    },
  },
];

function FaqPage() {
  const { t, tl } = useI18n();
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl">{t("pages.faq.title")}</h1>
      <Accordion type="single" collapsible className="mt-10">
        {ITEMS.map((item, i) => (
          <AccordionItem key={i} value={`i${i}`}>
            <AccordionTrigger className="text-start text-base">{tl(item.q)}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{tl(item.a)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
