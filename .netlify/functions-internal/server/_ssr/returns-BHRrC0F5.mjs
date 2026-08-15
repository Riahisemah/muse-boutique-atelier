import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/returns-BHRrC0F5.js
var import_jsx_runtime = require_jsx_runtime();
function ReturnsPage() {
	const { t, locale } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl",
			children: t("pages.returns.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-sm leading-relaxed text-muted-foreground",
			children: {
				fr: "Vous disposez de 14 jours après réception pour nous retourner une pièce non portée, dans son emballage d'origine et avec ses étiquettes. Le remboursement est effectué sous 5 jours ouvrés après réception du colis. Les frais de retour sont à la charge du client, sauf en cas de défaut.",
				ar: "لديك 14 يوماً من تاريخ الاستلام لإرجاع قطعة غير ملبوسة في عبوتها الأصلية ومع بطاقاتها. يتم الاسترجاع المالي خلال 5 أيام عمل من استلام الشحنة. تكاليف الإرجاع على عاتق العميل إلا في حالة وجود عيب.",
				it: "Hai 14 giorni dalla consegna per restituire un capo non indossato, nella confezione originale e con le etichette. Il rimborso avviene entro 5 giorni lavorativi dalla ricezione. Le spese di reso sono a carico del cliente, salvo difetti."
			}[locale]
		})]
	});
}
//#endregion
export { ReturnsPage as component };
