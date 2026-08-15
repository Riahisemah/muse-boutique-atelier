import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-Cjx3dsoO.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	const { t, locale } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl",
			children: t("pages.privacy.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-sm leading-relaxed text-muted-foreground",
			children: {
				fr: "Nous collectons uniquement les données nécessaires au traitement de vos commandes : identité, coordonnées, adresse de livraison et historique d'achat. Ces données ne sont jamais revendues. Vous pouvez demander leur suppression à tout moment en écrivant à contact@elwafacreation.com.",
				ar: "نجمع فقط البيانات اللازمة لمعالجة طلباتك: الهوية، بيانات الاتصال، عنوان التوصيل وسجل الشراء. لا نبيع هذه البيانات أبداً. يمكنك طلب حذفها في أي وقت عبر contact@elwafacreation.com.",
				it: "Raccogliamo solo i dati necessari alla gestione degli ordini: identità, contatti, indirizzo di spedizione e storico acquisti. Questi dati non vengono mai rivenduti. Puoi chiederne la cancellazione scrivendo a contact@elwafacreation.com."
			}[locale]
		})]
	});
}
//#endregion
export { PrivacyPage as component };
