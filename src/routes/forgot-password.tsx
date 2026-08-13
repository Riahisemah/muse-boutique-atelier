import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Mot de passe oublié | Maison Noor" },
      { name: "description", content: "Réinitialisez le mot de passe de votre compte." },
      { property: "og:title", content: "Mot de passe oublié | Maison Noor" },
      { property: "og:description", content: "Réinitialisation du mot de passe." },
    ],
  }),
  component: ForgotPage,
});

function ForgotPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <h1 className="text-4xl">{t("auth.forgot")}</h1>
      <form
        className="mt-10 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          toast.success(t("auth.resetSent"));
        }}
      >
        <label className="block">
          <span className="eyebrow">{t("checkout.email")}</span>
          <input
            type="email"
            required
            className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-foreground py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
        >
          {t("auth.reset")}
        </button>
      </form>
      <Link to="/login" className="link-underline mt-6 inline-block text-xs">
        {t("auth.login")}
      </Link>
    </div>
  );
}
