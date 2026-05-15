# 404Cookbook

*Recettes maison, partagées en famille.*

Un site de recettes statique, généré avec [nyum](https://github.com/doersino/nyum) (Pandoc + Bash), personnalisé et redesigné pour **404Cookbook**.

## Stack

- [Pandoc](https://pandoc.org) — conversion Markdown → HTML
- Bash — build pipeline
- GitHub Actions — build & déploiement automatique sur GitHub Pages
- Vanilla JS — recherche + filtres par catégorie

## Ajouter une recette

Crée un fichier `.md` dans `_recipes/` avec ce format :

```markdown
---
title: Nom de la recette
category: Catégorie
description: Courte description.
image: photo.jpg
size: 2-3 portions
time: 30 minutes
author: Auteur
source: https://...
spicy: ✓
vegan: ✓
favorite: ✓
---

* `2 c. à s.` ingrédient

> Instruction pour cette étape.

---

* `1` autre ingrédient

> Suite des instructions.
```

Champs optionnels : `original_title`, `nutrition`, `image_attribution`, `image_source`, `veggie`, `sweet`, `salty`, `sour`, `bitter`, `umami`.

## Déploiement

Un push sur `main` déclenche le CI qui build et déploie automatiquement sur GitHub Pages.

## Licence

MIT — voir `LICENSE`.
