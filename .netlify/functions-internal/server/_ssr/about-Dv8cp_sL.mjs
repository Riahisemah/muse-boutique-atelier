import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { t as Reveal } from "./Reveal-DHztnhoY.mjs";
import { t as story_default } from "./story-B9HoR2cQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Dv8cp_sL.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1100px] px-6 py-16 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "max-w-2xl text-4xl md:text-5xl",
			children: t("home.story.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid items-center gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: story_default,
				alt: t("home.story.title"),
				width: 1400,
				height: 1600,
				loading: "lazy",
				className: "aspect-[7/8] w-full object-cover"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 100,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: t("home.story.text")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-relaxed text-muted-foreground",
						children: t("hero.subtitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "link-underline mt-8 inline-block text-xs tracking-[0.18em] uppercase",
						children: t("hero.cta1")
					})
				]
			})]
		})]
	});
}
//#endregion
export { AboutPage as component };
