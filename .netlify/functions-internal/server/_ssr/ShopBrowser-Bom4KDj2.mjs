import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Reveal } from "./Reveal-DHztnhoY.mjs";
import { a as PRODUCTS, i as COLLECTIONS, n as ALL_SIZES, r as CATEGORIES, t as ALL_COLORS } from "./products-CjUUzcvf.mjs";
import { o as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./ProductCard-DbV7UeLC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ShopBrowser-Bom4KDj2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE = 6;
function ShopBrowser({ initialCategory, initialSort = "new", pool = PRODUCTS }) {
	const { t, tl } = useI18n();
	const [category, setCategory] = (0, import_react.useState)(initialCategory ?? null);
	const [sizes, setSizes] = (0, import_react.useState)([]);
	const [colors, setColors] = (0, import_react.useState)([]);
	const [collection, setCollection] = (0, import_react.useState)(null);
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(400);
	const [inStock, setInStock] = (0, import_react.useState)(false);
	const [onSale, setOnSale] = (0, import_react.useState)(false);
	const [sort, setSort] = (0, import_react.useState)(initialSort);
	const [query, setQuery] = (0, import_react.useState)("");
	const [visible, setVisible] = (0, import_react.useState)(PAGE);
	const [drawer, setDrawer] = (0, import_react.useState)(false);
	const toggle = (list, set, value) => set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
	const results = (0, import_react.useMemo)(() => {
		const term = query.trim().toLowerCase();
		let list = pool.filter((p) => p.status === "published");
		if (category) list = list.filter((p) => p.category === category);
		if (collection) list = list.filter((p) => p.collection === collection);
		if (sizes.length) list = list.filter((p) => p.sizes.some((s) => sizes.includes(s.size) && s.stock > 0));
		if (colors.length) list = list.filter((p) => p.colors.some((c) => colors.includes(c.id)));
		if (inStock) list = list.filter((p) => p.sizes.some((s) => s.stock > 0));
		if (onSale) list = list.filter((p) => !!p.compareAt);
		list = list.filter((p) => p.price <= maxPrice);
		if (term) list = list.filter((p) => Object.values(p.name).join(" ").toLowerCase().includes(term));
		const sorted = [...list];
		if (sort === "priceAsc") sorted.sort((a, b) => a.price - b.price);
		if (sort === "priceDesc") sorted.sort((a, b) => b.price - a.price);
		if (sort === "popular") sorted.sort((a, b) => b.popularity - a.popularity);
		if (sort === "best") sorted.sort((a, b) => Number(b.bestseller) - Number(a.bestseller) || b.popularity - a.popularity);
		if (sort === "new") sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
		return sorted;
	}, [
		pool,
		category,
		collection,
		sizes,
		colors,
		inStock,
		onSale,
		maxPrice,
		query,
		sort
	]);
	const clear = () => {
		setCategory(initialCategory ?? null);
		setSizes([]);
		setColors([]);
		setCollection(null);
		setMaxPrice(400);
		setInStock(false);
		setOnSale(false);
		setQuery("");
	};
	const filters = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-3",
				children: t("shop.filter.category")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCategory(category === c.slug ? null : c.slug),
					className: cn("block text-start text-sm transition-colors", category === c.slug ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
					children: tl(c.name)
				}, c.slug))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-3",
				children: t("shop.filter.size")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: ALL_SIZES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => toggle(sizes, setSizes, s),
					className: cn("min-w-10 border border-border px-3 py-1.5 text-xs", sizes.includes(s) && "bg-foreground text-primary-foreground"),
					children: s
				}, s))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-3",
				children: t("shop.filter.color")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: ALL_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": tl(c.name),
					onClick: () => toggle(colors, setColors, c.id),
					style: { backgroundColor: c.hex },
					className: cn("size-7 rounded-full border border-border transition-transform", colors.includes(c.id) && "ring-1 ring-foreground ring-offset-2")
				}, c.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-3",
				children: t("shop.filter.collection")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: COLLECTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCollection(collection === c.slug ? null : c.slug),
					className: cn("block text-start text-sm transition-colors", collection === c.slug ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
					children: tl(c.name)
				}, c.slug))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3",
					children: t("shop.filter.price")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 80,
					max: 400,
					step: 10,
					value: maxPrice,
					onChange: (e) => setMaxPrice(Number(e.target.value)),
					className: "w-full accent-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: [
						"≤ ",
						maxPrice,
						" € (base)"
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: inStock,
						onChange: (e) => setInStock(e.target.checked),
						className: "accent-foreground"
					}), t("shop.filter.inStock")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: onSale,
						onChange: (e) => setOnSale(e.target.checked),
						className: "accent-foreground"
					}), t("shop.filter.promo")]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: clear,
				className: "link-underline text-xs tracking-[0.16em] uppercase",
				children: t("shop.clear")
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[220px_1fr]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "hidden lg:block",
				children: filters
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: t("search.placeholder"),
						className: "min-w-40 flex-1 border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setDrawer(true),
						className: "flex items-center gap-2 border border-border px-4 py-2 text-xs tracking-[0.14em] uppercase lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-3.5" }), t("shop.filters")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: sort,
						onChange: (e) => setSort(e.target.value),
						className: "border border-border bg-transparent px-3 py-2 text-xs tracking-[0.12em] uppercase",
						"aria-label": t("shop.sort"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "new",
								children: t("shop.sort.new")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "priceAsc",
								children: t("shop.sort.priceAsc")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "priceDesc",
								children: t("shop.sort.priceDesc")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "popular",
								children: t("shop.sort.popular")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "best",
								children: t("shop.sort.best")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: t("shop.results", { count: results.length })
					})
				]
			}), results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-20 text-center text-sm text-muted-foreground",
				children: t("shop.empty")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3",
				children: results.slice(0, visible).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 50,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
				}, p.id))
			}), visible < results.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setVisible((v) => v + PAGE),
					className: "border border-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground",
					children: t("shop.loadMore")
				})
			})] })] }),
			drawer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-100 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-foreground/40",
					onClick: () => setDrawer(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-y-0 end-0 w-[85%] max-w-sm overflow-y-auto bg-background p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl",
								children: t("shop.filters")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setDrawer(false),
								className: "text-sm",
								children: "✕"
							})]
						}),
						filters,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDrawer(false),
							className: "mt-8 w-full bg-foreground py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase",
							children: t("shop.apply")
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { ShopBrowser as t };
