import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as useMarket } from "./markets-D3VhIKGD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Price-BhmvvZDt.js
var import_jsx_runtime = require_jsx_runtime();
function Price({ price, compareAt, className, size = "sm" }) {
	const { format } = useMarket();
	const onSale = !!compareAt && compareAt > price;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-baseline gap-2", className),
		children: [onSale && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("text-muted-foreground line-through", size === "lg" ? "text-base" : "text-sm"),
			children: format(compareAt)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn(onSale ? "text-destructive" : "text-foreground", size === "lg" ? "text-2xl font-light" : "text-sm"),
			children: format(price)
		})]
	});
}
//#endregion
export { Price as t };
