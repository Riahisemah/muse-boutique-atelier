import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/i18n";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Créer un compte | Maison Noor" },
      { name: "description", content: "Créez votre compte pour suivre vos commandes et favoris." },
      { property: "og:title", content: "Créer un compte | Maison Noor" },
      { property: "og:description", content: "Rejoignez Maison Noor." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const { t } = useI18n();
  const { login } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <h1 className="text-4xl">{t("auth.register")}</h1>
      <form
        className="mt-10 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          login(email);
          navigate({ to: "/account" });
        }}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="eyebrow">{t("checkout.firstName")}</span>
            <input className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground" />
          </label>
          <label className="block">
            <span className="eyebrow">{t("checkout.lastName")}</span>
            <input className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground" />
          </label>
        </div>
        <label className="block">
          <span className="eyebrow">{t("checkout.email")}</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
          />
        </label>
        <label className="block">
          <span className="eyebrow">{t("auth.password")}</span>
          <input
            type="password"
            required
            className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-foreground py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
        >
          {t("auth.register")}
        </button>
      </form>
      <p className="mt-6 text-xs">
        {t("auth.hasAccount")}{" "}
        <Link to="/login" className="link-underline">
          {t("auth.login")}
        </Link>
      </p>
    </div>
  );
}
