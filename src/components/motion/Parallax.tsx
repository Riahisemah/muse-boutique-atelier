import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Light scroll parallax: children drift vertically as the wrapper crosses
 * the viewport. Uses rAF-throttled scroll reads, disabled for reduced motion.
 */
export function Parallax({
  children,
  strength = 40,
  className,
}: {
  children: ReactNode;
  /** Max vertical drift in pixels. */
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (below fold) → 1 (above fold)
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      setOffset(Math.max(-1, Math.min(1, progress)) * strength);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
