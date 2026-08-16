import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Word-by-word display reveal for editorial headings.
 * Words rise from a blur with a staggered delay when scrolled into view.
 */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 70,
  accentFrom,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Index of the first word rendered in gold italic display. */
  accentFrom?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  const words = text.split(" ").filter(Boolean);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-40px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={cn("block", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span
            style={{
              animationDelay: `${delay + i * stagger}ms`,
              animationName: shown ? "word-in" : undefined,
            }}
            className={cn(
              "inline-block opacity-0 [animation-duration:900ms] [animation-fill-mode:both] [animation-timing-function:cubic-bezier(0.22,1,0.36,1)]",
              shown && "opacity-100",
              accentFrom !== undefined && i >= accentFrom && "text-gold italic",
            )}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : null}
          </span>
        </span>
      ))}
    </Tag>
  );
}
