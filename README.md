# Élégance Unboxed

Création d’une boutique e-commerce premium de robes — France, Tunisie & Italie

Je veux créer une boutique e-commerce moderne et premium spécialisée dans la vente de robes et vêtements féminins, destinée principalement à trois marchés :

🇹🇳 Tunisie

🇫🇷 France

🇮🇹 Italie

L’application doit être conçue comme une vraie boutique e-commerce professionnelle, avec une expérience utilisateur premium, rapide, élégante et parfaitement responsive sur mobile, tablette et desktop.

1. Langues

L’application doit supporter 3 langues :

Français 🇫🇷

Arabe 🇹🇳

Italien 🇮🇹

Ajouter un sélecteur de langue visible dans le header.

Le changement de langue doit modifier toute l’interface, pas uniquement quelques textes.

Pour l’arabe :

utiliser RTL automatiquement ;

adapter correctement les layouts ;

aligner les textes et composants selon RTL ;

conserver une expérience premium et cohérente.

Les contenus produits doivent également pouvoir être disponibles dans les trois langues :

nom du produit ;

description ;

catégories ;

couleurs ;

tailles ;

informations de livraison ;

informations supplémentaires.

2. Positionnement visuel

Je veux une identité visuelle féminine, élégante, moderne et premium.

Éviter complètement l’apparence d’un template e-commerce générique.

Style souhaité :

minimaliste ;

luxueux ;

élégant ;

beaucoup d’espace blanc ;

grandes images produits ;

typographie premium ;

animations discrètes ;

micro-interactions ;

navigation fluide.

La boutique doit donner une impression de marque de mode internationale.

Utiliser une palette élégante et cohérente, par exemple :

blanc / ivoire ;

noir ;

beige ;

nude ;

touches dorées très discrètes.

Ne pas surcharger l’interface.

3. Homepage

Créer une homepage premium avec les sections suivantes :

Hero

Grande image lifestyle d’une femme portant une robe élégante.

Texte :

"Elegance that speaks for you."

avec traduction dans les trois langues.

Boutons :

Shop Collection

Discover New Arrivals

Ajouter une animation subtile lors du chargement.

Featured Categories

Afficher les catégories principales :

Robes de soirée

Robes de cérémonie

Robes casual

Robes élégantes

Nouvelles collections

Best Sellers

Les catégories doivent être représentées avec de grandes images.

New Arrivals

Afficher les nouveaux produits sous forme de grille premium.

Chaque produit doit afficher :

image ;

nom ;

prix ;

ancien prix si promotion ;

badge "New" si nécessaire ;

bouton wishlist ;

possibilité de choisir rapidement une variante.

Best Sellers

Section dédiée aux produits les plus populaires.

Promotional Banner

Créer une grande section promotionnelle avec une image lifestyle et un CTA.

Exemple :

"Discover the new collection"

Brand Story

Ajouter une section présentant la philosophie de la marque.

Design très éditorial, inspiré des sites de marques de mode premium.

Newsletter

Section newsletter :

"Be the first to discover our new collections."

Champ email + bouton.

Footer

Le footer doit contenir :

navigation ;

catégories ;

informations livraison ;

retours ;

FAQ ;

contact ;

réseaux sociaux ;

newsletter ;

sélecteur de langue ;

informations légales.

4. Catalogue produits

Créer une page /shop.

Elle doit permettre :

recherche ;

filtrage ;

tri ;

pagination ou infinite scroll.

Filtres :

catégorie ;

taille ;

couleur ;

prix ;

disponibilité ;

collection ;

promotion.

Tri :

nouveautés ;

prix croissant ;

prix décroissant ;

popularité ;

meilleures ventes.

Sur mobile, utiliser un bouton "Filters" ouvrant un drawer.

5. Product Card

Créer une Product Card premium.

Elle doit afficher :

image principale ;

deuxième image au hover ;

nom ;

prix ;

ancien prix si réduction ;

pourcentage de réduction ;

badge New / Sale ;

bouton wishlist.

Au hover desktop :

changement d'image ;

animation légère ;

bouton "Quick Add".

Sur mobile, conserver une interface simple et tactile.

6. Product Details

Créer une page produit /product/:slug.

Elle doit contenir :

galerie photos ;

zoom image ;

vidéos produit si disponibles ;

nom ;

prix ;

ancien prix ;

promotion ;

description ;

tailles disponibles ;

couleurs disponibles ;

guide des tailles ;

disponibilité ;

quantité ;

bouton Add to Cart ;

