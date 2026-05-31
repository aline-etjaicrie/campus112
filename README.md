# Campus 112 — Site web

Site vitrine de Campus 112, écosystème d'innovation sur l'ancienne Base aérienne 112 à Courcy (Marne).

## Architecture

Site **HTML/CSS statique pur**, sans framework JS. Servi depuis `public/`.

```
public/
├── index.html           # Accueil
├── etudiants.html       # Offre logement étudiant
├── professionnels.html  # Offre espaces professionnels
├── evenementiel.html    # Offre événementiel
├── culture.html         # Offre culture / résidences
├── living-lab.html      # Offre Living Lab
├── eco-conception.html  # Démarche Green IT
├── style.css            # CSS partagé (design system)
├── script.js            # JS minimal (nav mobile uniquement)
└── imgs/                # Images et logos
```

## Déploiement

**Netlify** — aucun build requis, publication directe depuis `public/`.

```toml
[build]
  publish = "public"
```

## Développement local

```bash
npm install
npm run dev        # Vite dev server sur :3457
```

Vite est configuré avec `root: "public"` pour servir les fichiers statiques.

---

## Démarche EcoIndex A — Choix techniques

### Objectif
Atteindre et maintenir un **score EcoIndex A** (< 50 points).

### Ce qui a été fait

| Critère | Choix |
|---|---|
| Framework | Aucun — HTML/CSS/JS vanille |
| CSS | Un seul fichier partagé (`style.css`), pas de Tailwind en production |
| JS | Un fichier de ~15 lignes (nav mobile). Aucune bibliothèque |
| Polices | Google Fonts — 2 familles, 2 graisses chacune, `display=swap` |
| Icônes | SVG inline — aucune librairie externe |
| Images | `loading="lazy"` sur toutes les images hors hero. `width`/`height` définis |
| DOM | Structure HTML sémantique, hiérarchie propre |
| Tracking | Aucun — pas de Google Analytics, pas de pixel |
| Requêtes | ~4 par page (HTML + CSS + JS + 1-2 fonts) |

### À faire pour optimiser davantage

1. **Convertir les images en WebP/AVIF** — gain estimé : 30-60% sur le poids des images
2. **Sous-setter les polices Google Fonts** — ajouter `&subset=latin` à l'URL
3. **Mesurer le score EcoIndex** sur [ecoindex.fr](https://www.ecoindex.fr) après déploiement
4. **Hébergement vert** — choisir un hébergeur alimenté en énergie renouvelable
5. **Audit Lighthouse** — vérifier Performance, Accessibility, Best Practices

### Points à vérifier pour EcoIndex A

- [ ] Nombre de requêtes < 40
- [ ] Poids de la page < 1,5 MB
- [ ] Nombre d'éléments DOM < 700 par page
- [ ] Pas de ressources bloquantes
- [ ] Images avec dimensions explicites (évite le layout shift)
- [ ] Pas de scripts tiers inutiles

---

## Contact

**07 57 81 81 83** — [www.campus112.org](https://www.campus112.org)

Conception graphique : [etjaicrie.com](https://etjaicrie.com)
