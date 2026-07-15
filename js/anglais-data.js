const LESSONS_ANGLAIS = [
  {
    title: "Se présenter en anglais",
    level: "Bases",
    content: `
      <p>Voici les phrases de base pour se présenter en anglais.</p>
      <ul>
        <li><strong>Hello! / Hi!</strong> — Bonjour / Salut</li>
        <li><strong>My name is Aiyzah.</strong> — Je m'appelle Aiyzah.</li>
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
  },
  {
    title: "La famille",
    level: "Bases",
    content: `
      <p>Découvrons le vocabulaire de la famille.</p>
      <ul>
        <li><strong>mother / mum</strong> (maman), <strong>father / dad</strong> (papa)</li>
        <li><strong>sister</strong> (sœur), <strong>brother</strong> (frère)</li>
        <li><strong>grandmother</strong> (grand-mère), <strong>grandfather</strong> (grand-père)</li>
        <li>Exemple : "This is my sister." — Voici ma sœur.</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on 'frère' en anglais ?", options:["sister","brother","father"], correct:1 },
      { q: "'Grandmother' veut dire :", options:["Grand-père","Tante","Grand-mère"], correct:2 },
      { q: "Que veut dire 'This is my sister' ?", options:["Voici mon frère","Voici ma sœur","Voici ma mère"], correct:1 }
    ]
  },
  {
    title: "Les animaux",
    level: "Bases",
    content: `
      <p>Apprenons les noms des animaux en anglais.</p>
      <ul>
        <li><strong>a dog</strong> (un chien), <strong>a cat</strong> (un chat), <strong>a bird</strong> (un oiseau)</li>
        <li><strong>a horse</strong> (un cheval), <strong>a rabbit</strong> (un lapin), <strong>a fish</strong> (un poisson)</li>
        <li>Exemple : "I have a cat." — J'ai un chat.</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on 'un chien' en anglais ?", options:["a cat","a dog","a bird"], correct:1 },
      { q: "'Rabbit' veut dire :", options:["Lapin","Cheval","Poisson"], correct:0 },
      { q: "Que veut dire 'I have a cat' ?", options:["J'ai un chien","J'ai un chat","J'ai un oiseau"], correct:1 }
    ]
  },
  {
    title: "Les jours de la semaine et les mois",
    level: "Intermédiaire",
    content: `
      <p>Voici les jours et les mois en anglais.</p>
      <ul>
        <li>Days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</li>
        <li>Months: January, February, March, April, May, June, July, August, September, October, November, December</li>
        <li>Exemple : "Today is Wednesday." — Aujourd'hui, c'est mercredi.</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on 'mercredi' en anglais ?", options:["Monday","Wednesday","Friday"], correct:1 },
      { q: "Quel mois vient après 'June' ?", options:["May","July","August"], correct:1 },
      { q: "Que veut dire 'Today is Wednesday' ?", options:["Aujourd'hui, c'est mercredi","Demain, c'est mardi","Hier, c'était lundi"], correct:0 }
    ]
  },
  {
    title: "La nourriture",
    level: "Intermédiaire",
    content: `
      <p>Le vocabulaire de la nourriture, pour parler des repas !</p>
      <ul>
        <li><strong>bread</strong> (pain), <strong>cheese</strong> (fromage), <strong>apple</strong> (pomme)</li>
        <li><strong>chicken</strong> (poulet), <strong>rice</strong> (riz), <strong>water</strong> (eau)</li>
        <li>Exemple : "I like apples." — J'aime les pommes.</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on 'fromage' en anglais ?", options:["bread","cheese","rice"], correct:1 },
      { q: "'Chicken' veut dire :", options:["Poulet","Poisson","Riz"], correct:0 },
      { q: "Que veut dire 'I like apples' ?", options:["J'aime le pain","J'aime les pommes","Je bois de l'eau"], correct:1 }
    ]
  },
  {
    title: "Le verbe 'to be' (être)",
    level: "Intermédiaire",
    content: `
      <p>Le verbe "to be" est essentiel en anglais.</p>
      <ul>
        <li>I am — je suis, You are — tu es</li>
        <li>He/She/It is — il/elle est</li>
        <li>We are — nous sommes, They are — ils/elles sont</li>
        <li>Exemple : "She is happy." — Elle est heureuse.</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on 'je suis' en anglais ?", options:["I are","I am","I is"], correct:1 },
      { q: "Quelle forme utilise-t-on avec 'She' ?", options:["is","are","am"], correct:0 },
      { q: "Que veut dire 'They are happy' ?", options:["Il est heureux","Nous sommes heureux","Ils sont heureux"], correct:2 }
    ]
  },
  {
    title: "Le verbe 'to have' (avoir)",
    level: "Intermédiaire",
    content: `
      <p>Apprenons à utiliser "to have" pour dire ce que l'on possède.</p>
      <ul>
        <li>I have — j'ai, You have — tu as</li>
        <li>He/She/It has — il/elle a</li>
        <li>We have — nous avons, They have — ils/elles ont</li>
        <li>Exemple : "He has a dog." — Il a un chien.</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on 'il a' en anglais ?", options:["he have","he has","he is"], correct:1 },
      { q: "Quelle forme utilise-t-on avec 'I' ?", options:["has","have","is"], correct:1 },
      { q: "Que veut dire 'They have a cat' ?", options:["Ils ont un chat","Il a un chat","Nous avons un chat"], correct:0 }
    ]
  },
  {
    title: "La météo",
    level: "Intermédiaire",
    content: `
      <p>Parlons du temps qu'il fait !</p>
      <ul>
        <li><strong>sunny</strong> (ensoleillé), <strong>rainy</strong> (pluvieux), <strong>cloudy</strong> (nuageux)</li>
        <li><strong>windy</strong> (venteux), <strong>snowy</strong> (neigeux), <strong>hot</strong> (chaud), <strong>cold</strong> (froid)</li>
        <li>Exemple : "It is sunny today." — Il fait soleil aujourd'hui.</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on 'il pleut' en anglais ?", options:["It is sunny","It is rainy","It is windy"], correct:1 },
      { q: "'Cloudy' veut dire :", options:["Neigeux","Nuageux","Chaud"], correct:1 },
      { q: "Que veut dire 'It is cold' ?", options:["Il fait chaud","Il fait froid","Il fait beau"], correct:1 }
    ]
  }
];
