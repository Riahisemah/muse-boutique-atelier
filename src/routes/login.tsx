import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/i18n";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Connexion | Maison Noor" },
      { name: "description", content: "Connectez-vous à votre espace client Maison Noor." },
      { property: "og:title", content: "Connexion | Maison Noor" },
      { property: "og:description", content: "Accédez à vos commandes et favoris." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { t } = useI18n();
  const { login } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <h1 className="text-4xl">{t("auth.login")}</h1>
      <form
        className="mt-10 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          login(email);
          navigate({ to: "/account" });
        }}
      >
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
          {t("auth.login")}
        </button>
      </form>
      <div className="mt-6 flex justify-between text-xs">
        <Link to="/forgot-password" className="link-underline">
          {t("auth.forgot")}
        </Link>
        <Link to="/register" className="link-underline">
          {t("auth.register")}
        </Link>
      </div>
    </div>
  );
}
