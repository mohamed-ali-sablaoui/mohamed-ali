# Mohamed Ali Sablaoui — Portfolio

Portfolio personnel bilingue (français / anglais), réalisé en HTML5, CSS3 et JavaScript vanilla.

## Structure du projet

```text
.
├── index.html       # Structure et contenu du portfolio
├── style.css        # Styles, responsive design et animations
├── main.js          # Menu, changement de langue et animations au défilement
├── portrait.jpg     # Portrait optimisé du propriétaire du portfolio
├── studynet.webp    # Aperçu optimisé du projet Study Net
├── robots.txt       # Règles d'exploration des moteurs de recherche
├── sitemap.xml      # Adresse du site pour les moteurs de recherche
└── README.md
```

## Aperçu local

Ouvrir `index.html` dans un navigateur. Aucun framework ni installation n'est nécessaire.

## Publication sur Vercel

1. Importer ce dossier dans le dépôt Git connecté à Vercel, ou téléverser le projet selon votre méthode de déploiement.
2. Conserver `index.html` à la racine du projet.
3. Utiliser les paramètres de déploiement statique par défaut : aucun build command ni dossier de sortie spécifique n'est requis.
4. Après publication, vérifier que `https://mohamed-ali-sage.vercel.app/`, `/robots.txt` et `/sitemap.xml` sont accessibles.

## Ajouter un projet

Dupliquer un bloc `<a class="project-card" ...>` existant dans `.projects-grid`, puis modifier uniquement les informations propres au nouveau projet :

- l'URL dans `href` ;
- l'image dans `.project-image img` (avec un texte `alt` descriptif) ;
- la catégorie et le numéro ;
- le titre, la description et les technologies ;
- le texte du lien dans le pied de carte.

Toutes les cartes utilisent la classe générique `.project-card`. La grille en affiche deux par rangée sur grand écran et une par rangée sur petit écran. Le JavaScript observe automatiquement toutes les cartes : aucune règle CSS propre à un projet n'est nécessaire.

## Ajouter ou remplacer une image

Placer l'image optimisée à la racine du projet et mettre à jour son chemin dans `index.html`. Préférer WebP pour les aperçus de projets et fournir les dimensions réelles (`width` et `height`) afin de limiter les déplacements de mise en page.

## Langues

Pour rendre un texte bilingue, utiliser `data-fr` et `data-en` sur l'élément concerné. Le script met également à jour les libellés accessibles déclarés avec `data-aria-fr` et `data-aria-en`.
