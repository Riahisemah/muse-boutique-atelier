import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { r as SHIPPING, t as MARKETS } from "./markets-D3VhIKGD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shipping-DHVaewF9.js
var import_jsx_runtime = require_jsx_runtime();
function ShippingPage() {
	const { t, tl } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl",
			children: t("pages.shipping.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 space-y-10",
			children: SHIPPING.map((group) => {
				const market = MARKETS.find((m) => m.code === group.market);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [
						market.flag,
						" ",
						tl(market.label),
						" — ",
						market.currency
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-border",
					children: group.methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap justify-between gap-2 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							tl(m.label),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: ["· ", tl(m.eta)]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [
								m.price,
								" ",
								market.currency,
								m.freeOver ? ` · ${t("cart.freeHint", { amount: `${m.freeOver} ${market.currency}` })}` : ""
							]
						})]
					}, m.id))
				})] }, group.market);
			})
		})]
	});
}
//#endregion
export { ShippingPage as component };
