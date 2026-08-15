import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Reveal } from "./Reveal-DHztnhoY.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PRODUCTS, c as getProductBySlug, o as discountPercent, r as CATEGORIES } from "./products-CjUUzcvf.mjs";
import { n as useStore } from "./store-pJzmorlc.mjs";
import { a as useMarket, i as shippingFor } from "./markets-D3VhIKGD.mjs";
import { _ as Heart, i as Star, p as Minus, r as Truck, u as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Price } from "./Price-BhmvvZDt.mjs";
import { t as ProductCard } from "./ProductCard-DbV7UeLC.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.mjs";
import { n as Route, r as useReviews } from "./product._slug-Bx7NYSWj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-CGEeI2xN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Stars({ rating, size = 14, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-0.5", className),
		"aria-hidden": true,
		children: [
			1,
			2,
			3,
			4,
			5
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
			style: {
				width: size,
				height: size
			},
			className: cn("shrink-0", i <= Math.round(rating) ? "fill-gold text-gold" : "text-border")
		}, i))
	});
}
function StarPicker({ value, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": label,
		className: "flex items-center gap-1",
		children: [
			1,
			2,
			3,
			4,
			5
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "radio",
			"aria-checked": value === i,
			"aria-label": `${i}/5`,
			onClick: () => onChange(i),
			className: "p-0.5 transition-transform hover:scale-110",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-5", i <= value ? "fill-gold text-gold" : "text-border") })
		}, i))
	});
}
/**
* Strings added with the reviews / tax / promo features.
* Kept in a dedicated dictionary so the three locales stay in sync.
*/
var EXTRA = {
	"reviews.title": {
		fr: "Avis clientes",
		ar: "تقييمات العميلات",
		it: "Recensioni"
	},
	"reviews.count": {
		fr: "{count} avis",
		ar: "{count} تقييم",
		it: "{count} recensioni"
	},
	"reviews.based": {
		fr: "Basé sur {count} avis vérifiés",
		ar: "بناءً على {count} تقييم",
		it: "Basato su {count} recensioni"
	},
	"reviews.empty": {
		fr: "Aucun avis pour le moment. Soyez la première.",
		ar: "لا توجد تقييمات بعد. كوني الأولى.",
		it: "Ancora nessuna recensione. Sii la prima."
	},
	"reviews.write": {
		fr: "Écrire un avis",
		ar: "اكتبي تقييمًا",
		it: "Scrivi una recensione"
	},
	"reviews.rating": {
		fr: "Votre note",
		ar: "تقييمك",
		it: "Il tuo voto"
	},
	"reviews.name": {
		fr: "Votre prénom",
		ar: "اسمك",
		it: "Il tuo nome"
	},
	"reviews.titleField": {
		fr: "Titre",
		ar: "العنوان",
		it: "Titolo"
	},
	"reviews.body": {
		fr: "Votre avis",
		ar: "رأيك",
		it: "La tua recensione"
	},
	"reviews.submit": {
		fr: "Publier",
		ar: "نشر",
		it: "Pubblica"
	},
	"reviews.thanks": {
		fr: "Merci pour votre avis !",
		ar: "شكرًا على تقييمك!",
		it: "Grazie per la recensione!"
	},
	"reviews.required": {
		fr: "Merci d'indiquer votre prénom et votre avis.",
		ar: "يرجى إدخال اسمك ورأيك.",
		it: "Inserisci nome e recensione."
	},
	"reviews.noTitle": {
		fr: "Avis vérifié",
		ar: "تقييم",
		it: "Recensione"
	},
	"reviews.verified": {
		fr: "Achat vérifié",
		ar: "شراء موثق",
		it: "Acquisto verificato"
	},
	"reviews.sizeWorn": {
		fr: "Taille portée",
		ar: "المقاس",
		it: "Taglia"
	},
	"promo.label": {
		fr: "Code promo",
		ar: "رمز الخصم",
		it: "Codice promo"
	},
	"promo.placeholder": {
		fr: "Ex. AUTOMNE20",
		ar: "مثال AUTOMNE20",
		it: "Es. AUTOMNE20"
	},
	"promo.apply": {
		fr: "Appliquer",
		ar: "تطبيق",
		it: "Applica"
	},
	"promo.remove": {
		fr: "Retirer",
		ar: "إزالة",
		it: "Rimuovi"
	},
	"promo.applied": {
		fr: "Code {code} appliqué",
		ar: "تم تطبيق {code}",
		it: "Codice {code} applicato"
	},
	"promo.error.unknown": {
		fr: "Code promo invalide.",
		ar: "رمز غير صالح.",
		it: "Codice non valido."
	},
	"promo.error.expired": {
		fr: "Ce code n'est plus valable.",
		ar: "انتهت صلاحية هذا الرمز.",
		it: "Questo codice è scaduto."
	},
	"promo.error.market": {
		fr: "Ce code n'est pas valable dans votre pays.",
		ar: "هذا الرمز غير صالح في بلدك.",
		it: "Codice non valido nel tuo paese."
	},
	"promo.error.min": {
		fr: "Minimum {amount} d'achat requis.",
		ar: "الحد الأدنى للشراء {amount}.",
		it: "Spesa minima {amount}."
	},
	"totals.discount": {
		fr: "Remise",
		ar: "الخصم",
		it: "Sconto"
	},
	"totals.vat": {
		fr: "dont TVA ({rate}%)",
		ar: "منها ض.ق.م ({rate}%)",
		it: "di cui IVA ({rate}%)"
	},
	"totals.customs": {
		fr: "Droits de douane estimés",
		ar: "الرسوم الجمركية التقديرية",
		it: "Dazi doganali stimati"
	},
	"totals.customsHint": {
		fr: "Expédition depuis Tunis : droits estimés au-delà de 150 € de marchandise.",
		ar: "الإرسال من تونس: رسوم تقديرية فوق 150 € من قيمة السلع.",
		it: "Spedizione da Tunisi: dazi stimati oltre 150 € di merce."
	},
	"order.tracking": {
		fr: "Suivi de commande",
		ar: "تتبع الطلب",
		it: "Tracciamento ordine"
	},
	"order.carrier": {
		fr: "Transporteur",
		ar: "الناقل",
		it: "Corriere"
	},
	"order.number": {
		fr: "N° de suivi",
		ar: "رقم التتبع",
		it: "N. tracking"
	},
	"order.eta": {
		fr: "Livraison estimée",
		ar: "التوصيل المتوقع",
		it: "Consegna stimata"
	},
	"order.invoice": {
		fr: "Facture PDF",
		ar: "فاتورة PDF",
		it: "Fattura PDF"
	},
	"order.detail": {
		fr: "Voir le détail",
		ar: "عرض التفاصيل",
		it: "Vedi dettaglio"
	},
	"order.items": {
		fr: "Articles",
		ar: "المنتجات",
		it: "Articoli"
	},
	"order.shipTo": {
		fr: "Adresse de livraison",
		ar: "عنوان التوصيل",
		it: "Indirizzo di consegna"
	},
	"order.invoiceTitle": {
		fr: "Facture",
		ar: "فاتورة",
		it: "Fattura"
	},
	"shop.page": {
		fr: "Page {page} / {total}",
		ar: "صفحة {page} / {total}",
		it: "Pagina {page} / {total}"
	},
	"shop.prev": {
		fr: "Précédent",
		ar: "السابق",
		it: "Precedente"
	},
	"shop.next": {
		fr: "Suivant",
		ar: "التالي",
		it: "Successivo"
	},
	"admin.images": {
		fr: "Images du produit",
		ar: "صور المنتج",
		it: "Immagini prodotto"
	},
	"admin.upload": {
		fr: "Ajouter des images",
		ar: "إضافة صور",
		it: "Aggiungi immagini"
	},
	"admin.uploadHint": {
		fr: "JPG ou PNG, 1200×1600 px recommandé.",
		ar: "JPG أو PNG، يُنصح بـ 1200×1600.",
		it: "JPG o PNG, consigliato 1200×1600 px."
	},
	"admin.save": {
		fr: "Enregistrer",
		ar: "حفظ",
		it: "Salva"
	},
	"admin.cancel": {
		fr: "Annuler",
		ar: "إلغاء",
		it: "Annulla"
	},
	"admin.saved": {
		fr: "Produit enregistré",
		ar: "تم حفظ المنتج",
		it: "Prodotto salvato"
	},
	"admin.editProduct": {
		fr: "Modifier le produit",
		ar: "تعديل المنتج",
		it: "Modifica prodotto"
	},
	"admin.edit": {
		fr: "Modifier",
		ar: "تعديل",
		it: "Modifica"
	}
};
/** Translator for the EXTRA dictionary (reviews, promo, taxes, orders, admin). */
function useTx() {
	const { locale } = useI18n();
	return (0, import_react.useCallback)((key, vars) => {
		const entry = EXTRA[key];
		let text = entry ? entry[locale] : key;
		if (vars) for (const [k, v] of Object.entries(vars)) text = text.replaceAll(`{${k}}`, String(v));
		return text;
	}, [locale]);
}
function ProductReviews({ product }) {
	const tx = useTx();
	const { market } = useMarket();
	const { forProduct, summary, addReview } = useReviews();
	const reviews = forProduct(product.id);
	const { count, average, distribution } = summary(product.id);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [rating, setRating] = (0, import_react.useState)(5);
	const [author, setAuthor] = (0, import_react.useState)("");
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [size, setSize] = (0, import_react.useState)(product.sizes[0]?.size ?? "");
	const submit = (e) => {
		e.preventDefault();
		if (!author.trim() || !body.trim()) {
			toast.error(tx("reviews.required"));
			return;
		}
		addReview({
			productId: product.id,
			author: author.trim(),
			market: market.code,
			rating,
			title: title.trim() || tx("reviews.noTitle"),
			body: body.trim(),
			size
		});
		setAuthor("");
		setTitle("");
		setBody("");
		setRating(5);
		setOpen(false);
		toast.success(tx("reviews.thanks"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-24 border-t border-border pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-3xl",
			children: tx("reviews.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-10 lg:grid-cols-[280px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-5xl",
						children: average.toFixed(1)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pb-2 text-sm text-muted-foreground",
						children: "/ 5"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
					rating: average,
					size: 18,
					className: "mt-2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: tx("reviews.based", { count })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-1.5",
					children: [
						5,
						4,
						3,
						2,
						1
					].map((star) => {
						const n = distribution[star] ?? 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-3 text-muted-foreground",
									children: star
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-1.5 flex-1 bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block h-full bg-gold",
										style: { width: `${count ? n / count * 100 : 0}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-5 text-end text-muted-foreground",
									children: n
								})
							]
						}, star);
					})
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: tx("reviews.empty")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpen((o) => !o),
				className: "mt-8 w-full border border-foreground py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground",
				children: tx("reviews.write")
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mb-10 space-y-5 border border-border p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-2",
						children: tx("reviews.rating")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarPicker, {
						value: rating,
						onChange: setRating,
						label: tx("reviews.rating")
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: tx("reviews.name")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: author,
								onChange: (e) => setAuthor(e.target.value),
								className: "mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: tx("reviews.sizeWorn")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: size,
								onChange: (e) => setSize(e.target.value),
								className: "mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none",
								children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s.size,
									children: s.size
								}, s.size))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: tx("reviews.titleField")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: title,
							onChange: (e) => setTitle(e.target.value),
							className: "mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: tx("reviews.body")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: body,
							onChange: (e) => setBody(e.target.value),
							rows: 4,
							className: "mt-2 w-full border border-border bg-transparent p-3 text-sm outline-none focus:border-foreground"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "bg-foreground px-8 py-3.5 text-[11px] tracking-[0.18em] text-primary-foreground uppercase",
						children: tx("reviews.submit")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border",
				children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { rating: r.rating }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: r.title
								}),
								r.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "border border-border px-2 py-0.5 text-[10px] tracking-[0.14em] uppercase text-muted-foreground",
									children: tx("reviews.verified")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: r.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: [
								r.author,
								" · ",
								r.market,
								" · ",
								r.date,
								r.size ? ` · ${tx("reviews.sizeWorn")} ${r.size}` : ""
							]
						})
					]
				}, r.id))
			})] })]
		})]
	});
}
function ProductPage() {
	const { slug } = Route.useParams();
	const { t, tl } = useI18n();
	const { market, format } = useMarket();
	const { addToCart, toggleWishlist, isWished } = useStore();
	const navigate = useNavigate();
	const product = getProductBySlug(slug);
	const [size, setSize] = (0, import_react.useState)(null);
	const [colorId, setColorId] = (0, import_react.useState)(null);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [activeImage, setActiveImage] = (0, import_react.useState)(0);
	const [zoom, setZoom] = (0, import_react.useState)(false);
	const similar = (0, import_react.useMemo)(() => product ? PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).concat(PRODUCTS.filter((p) => p.id !== product.id)).slice(0, 4) : [], [product]);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-6 py-32 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl",
			children: t("shop.empty")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "link-underline mt-6 inline-block text-xs uppercase",
			children: t("cart.continue")
		})]
	});
	const color = colorId ?? product.colors[0].id;
	const discount = discountPercent(product);
	const sizeStock = product.sizes.find((s) => s.size === size)?.stock ?? 0;
	const category = CATEGORIES.find((c) => c.slug === product.category);
	const methods = shippingFor(market.code);
	const add = (buyNow = false) => {
		if (!size) {
			toast.error(t("product.selectSize"));
			return;
		}
		addToCart({
			productId: product.id,
			size,
			colorId: color,
			qty
		});
		toast.success(t("product.added"), { description: `${tl(product.name)} · ${size}` });
		if (buyNow) navigate({ to: "/checkout" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] px-6 py-10 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mb-8 flex items-center gap-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-foreground",
						children: "El Wafa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
					category && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: category.slug },
						className: "hover:text-foreground",
						children: tl(category.name)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: tl(product.name)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("overflow-hidden bg-secondary", zoom && "cursor-zoom-out"),
					onClick: () => setZoom((z) => !z),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.images[activeImage],
						alt: tl(product.name),
						width: 1e3,
						height: 1333,
						className: cn("aspect-[3/4] w-full object-cover transition-transform duration-700", zoom ? "scale-150" : "scale-100 cursor-zoom-in")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-3",
					children: product.images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveImage(i),
						className: cn("w-20 border", i === activeImage ? "border-foreground" : "border-transparent"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img,
							alt: "",
							width: 80,
							height: 107,
							loading: "lazy",
							className: "aspect-[3/4] object-cover"
						})
					}, img + i))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:sticky lg:top-32 lg:self-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [product.newArrival && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: t("product.new")
							}), discount !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "bg-foreground px-2 py-1 text-[10px] tracking-[0.16em] text-primary-foreground uppercase",
								children: [
									"-",
									discount,
									"%"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-4xl",
							children: tl(product.name)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
								price: product.price,
								compareAt: product.compareAt,
								size: "lg"
							})
						}),
						product.promoEndsAt && discount !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: t("product.promoEnds", { date: product.promoEndsAt })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground",
							children: tl(product.description)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-3",
								children: t("product.color")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": tl(c.name),
									onClick: () => setColorId(c.id),
									style: { backgroundColor: c.hex },
									className: cn("size-8 rounded-full border border-border", color === c.id && "ring-1 ring-foreground ring-offset-2")
								}, c.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: t("product.size")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: t("product.sizeGuide")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: s.stock === 0,
										onClick: () => setSize(s.size),
										className: cn("min-w-14 border border-border py-3 text-xs tracking-[0.1em]", size === s.size && "bg-foreground text-primary-foreground", s.stock === 0 && "text-muted-foreground line-through opacity-40"),
										children: s.size
									}, s.size))
								}),
								size && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: sizeStock === 0 ? t("product.outOfStock") : sizeStock <= 3 ? t("product.lowStock") : t("product.inStock")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setQty((q) => Math.max(1, q - 1)),
										className: "p-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-10 text-center text-sm",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setQty((q) => Math.min(10, q + 1)),
										className: "p-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleWishlist(product.id),
								"aria-label": t("product.wishlist"),
								className: "grid size-12 place-items-center border border-border transition-transform hover:scale-105",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", isWished(product.id) && "fill-foreground") })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-2",
							children: [
								sizeStock > 0 && sizeStock <= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-red-600 font-semibold",
									children: [
										"⚡ ",
										t("product.lowStock"),
										" — ",
										t("product.sale"),
										" limitée"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => add(),
									disabled: !size,
									className: "bg-foreground py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-85 disabled:opacity-50",
									children: ["✓ ", t("product.addToCart")]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => add(true),
									disabled: !size,
									className: "border-2 border-foreground bg-background py-4 text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors hover:bg-foreground hover:text-primary-foreground disabled:opacity-50",
									children: ["🛍️ ", t("product.buyNow")]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-2 border-t border-border pt-6 text-xs text-muted-foreground",
							children: [methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-3.5" }),
									tl(m.label),
									" — ",
									tl(m.eta),
									" ·",
									" ",
									m.price === 0 ? t("cart.free") : format(m.price / market.rate),
									m.freeOver ? ` · ${t("cart.freeHint", { amount: `${m.freeOver} ${market.currency}` })}` : ""
								]
							}, m.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								t("product.sku"),
								": ",
								product.sku
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "info",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-xs tracking-[0.16em] uppercase",
									children: t("product.info")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, {
									className: "space-y-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "text-foreground",
												children: [t("product.composition"), ":"]
											}),
											" ",
											tl(product.details.composition)
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "text-foreground",
												children: [t("product.fabric"), ":"]
											}),
											" ",
											tl(product.details.fabric)
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "text-foreground",
												children: [t("product.fit"), ":"]
											}),
											" ",
											tl(product.details.fit)
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "text-foreground",
												children: [t("product.care"), ":"]
											}),
											" ",
											tl(product.details.care)
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "text-foreground",
												children: [t("product.origin"), ":"]
											}),
											" ",
											tl(product.details.origin)
										] })
									]
								})]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductReviews, { product }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-10 text-3xl",
					children: t("product.similar")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4",
					children: similar.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
					}, p.id))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
