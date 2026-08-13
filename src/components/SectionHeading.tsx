import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  viewAllTo,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  viewAllTo?: "/shop";
}) {
  const { t } = useI18n();
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {viewAllTo && (
        <Link to={viewAllTo} className="link-underline text-xs tracking-[0.18em] uppercase">
          {t("home.viewAll")}
        </Link>
      )}
    </Reveal>
  );
}
