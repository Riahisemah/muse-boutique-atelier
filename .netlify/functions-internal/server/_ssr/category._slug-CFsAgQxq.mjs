import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as CATEGORIES } from "./products-CjUUzcvf.mjs";
import { n as absoluteUrl, r as breadcrumbSchema } from "./seo-DlYH6yIb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-CFsAgQxq.js
var $$splitComponentImporter = () => import("./category._slug-DCSaeSrw.mjs");
var Route = createFileRoute("/category/$slug")({
	head: ({ params }) => {
		const cat = CATEGORIES.find((c) => c.slug === params.slug);
		const title = cat ? `${cat.name.fr} | El Wafa Création` : "Catégorie | El Wafa Création";
		const description = cat ? `Découvrez notre sélection de ${cat.name.fr.toLowerCase()} faites main. Livraison Tunisie, France, Italie.` : "Découvrez nos robes faites main.";
		const url = absoluteUrl(`/category/${params.slug}`);
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: url
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [breadcrumbSchema([
				{
					name: "Accueil",
					path: "/"
				},
				{
					name: "Boutique",
					path: "/shop"
				},
				{
					name: cat?.name.fr ?? "Catégorie",
					path: `/category/${params.slug}`
				}
			])]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
