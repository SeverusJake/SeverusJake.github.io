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

  // category: "xr" | "game" | "web"  — filter chips only appear for categories in use
  // platform: short label shown above the title (falls back to the category name)
  // image: optional path like "assets/img/my-game.png" (16:9 works best).
  //        If omitted and links.video is a YouTube URL, its thumbnail is used.
  // links: any of demo / android / ios / video / live / repo — missing ones are hidden
  projects: [
    {
      title: "Akooland",
      category: "xr",
      platform: "AR · iOS & Android",
      blurb:
        "AR coloring card game for kids: color a printed card, scan it, and watch the drawing come to life in 3D. Published on Google Play and the App Store.",
      tags: ["AR", "Image recognition", "Particle effects", "Firebase Storage", "Firebase API"],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.thienlong.arcolor&hl=en&gl=US",
        ios: "https://apps.apple.com/ca/app/akooland/id6450509106",
      },
    },
    {
      title: "PCCC Fire Safety",
      category: "xr",
      platform: "VR · Meta Quest 2 & 3",
      blurb:
        "VR fire-safety simulation that trains employees and students to handle fire emergencies hands-on.",
      tags: ["Meta XR SDK", "Locomotion", "Object interaction", "Meta Quest"],
      links: { video: "https://www.youtube.com/watch?v=U5Xe9KLbGOI" },
    },
    {
      title: "SkullViewer",
      category: "xr",
      platform: "MR · HoloLens 2",
      blurb:
        "Mixed-reality anatomy viewer for exploring human body and skull structures, with hand menus and an in-scene measuring ruler.",
      tags: ["HoloLens 2", "MRTK", "Hand menu", "Ruler tool"],
      links: { video: "https://www.youtube.com/watch?v=aXELG-q-zRc" },
    },
    {
      title: "insightScanX",
      category: "xr",
      platform: "AR · iOS",
      blurb:
        "Scans real-world objects with an iPhone and turns them into 3D models for use on a computer.",
      tags: ["iOS", "Point cloud", "Lightship"],
      links: { video: "https://www.youtube.com/watch?v=AbNXsz7axj4" },
    },
    {
      title: "VIBNewYear",
      category: "xr",
      platform: "WebAR · WebGL",
      blurb:
        "Interactive 3D greeting cards for events, running right in the browser with WebGL.",
      tags: ["WebGL", "Shader Graph", "Custom shaders", "Zappar"],
      links: { video: "https://www.youtube.com/watch?v=4Bow2QwC_pQ" },
    },
    {
      title: "DefeatDengue",
      category: "game",
      platform: "Game · Web",
      blurb:
        "Tower defense game that teaches players how to protect themselves against dengue mosquitoes.",
      tags: ["Enemy spawn system", "Object pooling", "Weapon design", "Difficulty settings", "API calls"],
      links: { demo: "https://www.defeatdengue.vn/" },
    },
    {
      title: "Lost Cat",
      category: "game",
      platform: "Game · 2D platformer",
      blurb:
        "Mario-style platformer with physics-based character movement, enemy AI, a follow camera, and hand-built levels.",
      tags: ["Physics", "Character movement", "Enemy AI", "Camera", "Level design"],
      links: { demo: "https://jakenguyentt.github.io/LostCat_Demo/" },
    },
    {
      title: "Zombie Survival",
      category: "game",
      platform: "Game · Top-down shooter",
      blurb:
        "Top-down shooter with roguelike mechanics and zombie enemy AI.",
      tags: ["Top-down camera", "Roguelike", "Enemy AI"],
      links: {}, // TODO: add demo link (the one provided pointed to Lost Cat)
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
      group: "Game & XR Dev",
      icon: "game",
      items: [
        "Unity", "C#", "Shader Graph", "Physics", "Enemy AI",
        "AR", "Meta Quest (Meta XR SDK)", "HoloLens 2 (MRTK)", "Lightship", "Zappar", "WebGL", "Firebase",
      ],
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
