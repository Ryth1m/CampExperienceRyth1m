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
    icon:        "",               // path to server icon image e.g. "images/servers/bfttd.png" (leave "" for placeholder)
  },
  {
    name:        "SUC",
    description: "My Show related server that im working on — It needs: Voice actors, Animators, Asset artists, Storyboarders, Actors, Music makers and YOU,the viewersm to vote who goes out!",
    type:        "other",
    status:      "active",
    role:        "Owner",
    members:     0,
    invite:      "https://discord.gg/5eXUhAateZ",
    icon:        "",
  },
  {
    name:        "Coming soon",
    description: "Coming soon!",
    type:        "camp",
    status:      "Coming soon!",
    role:        "Coming soon!",
    members:     0,
    invite:      "",
    icon:        "",
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
