import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { CartLine } from "@/types";
import { getProduct } from "@/data/products";

interface StoreValue {
  cart: CartLine[];
  cartCount: number;
  subtotal: number; // in base EUR
  addToCart: (line: CartLine) => void;
  updateQty: (index: number, qty: number) => void;
  removeLine: (index: number) => void;
  clearCart: () => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  isWished: (id: string) => boolean;
  user: { email: string; firstName: string; lastName: string } | null;
  login: (email: string) => void;
  logout: () => void;
}

const StoreContext = createContext<StoreValue | null>(null);

function usePersisted<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        setState(JSON.parse(raw) as T);
      } catch {
        /* ignore corrupted value */
      }
    }
    setReady(true);
  }, [key]);

  useEffect(() => {
    if (ready) localStorage.setItem(key, JSON.stringify(state));
  }, [key, state, ready]);

  return [state, setState] as const;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = usePersisted<CartLine[]>("mn.cart", []);
  const [wishlist, setWishlist] = usePersisted<string[]>("mn.wishlist", []);
  const [user, setUser] = usePersisted<StoreValue["user"]>("mn.user", null);

  const addToCart = useCallback(
    (line: CartLine) => {
      setCart((prev) => {
        const i = prev.findIndex(
          (l) => l.productId === line.productId && l.size === line.size && l.colorId === line.colorId,
        );
        if (i === -1) return [...prev, line];
        const next = [...prev];
        const existing = next[i]!;
        next[i] = { ...existing, qty: existing.qty + line.qty };
        return next;

      });
    },
    [setCart],
  );

  const updateQty = useCallback(
    (index: number, qty: number) => {
      setCart((prev) =>
        prev.map((l, i) => (i === index ? { ...l, qty: Math.max(1, Math.min(10, qty)) } : l)),
      );
    },
    [setCart],
  );

  const removeLine = useCallback(
    (index: number) => setCart((prev) => prev.filter((_, i) => i !== index)),
    [setCart],
  );

  const toggleWishlist = useCallback(
    (id: string) =>
      setWishlist((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id])),
    [setWishlist],
  );

  const value = useMemo<StoreValue>(() => {
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
      clearCart: () => setCart([]),
      wishlist,
      toggleWishlist,
      isWished: (id: string) => wishlist.includes(id),
      user,
      login: (email: string) =>
        setUser({ email, firstName: email.split("@")[0] ?? "", lastName: "" }),

      logout: () => setUser(null),
    };
  }, [cart, wishlist, user, addToCart, updateQty, removeLine, toggleWishlist, setCart, setUser]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
