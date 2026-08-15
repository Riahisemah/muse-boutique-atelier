import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Check } from "../_libs/lucide-react.mjs";
import { r as getOrderReference, t as clearOrderReference } from "./orderService-ugvnhqDs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order.confirmation-Bj8hXROQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderConfirmationPage() {
	const { t } = useI18n();
	const navigate = useNavigate();
	const orderNumber = getOrderReference();
	(0, import_react.useEffect)(() => {
		if (!orderNumber) navigate({ to: "/shop" });
	}, [orderNumber, navigate]);
	if (!orderNumber) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-6 py-32 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex size-16 items-center justify-center rounded-full border-2 border-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-8",
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-8 text-3xl md:text-4xl",
				children: t("checkout.confirm.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: t("checkout.confirm.text")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border border-border p-6 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: t("checkout.confirm.reference")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg font-medium tracking-wide",
						children: orderNumber
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: t("checkout.confirm.referenceHint")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm leading-relaxed text-muted-foreground",
				children: t("checkout.confirm.followup")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				onClick: () => clearOrderReference(),
				className: "mt-10 inline-block bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase",
				children: t("cart.continue")
			})
		]
	});
}
//#endregion
export { OrderConfirmationPage as component };
