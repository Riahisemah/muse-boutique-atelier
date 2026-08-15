import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as getProduct } from "./products-CjUUzcvf.mjs";
import { n as useStore } from "./store-pJzmorlc.mjs";
import { t as ProductCard } from "./ProductCard-DbV7UeLC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-Bsof5ubX.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const { t } = useI18n();
	const { wishlist } = useStore();
	const items = wishlist.map(getProduct).filter((p) => !!p);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] px-6 py-14 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-10 text-4xl",
			children: t("wishlist.title")
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: t("wishlist.empty")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "mt-8 inline-block bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase",
				children: t("cart.continue")
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4",
			children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
		})]
	});
}
//#endregion
export { WishlistPage as component };
