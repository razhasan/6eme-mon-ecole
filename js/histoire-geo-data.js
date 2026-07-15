const LESSONS_HISTOIRE_GEO = [
  {
    title: "Se repérer dans le temps : la frise chronologique",
    level: "Bases",
    content: `
      <p>En Histoire, on utilise une <strong>frise chronologique</strong> pour situer les événements dans le temps.</p>
      <ul>
        <li>Le temps se compte en années, siècles et millénaires.</li>
        <li>On distingue "avant Jésus-Christ" (av. J.-C.) et "après Jésus-Christ" (apr. J.-C.).</li>
        <li>Un siècle = 100 ans. Le 21e siècle a commencé en l'an 2001.</li>
      </ul>
    `,
    quiz: [
      { q: "Combien d'années y a-t-il dans un siècle ?", options:["10","100","1000"], correct:1 },
      { q: "Un outil pour situer des événements dans le temps s'appelle...", options:["Une carte","Une frise chronologique","Un globe"], correct:1 },
      { q: "En quelle année a commencé le 21e siècle ?", options:["2000","2001","2100"], correct:1 }
    ]
  },
  {
    title: "Se repérer dans l'espace : les continents et océans",
    level: "Bases",
    content: `
      <p>La Terre est composée de grands ensembles de terre (continents) et d'eau (océans).</p>
      <ul>
        <li>Les 5 continents : l'Afrique, l'Amérique, l'Asie, l'Europe, l'Océanie.</li>
        <li>Les 5 océans : Atlantique, Pacifique, Indien, Arctique, Austral.</li>
        <li>La France se trouve en Europe.</li>
      </ul>
    `,
    quiz: [
      { q: "Combien y a-t-il de continents ?", options:["3","5","7"], correct:1 },
      { q: "Sur quel continent se trouve la France ?", options:["L'Asie","L'Europe","L'Afrique"], correct:1 },
      { q: "Lequel de ces mots est un océan ?", options:["Pacifique","Amazonie","Sahara"], correct:0 }
    ]
  },
  {
    title: "Lire une carte : légende, échelle, points cardinaux",
    level: "Bases",
    content: `
      <p>Savoir lire une carte est une compétence essentielle en géographie.</p>
      <ul>
        <li>La <strong>légende</strong> explique ce que représentent les couleurs et les symboles.</li>
        <li>L'<strong>échelle</strong> indique le rapport entre les distances sur la carte et dans la réalité.</li>
        <li>Les <strong>points cardinaux</strong> (Nord, Sud, Est, Ouest) permettent de s'orienter. Le Nord est en général en haut de la carte.</li>
      </ul>
      <div class="callout">💡 Astuce : regarde toujours la légende en premier pour comprendre une carte.</div>
    `,
    quiz: [
      { q: "À quoi sert la légende d'une carte ?", options:["À expliquer les couleurs et symboles","À indiquer l'heure","À donner le titre"], correct:0 },
      { q: "Quel point cardinal est en général en haut d'une carte ?", options:["Le Sud","Le Nord","L'Est"], correct:1 },
      { q: "L'échelle sert à...", options:["Indiquer le rapport entre distances réelles et sur la carte","Colorier la carte","Nommer les pays"], correct:0 }
    ]
  },
  {
    title: "Les débuts de l'humanité",
    level: "Moyen",
    content: `
      <p>La <strong>Préhistoire</strong> est la période avant l'invention de l'écriture.</p>
      <ul>
        <li>Les premiers hommes vivaient de la chasse et de la cueillette.</li>
        <li>Ils ont appris à maîtriser le feu, ce qui a changé leur mode de vie.</li>
        <li>La Préhistoire se termine avec l'invention de l'écriture, il y a environ 5000 ans.</li>
      </ul>
    `,
    quiz: [
      { q: "Que signifie 'Préhistoire' ?", options:["Après l'écriture","Avant l'écriture","Pendant la guerre"], correct:1 },
      { q: "Comment vivaient les premiers hommes ?", options:["De la chasse et de la cueillette","Du commerce en ligne","De l'agriculture uniquement"], correct:0 },
      { q: "Qu'est-ce qui marque la fin de la Préhistoire ?", options:["L'invention de la roue","L'invention de l'écriture","La construction de villes"], correct:1 }
    ]
  },
  {
    title: "La sédentarisation et les débuts de l'agriculture",
    level: "Moyen",
    content: `
      <p>Il y a environ 10 000 ans, les humains ont commencé à changer profondément leur mode de vie.</p>
      <ul>
        <li>Ils sont passés de <strong>nomades</strong> (qui se déplacent) à <strong>sédentaires</strong> (qui restent au même endroit).</li>
        <li>Ils ont commencé à cultiver la terre et à élever des animaux, au lieu de seulement chasser et cueillir.</li>
        <li>Cela a permis la construction des premiers villages.</li>
      </ul>
      <div class="callout">💡 À retenir : sédentaire = qui vit toujours au même endroit ; nomade = qui se déplace souvent.</div>
    `,
    quiz: [
      { q: "Que veut dire 'sédentaire' ?", options:["Qui se déplace souvent","Qui vit toujours au même endroit","Qui chasse uniquement"], correct:1 },
      { q: "Qu'ont commencé à faire les humains il y a environ 10 000 ans ?", options:["Cultiver la terre et élever des animaux","Construire des avions","Naviguer sur les océans"], correct:0 },
      { q: "Qu'est-ce que la sédentarisation a permis de construire ?", options:["Des pyramides uniquement","Les premiers villages","Des routes en béton"], correct:1 }
    ]
  },
  {
    title: "L'Égypte ancienne",
    level: "Moyen",
    content: `
      <p>L'<strong>Égypte ancienne</strong> est l'une des premières grandes civilisations de l'histoire, née le long du fleuve <strong>Nil</strong>.</p>
      <ul>
        <li>Le Nil apportait de l'eau et rendait les terres fertiles pour l'agriculture.</li>
        <li>Les Égyptiens ont construit d'immenses <strong>pyramides</strong> pour honorer leurs pharaons (leurs rois).</li>
        <li>Ils ont inventé une écriture appelée les <strong>hiéroglyphes</strong>.</li>
      </ul>
    `,
    quiz: [
      { q: "Le long de quel fleuve est née l'Égypte ancienne ?", options:["Le Nil","La Seine","L'Amazone"], correct:0 },
      { q: "Comment appelle-t-on le roi de l'Égypte ancienne ?", options:["Un empereur","Un pharaon","Un consul"], correct:1 },
      { q: "Comment s'appelle l'écriture des Égyptiens ?", options:["Les hiéroglyphes","L'alphabet latin","Les runes"], correct:0 }
    ]
  },
  {
    title: "La Mésopotamie, entre deux fleuves",
    level: "Moyen",
    content: `
      <p>La <strong>Mésopotamie</strong> se trouve entre deux fleuves, le Tigre et l'Euphrate (aujourd'hui en Irak). C'est l'une des toutes premières civilisations.</p>
      <ul>
        <li>Le mot "Mésopotamie" veut dire "entre les fleuves" en grec ancien.</li>
        <li>On y a inventé l'une des premières écritures du monde, appelée l'<strong>écriture cunéiforme</strong>.</li>
        <li>Les habitants ont construit les premières grandes villes, comme Babylone et Ur.</li>
      </ul>
    `,
    quiz: [
      { q: "Entre quels deux fleuves se trouve la Mésopotamie ?", options:["Le Tigre et l'Euphrate","Le Nil et le Jourdain","La Seine et la Loire"], correct:0 },
      { q: "Comment s'appelle l'écriture inventée en Mésopotamie ?", options:["L'écriture cunéiforme","Les hiéroglyphes","L'alphabet grec"], correct:0 },
      { q: "Que veut dire 'Mésopotamie' ?", options:["Entre les fleuves","Terre du soleil","Grande montagne"], correct:0 }
    ]
  },
  {
    title: "Le climat et les paysages du monde",
    level: "Moyen",
    content: `
      <p>Selon leur position sur la Terre, les régions ont des <strong>climats</strong> et des <strong>paysages</strong> très différents.</p>
      <ul>
        <li>Le climat <strong>équatorial</strong> (près de l'équateur) : chaud et humide toute l'année, forêts tropicales.</li>
        <li>Le climat <strong>désertique</strong> : très sec, peu de végétation.</li>
        <li>Le climat <strong>tempéré</strong> (comme en France) : quatre saisons bien marquées.</li>
        <li>Le climat <strong>polaire</strong> : très froid, glace et neige presque toute l'année.</li>
      </ul>
    `,
    quiz: [
      { q: "Quel climat trouve-t-on près de l'équateur ?", options:["Polaire","Équatorial","Désertique"], correct:1 },
      { q: "Quel climat a la France ?", options:["Tempéré","Désertique","Polaire"], correct:0 },
      { q: "Que caractérise un climat désertique ?", options:["Beaucoup de pluie","Très sec, peu de végétation","Neige toute l'année"], correct:1 }
    ]
  },
  {
    title: "La ville et la campagne : deux espaces de vie",
    level: "Avancé",
    content: `
      <p>Les habitants du monde vivent dans des espaces différents, avec chacun leurs caractéristiques.</p>
      <ul>
        <li>En <strong>ville</strong> : beaucoup d'habitants proches les uns des autres, immeubles, commerces, transports en commun.</li>
        <li>À la <strong>campagne</strong> : moins d'habitants, plus d'espace, champs et fermes.</li>
        <li>On appelle <strong>urbanisation</strong> le fait que de plus en plus de personnes dans le monde vivent en ville.</li>
      </ul>
      <div class="callout">💡 Aujourd'hui, plus de la moitié de la population mondiale vit en ville.</div>
    `,
    quiz: [
      { q: "Qu'est-ce que l'urbanisation ?", options:["Le fait de vivre de plus en plus en ville","Le fait de cultiver la terre","Le fait de voyager en bateau"], correct:0 },
      { q: "Quel espace a en général plus de champs et de fermes ?", options:["La ville","La campagne"], correct:1 },
      { q: "Aujourd'hui, où vit plus de la moitié de la population mondiale ?", options:["À la campagne","En ville","En mer"], correct:1 }
    ]
  },
  {
    title: "Habiter en France : villes et régions",
    level: "Avancé",
    content: `
      <p>La France est un pays organisé en plusieurs grandes régions, avec des villes importantes.</p>
      <ul>
        <li><strong>Paris</strong> est la capitale de la France, sur le fleuve la Seine.</li>
        <li>La France est divisée en <strong>régions</strong>, elles-mêmes divisées en <strong>départements</strong>.</li>
        <li>Chaque région a ses propres paysages : montagnes (Alpes, Pyrénées), littoral (côtes de l'Atlantique et de la Méditerranée), plaines agricoles.</li>
      </ul>
      <div class="callout">💡 À retenir : France = pays → régions → départements → villes.</div>
    `,
    quiz: [
      { q: "Quelle est la capitale de la France ?", options:["Lyon","Paris","Marseille"], correct:1 },
      { q: "Sur quel fleuve se trouve Paris ?", options:["La Seine","Le Rhône","La Loire"], correct:0 },
      { q: "Comment la France est-elle organisée ?", options:["En régions puis départements","En continents","En villages uniquement"], correct:0 }
    ]
  }
];
