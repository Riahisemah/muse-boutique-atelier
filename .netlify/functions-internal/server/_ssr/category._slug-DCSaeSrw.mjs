import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { a as PRODUCTS, r as CATEGORIES } from "./products-CjUUzcvf.mjs";
import { t as Route } from "./category._slug-CFsAgQxq.mjs";
import { t as ShopBrowser } from "./ShopBrowser-Bom4KDj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-DCSaeSrw.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { slug } = Route.useParams();
	const { tl } = useI18n();
	const cat = CATEGORIES.find((c) => c.slug === slug);
	const pool = slug === "best-sellers" ? PRODUCTS.filter((p) => p.bestseller) : slug === "nouvelles-collections" ? PRODUCTS.filter((p) => p.newArrival) : PRODUCTS;
	const isVirtual = slug === "best-sellers" || slug === "nouvelles-collections";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] px-6 py-14 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-10 text-4xl",
			children: cat ? tl(cat.name) : slug
		}), isVirtual ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopBrowser, { pool }, slug) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopBrowser, {
			pool,
			initialCategory: slug
		}, slug)]
	});
}
//#endregion
export { CategoryPage as component };
