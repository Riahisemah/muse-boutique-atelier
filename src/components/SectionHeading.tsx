import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { useI18n } from "@/i18n";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  viewAllTo,
  index,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  viewAllTo?: "/shop";
  /** Editorial section number, e.g. 1 renders as "01". */
  index?: number;
}) {
  const { t } = useI18n();
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="mb-3 flex items-center gap-4">
          {index !== undefined && (
            <span className="section-index">{String(index).padStart(2, "0")}</span>
          )}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        </div>
        <SplitText as="h2" text={title} className="font-display text-3xl font-light md:text-4xl" />
        {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {viewAllTo && (
        <Link
          to={viewAllTo}
          className="link-underline group inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase"
        >
          {t("home.viewAll")}
          <ArrowRight className="arrow-slide size-3.5 text-gold" />
        </Link>
      )}
    </Reveal>
  );
}