bouton Buy Now ;

bouton Wishlist.

Ajouter également :

Informations produit

composition ;

matière ;

coupe ;

entretien ;

origine.

Livraison

Afficher les informations selon le pays sélectionné.

Produits similaires

Afficher une section "You may also like".

7. Système de prix

Le système doit supporter deux types de prix.

Type 1 — Prix normal

Exemple :

79 €

ou

249 TND

Type 2 — Prix promotionnel

Exemple :

Prix normal : 99 €

Prix promotionnel : 79 €

Afficher :

99 € 79 €

avec badge :

"-20%"

Le système doit permettre de configurer pour chaque produit :

prix normal ;

prix promotionnel ;

devise ;

période de promotion.

Important :

Le système doit être capable de gérer différentes devises selon le marché.

Marché Tunisie

Afficher les prix en :

TND

Marché France

Afficher les prix en :

EUR

Marché Italie

Afficher les prix en :

EUR

Prévoir une architecture permettant d'ajouter d'autres devises plus tard.

8. Détection du pays

Prévoir une logique permettant de déterminer le marché de l'utilisateur.

Par exemple :

Tunisie → TND

France → EUR

Italie → EUR

Mais l'utilisateur doit toujours pouvoir changer manuellement son pays / marché.

Ajouter dans le header un sélecteur :

🇹🇳 Tunisia — TND

🇫🇷 France — EUR

🇮🇹 Italy — EUR

Le changement de marché doit mettre à jour les prix affichés.

9. Panier

Créer une page /cart.

Afficher :

produits ;

image ;

taille ;

couleur ;

quantité ;

prix ;

sous-total ;

suppression ;

modification quantité.

Afficher :

Subtotal

Shipping

Total

Bouton :

"Proceed to Checkout"

Ajouter également :

"Continue Shopping"

10. Checkout

Créer un checkout moderne et simple.

Étapes :

Informations client

Adresse de livraison

Méthode de livraison

Paiement

Confirmation

Informations :

prénom ;

nom ;

email ;

téléphone ;

pays ;

ville ;

adresse ;

code postal.

Le checkout doit s'adapter au marché sélectionné.

11. Paiement

Préparer l'architecture pour intégrer plusieurs méthodes de paiement.

Pour la France et l'Italie :

carte bancaire ;

Stripe ;

Apple Pay / Google Pay si disponible.

Pour la Tunisie :

prévoir une architecture permettant d'intégrer ultérieurement les moyens de paiement locaux.

Ne pas hardcoder le système de paiement.

Créer une couche payment provider permettant d'ajouter facilement de nouveaux fournisseurs.

12. Livraison

Le système doit gérer les règles de livraison par pays.

Exemple :

Tunisie :

livraison standard ;

livraison express.

France :

livraison standard ;

livraison express.

Italie :

livraison standard ;

livraison express.

Créer une architecture permettant de configurer :

prix de livraison ;

délai ;

pays ;

seuil de livraison gratuite.

Exemple :

"Free shipping over €100"

ou

"Livraison gratuite à partir de 300 TND"

Ces règles doivent être configurables depuis l'administration.

13. Authentification

Créer :

inscription ;

connexion ;

logout ;

mot de passe oublié ;

compte utilisateur.

Dans le compte utilisateur :

informations personnelles ;

commandes ;

détails des commandes ;

adresses ;

wishlist ;

préférences.

14. Wishlist

Permettre aux utilisateurs de sauvegarder leurs produits favoris.

Créer une page :

/wishlist

avec :

produits sauvegardés ;

prix ;

disponibilité ;

bouton Add to Cart ;

suppression de wishlist.

15. Recherche

Créer une recherche intelligente.

L'utilisateur doit pouvoir rechercher :

nom du produit ;

catégorie ;

collection ;

couleur.

Afficher les résultats instantanément dans une search overlay moderne.

16. Administration

Créer un dashboard admin professionnel.

Routes :

/admin

Le dashboard doit permettre de gérer :

Produits

CRUD complet :

créer ;

modifier ;

supprimer ;

publier / dépublier.

Informations produit :

nom FR ;

nom AR ;

nom IT ;

description FR ;

description AR ;

description IT ;

images ;

catégorie ;

collection ;

tailles ;

couleurs ;

prix ;

prix promotionnel ;

devise ;

stock ;

SKU ;

statut ;

featured ;

bestseller ;

new arrival.

Stock

Gérer :

stock global ;

stock par taille ;

stock par couleur.

Exemple :

S / 3

M / 7

