const LESSONS_MATHS = [
  {
    title: "Les nombres entiers et décimaux",
    level: "Bases",
    content: `
      <p>En 6ème, on retravaille les nombres pour bien les maîtriser.</p>
      <ul>
        <li>Un <strong>nombre entier</strong> n'a pas de virgule : 0, 1, 2, 3, 15, 240...</li>
        <li>Un <strong>nombre décimal</strong> a une partie après la virgule : 3,5 ou 12,75.</li>
        <li>Chaque chiffre a une position : unités, dizaines, centaines, dixièmes, centièmes...</li>
      </ul>
      <div class="callout">💡 Exemple : dans 12,75 → 1 = dizaines, 2 = unités, 7 = dixièmes, 5 = centièmes.</div>
    `,
    quiz: [
      { q: "Lequel est un nombre décimal ?", options:["12","7,5","100"], correct:1 },
      { q: "Dans 45,2, que représente le 2 ?", options:["Les dizaines","Les unités","Les dixièmes"], correct:2 },
      { q: "34 est-il un nombre entier ?", options:["Oui","Non"], correct:0 }
    ]
  },
  {
    title: "Addition et soustraction des décimaux",
    level: "Bases",
    content: `
      <p>Pour additionner ou soustraire des nombres décimaux, on aligne bien les virgules les unes sous les autres.</p>
      <ul>
        <li>Exemple : 12,5 + 3,75 → on aligne les virgules puis on additionne comme d'habitude.</li>
        <li>Astuce : on peut ajouter des zéros après la virgule pour avoir le même nombre de chiffres (12,50 + 3,75).</li>
      </ul>
      <div class="callout">💡 Toujours vérifier : le résultat a-t-il du sens par rapport aux nombres de départ ?</div>
    `,
    quiz: [
      { q: "Que doit-on aligner pour additionner des décimaux ?", options:["Les virgules","Les couleurs","Rien de spécial"], correct:0 },
      { q: "12,5 + 3,75 = ?", options:["16,25","15,25","16,75"], correct:0 },
      { q: "10 - 2,3 = ?", options:["7,7","8,3","7,3"], correct:0 }
    ]
  },
  {
    title: "Les figures géométriques de base",
    level: "Bases",
    content: `
      <p>On découvre le vocabulaire de géométrie utilisé toute l'année.</p>
      <ul>
        <li>Un <strong>segment</strong> relie deux points.</li>
        <li>Une <strong>droite</strong> continue à l'infini dans les deux sens.</li>
        <li>Un <strong>angle droit</strong> mesure 90°, on le vérifie avec une équerre.</li>
        <li>Un <strong>polygone</strong> est une figure fermée avec des côtés droits (triangle, carré, rectangle...).</li>
      </ul>
    `,
    quiz: [
      { q: "Combien mesure un angle droit ?", options:["45°","90°","180°"], correct:1 },
      { q: "Avec quel outil vérifie-t-on un angle droit ?", options:["Une règle","Une équerre","Un compas"], correct:1 },
      { q: "Un triangle est-il un polygone ?", options:["Oui","Non"], correct:0 }
    ]
  }
];
