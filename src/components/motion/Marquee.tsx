import { cn } from "@/lib/utils";

/**
 * Infinite editorial ticker: uppercase words separated by a gold diamond.
 * The list is duplicated so the CSS translate loop is seamless.
 */
export function Marquee({
  items,
  className,
  reverse = false,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
}) {
  if (items.length === 0) return null;
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden border-y border-border bg-secondary/40 py-4",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "animate-marquee flex w-max shrink-0 items-center gap-8 pe-8 group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-[11px] tracking-[0.28em] whitespace-nowrap text-muted-foreground uppercase"
          >
            {item}
            <span className="text-gold">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
