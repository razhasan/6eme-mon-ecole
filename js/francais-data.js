const LESSONS_FRANCAIS = [
  {
    title: "Les classes de mots",
    level: "Bases",
    content: `
      <p>En grammaire, chaque mot appartient à une "classe" selon son rôle dans la phrase.</p>
      <ul>
        <li>Le <strong>nom</strong> désigne une personne, un animal, une chose (chat, Aiyzah, table).</li>
        <li>Le <strong>verbe</strong> exprime une action ou un état (courir, être, manger).</li>
        <li>L'<strong>adjectif</strong> décrit le nom (grand, joli, rapide).</li>
        <li>Le <strong>déterminant</strong> précède le nom (le, la, un, mon...).</li>
      </ul>
    `,
    quiz: [
      { q: "Quelle classe de mot désigne une action ?", options:["Le nom","Le verbe","L'adjectif"], correct:1 },
      { q: "Dans 'un joli chat', quel mot est l'adjectif ?", options:["un","joli","chat"], correct:1 },
      { q: "'Table' est un(e)...", options:["Nom","Verbe","Déterminant"], correct:0 }
    ]
  },
  {
    title: "Le sujet et le verbe",
    level: "Bases",
    content: `
      <p>Dans une phrase, le <strong>sujet</strong> fait l'action du <strong>verbe</strong>.</p>
      <ul>
        <li>Exemple : "La petite fille lit un livre." → sujet = "La petite fille", verbe = "lit".</li>
        <li>Pour trouver le sujet, on pose la question "Qui est-ce qui fait l'action ?"</li>
        <li>Le verbe s'accorde toujours avec son sujet.</li>
      </ul>
    `,
    quiz: [
      { q: "Dans 'Le chien court vite', quel est le sujet ?", options:["Le chien","court","vite"], correct:0 },
      { q: "Quelle question permet de trouver le sujet ?", options:["Où ?","Qui est-ce qui fait l'action ?","Quand ?"], correct:1 },
      { q: "Le verbe doit s'accorder avec...", options:["Le sujet","La couleur","Le lieu"], correct:0 }
    ]
  },
  {
    title: "Le groupe nominal",
    level: "Bases",
    content: `
      <p>Un <strong>groupe nominal</strong> est un ensemble de mots organisé autour d'un nom, appelé le "nom noyau" ou "nom tête".</p>
      <ul>
        <li>Il contient souvent un déterminant + un nom : "le chat", "ma sœur".</li>
        <li>On peut l'enrichir avec un adjectif : "le petit chat noir".</li>
        <li>Le groupe nominal peut être sujet, complément, ou faire partie d'un autre groupe dans la phrase.</li>
      </ul>
      <div class="callout">💡 Exemple : dans "Le petit chat noir dort", le groupe nominal sujet est "Le petit chat noir".</div>
    `,
    quiz: [
      { q: "Qu'est-ce qu'un groupe nominal ?", options:["Un ensemble de mots autour d'un nom","Un verbe conjugué","Une phrase entière"], correct:0 },
      { q: "Dans 'la grande maison bleue', quel est le nom noyau ?", options:["grande","maison","bleue"], correct:1 },
      { q: "Quel mot enrichit souvent un groupe nominal ?", options:["Un adjectif","Un adverbe de temps","Une virgule"], correct:0 }
    ]
  },
  {
    title: "Le présent de l'indicatif",
    level: "Bases",
    content: `
      <p>Le <strong>présent</strong> sert à parler de ce qui se passe maintenant, ou de vérités générales.</p>
      <ul>
        <li>Verbes en -ER (comme "chanter") : je chante, tu chantes, il/elle chante, nous chantons, vous chantez, ils/elles chantent.</li>
        <li>Verbe "être" : je suis, tu es, il est, nous sommes, vous êtes, ils sont.</li>
        <li>Verbe "avoir" : j'ai, tu as, il a, nous avons, vous avez, ils ont.</li>
      </ul>
      <div class="callout">💡 Astuce : pour les verbes en -ER, la terminaison la plus fréquente à retenir est "-e" au "je".</div>
    `,
    quiz: [
      { q: "Comment conjugue-t-on 'chanter' avec 'nous' ?", options:["nous chantons","nous chantez","nous chante"], correct:0 },
      { q: "Quelle est la forme de 'être' avec 'tu' ?", options:["tu es","tu êtes","tu être"], correct:0 },
      { q: "Le présent sert à parler de...", options:["Ce qui se passera demain","Ce qui se passe maintenant","Ce qui s'est passé hier"], correct:1 }
    ]
  },
  {
    title: "Le passé composé",
    level: "Moyen",
    content: `
      <p>Le <strong>passé composé</strong> sert à raconter une action déjà terminée.</p>
      <ul>
        <li>Il se forme avec l'auxiliaire <strong>avoir</strong> ou <strong>être</strong> au présent + le participe passé du verbe.</li>
        <li>Exemple : "J'ai mangé" (avoir + participe passé), "Elle est partie" (être + participe passé).</li>
        <li>La plupart des verbes utilisent "avoir", mais certains verbes de mouvement utilisent "être" (aller, venir, partir, arriver...).</li>
      </ul>
      <div class="callout">💡 Avec "être", le participe passé s'accorde avec le sujet : "Il est parti" / "Elle est partie".</div>
    `,
    quiz: [
      { q: "De quoi se compose le passé composé ?", options:["Un seul verbe conjugué","Un auxiliaire + un participe passé","Deux verbes à l'infinitif"], correct:1 },
      { q: "Quel auxiliaire utilise-t-on pour 'partir' ?", options:["avoir","être"], correct:1 },
      { q: "Comment écrit-on 'manger' au passé composé avec 'je' ?", options:["j'ai mangé","je mange","j'avais mangé"], correct:0 }
    ]
  },
  {
    title: "Le futur simple",
    level: "Moyen",
    content: `
      <p>Le <strong>futur simple</strong> sert à parler de ce qui va se passer plus tard.</p>
      <ul>
        <li>Pour la plupart des verbes, on ajoute les terminaisons -ai, -as, -a, -ons, -ez, -ont à l'infinitif.</li>
        <li>Exemple avec "chanter" : je chanterai, tu chanteras, il chantera, nous chanterons, vous chanterez, ils chanteront.</li>
        <li>Certains verbes sont irréguliers : être → je serai, avoir → j'aurai, aller → j'irai.</li>
      </ul>
    `,
    quiz: [
      { q: "Comment dit-on 'chanter' au futur avec 'je' ?", options:["je chanterai","je chante","j'ai chanté"], correct:0 },
      { q: "Quelle est la forme du futur de 'être' avec 'je' ?", options:["je suis","je serai","j'étais"], correct:1 },
      { q: "Le futur simple sert à parler de...", options:["Ce qui s'est passé","Ce qui va se passer","Ce qui se passe maintenant"], correct:1 }
    ]
  },
  {
    title: "Raconter une histoire : le schéma narratif",
    level: "Moyen",
    content: `
      <p>Une histoire suit souvent une structure en plusieurs étapes.</p>
      <ul>
        <li><strong>Situation initiale</strong> : on présente les personnages et le décor.</li>
        <li><strong>Élément déclencheur</strong> : un événement change tout.</li>
        <li><strong>Péripéties</strong> : les aventures qui suivent.</li>
        <li><strong>Résolution</strong> : le problème se règle.</li>
        <li><strong>Situation finale</strong> : comment tout se termine.</li>
      </ul>
    `,
    quiz: [
      { q: "Comment appelle-t-on l'événement qui change tout au début ?", options:["La situation finale","L'élément déclencheur","La péripétie"], correct:1 },
      { q: "Que présente la situation initiale ?", options:["La fin de l'histoire","Les personnages et le décor","Le problème résolu"], correct:1 },
      { q: "Que sont les péripéties ?", options:["Les aventures de l'histoire","Le titre du livre","L'auteur"], correct:0 }
    ]
  },
  {
    title: "Les types et formes de phrases",
    level: "Moyen",
    content: `
      <p>Chaque phrase a un <strong>type</strong> et peut aussi avoir une <strong>forme</strong> particulière.</p>
      <ul>
        <li><strong>Déclarative</strong> : elle donne une information ("Il fait beau.")</li>
        <li><strong>Interrogative</strong> : elle pose une question ("Fait-il beau ?")</li>
        <li><strong>Exclamative</strong> : elle exprime une émotion forte ("Quelle belle journée !")</li>
        <li><strong>Impérative</strong> : elle donne un ordre ("Range ta chambre.")</li>
        <li>Forme <strong>négative</strong> : on ajoute "ne...pas" ("Il ne fait pas beau.")</li>
      </ul>
    `,
    quiz: [
      { q: "'Quelle belle journée !' est une phrase...", options:["Interrogative","Exclamative","Impérative"], correct:1 },
      { q: "'Range ta chambre.' est une phrase...", options:["Déclarative","Impérative","Interrogative"], correct:1 },
      { q: "Comment forme-t-on la négation ?", options:["ne...pas","très...beaucoup","et...ou"], correct:0 }
    ]
  },
  {
    title: "Enrichir un texte : adjectifs et synonymes",
    level: "Avancé",
    content: `
      <p>Pour rendre un texte plus intéressant, on peut varier son vocabulaire.</p>
      <ul>
        <li>Les <strong>adjectifs</strong> ajoutent des précisions : au lieu de "une maison", on peut dire "une grande maison ancienne".</li>
        <li>Les <strong>synonymes</strong> sont des mots qui ont un sens proche, utiles pour éviter les répétitions : "content" → "heureux", "joyeux".</li>
        <li>Varier ses mots rend un texte plus agréable à lire.</li>
      </ul>
      <div class="callout">💡 Astuce : quand tu écris, essaie de ne pas répéter le même mot deux fois dans un paragraphe.</div>
    `,
    quiz: [
      { q: "À quoi servent les synonymes ?", options:["À répéter le même mot","À éviter les répétitions","À raccourcir le texte"], correct:1 },
      { q: "Donne un synonyme de 'content' :", options:["triste","heureux","fatigué"], correct:1 },
      { q: "Que fait un adjectif ?", options:["Il remplace le verbe","Il ajoute une précision au nom","Il termine la phrase"], correct:1 }
    ]
  },
  {
    title: "Écrire un court récit",
    level: "Avancé",
    content: `
      <p>Maintenant, tu vas utiliser tout ce que tu as appris pour écrire une petite histoire !</p>
      <ul>
        <li>Choisis un personnage principal et un lieu.</li>
        <li>Pense à ton schéma narratif : situation initiale, élément déclencheur, péripéties, résolution, situation finale.</li>
        <li>Utilise le passé composé pour raconter les actions terminées.</li>
        <li>Ajoute des adjectifs pour décrire tes personnages et le décor.</li>
        <li>Relis-toi pour vérifier les accords sujet-verbe !</li>
      </ul>
      <div class="callout">💡 Défi : écris 5 phrases qui racontent une petite aventure, en suivant ces conseils.</div>
    `,
    quiz: [
      { q: "Quel temps utilise-t-on pour raconter des actions terminées ?", options:["Le futur","Le passé composé","Le présent uniquement"], correct:1 },
      { q: "Que faut-il vérifier en se relisant ?", options:["Les accords sujet-verbe","La couleur du stylo","Rien du tout"], correct:0 },
      { q: "Que permettent d'ajouter les adjectifs dans un récit ?", options:["Des descriptions","Des calculs","Des dates uniquement"], correct:0 }
    ]
  }
];
