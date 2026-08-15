import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as getProduct } from "./products-CjUUzcvf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-pJzmorlc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var StoreContext = (0, import_react.createContext)(null);
function usePersisted(key, initial) {
	const [state, setState] = (0, import_react.useState)(initial);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const raw = localStorage.getItem(key);
		if (raw) try {
			setState(JSON.parse(raw));
		} catch {}
		setReady(true);
	}, [key]);
	(0, import_react.useEffect)(() => {
		if (ready) localStorage.setItem(key, JSON.stringify(state));
	}, [
		key,
		state,
		ready
	]);
	return [state, setState];
}
function StoreProvider({ children }) {
	const [cart, setCart] = usePersisted("mn.cart", []);
	const [wishlist, setWishlist] = usePersisted("mn.wishlist", []);
	const [user, setUser] = usePersisted("mn.user", null);
	const [promoCode, setPromoCode] = usePersisted("mn.promo", "");
	const addToCart = (0, import_react.useCallback)((line) => {
		setCart((prev) => {
			const i = prev.findIndex((l) => l.productId === line.productId && l.size === line.size && l.colorId === line.colorId);
			if (i === -1) return [...prev, line];
			const next = [...prev];
			const existing = next[i];
			next[i] = {
				...existing,
				qty: existing.qty + line.qty
			};
			return next;
		});
	}, [setCart]);
	const updateQty = (0, import_react.useCallback)((index, qty) => {
		setCart((prev) => prev.map((l, i) => i === index ? {
			...l,
			qty: Math.max(1, Math.min(10, qty))
		} : l));
	}, [setCart]);
	const removeLine = (0, import_react.useCallback)((index) => setCart((prev) => prev.filter((_, i) => i !== index)), [setCart]);
	const toggleWishlist = (0, import_react.useCallback)((id) => setWishlist((prev) => prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]), [setWishlist]);
	const value = (0, import_react.useMemo)(() => {
		const subtotal = cart.reduce((sum, line) => {
			const p = getProduct(line.productId);
			return p ? sum + p.price * line.qty : sum;
		}, 0);
		return {
			cart,
			cartCount: cart.reduce((n, l) => n + l.qty, 0),
			subtotal,
			addToCart,
			updateQty,
			removeLine,
			clearCart: () => {
				setCart([]);
				setPromoCode("");
			},
			wishlist,
			toggleWishlist,
			isWished: (id) => wishlist.includes(id),
			user,
			login: (email) => setUser({
				email,
				firstName: email.split("@")[0] ?? "",
				lastName: ""
			}),
			logout: () => setUser(null),
			promoCode,
			setPromoCode
		};
	}, [
		cart,
		wishlist,
		user,
		promoCode,
		addToCart,
		updateQty,
		removeLine,
		toggleWishlist,
		setCart,
		setUser,
		setPromoCode
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreContext.Provider, {
		value,
		children
	});
}
function useStore() {
	const ctx = (0, import_react.useContext)(StoreContext);
	if (!ctx) throw new Error("useStore must be used inside StoreProvider");
	return ctx;
}
//#endregion
export { useStore as n, StoreProvider as t };
