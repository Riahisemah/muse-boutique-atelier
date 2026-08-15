import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n";
import storyImage from "@/assets/story.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "La Maison — Notre histoire de couture | El Wafa Création" },
      {
        name: "description",
        content:
          "El Wafa Création : un atelier méditerranéen, des tissus rares et des séries limitées entre Tunis, Paris et Milan.",
      },
      { property: "og:title", content: "La Maison — El Wafa Création" },
      { property: "og:description", content: "Une couture née en Méditerranée." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-8">
      <h1 className="max-w-2xl text-4xl md:text-5xl">{t("home.story.title")}</h1>
      <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <img
            src={storyImage}
            alt={t("home.story.title")}
            width={1400}
            height={1600}
            loading="lazy"
            className="aspect-[7/8] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={100}>
          <p className="text-sm leading-relaxed text-muted-foreground">{t("home.story.text")}</p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{t("hero.subtitle")}</p>
          <Link to="/shop" className="link-underline mt-8 inline-block text-xs tracking-[0.18em] uppercase">
            {t("hero.cta1")}
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
