# Mohamed Ali Sablaoui — Portfolio

Portfolio personnel bilingue (français / anglais), réalisé en HTML5, CSS3 et JavaScript vanilla.

## Structure du projet

```text
.
├── index.html       # Structure et contenu du portfolio
├── style.css        # Identité visuelle, responsive design et animations
├── main.js          # Menu mobile, changement de langue et animations au défilement
├── portrait.jpg     # Portrait
├── studynet.webp    # Aperçu du projet Study Net
├── miqat.webp       # Aperçu du projet Miqat
├── designlab.webp   # Aperçu du projet DesignLab
├── robots.txt       # Règles d'exploration des moteurs de recherche
├── sitemap.xml      # Adresse du site pour les moteurs de recherche
└── README.md
```

## Aperçu local

Ouvrir `index.html` dans un navigateur. Aucun framework ni installation n'est nécessaire. Une connexion Internet est utile pour charger les polices Google Fonts ; des polices de secours sont prévues.

## Publication sur Vercel

1. Importer ce dossier dans le dépôt Git connecté à Vercel, ou téléverser le projet selon votre méthode de déploiement.
2. Conserver `index.html` à la racine du projet.
3. Utiliser les paramètres de déploiement statique par défaut : aucun build command ni dossier de sortie spécifique n'est requis.
4. Après publication, vérifier que la page d'accueil, `/robots.txt` et `/sitemap.xml` sont accessibles.

## Ajouter un projet

Dupliquer un bloc `<a class="project-card" ...>` existant dans `.projects-grid`, puis mettre à jour l'URL, l'image, le texte alternatif, la catégorie, le numéro, le titre et la description. Garder un numéro unique pour chaque projet.

## Langues

Pour rendre un texte bilingue, utiliser `data-fr` et `data-en` sur l'élément concerné. Le script met également à jour les libellés accessibles déclarés avec `data-aria-fr` et `data-aria-en`.

## Notes

- Le site reste sans framework et sans dépendance JavaScript.
- Les styles incluent des adaptations pour mobile, tablette et ordinateur.
- Les animations respectent le réglage système `prefers-reduced-motion`.
- Les informations personnelles et les liens de contact proviennent du contenu fourni dans le projet d'origine.
