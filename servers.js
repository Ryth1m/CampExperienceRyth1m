// ╔═══════════════════════════════════════════════════════╗
// ║                    servers.js                        ║
// ║   Edit this file to add / remove / update servers    ║
// ╚═══════════════════════════════════════════════════════╝

// ── SERVER STATUS OPTIONS ────────────────────────────────
//  "active"    → green dot  — server is alive and going
//  "inactive"  → grey dot   — server is quiet/slow
//  "archived"  → red dot    — server is closed/dead
//  "private"   → lock icon  — invite only

// ── SERVER TYPE OPTIONS ──────────────────────────────────
//  "camp"        → object camp server
//  "community"   → general hangout/community
//  "personal"    → your own server
//  "collab"      → collaboration/project server
//  "friend"      → friend group server
//  "other"       → anything else

const SERVERS = [
  {
    name:        "BFTTD",
    description: "My own object camp server! Battle For The Third Dimension — contestants fight their way out of the 2D desktop and into the third dimension. Hosted by me (Ryth1m).",
    type:        "camp",
    status:      "active",
    role:        "Host",           // your role in the server
    members:     0,               // approximate member count (leave 0 to hide)
    invite:      "https://discord.gg/4R9yGZAKmd",               // discord invite link, e.g. "https://discord.gg/abc123" (leave "" to hide button)
    icon:        "images/servers/BFTTD.png",               // path to server icon image e.g. "images/servers/bfttd.png" (leave "" for placeholder)
  },
  {
    name:        "🌌 Stary’s Ultimate Challenge 🌌",
    description: "My Show related server that im working on — It needs: Voice actors, Animators, Asset artists, Storyboarders, Actors, Music makers and YOU,the viewers, to vote who goes out!",
    type:        "other",
    status:      "active",
    role:        "Owner",
    members:     0,
    invite:      "https://discord.gg/5eXUhAateZ",
    icon:        "images/servers/SUC.png",
  },
  {
    name:        "TDBC",
    description: "My second object camp with a mix of 'Mario party'. Prize: A high quality art of the winner!",
    type:        "camp",
    status:      "Coming soon!",
    role:        "Host",
    members:     0,
    invite:      "https://discord.gg/ppvCxwMkXG",
    icon:        "images/servers/Untitled159_20260331133331.png",
  },
  // ── HOW TO ADD A SERVER ──────────────────────────────────
  // Copy from the { below to the matching }, and fill it in!
  //
  // {
  //   name:        "Server Name",
  //   description: "What this server is about.",
  //   type:        "camp",
  //   status:      "active",
  //   role:        "Member",
  //   members:     0,
  //   invite:      "",
  //   icon:        "",
  // },
];
