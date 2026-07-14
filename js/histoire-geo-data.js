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
  }
];
