# Release checklist — gaetancanovas.dev

Checklist courte avant publication publique.

## Build local

```bash
npm run check:content
npm run seo:sitemap
npm run generate
npm run preview
```

## Contenus

- Remplacer les PDF placeholders dans `/public/documents/`.
- Ajouter les vraies captures Backlog JV dans `/public/images/projects/backlog-jv/`.
- Vérifier que chaque page chantier reste factuelle et ne sur-vend pas un projet.
- Relire les versions FR et EN des pages principales.

## SEO

- Vérifier les title/description dans le HTML généré.
- Vérifier canonical + hreflang sur FR et EN.
- Vérifier `/robots.txt`.
- Vérifier `/sitemap.xml`.
- Soumettre le domaine et le sitemap dans Google Search Console après mise en ligne.

## Analytics léger

- Garder l’analytics désactivée en local.
- Si Cloudflare Web Analytics est retenu, renseigner uniquement en production :

```bash
NUXT_PUBLIC_ANALYTICS_PROVIDER=cloudflare
NUXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=...
```

## Accessibilité / responsive

- Tester clavier : skip link, menu mobile, liens et CTA.
- Vérifier les pages en mobile étroit.
- Vérifier les contrastes principaux.
- Vérifier qu’il n’y a pas d’erreur console.

## Liens

- Vérifier les liens Contact, CV, GitHub et éventuel LinkedIn.
- Vérifier qu’il ne reste pas de `href="#"`.
- Vérifier les liens de changement de langue.
