import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account.addresses-Ce0zQpCF.js
var import_jsx_runtime = require_jsx_runtime();
var ADDRESSES = [{
	id: "a1",
	label: "Tunis",
	lines: "12 rue de la Kasbah, Tunis 1006, Tunisie"
}, {
	id: "a2",
	label: "Paris",
	lines: "8 rue du Faubourg Saint-Honoré, 75008 Paris, France"
}];
function AddressesPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[900px] px-6 py-14 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: t("account.addresses")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2",
				children: ADDRESSES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: a.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: a.lines
					})]
				}, a.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => toast.success(t("account.saved")),
				className: "mt-8 bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase",
				children: t("account.addAddress")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/account",
				className: "link-underline mt-10 block text-xs uppercase",
				children: t("account.title")
			})
		]
	});
}
//#endregion
export { AddressesPage as component };
