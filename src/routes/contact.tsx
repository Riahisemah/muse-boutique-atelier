import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Service client | El Wafa Création" },
      {
        name: "description",
        content: "Écrivez-nous : notre service client répond sous 24h en français, arabe et italien.",
      },
      { property: "og:title", content: "Contact | El Wafa Création" },
      { property: "og:description", content: "Service client El Wafa Création — réponse sous 24h." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl">{t("pages.contact.title")}</h1>
      <form
        className="mt-10 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          toast.success(t("pages.contact.sent"));
        }}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="eyebrow">{t("checkout.firstName")}</span>
            <input className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground" />
          </label>
          <label className="block">
            <span className="eyebrow">{t("checkout.email")}</span>
            <input
              type="email"
              required
              className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
            />
          </label>
        </div>
        <label className="block">
          <span className="eyebrow">{t("pages.contact.message")}</span>
          <textarea
            rows={5}
            required
            className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
          />
        </label>
        <button
          type="submit"
          className="bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
        >
          {t("pages.contact.send")}
        </button>
      </form>
      <div className="mt-12 space-y-1 text-sm text-muted-foreground">
        <p>+216 55 123 456</p>
        <p>contact@elwafacreation.com</p>
        <p>Instagram : @elwafa_creation</p>
        <p>Tunis, Tunisie · Livraison France &amp; Italie</p>
      </div>
    </div>
  );
}
