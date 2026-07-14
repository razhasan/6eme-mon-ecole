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
  }
];
