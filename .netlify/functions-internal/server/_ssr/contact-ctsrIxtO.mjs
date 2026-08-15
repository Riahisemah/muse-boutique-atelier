import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-ctsrIxtO.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: t("pages.contact.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-10 space-y-6",
				onSubmit: (e) => {
					e.preventDefault();
					toast.success(t("pages.contact.sent"));
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: t("checkout.firstName")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: t("checkout.email")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								className: "mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: t("pages.contact.message")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 5,
							required: true,
							className: "mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase",
						children: t("pages.contact.send")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 space-y-1 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "+216 55 123 456" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "contact@elwafacreation.com" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Instagram : @elwafa_creation" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tunis, Tunisie · Livraison France & Italie" })
				]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
