import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCALES, useI18n } from "@/i18n";
import { MARKETS, useMarket } from "@/lib/markets";

export function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const current = LOCALES.find((l) => l.code === locale)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-xs tracking-[0.14em] uppercase transition-opacity hover:opacity-60">
        {compact ? locale.toUpperCase() : current.native}
        <ChevronDown className="size-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        <DropdownMenuLabel className="eyebrow">{t("lang.title")}</DropdownMenuLabel>
        {LOCALES.map((l) => (
          <DropdownMenuItem key={l.code} onClick={() => setLocale(l.code)} className="gap-2">
            <span className="flex-1">{l.native}</span>
            {l.code === locale && <Check className="size-3.5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function MarketSelector() {
  const { t, tl } = useI18n();
  const { market, setMarket } = useMarket();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1.5 text-xs tracking-[0.14em] uppercase transition-opacity hover:opacity-60">
        <span aria-hidden>{market.flag}</span>
        {market.currency}
        <ChevronDown className="size-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-56">
        <DropdownMenuLabel className="eyebrow">{t("market.title")}</DropdownMenuLabel>
        {MARKETS.map((m) => (
          <DropdownMenuItem key={m.code} onClick={() => setMarket(m.code)} className="gap-2">
            <span aria-hidden>{m.flag}</span>
            <span className="flex-1">
              {tl(m.label)} — {m.currency}
            </span>
            {m.code === market.code && <Check className="size-3.5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
