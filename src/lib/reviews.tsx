import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { REVIEWS } from "@/data/reviews";
import type { Review } from "@/types";

const STORAGE_KEY = "mn.reviews";

export interface RatingSummary {
  count: number;
  average: number;
  /** distribution[5] = number of 5-star reviews */
  distribution: Record<number, number>;
}

interface ReviewsValue {
  reviews: Review[];
  forProduct: (productId: string) => Review[];
  summary: (productId: string) => RatingSummary;
  addReview: (review: Omit<Review, "id" | "date" | "verified">) => void;
}

const ReviewsContext = createContext<ReviewsValue | null>(null);

export function ReviewsProvider({ children }: { children: ReactNode }) {
  const [custom, setCustom] = useState<Review[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setCustom(JSON.parse(raw) as Review[]);
      } catch {
        /* ignore corrupted value */
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
  }, [custom, ready]);

  const addReview = useCallback((review: Omit<Review, "id" | "date" | "verified">) => {
    setCustom((prev) => [
      {
        ...review,
        id: `rv-local-${Date.now()}`,
        date: new Date().toISOString().slice(0, 10),
        verified: false,
      },
      ...prev,
    ]);
  }, []);

  const value = useMemo<ReviewsValue>(() => {
    const reviews = [...custom, ...REVIEWS];
    const forProduct = (productId: string) =>
      reviews
        .filter((r) => r.productId === productId)
        .sort((a, b) => b.date.localeCompare(a.date));
    const summary = (productId: string): RatingSummary => {
      const list = forProduct(productId);
      const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      for (const r of list) distribution[r.rating] = (distribution[r.rating] ?? 0) + 1;
      const average = list.length
        ? Math.round((list.reduce((n, r) => n + r.rating, 0) / list.length) * 10) / 10
        : 0;
      return { count: list.length, average, distribution };
    };
    return { reviews, forProduct, summary, addReview };
  }, [custom, addReview]);

  return <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>;
}

export function useReviews() {
  const ctx = useContext(ReviewsContext);
  if (!ctx) throw new Error("useReviews must be used inside ReviewsProvider");
  return ctx;
}
