//#region node_modules/.nitro/vite/services/ssr/assets/seo-DlYH6yIb.js
var SITE_URL = "https://muse-boutique-atelier.lovable.app";
function absoluteUrl(path) {
	if (path.startsWith("http://") || path.startsWith("https://")) return path;
	return SITE_URL + (path.startsWith("/") ? path : `/${path}`);
}
function ldScript(json) {
	return {
		type: "application/ld+json",
		children: JSON.stringify(json)
	};
}
function breadcrumbSchema(items) {
	return ldScript({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.name,
			item: absoluteUrl(item.path)
		}))
	});
}
//#endregion
export { ldScript as i, absoluteUrl as n, breadcrumbSchema as r, SITE_URL as t };
