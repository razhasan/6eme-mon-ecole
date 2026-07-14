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
  }
];
