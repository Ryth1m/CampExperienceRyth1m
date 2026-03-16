// ═══════════════════════════════════════════════
//  CAMPS.JS — edit your camp list here!
// ═══════════════════════════════════════════════
//
//  PLACEMENT options:
//    "winner" "2nd" "top5" "merged" "early" "tbd"
//
//  STATUS options:
//    "ongoing"  — still happening
//    "finished" — all done
//
//  To add a camp: copy any line and fill it in!
//  To remove a camp: delete the line.
//
// ═══════════════════════════════════════════════

const CAMPS = [
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2025", status: "ongoing",  placement: "tbd"    },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2025", status: "ongoing",  placement: "tbd"    },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2024", status: "finished", placement: "winner" },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2024", status: "finished", placement: "2nd"    },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2024", status: "finished", placement: "top5"   },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2023", status: "finished", placement: "merged" },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2023", status: "finished", placement: "early"  },
  { name: "Camp Name Here",  char: "Character", host: "Host Name", year: "2023", status: "finished", placement: "winner" },
  // ← copy any line above to add more camps
];


// ═══════════════════════════════════════════════
//  CAMPS YOU ARE HOSTING
// ═══════════════════════════════════════════════
//
//  SIGNUPS options:
//    "open"   — accepting sign-ups
//    "closed" — sign-ups done
//    "finished" — camp is over
//
//  Delete everything inside HOSTING = [ ]
//  if you are not hosting anything.
//
// ═══════════════════════════════════════════════

const HOSTING = [
  { name: "Camp Name Here", signups: "open",     contestants: 12, year: "2025" },
  { name: "Camp Name Here", signups: "finished", contestants: 20, year: "2024" },
  // ← copy any line above to add more hosted camps
];
