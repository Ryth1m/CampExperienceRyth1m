// ╔═══════════════════════════════════════════════════════╗
// ║                   characters.js                      ║
// ║  Edit this file to add / remove / update characters  ║
// ╚═══════════════════════════════════════════════════════╝

// ── MY CHARACTERS ────────────────────────────────────────
// name:       character's name
// img:        path to image in your GitHub repo
//             → put images in "images/chars/" folder
//             → leave as "" for a placeholder
// camps:      list of camp names this character appeared in
//
// ── LORE FIELDS (all optional, delete any you don't need)
// species:    what kind of object/creature they are
// gender:     their gender / pronouns
// age:        their age
// appearance: short description of how they look
// personality:who they are as a person
// backstory:  their history and origin
// abilities:  any special powers or skills
// facts:      list of fun extra facts [ "fact 1", "fact 2" ]

const CHARACTERS = [
  {
    name:  "Stary",
    img:   "images/chars/Stary.png",
    camps: ["COP 1", "COP 2", "COP 3", "COP 4", "COP 5", "COP 7", "COP 8"],

    species:    "Living star",
    gender:     "Genderless (they/them)",
    age:        "18",
    appearance: "A medium-sized, glowing yellow star with simple facial features, thin arms and legs. Their glow becomes brighter when excited or happy. When they wink, a small sparkle appears.",
    personality:"Stary is a bit shy and very curious about the world. They long for friends but struggle with social anxiety and find it difficult to trust others due to past betrayals. They are scared of losing friends, being abandoned, and being forgotten.",
    backstory:  "Stary comes from a distant galaxy that was mysteriously destroyed by a figure known only as 'He.' They escaped the disaster and found their way to a new galaxy, carrying grief and unanswered questions. They spend their time searching through books and recorded tapes, trying to uncover the truth of what happened to their home.",
    abilities:  "Naturally fast. If they were to somehow perish, they would turn into fine cosmic dust that could be reassembled like a puzzle.",
    facts: [
      "Has ADHD — tends to fidget and hyperfixate on topics",
      "Favourite colour is orange 🟠",
      "Collects rocks, fancy chocolate boxes, and photos of interesting things",
      "Hates broccoli and soy sauce",
      "Finds comfort in drawing, music, and looking up at the stars",
      "Secretly wishes to bring back their grandfather, who was taken by 'He'",
      "Enjoys sleep even though they don't need it",
      "Closest friend is Orange Ball",
    ],
  },

  {
    name:  "Tivo",
    img:   "images/chars/Tivo.png",
    camps: ["CS: R", "EDAC", "cw#p 12", "cw#p 14", "KLO", "BCECFCP"],

    species:    "Hybrid CRT/digital monitor",
    gender:     "he/they",
    age:        "",
    appearance: "A retro CRT monitor with a beige housing, magenta border, and two eyes that serve as his full emotional range. Has an antenna on top and is always grounded.",
    personality:"Genuinely, effortlessly chill. Offers companionship without demand. Goes 2D when completely at ease — if Tivo goes flat around you, you are safe to him.",
    backstory:  "Tivo was not born — he accumulated. Fragments of lost broadcast signals gathered in the space between TV channels until one day an unplugged CRT powered on by itself. Two ∏ eyes appeared and blinked. Something had arrived. He tried to speak once, causing a catastrophic cross-frequency screech, and never tried again. He communicates through his eyes and by finding the exact right image on the internet.",
    abilities:  "Can shift between 3D (physical, present) and 2D (flat, trusting) states. Also has a near-transparent signal dispersal state where he flickers green static.",
    facts: [
      "Cannot speak — communicates through eye expressions and internet images",
      "Goes 2D around people he fully trusts",
      "Has infinite internet knowledge",
      "Still broadcasting",
    ],
  },

  {
    name:  "Paper Stary",
    img:   "images/chars/PaperStary.png",
    camps: ["cw#p 13"],

    species:    "Paper star",
    gender:     "",
    age:        "",
    appearance: "",
    personality:"",
    backstory:  "",
    abilities:  "",
    facts: [],
  },

  // ── HOW TO ADD A NEW CHARACTER ───────────────────────────
  // Copy from the { below to the matching }, and fill it in!
  // Delete any fields you don't want to use.
  //
  // {
  //   name:  "Character Name",
  //   img:   "images/chars/filename.png",
  //   camps: ["Camp A", "Camp B"],
  //   species:    "",
  //   gender:     "",
  //   age:        "",
  //   appearance: "",
  //   personality:"",
  //   backstory:  "",
  //   abilities:  "",
  //   facts: [
  //     "Fun fact 1",
  //     "Fun fact 2",
  //   ],
  // },
];
