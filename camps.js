// ╔═══════════════════════════════════════════════════════╗
// ║                     camps.js                         ║
// ║   Edit this file to add / remove / update camps      ║
// ╚═══════════════════════════════════════════════════════╝

// ── PLACEMENT OPTIONS ────────────────────────────────────
//
//  "winner"       → Winner ✦         (green)
//  "2nd"          → 2nd place        (blue)
//  "3rd"          → 3rd place        (blue)
//  "4th"          → 4th place        (yellow)
//  "5th"          → 5th place        (yellow)
//  "6th"          → 6th place        (yellow)
//  "7th"          → 7th place        (yellow)
//  "8th"          → 8th place        (orange)
//  "9th"          → 9th place        (orange)
//  "10th"         → 10th place       (orange)
//  "11th"         → 11th place       (grey)
//  "12th"         → 12th place       (grey)
//  "13th"         → 13th place       (grey)
//  "14th"         → 14th place       (grey)
//  "merged"       → Merged           (orange)
//  "premerge"     → Pre-merge        (grey)
//  "forgot"       → Forgot           (red)
//  "banned"       → Banned           (red)
//  "dnp"          → DNP              (red)
//  "quit"         → Quit             (grey)
//  "tbd"          → TBD              (dim)
//
//  You can also write ANYTHING custom, e.g. placement: "7th (DNP)"
//  and it will show exactly as you typed it!
//
// ── STATUS OPTIONS ───────────────────────────────────────
//  "ongoing"       → shown in the Ongoing section
//  "finished"      → shown in the Finished section
//  "didnt start"   → shown in the Didn't Start section

const CAMPS = [
  { name: "COP 1",           char: "Stary",        host: "Chipy",           year: "2023", status: "finished",    placement: "forgot"     },
  { name: "COP 2",           char: "Stary",        host: "Chipy",           year: "2023", status: "finished",    placement: "6th"     },
  { name: "COP 3",           char: "Stary",        host: "Chipy",           year: "2023", status: "finished",    placement: "8th"     },
  { name: "COP 4",           char: "Stary",        host: "Chipy",           year: "2024", status: "finished",    placement: "3rd"     },
  { name: "COP 5",           char: "Stary",        host: "Chipy",           year: "2024", status: "finished",    placement: "5th"     },
  { name: "COP 7",           char: "Stary",        host: "Chipy",           year: "2025", status: "finished",    placement: "6th"     },
  { name: "COP 8",           char: "Stary",        host: "Chipy",           year: "2026", status: "finished",    placement: "banned"     },
  { name: "cw#p 12",         char: "Tivo",         host: "bald guy",        year: "2026", status: "finished",    placement: "2nd"        },
  { name: "cw#p 13",         char: "Paper Stary",  host: "bald guy",        year: "2026", status: "finished",    placement: "14th"       },
  { name: "cw#p 14",         char: "Tivo",         host: "bald guy",        year: "2026", status: "finished",    placement: "7th (DNP)"  },
  { name: "cw#p 20",         char: "Limbless Tivo",         host: "bald guy",        year: "2026", status: "finished",    placement: "DNP"  },
  { name: "cw#p april fools event",         char: "Paper Stary",         host: "bald guy",        year: "2026", status: "finished",    placement: "DNP"  },
  { name: "BANNED (forgot)", char: "Tivo",         host: "forgot",          year: "2026", status: "finished",    placement: "banned"     },
  { name: "CS: R",           char: "Tivo",         host: "FridgeTheFridge", year: "2026", status: "ongoing",     placement: "tbd"        },
  { name: "EDAC",            char: "Tivo",         host: "cobalt",          year: "2026", status: "ongoing",     placement: "tbd"        },
  { name: "KLO",             char: "Tivo",         host: "Drill",           year: "2026", status: "didnt start", placement: "tbd"        },
  { name: "BCECFCP",         char: "Tivo",         host: "Shorty",          year: "2026", status: "didnt start", placement: "tbd"        },
  { name: "TOC",         char: "Tivo",         host: "Redstar Yuri/cobalt",          year: "2026", status: "ongoing", placement: "tbd"        }, 
  { name: "SBC",         char: "Guest",         host: "amythya",          year: "2026", status: "ongoing", placement: "tbd"        }, 
  // ← copy any line above and paste here to add a new camp
];


// ── CAMPS I'M HOSTING ────────────────────────────────────
// signups: "open" | "closed" | "finished"
// delete everything inside HOSTING = [ ] if you don't host

const HOSTING = [
  { name: "BFTTD", signups: "closed", contestants: 17, year: "2026" },
  // ← copy any line above and paste here to add a hosted camp
];
