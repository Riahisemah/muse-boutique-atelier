import type { Localized } from "@/types";

/**
 * Strings added with the reviews / tax / promo features.
 * Kept in a dedicated dictionary so the three locales stay in sync.
 */
export const EXTRA: Record<string, Localized> = {
  "reviews.title": { fr: "Avis clientes", ar: "تقييمات العميلات", it: "Recensioni" },
  "reviews.count": { fr: "{count} avis", ar: "{count} تقييم", it: "{count} recensioni" },
  "reviews.based": {
    fr: "Basé sur {count} avis vérifiés",
    ar: "بناءً على {count} تقييم",
    it: "Basato su {count} recensioni",
  },
  "reviews.empty": {
    fr: "Aucun avis pour le moment. Soyez la première.",
    ar: "لا توجد تقييمات بعد. كوني الأولى.",
    it: "Ancora nessuna recensione. Sii la prima.",
  },
  "reviews.write": { fr: "Écrire un avis", ar: "اكتبي تقييمًا", it: "Scrivi una recensione" },
  "reviews.rating": { fr: "Votre note", ar: "تقييمك", it: "Il tuo voto" },
  "reviews.name": { fr: "Votre prénom", ar: "اسمك", it: "Il tuo nome" },
  "reviews.titleField": { fr: "Titre", ar: "العنوان", it: "Titolo" },
  "reviews.body": { fr: "Votre avis", ar: "رأيك", it: "La tua recensione" },
  "reviews.submit": { fr: "Publier", ar: "نشر", it: "Pubblica" },
  "reviews.thanks": { fr: "Merci pour votre avis !", ar: "شكرًا على تقييمك!", it: "Grazie per la recensione!" },
  "reviews.required": {
    fr: "Merci d'indiquer votre prénom et votre avis.",
    ar: "يرجى إدخال اسمك ورأيك.",
    it: "Inserisci nome e recensione.",
  },
  "reviews.noTitle": { fr: "Avis vérifié", ar: "تقييم", it: "Recensione" },
  "reviews.verified": { fr: "Achat vérifié", ar: "شراء موثق", it: "Acquisto verificato" },
  "reviews.sizeWorn": { fr: "Taille portée", ar: "المقاس", it: "Taglia" },

  "promo.label": { fr: "Code promo", ar: "رمز الخصم", it: "Codice promo" },
  "promo.placeholder": { fr: "Ex. AUTOMNE20", ar: "مثال AUTOMNE20", it: "Es. AUTOMNE20" },
  "promo.apply": { fr: "Appliquer", ar: "تطبيق", it: "Applica" },
  "promo.remove": { fr: "Retirer", ar: "إزالة", it: "Rimuovi" },
  "promo.applied": { fr: "Code {code} appliqué", ar: "تم تطبيق {code}", it: "Codice {code} applicato" },
  "promo.error.unknown": { fr: "Code promo invalide.", ar: "رمز غير صالح.", it: "Codice non valido." },
  "promo.error.expired": {
    fr: "Ce code n'est plus valable.",
    ar: "انتهت صلاحية هذا الرمز.",
    it: "Questo codice è scaduto.",
  },
  "promo.error.market": {
    fr: "Ce code n'est pas valable dans votre pays.",
    ar: "هذا الرمز غير صالح في بلدك.",
    it: "Codice non valido nel tuo paese.",
  },
  "promo.error.min": {
    fr: "Minimum {amount} d'achat requis.",
    ar: "الحد الأدنى للشراء {amount}.",
    it: "Spesa minima {amount}.",
  },

  "totals.discount": { fr: "Remise", ar: "الخصم", it: "Sconto" },
  "totals.vat": { fr: "dont TVA ({rate}%)", ar: "منها ض.ق.م ({rate}%)", it: "di cui IVA ({rate}%)" },
  "totals.customs": {
    fr: "Droits de douane estimés",
    ar: "الرسوم الجمركية التقديرية",
    it: "Dazi doganali stimati",
  },
  "totals.customsHint": {
    fr: "Expédition depuis Tunis : droits estimés au-delà de 150 € de marchandise.",
    ar: "الإرسال من تونس: رسوم تقديرية فوق 150 € من قيمة السلع.",
    it: "Spedizione da Tunisi: dazi stimati oltre 150 € di merce.",
  },

  "order.tracking": { fr: "Suivi de commande", ar: "تتبع الطلب", it: "Tracciamento ordine" },
  "order.carrier": { fr: "Transporteur", ar: "الناقل", it: "Corriere" },
  "order.number": { fr: "N° de suivi", ar: "رقم التتبع", it: "N. tracking" },
  "order.eta": { fr: "Livraison estimée", ar: "التوصيل المتوقع", it: "Consegna stimata" },
  "order.invoice": { fr: "Facture PDF", ar: "فاتورة PDF", it: "Fattura PDF" },
  "order.detail": { fr: "Voir le détail", ar: "عرض التفاصيل", it: "Vedi dettaglio" },
  "order.items": { fr: "Articles", ar: "المنتجات", it: "Articoli" },
  "order.shipTo": { fr: "Adresse de livraison", ar: "عنوان التوصيل", it: "Indirizzo di consegna" },
  "order.invoiceTitle": { fr: "Facture", ar: "فاتورة", it: "Fattura" },

  "shop.page": { fr: "Page {page} / {total}", ar: "صفحة {page} / {total}", it: "Pagina {page} / {total}" },
  "shop.prev": { fr: "Précédent", ar: "السابق", it: "Precedente" },
  "shop.next": { fr: "Suivant", ar: "التالي", it: "Successivo" },

  "admin.images": { fr: "Images du produit", ar: "صور المنتج", it: "Immagini prodotto" },
  "admin.upload": { fr: "Ajouter des images", ar: "إضافة صور", it: "Aggiungi immagini" },
  "admin.uploadHint": {
    fr: "JPG ou PNG, 1200×1600 px recommandé.",
    ar: "JPG أو PNG، يُنصح بـ 1200×1600.",
    it: "JPG o PNG, consigliato 1200×1600 px.",
  },
  "admin.save": { fr: "Enregistrer", ar: "حفظ", it: "Salva" },
  "admin.cancel": { fr: "Annuler", ar: "إلغاء", it: "Annulla" },
  "admin.saved": { fr: "Produit enregistré", ar: "تم حفظ المنتج", it: "Prodotto salvato" },
  "admin.editProduct": { fr: "Modifier le produit", ar: "تعديل المنتج", it: "Modifica prodotto" },
  "admin.edit": { fr: "Modifier", ar: "تعديل", it: "Modifica" },
};
