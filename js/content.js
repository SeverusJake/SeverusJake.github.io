/*
 * ============================================================
 *  EDIT THIS FILE to update the portfolio. No other file needs
 *  to change for normal content updates.
 *
 *  Anything marked  // PLACEHOLDER  is sample content — replace it.
 *
 *  Translations: any text can be a plain string (same in both
 *  languages) or { en: "...", vi: "..." }.
 * ============================================================
 */
window.CONTENT = {
  profile: {
    name: "Nguyen The Thien Phuc",
    shortName: "Phuc",
    role: { en: "Unity & Web Developer", vi: "Lập trình viên Unity & Web" },
    tagline: {
      en: "I build games and websites that feel good to use — and, thanks to years in IT support, I know how to keep them running when real users show up.",
      vi: "Tôi xây dựng game và website mang lại trải nghiệm tốt — và nhờ nhiều năm làm hỗ trợ IT, tôi biết cách giữ chúng vận hành ổn định khi người dùng thật sử dụng.",
    },
    photo: "assets/img/profile.jpg",
    about: [
      {
        en: "I've been building with C# and Unity since 2022 — 3D games and VR/XR applications for client projects, from Meta Quest training sims to HoloLens 2 tools and AR apps on the App Store and Google Play.",
        vi: "Tôi phát triển với C# và Unity từ năm 2022 — game 3D và ứng dụng VR/XR cho khách hàng, từ mô phỏng đào tạo trên Meta Quest, công cụ trên HoloLens 2 đến ứng dụng AR trên App Store và Google Play.",
      },
      {
        en: "I'm comfortable across the whole pipeline: handling 2D and 3D assets in Blender and Photoshop, designing clear, effective UX/UI, and picking up whatever language or framework a project needs — including the web, where I build sites and browser tools.",
        vi: "Tôi làm việc tốt trong toàn bộ quy trình: xử lý asset 2D, 3D bằng Blender và Photoshop, thiết kế UX/UI rõ ràng, hiệu quả, và nhanh chóng làm quen với bất kỳ ngôn ngữ hay framework nào dự án cần — kể cả web, nơi tôi xây dựng website và công cụ trình duyệt.",
      },
      {
        en: "Games are my passion, so I'm always trying to make something new and interesting. My IT support background keeps me calm and methodical when something breaks.",
        vi: "Game là niềm đam mê của tôi nên tôi luôn cố gắng tạo ra điều gì đó mới và thú vị. Kinh nghiệm hỗ trợ IT giúp tôi bình tĩnh và có phương pháp khi gặp sự cố.",
      },
    ],
    motto: {
      en: "Life is a journey, and the journey is the destination.",
      vi: "Cuộc sống là một hành trình, và hành trình là điểm đến.",
    },
    // Shown beside the bio. label/value accept { en, vi }.
    facts: [
      { label: { en: "Based in", vi: "Nơi ở" }, value: { en: "Ho Chi Minh City, Vietnam", vi: "TP. Hồ Chí Minh, Việt Nam" } },
      { label: { en: "Unity developer", vi: "Lập trình Unity" }, value: { en: "Since 05/2022", vi: "Từ 05/2022" } },
      { label: { en: "Education", vi: "Học vấn" }, value: { en: "Software Engineering · Accounting", vi: "Kỹ thuật phần mềm · Kế toán" } },
      { label: { en: "Languages", vi: "Ngôn ngữ" }, value: { en: "Vietnamese, English (fluent)", vi: "Tiếng Việt, tiếng Anh (thành thạo)" } },
    ],
    contactText: {
      en: "Open to developer roles and freelance projects — I'd love to hear from you.",
      vi: "Sẵn sàng cho vị trí lập trình viên và dự án freelance — rất mong nhận được tin từ bạn.",
    },
    email: "jake.nguyentt@gmail.com",
    resumeUrl: "assets/resume.pdf", // PLACEHOLDER — replace the PDF file

    // Contact form: create a free form at https://formspree.io, then paste its
    // ID here (the part after /f/, e.g. "xyzabcd"). Empty = form hidden.
    formspreeId: "",
  },

  // icon: "github" | "linkedin" | "email" | "itch"
  links: [
    { label: "Email", url: "mailto:jake.nguyentt@gmail.com", icon: "email" },
    { label: "GitHub", url: "https://github.com/SeverusJake", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin" }, // PLACEHOLDER
  ],

  // category: "xr" | "game" | "web"  — filter chips only appear for categories in use
  // platform: short label shown above the title (falls back to the category name)
  // image: optional path like "assets/img/my-game.jpg" (16:9 works best).
  //        If omitted and links.video is a YouTube URL, its thumbnail is used.
  // links: any of demo / android / ios / video / live / repo — missing ones are hidden
  projects: [
    {
      title: "Akooland",
      category: "xr",
      platform: "AR · iOS & Android",
      image: "assets/img/akooland.jpg",
      blurb: {
        en: "AR coloring card game for kids: color a printed card, scan it, and watch the drawing come to life in 3D. Published on Google Play and the App Store.",
        vi: "Game thẻ tô màu AR cho trẻ em: tô màu thẻ in, quét thẻ và xem bức vẽ sống động trong không gian 3D. Đã phát hành trên Google Play và App Store.",
      },
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
      image: "assets/img/pccc.jpg",
      blurb: {
        en: "VR fire-safety simulation that trains employees and students to handle fire emergencies hands-on.",
        vi: "Mô phỏng phòng cháy chữa cháy bằng VR, giúp nhân viên và học sinh thực hành xử lý tình huống cháy.",
      },
      tags: ["Meta XR SDK", "Locomotion", "Object interaction", "Meta Quest"],
      links: { video: "https://www.youtube.com/watch?v=U5Xe9KLbGOI" },
    },
    {
      title: "SkullViewer",
      category: "xr",
      platform: "MR · HoloLens 2",
      image: "assets/img/skullviewer.jpg",
      blurb: {
        en: "Mixed-reality anatomy viewer for exploring human body and skull structures, with hand menus and an in-scene measuring ruler.",
        vi: "Ứng dụng thực tế hỗn hợp để khám phá cấu trúc cơ thể người và hộp sọ, có menu trên tay và thước đo trong không gian.",
      },
      tags: ["HoloLens 2", "MRTK", "Hand menu", "Ruler tool"],
      links: { video: "https://www.youtube.com/watch?v=aXELG-q-zRc" },
    },
    {
      title: "insightScanX",
      category: "xr",
      platform: "AR · iOS",
      image: "assets/img/insightscanx.jpg",
      blurb: {
        en: "Scans real-world objects with an iPhone and turns them into 3D models for use on a computer.",
        vi: "Quét vật thể thật bằng iPhone và chuyển thành mô hình 3D để sử dụng trên máy tính.",
      },
      tags: ["iOS", "Point cloud", "Lightship"],
      links: { video: "https://www.youtube.com/watch?v=AbNXsz7axj4" },
    },
    {
      title: "VIBNewYear",
      category: "xr",
      platform: "WebAR · WebGL",
      image: "assets/img/vibnewyear.jpg",
      blurb: {
        en: "Interactive 3D greeting cards for events, running right in the browser with WebGL.",
        vi: "Thiệp chúc mừng 3D tương tác cho sự kiện, chạy trực tiếp trên trình duyệt bằng WebGL.",
      },
      tags: ["WebGL", "Shader Graph", "Custom shaders", "Zappar"],
      links: { video: "https://www.youtube.com/watch?v=4Bow2QwC_pQ" },
    },
    {
      title: "DefeatDengue",
      category: "game",
      platform: "Game · Web",
      image: "assets/img/defeatdengue.jpg",
      blurb: {
        en: "Tower defense game that teaches players how to protect themselves against dengue mosquitoes.",
        vi: "Game thủ thành giúp người chơi học cách phòng chống muỗi sốt xuất huyết.",
      },
      tags: ["Enemy spawn system", "Object pooling", "Weapon design", "Difficulty settings", "API calls"],
      links: { demo: "https://www.defeatdengue.vn/" },
    },
    {
      title: "Lost Cat",
      category: "game",
      platform: "Game · 2D platformer",
      image: "assets/img/lostcat.jpg",
      blurb: {
        en: "Mario-style platformer with physics-based character movement, enemy AI, a follow camera, and hand-built levels.",
        vi: "Game platformer phong cách Mario với di chuyển nhân vật theo vật lý, AI kẻ địch, camera bám theo và các màn chơi tự thiết kế.",
      },
      tags: ["Physics", "Character movement", "Enemy AI", "Camera", "Level design"],
      links: { demo: "https://jakenguyentt.github.io/LostCat_Demo/" },
    },
    {
      title: "Hexinfinity",
      category: "game",
      platform: "Game · Puzzle",
      image: "assets/img/hexinfinity.jpg",
      blurb: {
        en: "Hex-tile puzzle game: place and merge tiles of the same color to chain combos and score points.",
        vi: "Game giải đố ô lục giác: đặt và ghép các ô cùng màu để tạo chuỗi và ghi điểm.",
      },
      tags: ["Puzzle mechanics", "Tile merging", "Scoring system", "WebGL"],
      links: { demo: "https://jakenguyentt.github.io/Hexinfinity_Demo/" },
    },
    {
      title: "Zombie Survival",
      category: "game",
      platform: "Game · Top-down shooter",
      image: "assets/img/zombiesurvival.jpg",
      blurb: {
        en: "Top-down shooter with roguelike mechanics and zombie enemy AI.",
        vi: "Game bắn súng góc nhìn từ trên xuống với cơ chế roguelike và AI zombie.",
      },
      tags: ["Top-down camera", "Roguelike", "Enemy AI"],
      links: {}, // TODO: add demo link (the one provided pointed to Lost Cat)
    },
    {
      title: "What The Pho Canberra",
      category: "web",
      platform: { en: "Web · Restaurant site", vi: "Web · Website nhà hàng" },
      image: "assets/img/whatthepho.jpg",
      blurb: {
        en: "Website for a Vietnamese restaurant with three Canberra locations: menu, online ordering, catering packages, and directions to each venue.",
        vi: "Website cho nhà hàng Việt với ba chi nhánh tại Canberra: thực đơn, đặt món online, gói catering và chỉ đường đến từng cửa hàng.",
      },
      tags: ["Astro", "Square online ordering", "Google Maps", "Responsive"],
      links: { live: "https://whatthepho.com.au/" },
    },
    {
      title: "oToolRun",
      category: "web",
      platform: { en: "Web · Utility platform", vi: "Web · Nền tảng công cụ" },
      image: "assets/img/otoolrun.jpg",
      blurb: {
        en: "130+ free browser tools across 11 categories, from word counters and QR codes to JSON formatting. Everything runs locally in the browser, with no sign-up and no uploads.",
        vi: "Hơn 130 công cụ miễn phí trong 11 danh mục, từ đếm từ, tạo mã QR đến định dạng JSON. Mọi thứ chạy ngay trên trình duyệt, không cần đăng ký, không tải dữ liệu lên.",
      },
      tags: ["JavaScript", "Client-side processing", "Privacy-first", "CDN"],
      links: { live: "https://otoolrun.com/" },
    },
    {
      title: { en: "This Portfolio", vi: "Portfolio này" },
      category: "web",
      blurb: {
        en: "Bilingual, light/dark themed portfolio in plain HTML, CSS, and JavaScript. No build step, deployed on GitHub Pages.",
        vi: "Portfolio song ngữ, giao diện sáng/tối, viết bằng HTML, CSS và JavaScript thuần. Không cần build, triển khai trên GitHub Pages.",
      },
      tags: ["HTML", "CSS", "JavaScript", "i18n"],
      links: { repo: "https://github.com/SeverusJake/SeverusJake.github.io" },
    },
  ],

  // icon: "game" | "cube" | "web" | "server"
  skills: [
    {
      group: "Game & XR Dev",
      icon: "game",
      items: [
        "Unity", "C#", "OOP", "Gameplay systems", "Enemy AI", "Physics", "Shader Graph",
        "AR", "Meta Quest (Meta XR SDK)", "HTC Vive", "HoloLens 2 (MRTK)", "Lightship", "Zappar", "WebGL", "Firebase",
      ],
    },
    {
      group: { en: "3D & Design", vi: "3D & Thiết kế" },
      icon: "cube",
      items: ["Blender", "Photoshop", "3D modeling", "Texturing", "Animation", "UX/UI design"],
    },
    {
      group: "Web",
      icon: "web",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "Astro", "React", "Node.js", "Git"],
    },
    {
      group: { en: "IT & Systems", vi: "IT & Hệ thống" },
      icon: "server",
      items: ["Windows", "Active Directory", "Microsoft 365", "Networking", "PowerShell", "Ticketing", "Hardware"],
    },
  ],

  // Newest first.
  experience: [
    {
      role: "Unity Developer",
      org: "OneTech Asia",
      period: { en: "05/2022 — Present", vi: "05/2022 — Nay" },
      points: [
        {
          en: "Developed 3D games and VR/XR applications for client projects with support from the tech lead.",
          vi: "Phát triển game 3D và ứng dụng VR/XR cho khách hàng với sự hỗ trợ của tech lead.",
        },
        {
          en: "Created and modified 3D models, textures, and assets in Blender and Photoshop.",
          vi: "Tạo và chỉnh sửa mô hình 3D, texture và tài nguyên bằng Blender và Photoshop.",
        },
        {
          en: "Worked with teammates to implement project features end to end.",
          vi: "Phối hợp với các thành viên trong nhóm để triển khai chức năng dự án.",
        },
        {
          en: "Partnered with QA to find, track, and fix bugs, keeping releases high quality.",
          vi: "Hợp tác với QA để phát hiện, quản lý và sửa lỗi, đảm bảo chất lượng sản phẩm khi phát hành.",
        },
      ],
    },
    // PLACEHOLDER roles below — replace with your real dates and details.
    {
      role: { en: "Web Developer (Freelance)", vi: "Lập trình viên Web (Freelance)" },
      org: { en: "Self-employed", vi: "Tự do" },
      period: "2022 — 2024",
      points: [
        { en: "Designed and shipped responsive sites for small businesses.", vi: "Thiết kế và triển khai website responsive cho doanh nghiệp nhỏ." },
        { en: "Handled hosting, domains, and ongoing maintenance.", vi: "Quản lý hosting, tên miền và bảo trì định kỳ." },
      ],
    },
    {
      role: { en: "IT Support / Helpdesk Technician", vi: "Kỹ thuật viên Hỗ trợ IT / Helpdesk" },
      org: "Company Name",
      period: "2020 — 2022",
      points: [
        { en: "Resolved hardware, software, and network issues for 100+ users.", vi: "Xử lý sự cố phần cứng, phần mềm và mạng cho hơn 100 người dùng." },
        { en: "Automated account setup and routine fixes with PowerShell scripts.", vi: "Tự động hóa việc tạo tài khoản và các tác vụ sửa lỗi thường gặp bằng PowerShell." },
        { en: "Wrote knowledge-base articles that cut repeat tickets.", vi: "Viết tài liệu hướng dẫn giúp giảm số yêu cầu hỗ trợ lặp lại." },
      ],
    },
  ],

  // Interface text. Only translate the values.
  ui: {
    en: {
      skip: "Skip to content",
      nav: { projects: "Projects", skills: "Skills", experience: "Experience", about: "About", contact: "Contact" },
      greeting: "Hi, I'm",
      cta: { work: "View Work", contact: "Contact", cv: "Download CV" },
      sections: { projects: "Projects", skills: "Skills", experience: "Experience", about: "About", contact: "Let's work together" },
      filters: { all: "All", xr: "AR / VR", game: "Games", web: "Web" },
      links: { demo: "Play demo", android: "Google Play", ios: "App Store", video: "Watch video", live: "Live site", repo: "Code" },
      empty: "No projects in this category yet.",
      stats: { total: "Projects", xr: "AR / VR apps", game: "Games", web: "Websites" },
      form: {
        name: "Name", email: "Email", message: "Message", send: "Send message",
        sending: "Sending…", success: "Thanks! Your message was sent.",
        error: "Something went wrong. Please try again or email me directly.",
      },
      theme: { toDark: "Switch to dark mode", toLight: "Switch to light mode" },
      lang: "Chuyển sang tiếng Việt",
      menu: { open: "Open menu", close: "Close menu" },
      top: "Back to top",
    },
    vi: {
      skip: "Chuyển đến nội dung",
      nav: { projects: "Dự án", skills: "Kỹ năng", experience: "Kinh nghiệm", about: "Giới thiệu", contact: "Liên hệ" },
      greeting: "Xin chào, tôi là",
      cta: { work: "Xem dự án", contact: "Liên hệ", cv: "Tải CV" },
      sections: { projects: "Dự án", skills: "Kỹ năng", experience: "Kinh nghiệm", about: "Giới thiệu", contact: "Cùng hợp tác nhé" },
      filters: { all: "Tất cả", xr: "AR / VR", game: "Game", web: "Web" },
      links: { demo: "Chơi thử", android: "Google Play", ios: "App Store", video: "Xem video", live: "Xem website", repo: "Mã nguồn" },
      empty: "Chưa có dự án trong mục này.",
      stats: { total: "Dự án", xr: "Ứng dụng AR / VR", game: "Game", web: "Website" },
      form: {
        name: "Họ tên", email: "Email", message: "Tin nhắn", send: "Gửi tin nhắn",
        sending: "Đang gửi…", success: "Cảm ơn bạn! Tin nhắn đã được gửi.",
        error: "Đã có lỗi xảy ra. Vui lòng thử lại hoặc gửi email trực tiếp cho tôi.",
      },
      theme: { toDark: "Chuyển sang giao diện tối", toLight: "Chuyển sang giao diện sáng" },
      lang: "Switch to English",
      menu: { open: "Mở menu", close: "Đóng menu" },
      top: "Lên đầu trang",
    },
  },
};
