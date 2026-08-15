import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as totalStock, o as discountPercent } from "./products-CjUUzcvf.mjs";
import { n as useStore } from "./store-pJzmorlc.mjs";
import { _ as Heart } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Price } from "./Price-BhmvvZDt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-DbV7UeLC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, priority = false }) {
	const { t, tl } = useI18n();
	const { toggleWishlist, isWished, addToCart } = useStore();
	const [quickOpen, setQuickOpen] = (0, import_react.useState)(false);
	const discount = discountPercent(product);
	const stock = totalStock(product);
	const wished = isWished(product.id);
	const quickAdd = (size) => {
		addToCart({
			productId: product.id,
			size,
			colorId: product.colors[0].id,
			qty: 1
		});
		setQuickOpen(false);
		toast.success(t("product.added"), { description: `${tl(product.name)} · ${size}` });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden bg-secondary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					className: "block",
					"aria-label": tl(product.name),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.images[0],
						alt: tl(product.name),
						width: 1e3,
						height: 1333,
						loading: priority ? "eager" : "lazy",
						className: "aspect-[3/4] w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:opacity-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.images[1] ?? product.images[0],
						alt: "",
						"aria-hidden": true,
						width: 1e3,
						height: 1333,
						loading: "lazy",
						className: "absolute inset-0 aspect-[3/4] w-full object-cover opacity-0 transition-opacity duration-[900ms] group-hover:opacity-100"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute start-3 top-3 flex flex-col items-start gap-1",
					children: [
						product.bestseller && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "bg-gold/20 px-2.5 py-1 text-[10px] tracking-[0.18em] text-gold uppercase font-semibold",
							children: ["⭐ ", t("product.bestseller")]
						}),
						product.newArrival && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-background/95 px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase",
							children: t("product.new")
						}),
						discount !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "bg-foreground px-2.5 py-1 text-[10px] tracking-[0.18em] text-primary-foreground uppercase font-semibold",
							children: [
								"-",
								discount,
								"%"
							]
						}),
						stock === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-muted px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase",
							children: t("product.soldOut")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => toggleWishlist(product.id),
					"aria-label": t("product.wishlist"),
					"aria-pressed": wished,
					className: "absolute end-3 top-3 grid size-9 place-items-center bg-background/90 transition-transform duration-300 hover:scale-110 active:scale-95",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4 transition-colors", wished && "fill-foreground text-foreground") })
				}),
				stock > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 hidden translate-y-full p-3 transition-transform duration-500 ease-out group-hover:translate-y-0 md:block",
					children: quickOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center gap-1 bg-background/95 p-2",
						children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: s.stock === 0,
							onClick: () => quickAdd(s.size),
							className: "min-w-9 px-2 py-1.5 text-xs tracking-wide transition-colors hover:bg-foreground hover:text-primary-foreground disabled:opacity-30",
							children: s.size
						}, s.size))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setQuickOpen(true),
						className: "w-full bg-background/95 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground",
						children: t("product.quickAdd")
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/product/$slug",
				params: { slug: product.slug },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg leading-snug group-hover:text-gold transition-colors",
					children: tl(product.name)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
					price: product.price,
					compareAt: product.compareAt,
					className: "mt-1"
				}), product.bestseller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-semibold tracking-[0.12em] text-gold uppercase",
					children: "⭐ Best"
				})]
			})]
		})]
	});
}
//#endregion
export { ProductCard as t };
