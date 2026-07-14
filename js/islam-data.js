const LESSONS_ISLAM = [
  {
    title: "Qui est Allah ?",
    level: "Bases",
    content: `
      <p>En Islam, on croit en un seul Dieu, qui s'appelle <strong>Allah</strong> en arabe. C'est le même mot que "Dieu" en français.</p>
      <ul>
        <li>Allah a créé le ciel, la terre, les animaux, les plantes et les humains.</li>
        <li>On ne peut pas le voir, mais on peut sentir sa présence dans la beauté de la nature.</li>
        <li>Allah n'a ni maman ni papa, il n'a pas de frère ni de sœur : il est unique. On appelle cette idée le <strong>Tawhid</strong> (l'unicité de Dieu).</li>
      </ul>
      <div class="callout">💡 À retenir : Allah est unique, il n'y a personne comme Lui.</div>
    `,
    quiz: [
      { q: "Comment s'appelle Dieu en Islam ?", options:["Allah","Zeus","Bouddha"], correct:0 },
      { q: "Que veut dire le mot 'Tawhid' ?", options:["Une prière","L'unicité de Dieu","Un livre"], correct:1 },
      { q: "Est-ce qu'Allah a des frères et sœurs ?", options:["Oui","Non, il est unique"], correct:1 }
    ]
  },
  {
    title: "Le Prophète Muhammad ﷺ",
    level: "Bases",
    content: `
      <p><strong>Muhammad ﷺ</strong> est le dernier prophète envoyé par Allah pour transmettre son message aux gens.</p>
      <ul>
        <li>Il est né à <strong>La Mecque</strong>, en Arabie, il y a très longtemps.</li>
        <li>Il était connu pour être très honnête : on l'appelait "Al-Amine", ce qui veut dire "le digne de confiance".</li>
        <li>Il a appris aux gens à être gentils, justes et généreux envers tout le monde, même envers ceux qui n'étaient pas d'accord avec lui.</li>
        <li>Après son nom, on dit souvent "ﷺ", qui veut dire "que la paix soit sur lui".</li>
      </ul>
      <div class="callout">💡 À retenir : Muhammad ﷺ est un exemple de gentillesse et d'honnêteté.</div>
    `,
    quiz: [
      { q: "Où est né le Prophète Muhammad ﷺ ?", options:["À Paris","À La Mecque","À Rome"], correct:1 },
      { q: "Pourquoi l'appelait-on 'Al-Amine' ?", options:["Il était rapide","Il était digne de confiance","Il était riche"], correct:1 },
      { q: "Que veut dire le symbole ﷺ après son nom ?", options:["Que la paix soit sur lui","Bonne nuit","Merci"], correct:0 }
    ]
  },
  {
    title: "Le Coran, notre livre saint",
    level: "Bases",
    content: `
      <p>Le <strong>Coran</strong> est le livre sacré des musulmans. C'est le message qu'Allah a transmis au Prophète Muhammad ﷺ.</p>
      <ul>
        <li>Le Coran est écrit en arabe et divisé en 114 chapitres, appelés <strong>sourates</strong>.</li>
        <li>Il contient des conseils pour bien vivre : être honnête, aider les autres, respecter ses parents.</li>
        <li>Beaucoup de musulmans apprennent des sourates par cœur.</li>
        <li>On prend soin du Coran : on le garde propre et on le pose en hauteur, jamais par terre.</li>
      </ul>
      <div class="callout">💡 À retenir : le Coran donne des conseils pour bien vivre et être une bonne personne.</div>
    `,
    quiz: [
      { q: "Comment appelle-t-on les chapitres du Coran ?", options:["Des sourates","Des pages","Des versets seulement"], correct:0 },
      { q: "En quelle langue est écrit le Coran ?", options:["Français","Arabe","Anglais"], correct:1 },
      { q: "Comment doit-on traiter le Coran ?", options:["Le poser par terre","En prendre soin, le garder propre","Le jeter"], correct:1 }
    ]
  },
  {
    title: "Les 5 piliers de l'Islam (introduction)",
    level: "Bases",
    content: `
      <p>Les <strong>5 piliers de l'Islam</strong> sont comme les fondations d'une maison : ce sont les actes les plus importants pour un musulman.</p>
      <ul>
        <li>1️⃣ La <strong>Shahada</strong> — l'attestation de foi</li>
        <li>2️⃣ La <strong>Salat</strong> — la prière, 5 fois par jour</li>
        <li>3️⃣ La <strong>Zakat</strong> — donner aux personnes qui en ont besoin</li>
        <li>4️⃣ Le <strong>jeûne du Ramadan</strong> (Sawm)</li>
        <li>5️⃣ Le <strong>Hajj</strong> — le pèlerinage à La Mecque</li>
      </ul>
      <p>Dans les prochaines leçons, on va découvrir chacun de ces piliers un par un !</p>
      <div class="callout">💡 À retenir : il y a 5 piliers, comme les 5 doigts de la main.</div>
    `,
    quiz: [
      { q: "Combien y a-t-il de piliers de l'Islam ?", options:["3","5","7"], correct:1 },
      { q: "Quel pilier concerne la prière ?", options:["La Salat","Le Hajj","La Zakat"], correct:0 },
      { q: "Que veut dire 'Sawm' ?", options:["Le pèlerinage","Le jeûne du Ramadan","La prière"], correct:1 }
    ]
  },
  {
    title: "La Shahada — 1er pilier",
    level: "Bases",
    content: `
      <p>La <strong>Shahada</strong> est l'attestation de foi. C'est une phrase que dit un musulman pour affirmer sa croyance.</p>
      <ul>
        <li>Elle veut dire : "J'atteste qu'il n'y a pas d'autre divinité qu'Allah, et j'atteste que Muhammad est Son messager."</li>
        <li>C'est le premier pilier car tous les autres actes d'un musulman découlent de cette croyance.</li>
        <li>C'est souvent la première phrase qu'un enfant musulman apprend à prononcer.</li>
      </ul>
      <div class="callout">💡 À retenir : la Shahada, c'est croire en un seul Dieu et reconnaître Muhammad ﷺ comme son messager.</div>
    `,
    quiz: [
      { q: "Qu'est-ce que la Shahada ?", options:["Une prière du soir","L'attestation de foi","Un jeûne"], correct:1 },
      { q: "Pourquoi la Shahada est-elle le 1er pilier ?", options:["Elle est la plus courte","Les autres actes en découlent","Elle se fait une fois par an"], correct:1 },
      { q: "La Shahada parle de deux choses : Allah et...", options:["Le Coran","Muhammad, son messager","La Mecque"], correct:1 }
    ]
  },
  {
    title: "La prière — Salat (2e pilier)",
    level: "Moyen",
    content: `
      <p>La <strong>Salat</strong> est la prière. C'est un moment pour parler à Allah et se sentir proche de Lui.</p>
      <ul>
        <li>Les musulmans prient <strong>5 fois par jour</strong> : à l'aube, à midi, l'après-midi, au coucher du soleil et le soir.</li>
        <li>On prie tourné vers La Mecque, en Arabie Saoudite.</li>
        <li>La prière suit des gestes précis : se tenir debout, s'incliner, se prosterner (le front au sol), s'asseoir.</li>
        <li>Avant de prier, on doit être propre : c'est pour cela qu'on fait les <strong>ablutions</strong> (on en parlera dans la prochaine leçon !).</li>
      </ul>
      <div class="callout">💡 À retenir : on prie 5 fois par jour, tournés vers La Mecque.</div>
    `,
    quiz: [
      { q: "Combien de prières y a-t-il chaque jour ?", options:["3","5","10"], correct:1 },
      { q: "Vers quelle ville se tourne-t-on pour prier ?", options:["Paris","La Mecque","Le Caire"], correct:1 },
      { q: "Que doit-on faire avant de prier ?", options:["Manger","Faire les ablutions","Dormir"], correct:1 }
    ]
  },
  {
    title: "Les ablutions — Wudu (pratique)",
    level: "Moyen",
    content: `
      <p>Le <strong>Wudu</strong> (les ablutions) est une façon de se laver avant la prière, pour être propre devant Allah.</p>
      <p>Voici les étapes, dans l'ordre :</p>
      <ul>
        <li>1. Se laver les mains, jusqu'aux poignets (3 fois)</li>
        <li>2. Se rincer la bouche</li>
        <li>3. Nettoyer le nez en aspirant un peu d'eau</li>
        <li>4. Se laver le visage (3 fois)</li>
        <li>5. Se laver les bras jusqu'aux coudes (3 fois), en commençant par le droit</li>
        <li>6. Passer les mains mouillées sur les cheveux et les oreilles</li>
        <li>7. Se laver les pieds jusqu'aux chevilles, en commençant par le droit</li>
      </ul>
      <div class="callout">💡 Astuce : on commence toujours par le côté droit, et on répète 3 fois pour les mains, la bouche, le visage et les bras.</div>
    `,
    quiz: [
      { q: "Qu'est-ce que le Wudu ?", options:["Un repas","Les ablutions avant la prière","Un chant"], correct:1 },
      { q: "Par quel côté commence-t-on à se laver les bras et les pieds ?", options:["Le gauche","Le droit","Peu importe"], correct:1 },
      { q: "Jusqu'où lave-t-on les bras ?", options:["Jusqu'aux coudes","Jusqu'aux épaules","Jusqu'aux poignets seulement"], correct:0 }
    ]
  },
  {
    title: "La Zakat et le Ramadan (3e et 4e piliers)",
    level: "Moyen",
    content: `
      <p><strong>La Zakat</strong> : c'est le fait de donner une partie de ce que l'on possède aux personnes qui en ont besoin. Cela apprend à être généreux et à penser aux autres.</p>
      <p><strong>Le Ramadan</strong> : c'est un mois de l'année où les musulmans adultes jeûnent, c'est-à-dire qu'ils ne mangent pas et ne boivent pas du lever au coucher du soleil.</p>
      <ul>
        <li>Le Ramadan permet de ressentir ce que vivent les personnes qui ont faim, et d'être reconnaissant pour ce que l'on a.</li>
        <li>Le soir, la famille se réunit pour un repas appelé <strong>l'Iftar</strong>, pour rompre le jeûne ensemble.</li>
        <li>À la fin du Ramadan, on fête <strong>l'Aïd el-Fitr</strong>, une belle fête avec la famille.</li>
      </ul>
      <div class="callout">💡 À retenir : la Zakat, c'est donner ; le Ramadan, c'est jeûner un mois pour se rapprocher d'Allah.</div>
    `,
    quiz: [
      { q: "Que veut dire 'faire la Zakat' ?", options:["Prier 5 fois par jour", "Donner aux personnes qui en ont besoin", "Aller à La Mecque"], correct:1 },
      { q: "Que fait-on pendant le Ramadan ?", options:["On jeûne du lever au coucher du soleil", "On dort toute la journée", "On voyage"], correct:0 },
      { q: "Comment s'appelle le repas du soir pendant le Ramadan ?", options:["Le petit-déjeuner","L'Iftar","Le goûter"], correct:1 }
    ]
  },
  {
    title: "Le Hajj — 5e pilier",
    level: "Moyen",
    content: `
      <p>Le <strong>Hajj</strong> est le grand pèlerinage à <strong>La Mecque</strong>, en Arabie Saoudite. C'est le 5e pilier de l'Islam.</p>
      <ul>
        <li>Chaque musulman qui en a la capacité (physique et financière) doit le faire au moins une fois dans sa vie.</li>
        <li>Des millions de musulmans du monde entier s'y rendent chaque année, habillés simplement, pour montrer que tout le monde est égal devant Allah.</li>
        <li>Pendant le Hajj, les pèlerins visitent la <strong>Kaaba</strong>, un bâtiment en forme de cube, qui est le lieu le plus sacré de l'Islam.</li>
      </ul>
      <div class="callout">💡 À retenir : le Hajj se fait à La Mecque, au moins une fois dans la vie si on le peut.</div>
    `,
    quiz: [
      { q: "Où se déroule le Hajj ?", options:["À La Mecque","À Médine seulement","À Jérusalem"], correct:0 },
      { q: "Combien de fois doit-on faire le Hajj dans sa vie ?", options:["Chaque année","Au moins une fois, si on le peut","Jamais"], correct:1 },
      { q: "Comment s'appelle le bâtiment sacré visité pendant le Hajj ?", options:["La Kaaba","La Salat","La Zakat"], correct:0 }
    ]
  },
  {
    title: "Les bonnes manières en Islam (Adab)",
    level: "Avancé",
    content: `
      <p>L'Islam apprend aussi à avoir de belles manières au quotidien. On appelle cela l'<strong>Adab</strong>.</p>
      <ul>
        <li><strong>Être honnête</strong> : toujours dire la vérité, même quand c'est difficile.</li>
        <li><strong>Respecter ses parents</strong> : les écouter, les aider, être gentil avec eux.</li>
        <li><strong>Être généreux</strong> : partager avec les autres, aider les personnes dans le besoin.</li>
        <li><strong>Dire "Salam"</strong> (bonjour / la paix soit sur toi) en rencontrant quelqu'un.</li>
        <li><strong>Être patient</strong> face aux difficultés, et remercier Allah dans les bons moments.</li>
      </ul>
      <div class="callout">💡 À retenir : être musulman, c'est aussi avoir un bon comportement chaque jour, pas seulement prier.</div>
    `,
    quiz: [
      { q: "Que veut dire le mot 'Adab' ?", options:["Les bonnes manières","Un livre","Une prière"], correct:0 },
      { q: "Que dit-on souvent en rencontrant quelqu'un ?", options:["Salam","Merci","Au revoir"], correct:0 },
      { q: "Citer une des bonnes manières apprises dans cette leçon :", options:["Être malhonnête","Être généreux","Ignorer ses parents"], correct:1 }
    ]
  }
];
