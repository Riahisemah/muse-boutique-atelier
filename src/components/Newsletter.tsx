import { useState } from "react";
import { toast } from "sonner";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setEmail("");
    toast.success(t("home.newsletter.done"));
  };

  return (
    <form
      onSubmit={submit}
      className={cn("mt-6 flex max-w-md items-center border-b border-foreground", compact && "mt-6")}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("home.newsletter.placeholder")}
        aria-label={t("home.newsletter.placeholder")}
        className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground"
      />
      <button
        type="submit"
        className="shrink-0 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-opacity hover:opacity-60"
      >
        {t("home.newsletter.cta")}
      </button>
    </form>
  );
}
