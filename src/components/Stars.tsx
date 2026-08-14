import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  rating,
  size = 14,
  className,
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={cn(
            "shrink-0",
            i <= Math.round(rating) ? "fill-gold text-gold" : "text-border",
          )}
        />
      ))}
    </span>
  );
}

export function StarPicker({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (v: number) => void;
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          role="radio"
          aria-checked={value === i}
          aria-label={`${i}/5`}
          onClick={() => onChange(i)}
          className="p-0.5 transition-transform hover:scale-110"
        >
          <Star className={cn("size-5", i <= value ? "fill-gold text-gold" : "text-border")} />
        </button>
      ))}
    </div>
  );
}
