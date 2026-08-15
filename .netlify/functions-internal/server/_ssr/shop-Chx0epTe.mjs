import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { t as ShopBrowser } from "./ShopBrowser-Bom4KDj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-Chx0epTe.js
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] px-6 py-14 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-10 text-4xl",
			children: t("shop.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopBrowser, { initialSort: "new" })]
	});
}
//#endregion
export { ShopPage as component };
