const LESSONS_ANGLAIS = [
  {
    title: "Se présenter en anglais",
    level: "Bases",
    content: `
      <p>Voici les phrases de base pour se présenter en anglais.</p>
      <ul>
        <li><strong>Hello! / Hi!</strong> — Bonjour / Salut</li>
        <li><strong>My name is Lina.</strong> — Je m'appelle Lina.</li>
        <li><strong>I am 11 years old.</strong> — J'ai 11 ans.</li>
        <li><strong>I live in France.</strong> — J'habite en France.</li>
        <li><strong>Nice to meet you!</strong> — Ravi(e) de te rencontrer !</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on 'Je m'appelle...' en anglais ?", options:["My name is...","I am from...","I like..."], correct:0 },
      { q: "'Nice to meet you' veut dire :", options:["Au revoir","Ravi de te rencontrer","Merci beaucoup"], correct:1 },
      { q: "Comment dit-on 'Bonjour' de façon simple ?", options:["Goodbye","Hello","Please"], correct:1 }
    ]
  },
  {
    title: "Les nombres de 1 à 20",
    level: "Bases",
    content: `
      <p>Apprenons à compter en anglais !</p>
      <ul>
        <li>one, two, three, four, five</li>
        <li>six, seven, eight, nine, ten</li>
        <li>eleven, twelve, thirteen, fourteen, fifteen</li>
        <li>sixteen, seventeen, eighteen, nineteen, twenty</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on '7' en anglais ?", options:["seven","six","nine"], correct:0 },
      { q: "Comment dit-on '12' en anglais ?", options:["twenty","twelve","two"], correct:1 },
      { q: "Quel nombre vient après 'nineteen' ?", options:["twenty","ten","eighteen"], correct:0 }
    ]
  },
  {
    title: "Les couleurs et les objets de la classe",
    level: "Bases",
    content: `
      <p>Le vocabulaire de la salle de classe, très utile au quotidien !</p>
      <ul>
        <li><strong>a pen</strong> (un stylo), <strong>a pencil</strong> (un crayon), <strong>a book</strong> (un livre)</li>
        <li>Colours: <strong>red</strong> (rouge), <strong>blue</strong> (bleu), <strong>green</strong> (vert), <strong>yellow</strong> (jaune)</li>
        <li>Exemple : "I have a blue pen." — J'ai un stylo bleu.</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on 'un crayon' en anglais ?", options:["a pen","a pencil","a book"], correct:1 },
      { q: "'Green' veut dire :", options:["Rouge","Vert","Jaune"], correct:1 },
      { q: "Que veut dire 'I have a blue pen' ?", options:["J'ai un stylo bleu","J'ai un livre rouge","Je vois un crayon"], correct:0 }
    ]
  }
];
