import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n, t as I18nProvider } from "./i18n-D0jOfy2F.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PRODUCTS, i as COLLECTIONS, r as CATEGORIES } from "./products-CjUUzcvf.mjs";
import { n as useStore, t as StoreProvider } from "./store-pJzmorlc.mjs";
import { n as MarketProvider } from "./markets-D3VhIKGD.mjs";
import { _ as Heart, c as Search, f as Music2, g as Instagram, m as Menu, n as User, s as ShoppingBag, t as X, v as Facebook } from "../_libs/lucide-react.mjs";
import { n as MarketSelector, t as LanguageSelector } from "./Selectors-hyxlRQlm.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Price } from "./Price-BhmvvZDt.mjs";
import { i as ldScript, n as absoluteUrl, r as breadcrumbSchema, t as SITE_URL } from "./seo-DlYH6yIb.mjs";
import { t as Route$21 } from "./category._slug-CFsAgQxq.mjs";
import { n as Route$22, t as ReviewsProvider } from "./product._slug-Bx7NYSWj.mjs";
import { t as Newsletter } from "./Newsletter-VhFfwYW1.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BqQtxVWP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BysiNPqT.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var logo_elwafa_default = "/assets/logo-elwafa-CSkC3Krn.png";
function SearchOverlay({ open, onClose }) {
	const { t, tl } = useI18n();
	const [q, setQ] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const term = q.trim().toLowerCase();
		if (!term) return [];
		return PRODUCTS.filter((p) => {
			return [
				...Object.values(p.name),
				...p.colors.flatMap((c) => Object.values(c.name)),
				tl(CATEGORIES.find((c) => c.slug === p.category)?.name),
				tl(COLLECTIONS.find((c) => c.slug === p.collection)?.name)
			].join(" ").toLowerCase().includes(term);
		}).slice(0, 6);
	}, [q, tl]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "animate-soft-in fixed inset-0 z-100 bg-background/98 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 pt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 border-b border-border pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: t("search.placeholder"),
							className: "w-full bg-transparent font-display text-2xl outline-none placeholder:text-muted-foreground"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							"aria-label": t("nav.menu"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})
					]
				}),
				!q && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: t("search.hint")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: c.slug },
							onClick: onClose,
							className: "border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary",
							children: tl(c.name)
						}, c.slug))
					})]
				}),
				q && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-sm text-muted-foreground",
					children: t("search.empty")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-4",
					children: results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$slug",
						params: { slug: p.slug },
						onClick: onClose,
						className: "flex items-center gap-4 transition-opacity hover:opacity-70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.images[0],
							alt: tl(p.name),
							width: 80,
							height: 107,
							loading: "lazy",
							className: "h-24 w-18 object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-lg",
							children: tl(p.name)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
							price: p.price,
							compareAt: p.compareAt
						})] })]
					}) }, p.id))
				})
			]
		})
	});
}
function SiteHeader() {
	const { t, tl } = useI18n();
	const { cartCount, wishlist } = useStore();
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen, searchOpen]);
	const nav = [
		{
			to: "/shop",
			label: t("nav.shop")
		},
		{
			to: "/shop",
			label: t("nav.newArrivals"),
			search: { sort: "new" }
		},
		{
			to: "/about",
			label: t("nav.about")
		},
		{
			to: "/contact",
			label: t("nav.contact")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-gold/10 py-2 text-center text-[10px] tracking-[0.2em] text-gold uppercase font-semibold",
			children: [
				"✨ ",
				t("trust.shipping"),
				" — 🎁 ",
				t("cart.free"),
				" ",
				t("cart.shipping"),
				" à partir de 100 EUR"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: cn("sticky top-0 z-50 border-b border-transparent bg-background/95 backdrop-blur transition-all duration-500", scrolled && "border-border"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-4 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "md:hidden",
						onClick: () => setMenuOpen(true),
						"aria-label": t("nav.menu"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden flex-1 items-center gap-7 md:flex",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "link-underline text-xs tracking-[0.16em] uppercase",
							children: item.label
						}, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex flex-1 justify-center md:flex-none",
						"aria-label": "El Wafa Création",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_elwafa_default,
							alt: "El Wafa Création",
							width: 1024,
							height: 1024,
							className: "h-12 w-auto md:h-14"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 items-center justify-end gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden items-center gap-4 lg:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketSelector, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelector, {})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSearchOpen(true),
								"aria-label": t("nav.search"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wishlist",
								"aria-label": t("nav.wishlist"),
								className: "relative hidden sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-5" }), wishlist.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -end-1.5 -top-1.5 grid size-4 place-items-center rounded-full bg-foreground text-[9px] text-primary-foreground",
									children: wishlist.length
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/account",
								"aria-label": t("nav.account"),
								className: "hidden sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								"aria-label": t("nav.cart"),
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "animate-rise absolute -end-1.5 -top-1.5 grid size-4 place-items-center rounded-full bg-foreground text-[9px] text-primary-foreground",
									children: cartCount
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hide-scrollbar hidden overflow-x-auto border-t border-border md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-[1400px] items-center justify-center gap-8 px-8 py-3",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: c.slug },
						className: "link-underline text-[11px] whitespace-nowrap text-muted-foreground tracking-[0.16em] uppercase transition-colors hover:text-foreground",
						children: tl(c.name)
					}, c.slug))
				})
			})]
		}),
		menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-soft-in fixed inset-0 z-100 bg-background md:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/logo-elwafa-CSkC3Krn.png",
						alt: "El Wafa Création",
						width: 1024,
						height: 1024,
						className: "h-10 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMenuOpen(false),
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col px-6 py-6",
					children: [
						nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setMenuOpen(false),
							className: "border-b border-border py-4 font-display text-2xl",
							children: item.label
						}, item.label)),
						CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: c.slug },
							onClick: () => setMenuOpen(false),
							className: "border-b border-border py-3.5 text-sm tracking-[0.12em] uppercase",
							children: tl(c.name)
						}, c.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/wishlist",
							onClick: () => setMenuOpen(false),
							className: "border-b border-border py-3.5 text-sm tracking-[0.12em] uppercase",
							children: t("nav.wishlist")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							onClick: () => setMenuOpen(false),
							className: "border-b border-border py-3.5 text-sm tracking-[0.12em] uppercase",
							children: t("nav.account")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6 px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketSelector, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelector, {})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchOverlay, {
			open: searchOpen,
			onClose: () => setSearchOpen(false)
		})
	] });
}
function SiteFooter() {
	const { t, tl } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border bg-secondary/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 py-16 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-2 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_elwafa_default,
								alt: "El Wafa Création",
								width: 1024,
								height: 1024,
								loading: "lazy",
								className: "h-20 w-auto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xs text-sm text-muted-foreground",
								children: t("brand.tagline")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-1 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "+216 55 123 456" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "contact@elwafacreation.com" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tunis, Tunisie" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, { compact: true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://instagram.com/elwafa_creation",
										"aria-label": "Instagram @elwafa_creation",
										className: "hover:opacity-60",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://facebook.com",
										"aria-label": "Facebook",
										className: "hover:opacity-60",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://tiktok.com",
										"aria-label": "TikTok",
										className: "hover:opacity-60",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "size-4" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: t("footer.shop")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-sm",
						children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: c.slug },
							className: "text-muted-foreground transition-colors hover:text-foreground",
							children: tl(c.name)
						}) }, c.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: t("footer.help")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shipping",
								className: "text-muted-foreground hover:text-foreground",
								children: t("footer.shippingInfo")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/returns",
								className: "text-muted-foreground hover:text-foreground",
								children: t("footer.returns")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/faq",
								className: "text-muted-foreground hover:text-foreground",
								children: t("footer.faq")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "text-muted-foreground hover:text-foreground",
								children: t("nav.contact")
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: t("footer.legal")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "text-muted-foreground hover:text-foreground",
								children: t("footer.house")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "text-muted-foreground hover:text-foreground",
								children: t("footer.privacy")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "text-muted-foreground hover:text-foreground",
								children: t("footer.terms")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin",
								className: "text-muted-foreground hover:text-foreground",
								children: t("nav.admin")
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" El Wafa Création. ",
						t("footer.rights")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketSelector, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelector, {})]
				})]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-light",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center bg-primary px-6 py-3 text-[11px] tracking-[0.18em] text-primary-foreground uppercase",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center bg-primary px-6 py-3 text-[11px] tracking-[0.18em] text-primary-foreground uppercase",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center border border-input px-6 py-3 text-[11px] tracking-[0.18em] uppercase",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$20 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "El Wafa Création — Robes de couture | Tunisie, France, Italie" },
			{
				name: "description",
				content: "El Wafa Création — robes de soirée, de cérémonie et du quotidien, faites main en série limitée. Livraison en Tunisie, France et Italie."
			},
			{
				name: "author",
				content: "El Wafa Création"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "El Wafa Création"
			},
			{
				property: "og:image",
				content: absoluteUrl("/og-image.jpg")
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:type",
				content: "image/jpeg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: absoluteUrl("/og-image.jpg")
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400;500&family=Noto+Kufi+Arabic:wght@300;400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		],
		scripts: [ldScript({
			"@context": "https://schema.org",
			"@type": "Organization",
			name: "El Wafa Création",
			url: SITE_URL,
			logo: absoluteUrl("/og-image.jpg"),
			description: "Robes de soirée, de cérémonie et casual faites main en série limitée. Livraison en Tunisie, France et Italie.",
			address: {
				"@type": "PostalAddress",
				addressCountry: "TN",
				addressLocality: "Tunis"
			}
		}), { children: `(function(){try{var s=localStorage.getItem("mn.locale")||(navigator.language||"fr").slice(0,2).toLowerCase();var l=["ar","it"].includes(s)?s:"fr";document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";}catch(e){}})();` }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		dir: "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$20.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReviewsProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })] }) }) }) })
	});
}
var $$splitComponentImporter$19 = () => import("./routes-CWuCQ-Ze.mjs");
var Route$19 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "El Wafa Création — L'élégance qui parle pour vous | Robes de couture" },
			{
				name: "description",
				content: "Robes de soirée, de cérémonie et casual faites main en série limitée. Prix en EUR et TND, livraison en Tunisie, France et Italie."
			},
			{
				property: "og:title",
				content: "El Wafa Création — Robes de couture méditerranéennes"
			},
			{
				property: "og:description",
				content: "Découvrez nos robes faites main. Livraison Tunisie, France, Italie. Site en français, arabe et italien."
			},
			{
				property: "og:url",
				content: absoluteUrl("/")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./about-Dv8cp_sL.mjs");
var Route$18 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "La Maison — Notre histoire de couture | El Wafa Création" },
		{
			name: "description",
			content: "El Wafa Création : un atelier méditerranéen, des tissus rares et des séries limitées entre Tunis, Paris et Milan."
		},
		{
			property: "og:title",
			content: "La Maison — El Wafa Création"
		},
		{
			property: "og:description",
			content: "Une couture née en Méditerranée."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./account-Bn-3QJ9g.mjs");
var Route$17 = createFileRoute("/account")({
	head: () => ({ meta: [
		{ title: "Mon compte | El Wafa Création" },
		{
			name: "description",
			content: "Gérez vos informations, commandes, adresses et favoris."
		},
		{
			property: "og:title",
			content: "Mon compte | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Espace client El Wafa Création."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./admin-BWDJWyBz.mjs");
var Route$16 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Administration | El Wafa Création" },
		{
			name: "description",
			content: "Tableau de bord : produits, stock, commandes, clients, promotions."
		},
		{
			property: "og:title",
			content: "Administration | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Dashboard interne El Wafa Création."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./cart-DqxvTsNx.mjs");
var Route$15 = createFileRoute("/cart")({
	head: () => ({ meta: [
		{ title: "Panier | El Wafa Création" },
		{
			name: "description",
			content: "Vérifiez votre sélection avant de passer commande."
		},
		{
			property: "og:title",
			content: "Panier | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Votre sélection El Wafa Création."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./checkout-BStNM6VS.mjs");
var Route$14 = createFileRoute("/checkout")({
	head: () => ({ meta: [
		{ title: "Commande | El Wafa Création" },
		{
			name: "description",
			content: "Finalisez votre demande de commande."
		},
		{
			property: "og:title",
			content: "Commande | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Demande de commande El Wafa Création."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./contact-ctsrIxtO.mjs");
var Route$13 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Service client | El Wafa Création" },
		{
			name: "description",
			content: "Écrivez-nous : notre service client répond sous 24h en français, arabe et italien."
		},
		{
			property: "og:title",
			content: "Contact | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Service client El Wafa Création — réponse sous 24h."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./faq-DCyYwix2.mjs");
var Route$12 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ — Livraison, tailles, retours | El Wafa Création" },
		{
			name: "description",
			content: "Réponses aux questions fréquentes : délais de livraison, tailles, retours, paiement."
		},
		{
			property: "og:title",
			content: "FAQ | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Livraison, tailles, retours et paiement."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./forgot-password-BQ1xYD0T.mjs");
var Route$11 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [
		{ title: "Mot de passe oublié | El Wafa Création" },
		{
			name: "description",
			content: "Réinitialisez le mot de passe de votre compte."
		},
		{
			property: "og:title",
			content: "Mot de passe oublié | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Réinitialisation du mot de passe."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./login-DdZVZQ42.mjs");
var Route$10 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: "Connexion | El Wafa Création" },
		{
			name: "description",
			content: "Connectez-vous à votre espace client El Wafa Création."
		},
		{
			property: "og:title",
			content: "Connexion | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Accédez à vos commandes et favoris."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./privacy-Cjx3dsoO.mjs");
var Route$9 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Politique de confidentialité | El Wafa Création" },
		{
			name: "description",
			content: "Comment El Wafa Création collecte, utilise et protège vos données personnelles."
		},
		{
			property: "og:title",
			content: "Politique de confidentialité | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Protection des données El Wafa Création."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./register-lHr64W3T.mjs");
var Route$8 = createFileRoute("/register")({
	head: () => ({ meta: [
		{ title: "Créer un compte | El Wafa Création" },
		{
			name: "description",
			content: "Créez votre compte pour suivre vos commandes et favoris."
		},
		{
			property: "og:title",
			content: "Créer un compte | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Rejoignez El Wafa Création."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./returns-BHRrC0F5.mjs");
var Route$7 = createFileRoute("/returns")({
	head: () => ({ meta: [
		{ title: "Retours & échanges sous 14 jours | El Wafa Création" },
		{
			name: "description",
			content: "Retours et échanges sous 14 jours pour toute pièce non portée, dans les trois marchés."
		},
		{
			property: "og:title",
			content: "Retours & échanges | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Politique de retour El Wafa Création."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./shipping-DHVaewF9.mjs");
var Route$6 = createFileRoute("/shipping")({
	head: () => ({ meta: [
		{ title: "Livraison — Tunisie, France, Italie | El Wafa Création" },
		{
			name: "description",
			content: "Tarifs, délais et seuils de livraison gratuite pour la Tunisie, la France et l'Italie."
		},
		{
			property: "og:title",
			content: "Livraison | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Tarifs et délais par pays."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./shop-Chx0epTe.mjs");
var Route$5 = createFileRoute("/shop")({
	head: () => ({
		meta: [
			{ title: "Boutique — Robes de couture en série limitée | El Wafa Création" },
			{
				name: "description",
				content: "Parcourez toutes nos robes : soirée, cérémonie, casual. Filtrez par taille, couleur, prix et collection. Prix en EUR ou TND."
			},
			{
				property: "og:title",
				content: "Boutique El Wafa Création"
			},
			{
				property: "og:description",
				content: "Toutes nos robes faites main, filtrables par taille, couleur et collection."
			},
			{
				property: "og:url",
				content: absoluteUrl("/shop")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/shop")
		}],
		scripts: [breadcrumbSchema([{
			name: "Accueil",
			path: "/"
		}, {
			name: "Boutique",
			path: "/shop"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./terms-CV6mIl5g.mjs");
var Route$4 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Conditions générales de vente | El Wafa Création" },
		{
			name: "description",
			content: "Conditions générales de vente applicables aux commandes passées sur El Wafa Création."
		},
		{
			property: "og:title",
			content: "Conditions générales | El Wafa Création"
		},
		{
			property: "og:description",
			content: "CGV El Wafa Création."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./wishlist-Bsof5ubX.mjs");
var Route$3 = createFileRoute("/wishlist")({
	head: () => ({ meta: [
		{ title: "Mes favoris | El Wafa Création" },
		{
			name: "description",
			content: "Retrouvez les robes que vous avez sauvegardées."
		},
		{
			property: "og:title",
			content: "Mes favoris | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Vos robes favorites El Wafa Création."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./account.addresses-Ce0zQpCF.mjs");
var Route$2 = createFileRoute("/account/addresses")({
	head: () => ({ meta: [
		{ title: "Mes adresses | El Wafa Création" },
		{
			name: "description",
			content: "Gérez vos adresses de livraison et de facturation."
		},
		{
			property: "og:title",
			content: "Mes adresses | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Adresses de livraison El Wafa Création."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./account.orders-B7ach2Us.mjs");
var Route$1 = createFileRoute("/account/orders")({
	head: () => ({ meta: [
		{ title: "Mes commandes | El Wafa Création" },
		{
			name: "description",
			content: "Suivez l'état de vos commandes El Wafa Création."
		},
		{
			property: "og:title",
			content: "Mes commandes | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Historique et suivi de vos commandes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./order.confirmation-Bj8hXROQ.mjs");
var Route = createFileRoute("/order/confirmation")({
	head: () => ({ meta: [
		{ title: "Confirmation | El Wafa Création" },
		{
			name: "description",
			content: "Votre demande de commande a bien été envoyée."
		},
		{
			property: "og:title",
			content: "Confirmation | El Wafa Création"
		},
		{
			property: "og:description",
			content: "Demande de commande confirmée."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$19.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var AboutRoute = Route$18.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$20
});
var AccountRoute = Route$17.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$20
});
var AdminRoute = Route$16.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$20
});
var CartRoute = Route$15.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$20
});
var CheckoutRoute = Route$14.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$20
});
var ContactRoute = Route$13.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$20
});
var FaqRoute = Route$12.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$20
});
var ForgotPasswordRoute = Route$11.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$20
});
var LoginRoute = Route$10.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$20
});
var PrivacyRoute = Route$9.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$20
});
var RegisterRoute = Route$8.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$20
});
var ReturnsRoute = Route$7.update({
	id: "/returns",
	path: "/returns",
	getParentRoute: () => Route$20
});
var ShippingRoute = Route$6.update({
	id: "/shipping",
	path: "/shipping",
	getParentRoute: () => Route$20
});
var ShopRoute = Route$5.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$20
});
var TermsRoute = Route$4.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$20
});
var WishlistRoute = Route$3.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$20
});
var AccountAddressesRoute = Route$2.update({
	id: "/addresses",
	path: "/addresses",
	getParentRoute: () => AccountRoute
});
var AccountOrdersRoute = Route$1.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AccountRoute
});
var CategorySlugRoute = Route$21.update({
	id: "/category/$slug",
	path: "/category/$slug",
	getParentRoute: () => Route$20
});
var OrderConfirmationRoute = Route.update({
	id: "/order/confirmation",
	path: "/order/confirmation",
	getParentRoute: () => Route$20
});
var ProductSlugRoute = Route$22.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$20
});
var AccountRouteChildren = {
	AccountAddressesRoute,
	AccountOrdersRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AccountRoute: AccountRoute._addFileChildren(AccountRouteChildren),
	AdminRoute,
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	FaqRoute,
	ForgotPasswordRoute,
	LoginRoute,
	PrivacyRoute,
	RegisterRoute,
	ReturnsRoute,
	ShippingRoute,
	ShopRoute,
	TermsRoute,
	WishlistRoute,
	CategorySlugRoute,
	OrderConfirmationRoute,
	ProductSlugRoute
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
