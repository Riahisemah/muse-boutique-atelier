import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-BQ1xYD0T.js
var import_jsx_runtime = require_jsx_runtime();
function ForgotPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md px-6 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: t("auth.forgot")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-10 space-y-6",
				onSubmit: (e) => {
					e.preventDefault();
					toast.success(t("auth.resetSent"));
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: t("checkout.email")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						className: "mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "w-full bg-foreground py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase",
					children: t("auth.reset")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "link-underline mt-6 inline-block text-xs",
				children: t("auth.login")
			})
		]
	});
}
//#endregion
export { ForgotPage as component };
