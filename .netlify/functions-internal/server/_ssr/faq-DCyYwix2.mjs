import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DCyYwix2.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		q: {
			fr: "Quels sont les délais de livraison ?",
			ar: "ما هي مدة التوصيل؟",
			it: "Quali sono i tempi di consegna?"
		},
		a: {
			fr: "3 à 5 jours en Tunisie et en France, 4 à 6 jours en Italie. L'express est disponible partout.",
			ar: "من 3 إلى 5 أيام في تونس وفرنسا، ومن 4 إلى 6 أيام في إيطاليا. التوصيل السريع متوفر في كل الأسواق.",
			it: "3–5 giorni in Tunisia e Francia, 4–6 giorni in Italia. L'express è disponibile in tutti i mercati."
		}
	},
	{
		q: {
			fr: "Comment choisir ma taille ?",
			ar: "كيف أختار مقاسي؟",
			it: "Come scelgo la taglia?"
		},
		a: {
			fr: "Nos robes taillent normalement. Le guide des tailles se trouve sur chaque fiche produit.",
			ar: "مقاساتنا مطابقة للمعتاد. دليل المقاسات متوفر في كل صفحة منتج.",
			it: "Le nostre taglie sono conformi. La guida è su ogni scheda prodotto."
		}
	},
	{
		q: {
			fr: "Puis-je retourner une robe ?",
			ar: "هل يمكنني إرجاع فستان؟",
			it: "Posso restituire un abito?"
		},
		a: {
			fr: "Oui, sous 14 jours, non portée et avec ses étiquettes.",
			ar: "نعم، خلال 14 يوماً، غير ملبوس ومع بطاقاته.",
			it: "Sì, entro 14 giorni, non indossato e con le etichette."
		}
	},
	{
		q: {
			fr: "Quels moyens de paiement acceptez-vous ?",
			ar: "ما هي وسائل الدفع المتاحة؟",
			it: "Quali pagamenti accettate?"
		},
		a: {
			fr: "Carte bancaire, Apple Pay et Google Pay en France et en Italie ; paiement à la livraison et virement en Tunisie.",
			ar: "البطاقة البنكية وApple Pay وGoogle Pay في فرنسا وإيطاليا؛ الدفع عند الاستلام والتحويل البنكي في تونس.",
			it: "Carta, Apple Pay e Google Pay in Francia e Italia; contrassegno e bonifico in Tunisia."
		}
	}
];
function FaqPage() {
	const { t, tl } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl",
			children: t("pages.faq.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
			type: "single",
			collapsible: true,
			className: "mt-10",
			children: ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
				value: `i${i}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
					className: "text-start text-base",
					children: tl(item.q)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
					className: "text-sm text-muted-foreground",
					children: tl(item.a)
				})]
			}, i))
		})]
	});
}
//#endregion
export { FaqPage as component };
