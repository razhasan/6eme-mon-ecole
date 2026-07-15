const LESSONS_SCIENCES = [
  {
    title: "Le vivant et le non-vivant",
    level: "Bases",
    content: `
      <p>En sciences, on apprend à distinguer ce qui est vivant de ce qui ne l'est pas.</p>
      <ul>
        <li>Un être vivant naît, grandit, se nourrit, se reproduit et meurt.</li>
        <li>Exemples d'êtres vivants : une plante, un chat, une bactérie.</li>
        <li>Exemples de non-vivants : une pierre, l'eau, un nuage.</li>
      </ul>
    `,
    quiz: [
      { q: "Quel est un signe d'être vivant ?", options:["Se reproduire","Être en métal","Être froid"], correct:0 },
      { q: "Une pierre est-elle un être vivant ?", options:["Oui","Non"], correct:1 },
      { q: "Cite un exemple d'être vivant :", options:["Une plante","Un caillou","Un nuage"], correct:0 }
    ]
  },
  {
    title: "Les besoins des plantes",
    level: "Bases",
    content: `
      <p>Comme tous les êtres vivants, les plantes ont des besoins pour bien grandir.</p>
      <ul>
        <li>De la <strong>lumière</strong> (le soleil)</li>
        <li>De l'<strong>eau</strong></li>
        <li>De l'<strong>air</strong></li>
        <li>Des <strong>nutriments</strong> présents dans le sol</li>
      </ul>
      <div class="callout">💡 Sans lumière, une plante devient pâle et faible : c'est la photosynthèse qui lui donne son énergie.</div>
    `,
    quiz: [
      { q: "De quoi une plante a-t-elle besoin pour grandir ?", options:["De lumière et d'eau","De musique","De sucre"], correct:0 },
      { q: "Comment appelle-t-on le processus où la plante utilise la lumière ?", options:["La respiration","La photosynthèse","La digestion"], correct:1 },
      { q: "Que se passe-t-il si une plante manque de lumière ?", options:["Elle grandit plus vite","Elle devient pâle et faible","Rien ne change"], correct:1 }
    ]
  },
  {
    title: "Classer les êtres vivants",
    level: "Bases",
    content: `
      <p>Les scientifiques regroupent les êtres vivants en grandes familles selon leurs points communs.</p>
      <ul>
        <li>Les <strong>animaux</strong> se déplacent et se nourrissent d'autres êtres vivants (ou de plantes).</li>
        <li>Les <strong>végétaux</strong> (plantes) fabriquent leur propre nourriture grâce à la lumière.</li>
        <li>Parmi les animaux, on distingue les <strong>vertébrés</strong> (qui ont un squelette interne, comme les mammifères, oiseaux, poissons) et les <strong>invertébrés</strong> (comme les insectes, vers).</li>
      </ul>
    `,
    quiz: [
      { q: "Comment les végétaux fabriquent-ils leur nourriture ?", options:["Grâce à la lumière","En chassant","En dormant"], correct:0 },
      { q: "Qu'ont les animaux vertébrés ?", options:["Un squelette interne","Des feuilles","Des racines"], correct:0 },
      { q: "Un insecte est-il un vertébré ?", options:["Oui","Non, c'est un invertébré"], correct:1 }
    ]
  },
  {
    title: "La reproduction chez les plantes",
    level: "Moyen",
    content: `
      <p>Les plantes à fleurs se reproduisent grâce à un cycle fascinant.</p>
      <ul>
        <li>La <strong>fleur</strong> contient le pollen, nécessaire à la reproduction.</li>
        <li>La <strong>pollinisation</strong> se fait souvent grâce aux insectes (comme les abeilles) ou au vent.</li>
        <li>Après la pollinisation, la fleur se transforme en <strong>fruit</strong>, qui contient les <strong>graines</strong>.</li>
        <li>Chaque graine peut donner naissance à une nouvelle plante.</li>
      </ul>
      <div class="callout">💡 Les abeilles jouent un rôle essentiel : en butinant les fleurs, elles transportent le pollen d'une fleur à l'autre.</div>
    `,
    quiz: [
      { q: "Qu'est-ce que la pollinisation ?", options:["Le transport du pollen d'une fleur à l'autre","La chute des feuilles","La croissance des racines"], correct:0 },
      { q: "Que devient une fleur après la pollinisation ?", options:["Un fruit","Une racine","Une pierre"], correct:0 },
      { q: "Quel insecte aide beaucoup à la pollinisation ?", options:["La fourmi","L'abeille","Le moustique"], correct:1 }
    ]
  },
  {
    title: "Le corps humain : les os et les muscles",
    level: "Moyen",
    content: `
      <p>Notre corps bouge grâce à deux systèmes qui travaillent ensemble.</p>
      <ul>
        <li>Le <strong>squelette</strong> est fait d'os, il soutient le corps et le protège.</li>
        <li>Les <strong>muscles</strong> sont attachés aux os et permettent de bouger.</li>
        <li>Le corps humain adulte a environ 206 os.</li>
      </ul>
    `,
    quiz: [
      { q: "À quoi sert le squelette ?", options:["À soutenir et protéger le corps","À digérer la nourriture","À voir"], correct:0 },
      { q: "Qu'est-ce qui permet de bouger les os ?", options:["Les muscles","Les cheveux","La peau"], correct:0 },
      { q: "Combien d'os environ a un adulte ?", options:["50","206","500"], correct:1 }
    ]
  },
  {
    title: "La digestion : le trajet des aliments",
    level: "Moyen",
    content: `
      <p>Quand on mange, les aliments suivent un long trajet dans le corps pour nous donner de l'énergie.</p>
      <ul>
        <li>1. La <strong>bouche</strong> : on mâche et la salive commence à transformer les aliments.</li>
        <li>2. L'<strong>œsophage</strong> : un tube qui conduit les aliments vers l'estomac.</li>
        <li>3. L'<strong>estomac</strong> : il malaxe les aliments et les mélange à des sucs digestifs.</li>
        <li>4. L'<strong>intestin</strong> : les nutriments utiles passent dans le sang, et ce qui n'est pas utile est évacué.</li>
      </ul>
    `,
    quiz: [
      { q: "Que se passe-t-il dans la bouche ?", options:["On mâche et la salive agit","Les nutriments passent dans le sang","Rien"], correct:0 },
      { q: "Quel organe conduit les aliments vers l'estomac ?", options:["L'intestin","L'œsophage","Le cœur"], correct:1 },
      { q: "Où les nutriments utiles passent-ils dans le sang ?", options:["Dans l'estomac","Dans l'intestin","Dans la bouche"], correct:1 }
    ]
  },
  {
    title: "La respiration",
    level: "Moyen",
    content: `
      <p>Respirer permet au corps de recevoir l'<strong>oxygène</strong> dont il a besoin pour fonctionner.</p>
      <ul>
        <li>Quand on inspire, l'air entre par le nez ou la bouche et va jusqu'aux <strong>poumons</strong>.</li>
        <li>Dans les poumons, l'oxygène de l'air passe dans le sang, qui le transporte dans tout le corps.</li>
        <li>Quand on expire, le corps rejette le dioxyde de carbone, un gaz dont il n'a plus besoin.</li>
      </ul>
      <div class="callout">💡 À retenir : on inspire de l'oxygène, on expire du dioxyde de carbone.</div>
    `,
    quiz: [
      { q: "Que reçoit le corps grâce à la respiration ?", options:["De l'oxygène","Du sucre","De l'eau uniquement"], correct:0 },
      { q: "Dans quel organe l'oxygène passe-t-il dans le sang ?", options:["L'estomac","Les poumons","Le foie"], correct:1 },
      { q: "Que rejette-t-on en expirant ?", options:["De l'oxygène","Du dioxyde de carbone","De la salive"], correct:1 }
    ]
  },
  {
    title: "Une alimentation variée et équilibrée",
    level: "Avancé",
    content: `
      <p>Pour bien grandir et être en forme, notre corps a besoin de manger des aliments variés.</p>
      <ul>
        <li>Les <strong>fruits et légumes</strong> apportent des vitamines.</li>
        <li>Les <strong>féculents</strong> (pain, pâtes, riz) donnent de l'énergie pour la journée.</li>
        <li>Les <strong>produits laitiers</strong> apportent du calcium pour les os.</li>
        <li>Les <strong>protéines</strong> (viande, poisson, œufs, légumineuses) aident à construire les muscles.</li>
        <li>L'important est de manger un peu de chaque famille d'aliments, sans excès ni privation.</li>
      </ul>
      <div class="callout">💡 À retenir : manger varié, c'est prendre un peu de chaque groupe d'aliments au fil de la semaine.</div>
    `,
    quiz: [
      { q: "Que donnent les fruits et légumes ?", options:["Des vitamines","Du calcium uniquement","Rien d'important"], correct:0 },
      { q: "Que faut-il faire pour une alimentation équilibrée ?", options:["Manger uniquement des féculents","Manger un peu de chaque famille d'aliments","Ne jamais manger de fruits"], correct:1 },
      { q: "Que contiennent les produits laitiers, utile pour les os ?", options:["Du calcium","Du fer","Du sucre"], correct:0 }
    ]
  },
  {
    title: "L'eau, une ressource essentielle",
    level: "Avancé",
    content: `
      <p>L'eau est indispensable à la vie sur Terre et suit un grand voyage appelé le <strong>cycle de l'eau</strong>.</p>
      <ul>
        <li>Le soleil chauffe l'eau des océans, qui s'<strong>évapore</strong> et monte dans le ciel.</li>
        <li>En altitude, la vapeur d'eau se refroidit et forme des <strong>nuages</strong> (condensation).</li>
        <li>L'eau retombe ensuite sous forme de <strong>précipitations</strong> (pluie, neige).</li>
        <li>Elle rejoint les rivières, puis retourne à l'océan, et le cycle recommence.</li>
      </ul>
    `,
    quiz: [
      { q: "Que fait le soleil à l'eau des océans ?", options:["Il la fait évaporer","Il la gèle","Il la colore"], correct:0 },
      { q: "Comment se forment les nuages ?", options:["Par condensation de la vapeur d'eau","Par évaporation du sol","Par la fonte des roches"], correct:0 },
      { q: "Comment s'appelle ce grand voyage de l'eau ?", options:["Le cycle de l'eau","La chaîne alimentaire","La photosynthèse"], correct:0 }
    ]
  },
  {
    title: "Protéger l'environnement",
    level: "Avancé",
    content: `
      <p>Prendre soin de la nature est important pour préserver la vie sur Terre.</p>
      <ul>
        <li>Le <strong>tri des déchets</strong> permet de recycler le papier, le verre, le plastique...</li>
        <li>Économiser l'eau et l'électricité aide à préserver les ressources naturelles.</li>
        <li>Un <strong>écosystème</strong> est un milieu où les êtres vivants (plantes, animaux) dépendent les uns des autres.</li>
        <li>Protéger la biodiversité, c'est protéger toutes ces espèces et leurs milieux de vie.</li>
      </ul>
      <div class="callout">💡 Petit geste, grand effet : trier ses déchets à la maison aide vraiment la planète.</div>
    `,
    quiz: [
      { q: "À quoi sert le tri des déchets ?", options:["À les recycler","À les rendre invisibles","À rien"], correct:0 },
      { q: "Qu'est-ce qu'un écosystème ?", options:["Un milieu où les êtres vivants dépendent les uns des autres","Une machine","Un type de roche"], correct:0 },
      { q: "Que veut dire 'protéger la biodiversité' ?", options:["Protéger les espèces et leurs milieux de vie","Construire plus de routes","Ne rien faire"], correct:0 }
    ]
  }
];
