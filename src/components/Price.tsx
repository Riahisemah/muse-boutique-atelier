import { useMarket } from "@/lib/markets";
import { cn } from "@/lib/utils";

interface PriceProps {
  price: number;
  compareAt?: number | null;
  className?: string;
  size?: "sm" | "lg";
}

export function Price({ price, compareAt, className, size = "sm" }: PriceProps) {
  const { format } = useMarket();
  const onSale = !!compareAt && compareAt > price;

  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      {onSale && (
        <span
          className={cn(
            "text-muted-foreground line-through",
            size === "lg" ? "text-base" : "text-sm",
          )}
        >
          {format(compareAt!)}
        </span>
      )}
      <span
        className={cn(
          onSale ? "text-destructive" : "text-foreground",
          size === "lg" ? "text-2xl font-light" : "text-sm",
        )}
      >
        {format(price)}
      </span>
    </span>
  );
}
