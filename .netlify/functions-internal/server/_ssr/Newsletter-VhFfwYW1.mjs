import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Newsletter-VhFfwYW1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Newsletter({ compact = false }) {
	const { t } = useI18n();
	const [email, setEmail] = (0, import_react.useState)("");
	const submit = (e) => {
		e.preventDefault();
		if (!email.includes("@")) return;
		setEmail("");
		toast.success(t("home.newsletter.done"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: cn("mt-6 flex max-w-md items-center border-b border-foreground", compact && "mt-6"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "email",
			required: true,
			value: email,
			onChange: (e) => setEmail(e.target.value),
			placeholder: t("home.newsletter.placeholder"),
			"aria-label": t("home.newsletter.placeholder"),
			className: "w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "submit",
			className: "shrink-0 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-opacity hover:opacity-60",
			children: t("home.newsletter.cta")
		})]
	});
}
//#endregion
export { Newsletter as t };
