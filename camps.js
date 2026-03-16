// ╔═══════════════════════════════════════════════════════╗
// ║                     camps.js                         ║
// ║   Edit this file to add / remove / update camps      ║
// ╚═══════════════════════════════════════════════════════╝

// ── CAMPS I'VE COMPETED IN ───────────────────────────────
// placement: "winner" | "2nd" | "top5" | "merged" | "early" | "tbd"
// status:    "ongoing" | "finished"

const CAMPS = [
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2025", status: "ongoing",  placement: "tbd"    },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2025", status: "ongoing",  placement: "tbd"    },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2024", status: "finished", placement: "winner" },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2024", status: "finished", placement: "2nd"    },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2024", status: "finished", placement: "top5"   },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2023", status: "finished", placement: "merged" },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2023", status: "finished", placement: "early"  },
  // ← copy any line above and paste here to add a new camp
];


// ── CAMPS I'M HOSTING ────────────────────────────────────
// signups: "open" | "closed" | "finished"
// delete everything inside HOSTING = [ ] if you don't host

const HOSTING = [
  { name: "Camp Name Here", signups: "open",     contestants: 12, year: "2025" },
  { name: "Camp Name Here", signups: "finished", contestants: 20, year: "2024" },
  // ← copy any line above and paste here to add a hosted camp
];
