# Configuration EmailJS — Demandes de commande

Ce guide explique comment configurer l'envoi de demandes de commande par email via EmailJS. Cette solution est **temporaire** en attendant l'intégration d'un backend et d'un système de paiement.

> **Important :** ne jamais committer de vraies credentials dans ce dépôt.

---

## 1. Créer un compte EmailJS

1. Rendez-vous sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit ou connectez-vous
3. Accédez au [Dashboard](https://dashboard.emailjs.com/)

---

## 2. Créer un service email

1. Dans le dashboard, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur (Gmail, Outlook, etc.)
4. Suivez les instructions de connexion
5. Notez le **Service ID** (ex. `service_xxxxxxx`)

---

## 3. Créer le template administrateur

1. Allez dans **Email Templates** → **Create New Template**
2. Configurez le template avec les variables suivantes :

| Variable | Description |
|----------|-------------|
| `{{order_number}}` | Référence de commande (ex. ORD-2026-A82K91) |
| `{{customer_first_name}}` | Prénom du client |
| `{{customer_last_name}}` | Nom du client |
| `{{customer_email}}` | Email du client |
| `{{customer_phone}}` | Téléphone du client |
| `{{country}}` | Pays |
| `{{city}}` | Ville |
| `{{address}}` | Adresse |
| `{{postal_code}}` | Code postal |
| `{{shipping_method}}` | Mode de livraison |
| `{{customer_note}}` | Commentaire client |
| `{{currency}}` | Devise (TND / EUR) |
| `{{subtotal}}` | Sous-total |
| `{{shipping}}` | Frais de livraison |
| `{{total}}` | Total |
| `{{products}}` | Liste des produits (texte formaté) |
| `{{order_date}}` | Date de la demande |
| `{{email_subject}}` | Sujet de l'email |

3. **Destinataire :** utilisez `{{to_email}}` dans le champ **To Email** du template
4. **Reply-To :** utilisez `{{reply_to}}` pour répondre directement au client

### Exemple de contenu

```text
NOUVELLE DEMANDE DE COMMANDE

Référence :
{{order_number}}

CLIENT

Nom :
{{customer_first_name}} {{customer_last_name}}

Téléphone :
{{customer_phone}}

Email :
{{customer_email}}

PAYS

{{country}}

VILLE

{{city}}

ADRESSE

{{address}}
{{postal_code}}

MODE DE LIVRAISON

{{shipping_method}}

COMMANDE

{{products}}

TOTAL

Sous-total : {{subtotal}}
Livraison : {{shipping}}
Total : {{total}} {{currency}}

COMMENTAIRE

{{customer_note}}

STATUT

Demande reçue

IMPORTANT :
Contacter le client par téléphone pour confirmer la commande.
```

5. **Sujet :** `{{email_subject}}` ou `Nouvelle demande de commande — {{order_number}}`
6. Notez le **Template ID** (ex. `template_xxxxxxx`)

---

## 4. Template client (optionnel)

Pour envoyer une confirmation au client, créez un second template avec :

| Variable | Description |
|----------|-------------|
| `{{to_email}}` | Email du client |
| `{{customer_first_name}}` | Prénom |
| `{{order_number}}` | Référence |
| `{{email_subject}}` | Sujet (généré selon la langue) |
| `{{message}}` | Corps du message (généré selon la langue) |

Le contenu est pré-rempli côté frontend selon la langue sélectionnée (FR / IT / AR).

---

## 5. Récupérer la Public Key

1. Allez dans **Account** → **General**
2. Copiez la **Public Key** (ex. `xxxxxxxxxxxxxxx`)

> La Public Key peut être utilisée côté frontend. Ne jamais exposer de clé privée ou mot de passe SMTP.

---

## 6. Configuration `.env`

Copiez `.env.example` vers `.env` à la racine du projet :

```bash
cp .env.example .env
```

Remplissez les valeurs :

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
VITE_ORDER_RECEIVER_EMAIL=admin@votre-boutique.com

# Optionnel — confirmation client
VITE_EMAILJS_CLIENT_TEMPLATE_ID=template_yyyyyyy
```

---

## 7. Lancement local

```bash
npm install
npm run dev
```

L'application démarre sur `http://localhost:5173` (ou le port indiqué).

---

## 8. Tester une commande

1. Ajoutez un produit au panier
2. Cliquez sur **Passer la commande**
3. Remplissez le formulaire
4. Cliquez sur **Passer la commande** (bouton d'envoi)
5. Vérifiez :
   - La page de confirmation affiche la référence `ORD-2026-XXXXXX`
   - L'email administrateur est reçu
   - L'email client est reçu (si template client configuré)
   - Le panier est vidé après succès

En cas d'erreur, un message s'affiche avec un bouton **Réessayer**. Le panier n'est pas vidé.

---

## 9. Déploiement

1. Configurez les mêmes variables d'environnement sur votre plateforme de déploiement (Vercel, Netlify, Lovable, etc.)
2. Utilisez les noms exacts avec le préfixe `VITE_`
3. Redéployez l'application
4. Testez une commande en production

---

## Architecture

```
Frontend (React)
      ↓
  orderService.submitOrder()
      ↓
    EmailJS
      ↓
  Administrateur (email)
```

Le fichier `src/lib/orderService.ts` centralise la logique d'envoi. Pour migrer vers un backend :

1. Remplacez l'implémentation de `submitOrder()` par un appel API
2. Les composants UI (`checkout.tsx`) restent inchangés

---

## Limites connues

- Pas de stockage permanent des commandes
- Numéro de commande généré côté frontend (temporaire)
- Limite d'envois EmailJS selon le plan gratuit
- Pas de paiement en ligne

Ces limitations seront levées lors de l'intégration du backend.
