# Le Cahier de Lina 📚

Un mini site pour apprendre un peu chaque jour : Éducation Islamique, Maths, Français,
Histoire-Géographie, Sciences et Anglais — niveau 6ème.

## Comment l'ouvrir

**Important :** pour que la progression de Lina soit bien sauvegardée d'un jour à l'autre,
il faut ouvrir le site via un petit serveur local, et pas juste double-cliquer sur `index.html`
(certains navigateurs bloquent la sauvegarde locale quand on ouvre un fichier directement).

C'est très simple :

1. Ouvre un terminal dans le dossier du site (celui qui contient `index.html`).
2. Lance : `python3 -m http.server 8000` (Python est déjà installé sur Mac ; sur Windows,
   installe Python puis fais la même commande).
3. Ouvre ton navigateur à l'adresse : `http://localhost:8000`

Tu peux aussi héberger ces fichiers tels quels sur n'importe quel hébergement web gratuit
(GitHub Pages, Netlify, etc.) — tout fonctionnera pareil, sans rien changer.

## Comment ça marche

- Chaque matière débloque **une nouvelle leçon par jour**, à partir du jour où on la commence.
- Une fois la leçon lue, on fait un **petit quiz** pour valider.
- Si le quiz est réussi, la leçon suivante attend le lendemain (message "Prochain cours
  disponible le ...").
- On peut toujours cliquer sur les ronds verts (leçons terminées) pour les revoir.
- La progression est sauvegardée automatiquement dans le navigateur (stockage local).

## Comment ajouter des leçons

Chaque matière a son fichier de contenu dans `js/` (ex : `js/maths-data.js`).
Il suffit d'ajouter un nouvel objet dans le tableau, sur ce modèle :

```js
{
  title: "Titre de la leçon",
  level: "Bases",  // ou "Moyen" ou "Avancé"
  content: `<p>... explication ...</p>`,
  quiz: [
    { q: "Une question ?", options: ["Réponse A","Réponse B","Réponse C"], correct: 1 }
  ]
}
```

La leçon apparaîtra automatiquement dans le suivi des jours et sur la page d'accueil —
aucune autre modification n'est nécessaire.

## Structure des fichiers

```
index.html              → page d'accueil
css/style.css            → style partagé (thème "cahier d'école")
js/lessons-engine.js     → logique commune (déverrouillage par date, quiz, progrès)
js/<matiere>-data.js     → contenu des leçons de chaque matière
pages/<matiere>.html     → page de chaque matière
