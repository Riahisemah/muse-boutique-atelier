import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { t as Reveal } from "./Reveal-DHztnhoY.mjs";
import { t as story_default } from "./story-B9HoR2cQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PRODUCTS, r as CATEGORIES } from "./products-CjUUzcvf.mjs";
import { a as Sparkles, d as Phone, h as Link2, l as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./ProductCard-DbV7UeLC.mjs";
import { t as Newsletter } from "./Newsletter-VhFfwYW1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CWuCQ-Ze.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, subtitle, viewAllTo }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mb-10 flex flex-wrap items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-3",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl md:text-4xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: subtitle
			})
		] }), viewAllTo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: viewAllTo,
			className: "link-underline text-xs tracking-[0.18em] uppercase",
			children: t("home.viewAll")
		})]
	});
}
var hero_default = "/assets/hero-DfSyNgdj.webp";
var promo_default = "/assets/promo-BYAQ-mJB.webp";
function Home() {
	const { t, tl } = useI18n();
	const newArrivals = PRODUCTS.filter((p) => p.newArrival).slice(0, 4);
	const bestSellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center px-6 py-20 md:px-14 lg:px-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow animate-rise",
								children: t("brand.tagline")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "animate-rise mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl",
								style: { animationDelay: "120ms" },
								children: t("hero.title")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "animate-rise mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground",
								style: { animationDelay: "240ms" },
								children: t("hero.subtitle")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-rise mt-10 flex flex-wrap gap-3",
								style: { animationDelay: "360ms" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/shop",
									className: "bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-85 font-semibold",
									children: ["🛍️ ", t("hero.cta1")]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/shop",
									search: { sort: "new" },
									className: "border border-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground font-semibold",
									children: ["✨ ", t("hero.cta2")]
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-soft-in relative overflow-hidden bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: t("hero.title"),
						width: 1600,
						height: 1920,
						className: "h-[62vh] w-full object-cover object-top md:h-full md:min-h-[86vh]"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-background/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-[1400px] grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:px-8",
				children: [
					{
						icon: Link2,
						label: t("trust.shipping")
					},
					{
						icon: RefreshCw,
						label: t("trust.returns")
					},
					{
						icon: Phone,
						label: t("trust.phone")
					},
					{
						icon: Sparkles,
						label: t("trust.crafted")
					}
				].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] tracking-[0.1em] text-muted-foreground uppercase",
						children: label
					})]
				}, label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1400px] px-6 py-16 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-bold text-foreground",
							children: "+2500"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Clientes satisfaites"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-bold text-gold",
							children: "⭐⭐⭐⭐⭐"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "4.9/5 — Très satisfaites"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-bold text-foreground",
							children: "98%"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Recommandent El Wafa"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-6 py-20 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("home.categories.subtitle"),
				title: t("home.categories.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: CATEGORIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/category/$slug",
						params: { slug: c.slug },
						className: "group relative block overflow-hidden bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: tl(c.name),
							width: 1e3,
							height: 1333,
							loading: "lazy",
							className: "aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-primary-foreground",
								children: tl(c.name)
							})
						})]
					})
				}, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-6 pb-20 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: t("home.new.title"),
				subtitle: t("home.new.subtitle"),
				viewAllTo: "/shop"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4",
				children: newArrivals.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
				}, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: promo_default,
				alt: t("home.promo.title"),
				width: 1920,
				height: 1080,
				loading: "lazy",
				className: "h-[60vh] w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center bg-foreground/25",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-[1400px] px-6 md:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-md text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.22em] uppercase",
								children: t("home.promo.eyebrow")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-4xl text-primary-foreground md:text-5xl",
								children: t("home.promo.title")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm",
								children: t("home.promo.text")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "mt-8 inline-block bg-background px-8 py-4 text-[11px] tracking-[0.2em] text-foreground uppercase transition-opacity hover:opacity-85",
								children: t("home.promo.cta")
							})
						]
					})
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-6 py-20 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: t("home.best.title"),
				subtitle: t("home.best.subtitle"),
				viewAllTo: "/shop"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4",
				children: bestSellers.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
				}, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: story_default,
					alt: t("home.story.title"),
					width: 1400,
					height: 1600,
					loading: "lazy",
					className: "aspect-[7/8] w-full object-cover"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t("home.story.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl md:text-4xl",
							children: t("home.story.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground",
							children: t("home.story.text")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "link-underline mt-8 inline-block text-xs tracking-[0.18em] uppercase",
							children: t("home.story.cta")
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-2xl px-6 py-24 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl md:text-4xl",
				children: t("home.newsletter.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
			})] })
		})
	] });
}
//#endregion
export { Home as component };
