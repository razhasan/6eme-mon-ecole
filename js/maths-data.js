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
    title: "Comparer et ranger les nombres",
    level: "Bases",
    content: `
      <p>Pour comparer deux nombres, on regarde d'abord leur partie entière, puis les chiffres après la virgule un par un.</p>
      <ul>
        <li>On utilise les symboles <strong>&lt;</strong> (plus petit que) et <strong>&gt;</strong> (plus grand que).</li>
        <li>Exemple : 12,5 &gt; 12,45 car après "12," le chiffre 5 (dixièmes) est plus grand que 4.</li>
        <li>Ranger dans l'ordre croissant = du plus petit au plus grand. Décroissant = du plus grand au plus petit.</li>
      </ul>
      <div class="callout">💡 Astuce : si les parties entières sont égales, compare les dixièmes, puis les centièmes.</div>
    `,
    quiz: [
      { q: "Que veut dire 'ordre croissant' ?", options:["Du plus grand au plus petit","Du plus petit au plus grand","Au hasard"], correct:1 },
      { q: "12,5 ... 12,45 : quel symbole ?", options:["<","=",">"], correct:2 },
      { q: "Quel nombre est le plus grand : 3,9 ou 3,12 ?", options:["3,9","3,12","Ils sont égaux"], correct:0 }
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
    title: "La multiplication des décimaux",
    level: "Moyen",
    content: `
      <p>Multiplier des nombres décimaux se fait comme une multiplication normale, puis on place la virgule à la fin.</p>
      <ul>
        <li>On multiplie d'abord les nombres sans les virgules.</li>
        <li>On compte le total de chiffres après les virgules des deux nombres de départ.</li>
        <li>On place la virgule dans le résultat en comptant ce même nombre de chiffres depuis la droite.</li>
      </ul>
      <div class="callout">💡 Exemple : 2,5 × 1,2 → 25 × 12 = 300 → il y a 2 chiffres après les virgules au total → 3,00 = 3.</div>
    `,
    quiz: [
      { q: "2,5 × 1,2 = ?", options:["3","30","0,3"], correct:0 },
      { q: "Que fait-on d'abord pour multiplier des décimaux ?", options:["On multiplie sans les virgules","On les additionne","On les divise"], correct:0 },
      { q: "Comment sait-on où placer la virgule finale ?", options:["Au hasard","En comptant les chiffres après les virgules de départ","On ne met jamais de virgule"], correct:1 }
    ]
  },
  {
    title: "La division euclidienne",
    level: "Moyen",
    content: `
      <p>La <strong>division euclidienne</strong> permet de partager un nombre entier en parts égales, avec parfois un reste.</p>
      <ul>
        <li>Exemple : 17 divisé par 5 → 17 = 5 × 3 + 2. Le quotient est 3, le reste est 2.</li>
        <li>Le reste doit toujours être plus petit que le diviseur.</li>
        <li>Si le reste est 0, la division est exacte.</li>
      </ul>
      <div class="callout">💡 Vérification : (quotient × diviseur) + reste = nombre de départ.</div>
    `,
    quiz: [
      { q: "Dans 17 = 5 × 3 + 2, quel est le reste ?", options:["3","5","2"], correct:2 },
      { q: "Le reste doit toujours être...", options:["Plus grand que le diviseur","Plus petit que le diviseur","Égal à 0"], correct:1 },
      { q: "Si le reste est 0, la division est...", options:["Fausse","Exacte","Impossible"], correct:1 }
    ]
  },
  {
    title: "Découvrir les fractions",
    level: "Moyen",
    content: `
      <p>Une <strong>fraction</strong> représente une partie d'un tout, comme une part de gâteau !</p>
      <ul>
        <li>Une fraction s'écrit avec un <strong>numérateur</strong> (en haut) et un <strong>dénominateur</strong> (en bas) : 3/4.</li>
        <li>Le dénominateur indique en combien de parts égales on a coupé le tout.</li>
        <li>Le numérateur indique combien de ces parts on prend.</li>
        <li>Exemple : 1/2 = la moitié, 1/4 = un quart.</li>
      </ul>
      <div class="callout">💡 3/4 se dit "trois quarts" : le gâteau est coupé en 4 parts, on en prend 3.</div>
    `,
    quiz: [
      { q: "Dans 3/4, quel est le numérateur ?", options:["3","4","7"], correct:0 },
      { q: "Que représente 1/2 ?", options:["Le tiers","La moitié","Le quart"], correct:1 },
      { q: "Le dénominateur indique...", options:["Combien de parts on prend","En combien de parts on a coupé le tout","Le résultat final"], correct:1 }
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
  },
  {
    title: "Périmètre et aire du rectangle",
    level: "Moyen",
    content: `
      <p>Le <strong>périmètre</strong> et l'<strong>aire</strong> permettent de mesurer une figure de deux façons différentes.</p>
      <ul>
        <li>Le <strong>périmètre</strong> = la longueur du contour. Pour un rectangle : (longueur + largeur) × 2.</li>
        <li>L'<strong>aire</strong> = la surface à l'intérieur. Pour un rectangle : longueur × largeur.</li>
        <li>Exemple : un rectangle de 5 cm sur 3 cm → périmètre = (5+3)×2 = 16 cm, aire = 5×3 = 15 cm².</li>
      </ul>
      <div class="callout">💡 Astuce : le périmètre se mesure en cm, l'aire se mesure en cm² (au carré).</div>
    `,
    quiz: [
      { q: "Comment calcule-t-on le périmètre d'un rectangle ?", options:["longueur × largeur","(longueur + largeur) × 2","longueur + largeur"], correct:1 },
      { q: "Comment calcule-t-on l'aire d'un rectangle ?", options:["longueur × largeur","(longueur + largeur) × 2","longueur - largeur"], correct:0 },
      { q: "Un rectangle 5 cm × 3 cm a une aire de :", options:["8 cm²","16 cm²","15 cm²"], correct:2 }
    ]
  },
  {
    title: "Mesurer et tracer des angles",
    level: "Avancé",
    content: `
      <p>On utilise un <strong>rapporteur</strong> pour mesurer ou tracer un angle avec précision.</p>
      <ul>
        <li>Un angle <strong>aigu</strong> mesure moins de 90°.</li>
        <li>Un angle <strong>droit</strong> mesure exactement 90°.</li>
        <li>Un angle <strong>obtus</strong> mesure entre 90° et 180°.</li>
        <li>Pour mesurer, on place le centre du rapporteur sur le sommet de l'angle.</li>
      </ul>
      <div class="callout">💡 Astuce : compare toujours ton angle à un angle droit pour savoir s'il est aigu ou obtus avant de mesurer précisément.</div>
    `,
    quiz: [
      { q: "Un angle de 45° est un angle...", options:["Aigu","Droit","Obtus"], correct:0 },
      { q: "Un angle de 120° est un angle...", options:["Aigu","Droit","Obtus"], correct:2 },
      { q: "Quel outil sert à mesurer un angle ?", options:["Une équerre","Un rapporteur","Un compas"], correct:1 }
    ]
  },
  {
    title: "La symétrie axiale",
    level: "Avancé",
    content: `
      <p>Deux figures sont <strong>symétriques</strong> par rapport à une droite (l'axe de symétrie) si l'une est le reflet exact de l'autre, comme dans un miroir.</p>
      <ul>
        <li>Chaque point d'une figure a un point correspondant de l'autre côté de l'axe, à la même distance.</li>
        <li>La droite qui relie un point à son symétrique est toujours perpendiculaire à l'axe.</li>
        <li>Exemple : un papillon, un visage, une feuille ont souvent un axe de symétrie.</li>
      </ul>
      <div class="callout">💡 Pour vérifier une symétrie : si tu plies la figure le long de l'axe, les deux parties se superposent exactement.</div>
    `,
    quiz: [
      { q: "Une figure symétrique ressemble à...", options:["Un reflet dans un miroir","Une figure agrandie","Une figure déformée"], correct:0 },
      { q: "La droite reliant un point à son symétrique est toujours...", options:["Parallèle à l'axe","Perpendiculaire à l'axe","Inclinée au hasard"], correct:1 },
      { q: "Comment vérifier une symétrie avec du papier ?", options:["En le déchirant","En le pliant le long de l'axe","En le coloriant"], correct:1 }
    ]
  }
];
