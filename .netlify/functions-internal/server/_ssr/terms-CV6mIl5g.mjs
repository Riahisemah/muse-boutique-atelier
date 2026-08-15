import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-CV6mIl5g.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	const { t, locale } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl",
			children: t("pages.terms.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-sm leading-relaxed text-muted-foreground",
			children: {
				fr: "Toute commande passée sur elwafacreation.com implique l'acceptation des présentes conditions. Les prix sont affichés en euros pour la France et l'Italie, et en dinars tunisiens pour la Tunisie, taxes comprises. Les pièces sont fabriquées en série limitée ; la disponibilité affichée peut évoluer avant validation du paiement.",
				ar: "كل طلب على elwafacreation.com يعني قبول هذه الشروط. الأسعار معروضة باليورو لفرنسا وإيطاليا وبالدينار التونسي لتونس، مع احتساب الرسوم. تُصنع القطع بكميات محدودة، وقد يتغير التوفر المعروض قبل تأكيد الدفع.",
				it: "Ogni ordine su elwafacreation.com implica l'accettazione delle presenti condizioni. I prezzi sono in euro per Francia e Italia e in dinari tunisini per la Tunisia, tasse incluse. I capi sono realizzati in serie limitata; la disponibilità può variare prima della conferma del pagamento."
			}[locale]
		})]
	});
}
//#endregion
export { TermsPage as component };
