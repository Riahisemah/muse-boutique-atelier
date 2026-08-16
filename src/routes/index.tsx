import { createFileRoute, Link } from "@tanstack/react-router";
import { Link2, Phone, RefreshCw, Sparkles } from "lucide-react";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { SplitText } from "@/components/motion/SplitText";
import { Parallax } from "@/components/motion/Parallax";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { useI18n } from "@/i18n";
import heroImage from "@/assets/hero.webp";
import promoImage from "@/assets/promo.webp";
import storyImage from "@/assets/story.webp";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Wafa Création — L'élégance qui parle pour vous | Robes de couture" },
      {
        name: "description",
        content:
          "Robes de soirée, de cérémonie et casual faites main en série limitée. Prix en EUR et TND, livraison en Tunisie, France et Italie.",
      },
      { property: "og:title", content: "El Wafa Création — Robes de couture méditerranéennes" },
      {
        property: "og:description",
        content:
          "Découvrez nos robes faites main. Livraison Tunisie, France, Italie. Site en français, arabe et italien.",
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Home,
});

function Home() {
  const { t, tl } = useI18n();
  const newArrivals = PRODUCTS.filter((p) => p.newArrival).slice(0, 4);
  const bestSellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="flex items-center px-6 py-20 md:px-14 lg:px-20">
            <div className="max-w-lg">
              <p className="eyebrow animate-rise">{t("brand.tagline")}</p>
              <SplitText
                as="h1"
                text={t("hero.title")}
                delay={120}
                className="mt-6 font-display text-4xl leading-[1.05] font-light sm:text-5xl lg:text-6xl"
              />
              <p
                className="animate-rise mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground"
                style={{ animationDelay: "240ms" }}
              >
                {t("hero.subtitle")}
              </p>
              <div
                className="animate-rise mt-10 flex flex-wrap gap-3"
                style={{ animationDelay: "360ms" }}
              >
                <Link
                  to="/shop"
                  className="btn-sweep group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[11px] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:text-foreground"
                >
                  {t("hero.cta1")}
                  <ArrowRight className="arrow-slide size-3.5" />
                </Link>
                <Link
                  to="/shop"
                  search={{ sort: "new" }}
                  className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-primary-foreground"
                >
                  {t("hero.cta2")}
                  <ArrowRight className="arrow-slide size-3.5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="animate-soft-in relative overflow-hidden bg-secondary">
            <img
              src={heroImage}
              alt={t("hero.title")}
              width={1600}
              height={1920}
              className="animate-ken-burns h-[62vh] w-full object-cover object-top will-change-transform md:h-full md:min-h-[86vh]"
            />
          </div>
        </div>
        <ChevronDown
          className="animate-scroll-hint absolute bottom-5 left-1/2 hidden size-4 -translate-x-1/2 text-gold md:block"
          aria-hidden
        />
      </section>

      {/* Editorial ticker */}
      <Marquee
        items={[
          "El Wafa Création",
          "Tunis",
          "Fait main",
          "Série limitée",
          "Paris",
          "Milano",
          "Sur mesure",
          "Soie & dentelle",
        ]}
      />

      {/* Trust bar */}
      <section className="border-y border-border bg-background/50">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:px-8">
          {[
            { icon: Link2, label: t("trust.shipping") },
            { icon: RefreshCw, label: t("trust.returns") },
            { icon: Phone, label: t("trust.phone") },
            { icon: Sparkles, label: t("trust.crafted") },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="size-4 shrink-0 text-gold" />
              <span className="text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof section */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">+2500</p>
            <p className="mt-2 text-sm text-muted-foreground">Clientes satisfaites</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gold">⭐⭐⭐⭐⭐</p>
            <p className="mt-2 text-sm text-muted-foreground">4.9/5 — Très satisfaites</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">98%</p>
            <p className="mt-2 text-sm text-muted-foreground">Recommandent El Wafa</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow={t("home.categories.subtitle")}
          title={t("home.categories.title")}
          index={1}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="hover-lift group relative block overflow-hidden bg-secondary"
              >
                <img
                  src={c.image}
                  alt={tl(c.name)}
                  width={1000}
                  height={1333}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-6">
                  <span className="font-display text-2xl text-primary-foreground">
                    {tl(c.name)}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-8">
        <SectionHeading
          title={t("home.new.title")}
          subtitle={t("home.new.subtitle")}
          viewAllTo="/shop"
          index={2}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {newArrivals.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Promotional banner */}
      <section className="relative">
        <Parallax strength={50} className="h-[60vh]">
          <img
            src={promoImage}
            alt={t("home.promo.title")}
            width={1920}
            height={1080}
            loading="lazy"
            className="h-[68vh] w-full -translate-y-[4vh] object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 flex items-center bg-foreground/25">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8">
            <Reveal className="max-w-md text-primary-foreground">
              <p className="text-[11px] tracking-[0.22em] uppercase">{t("home.promo.eyebrow")}</p>
              <h2 className="mt-4 text-4xl text-primary-foreground md:text-5xl">
                {t("home.promo.title")}
              </h2>
              <p className="mt-4 text-sm">{t("home.promo.text")}</p>
              <Link
                to="/shop"
                className="mt-8 inline-block bg-background px-8 py-4 text-[11px] tracking-[0.2em] text-foreground uppercase transition-opacity hover:opacity-85"
              >
                {t("home.promo.cta")}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-8">
        <SectionHeading
          title={t("home.best.title")}
          subtitle={t("home.best.subtitle")}
          viewAllTo="/shop"
          index={3}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {bestSellers.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-8">
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
          <Reveal delay={120}>
            <p className="eyebrow">{t("home.story.eyebrow")}</p>
            <h2 className="mt-4 text-3xl md:text-4xl">{t("home.story.title")}</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t("home.story.text")}
            </p>
            <Link
              to="/about"
              className="link-underline mt-8 inline-block text-xs tracking-[0.18em] uppercase"
            >
              {t("home.story.cta")}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl">{t("home.newsletter.title")}</h2>
          <div className="mx-auto flex justify-center">
            <Newsletter />
          </div>
        </Reveal>
      </section>
    </>
  );
}
