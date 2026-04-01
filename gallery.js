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
    img:    "images/gallery/StarySUCNormal.png",                    // e.g. "images/gallery/stary_ref.png"
    type:   "ref",
    char:   "Stary",              // which character this is of
    artist: "Ryth1m",             // who drew it (you or someone else)
    note:   "Official reference sheet of Stary for my show 'SUC'!",
  },
  {
    title:  "Tivo Fanart",
    img:    "images/gallery/TivoArtBFTTD1.jpg",
    type:   "fanart",
    char:   "Tivo",
    artist: "Crodie",
    note:   "A Art of Tivo from my object camp 'Battle For The Third Dimension'",
  },
  {
    title:  "Tivo Fanart",
    img:    "images/gallery/TivoArtBFTTD2.jpg",
    type:   "fanart",
    char:   "Tivo",
    artist: "Wedge",
    note:   "A Art of Tivo from my object camp 'Battle For The Third Dimension'",
  },
  {
    title:  "PaperStary",
    img:    "images/gallery/PaperStaryArt1.png",
    type:   "fanart",
    char:   "Paper Stary",
    artist: "bald guy",
    note:   "A Art of Paper Stary from a object camp 'Camp with # People'",
  },
  {
    title:  "PaperStary",
    img:    "images/gallery/paint.png",
    type:   "myart",
    char:   "Paper Stary",
    artist: "Ryth1m",
    note:   "A Art of Paper Stary's entry from a object camp 'Camp with # People'",
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