L / 2

XL / 0

Commandes

Afficher :

numéro commande ;

client ;

pays ;

produits ;

montant ;

statut paiement ;

statut livraison ;

date.

Statuts :

Pending

Paid

Processing

Shipped

Delivered

Cancelled

Refunded

Clients

Afficher :

nom ;

email ;

téléphone ;

pays ;

nombre de commandes ;

montant dépensé.

Promotions

Permettre de créer :

promotions ;

codes promo ;

pourcentage ;

montant fixe ;

date début ;

date fin ;

pays concernés.

Gestion des traductions

Prévoir une interface permettant à l'admin de gérer les contenus :

FR / AR / IT.

17. SEO

L'application doit être optimisée pour le SEO.

Chaque produit doit avoir :

SEO title ;

SEO description ;

slug ;

Open Graph image ;

canonical URL.

Créer également des URLs propres :

/fr/shop

/fr/product/robe-elegante

/it/shop

/it/product/abito-elegante

/ar/shop

/ar/product/...

Prévoir une architecture SEO multilingue propre.

Ajouter :

sitemap ;

robots.txt ;

structured data / Product Schema ;

Organization Schema ;

Breadcrumb Schema.

18. Responsive Design

L'application doit être parfaitement responsive.

Priorité :

Mobile

Tablet

Desktop

Sur mobile :

navigation adaptée ;

menu hamburger ;

recherche accessible ;

panier visible ;

filtres en drawer ;

checkout optimisé ;

boutons suffisamment grands.

19. Animations

Utiliser des animations modernes mais légères :

fade-in ;

slide-up ;

image hover ;

smooth transitions ;

cart animation ;

wishlist animation ;

page transitions.

Ne pas utiliser d'animations excessives qui ralentissent la boutique.

La performance doit rester prioritaire.

20. Architecture technique

Utiliser une architecture propre et scalable.

Frontend :

React

TypeScript

Tailwind CSS

composants réutilisables

design system cohérent

Créer une structure claire :

components/

pages/

layouts/

hooks/

services/

utils/

types/

i18n/

Préparer l'application pour connecter facilement un backend/API.

Ne pas mettre les données métier directement dans les composants.

21. Design System

Créer un petit design system avec :

couleurs ;

typography ;

spacing ;

buttons ;

inputs ;

cards ;

badges ;

modals ;

drawers ;

dropdowns ;

alerts ;

toast notifications.

Tous les composants doivent être cohérents.

22. Expérience utilisateur

L'objectif principal est de créer une boutique qui donne immédiatement confiance.

L'expérience doit être :

Premium → Simple → Rapide → Mobile-first → Conversion-oriented

Ajouter :

sticky header ;

panier facilement accessible ;

CTA visibles ;

checkout court ;

trust badges ;

informations de livraison ;

politique de retour ;

sécurité paiement.

23. Pages nécessaires

Créer au minimum :

/

/shop

/category/:slug

/product/:slug

/cart

/checkout

/wishlist

/login

/register

/forgot-password

/account

/account/orders

/account/addresses

/about

/contact

/faq

/shipping

/returns

/privacy

/terms

/admin

24. Important — Architecture future

Je veux que l'application soit construite de manière à pouvoir évoluer.

Prévoir facilement :

ajout de nouveaux pays ;

ajout de nouvelles langues ;

nouvelles devises ;

nouveaux moyens de paiement ;

nouvelles méthodes de livraison ;

plusieurs catégories ;

plusieurs collections ;

promotions ;

coupons ;

analytics ;

reviews ;

notifications ;

marketing automation.

Ne pas créer une architecture difficile à maintenir.

25. Première étape

Commence par construire le frontend complet et fonctionnel avec des données mockées réalistes.

Je veux pouvoir naviguer dans toute la boutique :

Homepage → Catalogue → Produit → Panier → Checkout → Compte → Wishlist.

Créer également le dashboard admin avec des données mockées.

Avant de connecter un backend ou un système de paiement réel, s'assurer que toute l'expérience utilisateur fonctionne correctement.

Le résultat doit ressembler à une vraie marque de mode premium internationale, et non à un simple prototype généré automatiquement.

Priorités :

Design premium

UX excellente

Mobile-first

Multilingue FR / AR / IT

Multi-pays Tunisie / France / Italie

Multi-devise TND / EUR

Deux types de prix : normal et promotionnel

Architecture scalable

SEO

Performance

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://muse-boutique-atelier.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b1f973d5-1175-4cff-bc69-b4fa67de7416).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
