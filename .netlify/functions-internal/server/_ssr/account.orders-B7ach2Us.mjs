import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ORDERS } from "./admin-CR3sAx63.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.orders-B7ach2Us.js
var import_jsx_runtime = require_jsx_runtime();
function OrdersPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1000px] px-6 py-14 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: t("account.orders")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 divide-y divide-border",
				children: ORDERS.slice(0, 4).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg",
							children: o.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-[0.16em] uppercase text-muted-foreground",
							children: o.status
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: [
							o.date,
							" · ",
							o.items.map((i) => `${i.name} (${i.size}) ×${i.qty}`).join(", "),
							" ·",
							" ",
							o.total,
							" ",
							o.currency
						]
					})]
				}, o.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/account",
				className: "link-underline mt-10 inline-block text-xs uppercase",
				children: t("account.title")
			})
		]
	});
}
//#endregion
export { OrdersPage as component };
