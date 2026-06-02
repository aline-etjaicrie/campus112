# Campus 112 — Site web

Site statique HTML/CSS/JS pour Campus 112, ancienne Base aérienne 112 à Suippes (Marne).  
Déployé sur **Netlify** · EcoIndex **A** · 0,643 Mo · 12 requêtes

---

## Structure du projet

```
public/                 ← Dossier servi (publish directory Netlify)
├── index.html          ← Accueil (hero, vision CAP 2030, offres, contact)
├── a-propos.html       ← Histoire, gouvernance, feuille de route
├── etudiants.html      ← Offre logements étudiants
├── professionnels.html ← Bureaux, ateliers, stockage
├── evenementiel.html   ← Espaces événementiels
├── culture.html        ← Résidences artistes, ateliers culturels
├── living-lab.html     ← Living Lab CAP 2030, 17 filières
├── eco-conception.html ← Démarche EcoIndex A & Green IT
├── style.css           ← CSS unique partagé (design system)
├── script.js           ← JS minimal (menu mobile, ~40 lignes)
├── fonts/
│   ├── barlow-condensed-700.woff2   ← Auto-hébergé, subset latin
│   └── barlow-condensed-800.woff2
└── imgs/
    ├── Campus 112-logos/            ← Logos SVG (Group 30 à 35 + blanc)
    └── *.webp                       ← Toutes les images (format WebP optimisé)
```

---

## Déploiement

**Hébergement** : Netlify (CDN statique, aucun serveur applicatif)  
**Config** : `netlify.toml` à la racine  
**Branche déployée** : `main`  
**URL** : https://www.campus112.org

Tout push sur `main` → redéploiement automatique sur Netlify. Aucun build requis.

---

## Contraintes à respecter

- **Pas d'adresse email visible** — contact uniquement par formulaire + tél. 07 57 81 81 83
- **Pas de lien `mailto:`** — ni dans les pages, ni dans le footer
- **EcoIndex A à maintenir** — ne pas ajouter de librairies JS, de Google Fonts ou d'images non optimisées. Toute nouvelle image doit être en WebP et lazy-loadée.

---

## Technologies

- HTML5 sémantique, CSS3 custom properties, JS vanilla
- Aucun framework, aucun bundler, aucune dépendance NPM
- Polices : Barlow Condensed auto-hébergé (fonts/) + police système pour le corps de texte
- Images : WebP optimisé, `loading="lazy"` sur tout ce qui est hors hero

---

## Performances (juin 2026)

| Métrique | Valeur | Cible |
|----------|--------|-------|
| EcoIndex | **A** | A |
| Poids page (index) | **0,643 Mo** | < 1,024 Mo |
| Éléments DOM | **248** | < 600 |
| Requêtes serveur | **12** | < 40 |
| Classement | **61 717 / 590 728** | Top 10 % |

Score mesuré sur [ecoindex.fr](https://www.ecoindex.fr)

---

## Contact projet

Campus 112 — [www.campus112.org](https://www.campus112.org)  
Tél. 07 57 81 81 83

Conception graphique : [etjaicrie.com](https://etjaicrie.com)
