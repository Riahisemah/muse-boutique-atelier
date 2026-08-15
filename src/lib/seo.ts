export const SITE_URL = "https://muse-boutique-atelier.lovable.app";

export const BRAND_NAME = "El Wafa Création";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return SITE_URL + (path.startsWith("/") ? path : `/${path}`);
}

export function ldScript(json: object) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(json),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return ldScript({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  });
}
