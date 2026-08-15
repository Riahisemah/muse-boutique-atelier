import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as getProduct } from "./products-CjUUzcvf.mjs";
import { n as useStore } from "./store-pJzmorlc.mjs";
import { a as useMarket, i as shippingFor } from "./markets-D3VhIKGD.mjs";
import { p as Minus, t as X, u as Plus } from "../_libs/lucide-react.mjs";
import { t as Price } from "./Price-BhmvvZDt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-DqxvTsNx.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { t, tl } = useI18n();
	const { cart, updateQty, removeLine, subtotal } = useStore();
	const { market, format, formatRaw, convert } = useMarket();
	const method = shippingFor(market.code)[0];
	const subtotalLocal = convert(subtotal);
	const freeShipping = method.freeOver !== null && subtotalLocal >= method.freeOver;
	const shipping = cart.length === 0 || freeShipping ? 0 : method.price;
	if (cart.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-6 py-32 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: t("cart.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: t("cart.empty")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "block bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase font-semibold",
					children: ["🛍️ ", t("cart.continue")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					search: { sort: "best" },
					className: "block border-2 border-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-foreground hover:text-primary-foreground",
					children: "⭐ Voir les bestsellers"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1200px] px-6 py-14 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-10 text-4xl",
				children: t("cart.title")
			}),
			!freeShipping && method.freeOver !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 bg-background/80 border border-gold/30 p-4 text-center text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-foreground font-semibold",
					children: [
						"🎁",
						" ",
						t("cart.freeHint", { amount: `${format(method.freeOver / market.rate)} ${market.currency}` })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: [
						t("cart.subtotal"),
						":",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: format(subtotalLocal)
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: cart.map((line, i) => {
						const p = getProduct(line.productId);
						if (!p) return null;
						const color = p.colors.find((c) => c.id === line.colorId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 py-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: p.slug },
								className: "shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.images[0],
									alt: tl(p.name),
									width: 120,
									height: 160,
									loading: "lazy",
									className: "w-24 object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg",
										children: tl(p.name)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: [
											t("product.size"),
											": ",
											line.size,
											color ? ` · ${t("product.color")}: ${tl(color.name)}` : ""
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => removeLine(i),
										"aria-label": t("cart.remove"),
										className: "text-muted-foreground hover:text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center border border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => updateQty(i, line.qty - 1),
												className: "p-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-8 text-center text-sm",
												children: line.qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => updateQty(i, line.qty + 1),
												className: "p-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
										price: p.price * line.qty,
										compareAt: p.compareAt ? p.compareAt * line.qty : null
									})]
								})]
							})]
						}, `${line.productId}-${line.size}-${line.colorId}`);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit border border-border p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-6",
							children: t("checkout.summary")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: t("cart.subtotal")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: format(subtotal) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: t("cart.shipping")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping === 0 ? t("cart.free") : formatRaw(shipping) })]
								}),
								method.freeOver !== null && !freeShipping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t("cart.freeHint", { amount: `${method.freeOver} ${market.currency}` })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-t border-border pt-3 text-base",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("cart.total") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatRaw(subtotalLocal + shipping) })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/checkout",
							className: "mt-6 block bg-foreground py-4 text-center text-[11px] tracking-[0.2em] text-primary-foreground uppercase",
							children: t("cart.checkout")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "mt-3 block border border-border py-4 text-center text-[11px] tracking-[0.2em] uppercase",
							children: t("cart.continue")
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { CartPage as component };
