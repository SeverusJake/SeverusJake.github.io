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
        en: "I'm a developer with experience across several technical fields: 3 years building VR, AR, and MR applications in Unity and C#, full-stack web development with Astro and Next.js, and 3 years in IT support and helpdesk — plus hands-on computer vision work with YOLO.",
        vi: "Tôi là lập trình viên có kinh nghiệm ở nhiều lĩnh vực kỹ thuật: 3 năm phát triển ứng dụng VR, AR, MR bằng Unity và C#, phát triển web full-stack với Astro và Next.js, 3 năm hỗ trợ IT và helpdesk — cùng kinh nghiệm thực tế về thị giác máy tính với YOLO.",
      },
      {
        en: "At OneTech Asia I built XR apps for client projects — from Meta Quest training sims to HoloLens 2 tools and AR apps on the App Store and Google Play — working with 3D environments, LiDAR data visualization, and 2D/3D assets in Blender and Photoshop.",
        vi: "Tại OneTech Asia, tôi phát triển ứng dụng XR cho khách hàng — từ mô phỏng đào tạo trên Meta Quest, công cụ trên HoloLens 2 đến ứng dụng AR trên App Store và Google Play — làm việc với môi trường 3D, trực quan hóa dữ liệu LiDAR và asset 2D/3D bằng Blender và Photoshop.",
      },
      {
        en: "I'm a fast, self-directed learner with a logical, problem-solving approach. Games are my passion, so I'm always trying to make something new and interesting — and years of IT support keep me calm and methodical when something breaks.",
        vi: "Tôi tự học nhanh, chủ động, tư duy logic và giỏi giải quyết vấn đề. Game là niềm đam mê nên tôi luôn cố gắng tạo ra điều gì đó mới và thú vị — và nhiều năm hỗ trợ IT giúp tôi bình tĩnh, có phương pháp khi gặp sự cố.",
      },
    ],
    motto: {
      en: "Life is a journey, and the journey is the destination.",
      vi: "Cuộc sống là một hành trình, và hành trình là điểm đến.",
    },
    // Shown beside the bio. label/value accept { en, vi }.
    facts: [
      { label: { en: "Based in", vi: "Nơi ở" }, value: { en: "Ho Chi Minh City, Vietnam", vi: "TP. Hồ Chí Minh, Việt Nam" } },
      {
        label: { en: "Experience", vi: "Kinh nghiệm" },
        value: { en: "Unity 3 yrs · IT support 3 yrs · Web 1 yr", vi: "Unity 3 năm · Hỗ trợ IT 3 năm · Web 1 năm" },
      },
      {
        label: { en: "Education", vi: "Học vấn" },
        value: {
          en: "Software Engineering Diploma (ADSE), FPT Aptech · Bachelor of Accounting, University of Economics HCMC",
          vi: "Bằng Kỹ sư phần mềm (ADSE), FPT Aptech · Cử nhân Kế toán, Đại học Kinh tế TP.HCM",
        },
      },
      {
        label: { en: "Languages", vi: "Ngôn ngữ" },
        value: { en: "Vietnamese, English (TOEIC 820/990)", vi: "Tiếng Việt, tiếng Anh (TOEIC 820/990)" },
      },
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

  // icon: "game" | "cube" | "ai" | "web" | "server"
  skills: [
    {
      group: "Game & XR Dev",
      icon: "game",
      items: [
        "Unity", "C#", "OOP", "Gameplay systems", "Enemy AI", "Physics", "Shader Graph",
        "VR", "AR", "MR", "Meta Quest (Meta XR SDK)", "HTC Vive", "HoloLens 2 (MRTK)", "Lightship", "Zappar",
        "LiDAR visualization", "WebGL", "Firebase",
      ],
    },
    {
      group: { en: "3D & Design", vi: "3D & Thiết kế" },
      icon: "cube",
      items: ["Blender", "Photoshop", "3D modeling", "Texturing", "Animation", "3D visualization", "UX/UI design"],
    },
    {
      group: { en: "AI & Computer Vision", vi: "AI & Thị giác máy tính" },
      icon: "ai",
      items: [
        "Python", "YOLOv4", "YOLOv7", "YOLOv11n", "Object detection",
        "Image annotation", "Dataset preparation", "Model training", "Claude", "Codex", "ChatGPT",
      ],
    },
    {
      group: "Web",
      icon: "web",
      items: ["TypeScript", "JavaScript", "Astro", "Next.js", "HTML", "CSS", "Git", "GitHub"],
    },
    {
      group: { en: "IT Support", vi: "Hỗ trợ IT" },
      icon: "server",
      items: [
        "Troubleshooting", "Windows", "Microsoft 365", "Word", "Excel", "SAP support",
        "Hardware", "Printers", "Basic networking", "Ticketing",
      ],
    },
  ],

  // Newest first.
  experience: [
    {
      role: { en: "Web Developer (Freelance)", vi: "Lập trình viên Web (Freelance)" },
      org: { en: "Self-employed", vi: "Tự do" },
      period: { en: "08/2025 — Present", vi: "08/2025 — Nay" },
      points: [
        {
          en: "Develop full-stack websites with Astro, Next.js, and TypeScript.",
          vi: "Phát triển website full-stack với Astro, Next.js và TypeScript.",
        },
        {
          en: "Use AI-assisted development tools such as Claude and Codex.",
          vi: "Sử dụng các công cụ lập trình hỗ trợ bởi AI như Claude và Codex.",
        },
      ],
    },
    {
      role: "IT Helpdesk",
      org: "MP Logistics",
      period: { en: "10/2025 — Present", vi: "10/2025 — Nay" },
      points: [
        { en: "Provide IT support for about 200 users.", vi: "Hỗ trợ IT cho khoảng 200 người dùng." },
        { en: "Handle around 40 support tickets per day.", vi: "Xử lý khoảng 40 yêu cầu hỗ trợ mỗi ngày." },
        {
          en: "Troubleshoot Windows, Office, printer, hardware, and basic network issues.",
          vi: "Khắc phục sự cố Windows, Office, máy in, phần cứng và mạng cơ bản.",
        },
      ],
    },
    {
      role: "Unity Developer",
      org: "OneTech Asia",
      period: "05/2022 — 04/2025",
      points: [
        {
          en: "Developed VR, AR, and MR applications in Unity and C# for client projects.",
          vi: "Phát triển ứng dụng VR, AR và MR bằng Unity và C# cho các dự án khách hàng.",
        },
        {
          en: "Built 3D environments and interactive features, including LiDAR data visualization.",
          vi: "Xây dựng môi trường 3D và tính năng tương tác, bao gồm trực quan hóa dữ liệu LiDAR.",
        },
        {
          en: "Used YOLOv4 and YOLOv7 for product detection, and annotated image data to improve model training and recognition accuracy.",
          vi: "Sử dụng YOLOv4 và YOLOv7 để nhận diện sản phẩm, đồng thời gán nhãn dữ liệu ảnh để nâng cao chất lượng huấn luyện và độ chính xác nhận diện.",
        },
        {
          en: "Created and edited 3D models and textures in Blender and Photoshop, and partnered with QA to find and fix bugs before release.",
          vi: "Tạo và chỉnh sửa mô hình 3D, texture bằng Blender và Photoshop, phối hợp với QA để phát hiện và sửa lỗi trước khi phát hành.",
        },
      ],
    },
    {
      role: "IT SAP Support",
      org: "Khai Anh JSC",
      period: "01/2019 — 05/2021",
      points: [
        {
          en: "Provided first-level SAP and application support for 50 users.",
          vi: "Hỗ trợ SAP và ứng dụng cấp 1 cho 50 người dùng.",
        },
        {
          en: "Helped cut support tickets by 50% within 3 months.",
          vi: "Góp phần giảm 50% số yêu cầu hỗ trợ trong vòng 3 tháng.",
        },
        {
          en: "Resolved login, access, and common user issues, escalating complex cases.",
          vi: "Xử lý các vấn đề đăng nhập, phân quyền và lỗi thường gặp, chuyển tiếp các trường hợp phức tạp.",
        },
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
