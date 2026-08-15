import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getProductBySlug } from "./products-CjUUzcvf.mjs";
import { i as ldScript, n as absoluteUrl, r as breadcrumbSchema } from "./seo-DlYH6yIb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-Bx7NYSWj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REVIEWS = [
	{
		id: "rv1",
		productId: "p1",
		author: "Amira B.",
		market: "TN",
		rating: 5,
		date: "2026-08-06",
		title: "Sublime pour un mariage",
		body: "La coupe tombe parfaitement, le tissu est lourd et noble. J'ai reçu énormément de compliments.",
		size: "M",
		verified: true
	},
	{
		id: "rv2",
		productId: "p1",
		author: "Claire D.",
		market: "FR",
		rating: 4,
		date: "2026-07-28",
		title: "Très belle qualité",
		body: "Finitions impeccables. Je conseille de prendre une taille au-dessus si vous avez les épaules larges.",
		size: "S",
		verified: true
	},
	{
		id: "rv3",
		productId: "p2",
		author: "Giulia R.",
		market: "IT",
		rating: 5,
		date: "2026-08-01",
		title: "Elegantissimo",
		body: "Tessuto morbido e caduta perfetta. Consegna rapida a Milano.",
		size: "L",
		verified: true
	},
	{
		id: "rv4",
		productId: "p2",
		author: "Sonia T.",
		market: "TN",
		rating: 4,
		date: "2026-07-19",
		title: "Élégante et confortable",
		body: "Portée toute une soirée sans aucune gêne. Le satin est de très belle qualité.",
		size: "M",
		verified: false
	},
	{
		id: "rv5",
		productId: "p3",
		author: "Federica C.",
		market: "IT",
		rating: 5,
		date: "2026-07-30",
		title: "Perfetto per cerimonia",
		body: "Ho ricevuto molti complimenti, la sartoria si vede nei dettagli.",
		size: "M",
		verified: true
	},
	{
		id: "rv6",
		productId: "p4",
		author: "Élise M.",
		market: "FR",
		rating: 4,
		date: "2026-07-12",
		title: "Parfaite au quotidien",
		body: "Le lin est agréable, un peu froissé après une journée mais c'est le charme de la matière.",
		size: "S",
		verified: true
	},
	{
		id: "rv7",
		productId: "p5",
		author: "Nour H.",
		market: "TN",
		rating: 5,
		date: "2026-08-08",
		title: "Coupe portefeuille idéale",
		body: "S'ajuste à toutes les morphologies, je la porte au bureau comme le soir.",
		size: "L",
		verified: true
	},
	{
		id: "rv8",
		productId: "p6",
		author: "Ines K.",
		market: "TN",
		rating: 4,
		date: "2026-07-22",
		title: "Sequins magnifiques",
		body: "Beaucoup de brillance sans être too much. Un peu lourde, mais c'est normal pour ce type de pièce.",
		size: "M",
		verified: false
	}
];
var STORAGE_KEY = "mn.reviews";
var ReviewsContext = (0, import_react.createContext)(null);
function ReviewsProvider({ children }) {
	const [custom, setCustom] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) try {
			setCustom(JSON.parse(raw));
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
	}, [custom, ready]);
	const addReview = (0, import_react.useCallback)((review) => {
		setCustom((prev) => [{
			...review,
			id: `rv-local-${Date.now()}`,
			date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			verified: false
		}, ...prev]);
	}, []);
	const value = (0, import_react.useMemo)(() => {
		const reviews = [...custom, ...REVIEWS];
		const forProduct = (productId) => reviews.filter((r) => r.productId === productId).sort((a, b) => b.date.localeCompare(a.date));
		const summary = (productId) => {
			const list = forProduct(productId);
			const distribution = {
				1: 0,
				2: 0,
				3: 0,
				4: 0,
				5: 0
			};
			for (const r of list) distribution[r.rating] = (distribution[r.rating] ?? 0) + 1;
			const average = list.length ? Math.round(list.reduce((n, r) => n + r.rating, 0) / list.length * 10) / 10 : 0;
			return {
				count: list.length,
				average,
				distribution
			};
		};
		return {
			reviews,
			forProduct,
			summary,
			addReview
		};
	}, [custom, addReview]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsContext.Provider, {
		value,
		children
	});
}
function useReviews() {
	const ctx = (0, import_react.useContext)(ReviewsContext);
	if (!ctx) throw new Error("useReviews must be used inside ReviewsProvider");
	return ctx;
}
var $$splitComponentImporter = () => import("./product._slug-CGEeI2xN.mjs");
var Route = createFileRoute("/product/$slug")({
	head: ({ params }) => {
		const p = getProductBySlug(params.slug);
		const title = p?.seo.title.fr ?? "Robe | El Wafa Création";
		const description = p?.seo.description.fr ?? "Robe faite main — El Wafa Création.";
		const url = absoluteUrl(`/product/${params.slug}`);
		const inStock = p?.sizes.some((s) => s.stock > 0) ?? false;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:image",
					content: p?.images[0] ? absoluteUrl(p.images[0]) : absoluteUrl("/og-image.jpg")
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [...p ? [ldScript({
				"@context": "https://schema.org",
				"@type": "Product",
				name: p.name.fr,
				description,
				image: p.images.map((img) => absoluteUrl(img)),
				sku: p.sku,
				brand: {
					"@type": "Brand",
					name: "El Wafa Création"
				},
				offers: {
					"@type": "Offer",
					url,
					price: p.price,
					priceCurrency: "EUR",
					availability: inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
				}
			})] : [], breadcrumbSchema([
				{
					name: "Accueil",
					path: "/"
				},
				{
					name: "Boutique",
					path: "/shop"
				},
				{
					name: p?.name.fr ?? "Produit",
					path: `/product/${params.slug}`
				}
			])]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as n, useReviews as r, ReviewsProvider as t };
