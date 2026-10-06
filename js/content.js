/*
 * ============================================================
 *  EDIT THIS FILE to update the portfolio. No other file needs
 *  to change for normal content updates.
 *
 *  Anything marked  // PLACEHOLDER  is sample content — replace it.
 * ============================================================
 */
window.CONTENT = {
  profile: {
    name: "Nguyen The Thien Phuc",
    shortName: "Phuc",
    role: "Unity & Web Developer",
    tagline:
      "I build games and websites that feel good to use — and, thanks to years in IT support, I know how to keep them running when real users show up.",
    about: [
      // PLACEHOLDER — rewrite in your own words.
      "I'm a developer working across Unity and the web. On the game side I build gameplay systems, tools, and polished UI in C#. On the web side I make fast, accessible sites and small web apps.",
      "Before writing code full-time I worked in IT support and on the helpdesk. That taught me to debug calmly under pressure, explain technical problems in plain language, and care about the person on the other side of the screen.",
      "I'm looking for a developer role where I can ship things people actually use.",
    ],
    contactText:
      "Open to developer roles and freelance projects. The fastest way to reach me is email.",
    email: "you@example.com", // PLACEHOLDER — your public contact email
    resumeUrl: "assets/resume.pdf", // PLACEHOLDER — replace the PDF file
  },

  // icon: "github" | "linkedin" | "email" | "itch"
  links: [
    { label: "Email", url: "mailto:you@example.com", icon: "email" }, // PLACEHOLDER
    { label: "GitHub", url: "https://github.com/SeverusJake", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin" }, // PLACEHOLDER
  ],

  // category: "unity" | "web"
  // image: optional path like "assets/img/my-game.png" (16:9 works best)
  // links: any of live / repo / play — missing ones are hidden
  projects: [
    // PLACEHOLDER projects — replace all four.
    {
      title: "Nebula Drift",
      category: "unity",
      blurb:
        "Arcade space shooter with procedural asteroid fields, controller support, and a custom wave director.",
      tags: ["Unity", "C#", "URP", "Shader Graph"],
      links: { play: "https://github.com/SeverusJake", repo: "https://github.com/SeverusJake" },
    },
    {
      title: "Pocket Dungeon",
      category: "unity",
      blurb:
        "2D roguelike for mobile: tilemap room generation, turn-based combat, and save system with cloud backup.",
      tags: ["Unity", "C#", "Tilemap", "Android"],
      links: { repo: "https://github.com/SeverusJake" },
    },
    {
      title: "HelpDesk Lite",
      category: "web",
      blurb:
        "Lightweight ticket tracker for small teams, built from what I wished I had on the helpdesk.",
      tags: ["JavaScript", "Node.js", "SQLite"],
      links: { live: "https://github.com/SeverusJake", repo: "https://github.com/SeverusJake" },
    },
    {
      title: "This Portfolio",
      category: "web",
      blurb:
        "Light/dark themed portfolio in plain HTML, CSS, and JavaScript. No build step, deployed on GitHub Pages.",
      tags: ["HTML", "CSS", "JavaScript"],
      links: { repo: "https://github.com/SeverusJake/SeverusJake.github.io" },
    },
  ],

  // icon: "game" | "web" | "server"
  skills: [
    // PLACEHOLDER — keep what's true, add what's missing.
    {
      group: "Game Dev",
      icon: "game",
      items: ["Unity", "C#", "URP", "Shader Graph", "Physics", "UI Toolkit", "Mobile builds"],
    },
    {
      group: "Web",
      icon: "web",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Git"],
    },
    {
      group: "IT & Systems",
      icon: "server",
      items: ["Windows", "Active Directory", "Microsoft 365", "Networking", "PowerShell", "Ticketing", "Hardware"],
    },
  ],

  // Newest first.
  experience: [
    // PLACEHOLDER roles — replace with your real history.
    {
      role: "Unity Developer",
      org: "Studio Name",
      period: "2024 — Present",
      points: [
        "Built gameplay systems and editor tools in C#.",
        "Profiled and optimized builds for mobile targets.",
      ],
    },
    {
      role: "Web Developer (Freelance)",
      org: "Self-employed",
      period: "2022 — 2024",
      points: [
        "Designed and shipped responsive sites for small businesses.",
        "Handled hosting, domains, and ongoing maintenance.",
      ],
    },
    {
      role: "IT Support / Helpdesk Technician",
      org: "Company Name",
      period: "2020 — 2022",
      points: [
        "Resolved hardware, software, and network issues for 100+ users.",
        "Automated account setup and routine fixes with PowerShell scripts.",
        "Wrote knowledge-base articles that cut repeat tickets.",
      ],
    },
  ],
};
