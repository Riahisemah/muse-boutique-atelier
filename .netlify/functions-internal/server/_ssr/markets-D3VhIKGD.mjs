import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/markets-D3VhIKGD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Adding a new country = adding one entry here. */
var MARKETS = [
	{
		code: "TN",
		currency: "TND",
		flag: "🇹🇳",
		rate: 3.35,
		label: {
			fr: "Tunisie",
			ar: "تونس",
			it: "Tunisia"
		}
	},
	{
		code: "FR",
		currency: "EUR",
		flag: "🇫🇷",
		rate: 1,
		label: {
			fr: "France",
			ar: "فرنسا",
			it: "Francia"
		}
	},
	{
		code: "IT",
		currency: "EUR",
		flag: "🇮🇹",
		rate: 1,
		label: {
			fr: "Italie",
			ar: "إيطاليا",
			it: "Italia"
		}
	}
];
var SHIPPING = [
	{
		market: "TN",
		methods: [{
			id: "tn-standard",
			label: {
				fr: "Livraison standard",
				ar: "توصيل عادي",
				it: "Spedizione standard"
			},
			eta: {
				fr: "3 – 5 jours",
				ar: "3 – 5 أيام",
				it: "3 – 5 giorni"
			},
			price: 8,
			freeOver: 300
		}, {
			id: "tn-express",
			label: {
				fr: "Livraison express",
				ar: "توصيل سريع",
				it: "Spedizione express"
			},
			eta: {
				fr: "24 – 48 h",
				ar: "24 – 48 ساعة",
				it: "24 – 48 h"
			},
			price: 15,
			freeOver: null
		}]
	},
	{
		market: "FR",
		methods: [{
			id: "fr-standard",
			label: {
				fr: "Livraison standard",
				ar: "توصيل عادي",
				it: "Spedizione standard"
			},
			eta: {
				fr: "3 – 5 jours",
				ar: "3 – 5 أيام",
				it: "3 – 5 giorni"
			},
			price: 6.9,
			freeOver: 100
		}, {
			id: "fr-express",
			label: {
				fr: "Livraison express",
				ar: "توصيل سريع",
				it: "Spedizione express"
			},
			eta: {
				fr: "48 h",
				ar: "48 ساعة",
				it: "48 h"
			},
			price: 14.9,
			freeOver: null
		}]
	},
	{
		market: "IT",
		methods: [{
			id: "it-standard",
			label: {
				fr: "Livraison standard",
				ar: "توصيل عادي",
				it: "Spedizione standard"
			},
			eta: {
				fr: "4 – 6 jours",
				ar: "4 – 6 أيام",
				it: "4 – 6 giorni"
			},
			price: 7.9,
			freeOver: 120
		}, {
			id: "it-express",
			label: {
				fr: "Livraison express",
				ar: "توصيل سريع",
				it: "Spedizione express"
			},
			eta: {
				fr: "48 – 72 h",
				ar: "48 – 72 ساعة",
				it: "48 – 72 h"
			},
			price: 16.9,
			freeOver: null
		}]
	}
];
function shippingFor(market) {
	return SHIPPING.find((s) => s.market === market).methods;
}
var MarketContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "mn.market";
function detectMarket() {
	if (typeof Intl === "undefined") return "FR";
	const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
	if (tz.includes("Tunis")) return "TN";
	if (tz.includes("Rome")) return "IT";
	if (tz.includes("Paris")) return "FR";
	const lang = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "fr";
	if (lang.includes("ar") || lang.includes("tn")) return "TN";
	if (lang.includes("it")) return "IT";
	return "FR";
}
function MarketProvider({ children }) {
	const [code, setCode] = (0, import_react.useState)("FR");
	(0, import_react.useEffect)(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		setCode(stored ?? detectMarket());
	}, []);
	const setMarket = (0, import_react.useCallback)((c) => {
		setCode(c);
		localStorage.setItem(STORAGE_KEY, c);
	}, []);
	const value = (0, import_react.useMemo)(() => {
		const market = MARKETS.find((m) => m.code === code);
		const convert = (eur) => Math.round(eur * market.rate * 100) / 100;
		const formatRaw = (amount) => {
			const rounded = market.currency === "TND" ? Math.round(amount) : amount;
			const n = new Intl.NumberFormat(market.currency === "TND" ? "fr-TN" : "fr-FR", {
				minimumFractionDigits: market.currency === "TND" ? 0 : rounded % 1 === 0 ? 0 : 2,
				maximumFractionDigits: market.currency === "TND" ? 0 : 2
			}).format(rounded);
			return market.currency === "TND" ? `${n} TND` : `${n} €`;
		};
		return {
			market,
			setMarket,
			convert,
			format: (eur) => formatRaw(convert(eur)),
			formatRaw,
			currency: market.currency
		};
	}, [code, setMarket]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketContext.Provider, {
		value,
		children
	});
}
function useMarket() {
	const ctx = (0, import_react.useContext)(MarketContext);
	if (!ctx) throw new Error("useMarket must be used inside MarketProvider");
	return ctx;
}
//#endregion
export { useMarket as a, shippingFor as i, MarketProvider as n, SHIPPING as r, MARKETS as t };
