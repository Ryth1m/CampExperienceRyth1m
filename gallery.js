// ╔═══════════════════════════════════════════════════════╗
// ║                    gallery.js                        ║
// ║   Edit this file to add / remove / update art        ║
// ╚═══════════════════════════════════════════════════════╝

// ── ART TYPE OPTIONS ─────────────────────────────────────
//  "myart"    → art you drew yourself
//  "fanart"   → fanart drawn for you by others
//  "gift"     → gift art
//  "ref"      → character reference sheet

// Put your images in "images/gallery/" on GitHub
// e.g. "images/gallery/stary_ref.png"

const GALLERY = [
  {
    title:  "Stary Ref Sheet",
    img:    "",                    // e.g. "images/gallery/stary_ref.png"
    type:   "ref",
    char:   "Stary",              // which character this is of
    artist: "Ryth1m",             // who drew it (you or someone else)
    note:   "Official reference sheet for Stary!",
  },
  {
    title:  "Tivo Fanart",
    img:    "",
    type:   "fanart",
    char:   "Tivo",
    artist: "Ryth1m",
    note:   "",
  },
  // ── HOW TO ADD ART ───────────────────────────────────────
  // {
  //   title:  "Art Title",
  //   img:    "images/gallery/filename.png",
  //   type:   "myart",
  //   char:   "Character Name",
  //   artist: "Artist Name",
  //   note:   "Optional caption",
  // },
];
