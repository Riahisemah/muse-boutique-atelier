import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useStore } from "./store-pJzmorlc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DdZVZQ42.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { t } = useI18n();
	const { login } = useStore();
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md px-6 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: t("auth.login")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-10 space-y-6",
				onSubmit: (e) => {
					e.preventDefault();
					login(email);
					navigate({ to: "/account" });
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: t("checkout.email")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: t("auth.password")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							className: "mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full bg-foreground py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase",
						children: t("auth.login")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex justify-between text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/forgot-password",
					className: "link-underline",
					children: t("auth.forgot")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/register",
					className: "link-underline",
					children: t("auth.register")
				})]
			})
		]
	});
}
//#endregion
export { LoginPage as component };
