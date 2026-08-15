import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useStore } from "./store-pJzmorlc.mjs";
import { n as MarketSelector, t as LanguageSelector } from "./Selectors-hyxlRQlm.mjs";
import { n as CUSTOMER_ORDERS } from "./admin-CR3sAx63.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-Bn-3QJ9g.js
var import_jsx_runtime = require_jsx_runtime();
function AccountPage() {
	const { t } = useI18n();
	const { user, logout } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1100px] px-6 py-14 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: t("account.title")
			}), user && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: logout,
				className: "link-underline text-xs uppercase",
				children: t("auth.logout")
			})]
		}), !user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 border border-border p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: t("auth.noAccount")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase",
					children: t("auth.login")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/register",
					className: "border border-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase",
					children: t("auth.register")
				})]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-10 md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border border-border p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t("account.profile")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm",
							children: user.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toast.success(t("account.saved")),
							className: "mt-6 bg-foreground px-6 py-3 text-[11px] tracking-[0.18em] text-primary-foreground uppercase",
							children: t("account.save")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border border-border p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t("account.orders")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3 text-sm",
							children: CUSTOMER_ORDERS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										o.date,
										" · ",
										o.status
									]
								})]
							}, o.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account/orders",
							className: "link-underline mt-6 inline-block text-xs uppercase",
							children: t("account.orders")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border border-border p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t("account.addresses")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: "12 rue de la Kasbah, Tunis 1006"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account/addresses",
							className: "link-underline mt-6 inline-block text-xs uppercase",
							children: t("account.addresses")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border border-border p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t("account.preferences")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketSelector, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelector, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/wishlist",
							className: "link-underline mt-6 inline-block text-xs uppercase",
							children: t("account.wishlist")
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { AccountPage as component };
