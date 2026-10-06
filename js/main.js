(function () {
  "use strict";

  // Static, trusted SVG markup only — never put content strings in here.
  var ICONS = {
    github:
      '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></g></svg>',
    itch:
      '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 9h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M3 5l2-2h14l2 2v4H3z"/></g></svg>',
    live:
      '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></g></svg>',
    repo:
      '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-5 5 5 5"/><path d="m16 7 5 5-5 5"/></g></svg>',
    play:
      '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>',
    game:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r=".6" fill="currentColor"/><circle cx="18" cy="13.5" r=".6" fill="currentColor"/></g></svg>',
    web:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></g></svg>',
    server:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></g></svg>',
  };

  var CATEGORY_LABELS = { all: "All", unity: "Unity", web: "Web" };
  var LINK_LABELS = { live: "Live", repo: "Code", play: "Play" };

  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealObserver = null;

  // --- helpers --------------------------------------------------------------

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];
        if (value == null || value === false) return;
        if (key === "class") node.className = value;
        else if (key === "text") node.textContent = value;
        else if (key === "icon") node.insertAdjacentHTML("afterbegin", ICONS[value] || "");
        else node.setAttribute(key, value);
      });
    }
    (children || []).forEach(function (child) {
      if (child) node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function isExternal(url) {
    return /^https?:\/\//.test(url);
  }

  function linkAttrs(url) {
    return isExternal(url) ? { href: url, target: "_blank", rel: "noopener" } : { href: url };
  }

  function initials(title) {
    return title
      .split(/\s+/)
      .slice(0, 2)
      .map(function (word) { return word.charAt(0); })
      .join("")
      .toUpperCase();
  }

  // --- rendering ------------------------------------------------------------

  function renderHero(profile) {
    byId("hero-name").textContent = profile.name;
    byId("hero-role").textContent = profile.role;
    byId("hero-tagline").textContent = profile.tagline;
    byId("cv-link").setAttribute("href", profile.resumeUrl);

    var logo = byId("logo");
    logo.textContent = profile.shortName;
    logo.appendChild(el("span", { class: "logo-dot", text: "." }));
  }

  function projectCard(project) {
    var thumb = project.image
      ? el("img", { class: "project-thumb", src: project.image, alt: "", loading: "lazy" })
      : el("div", { class: "project-thumb project-thumb-fallback", "aria-hidden": "true", text: initials(project.title) });

    var tags = el("ul", { class: "tag-list" }, (project.tags || []).map(function (tag) {
      return el("li", { class: "tag", text: tag });
    }));

    var links = project.links || {};
    var buttons = ["play", "live", "repo"]
      .filter(function (key) { return links[key]; })
      .map(function (key, i) {
        var attrs = linkAttrs(links[key]);
        attrs.class = "btn btn-sm " + (i === 0 ? "btn-primary" : "btn-ghost");
        attrs.icon = key;
        attrs["aria-label"] = LINK_LABELS[key] + ": " + project.title;
        return el("a", attrs, [LINK_LABELS[key]]);
      });

    return el("article", { class: "glass project-card reveal" }, [
      thumb,
      el("div", { class: "project-body" }, [
        el("p", { class: "project-meta", text: CATEGORY_LABELS[project.category] || project.category }),
        el("h3", { text: project.title }),
        el("p", { text: project.blurb }),
        tags,
        buttons.length ? el("div", { class: "project-links" }, buttons) : null,
      ]),
    ]);
  }

  function renderProjects(projects, filter) {
    var grid = byId("projects-grid");
    var list = filter === "all"
      ? projects
      : projects.filter(function (p) { return p.category === filter; });

    grid.textContent = "";
    if (!list.length) {
      grid.appendChild(el("p", { class: "glass empty-state", text: "No projects in this category yet." }));
      return;
    }
    list.forEach(function (project) {
      grid.appendChild(projectCard(project));
    });
    observeReveals(grid);
  }

  function renderFilters(projects) {
    var wrap = byId("project-filters");
    var current = "all";

    function update() {
      Array.prototype.forEach.call(wrap.children, function (chip) {
        chip.setAttribute("aria-pressed", String(chip.dataset.filter === current));
      });
      renderProjects(projects, current);
    }

    ["all", "unity", "web"].forEach(function (key) {
      var chip = el("button", { class: "chip", type: "button", "data-filter": key, text: CATEGORY_LABELS[key] });
      chip.addEventListener("click", function () {
        if (current === key) return;
        current = key;
        update();
      });
      wrap.appendChild(chip);
    });

    update();
  }

  function renderSkills(skills) {
    var grid = byId("skills-grid");
    skills.forEach(function (group) {
      grid.appendChild(
        el("div", { class: "glass skill-panel reveal" }, [
          el("h3", null, [el("span", { class: "skill-icon", icon: group.icon }), group.group]),
          el("ul", { class: "tag-list" }, group.items.map(function (item) {
            return el("li", { class: "tag", text: item });
          })),
        ])
      );
    });
  }

  function renderExperience(experience) {
    var list = byId("timeline");
    experience.forEach(function (job) {
      list.appendChild(
        el("li", { class: "glass timeline-item reveal" }, [
          el("p", { class: "timeline-period", text: job.period }),
          el("h3", { text: job.role }),
          el("p", { class: "timeline-org", text: job.org }),
          el("ul", { class: "timeline-points" }, (job.points || []).map(function (point) {
            return el("li", { text: point });
          })),
        ])
      );
    });
  }

  function renderAbout(profile) {
    var box = byId("about-text");
    profile.about.forEach(function (paragraph) {
      box.appendChild(el("p", { text: paragraph }));
    });
  }

  function renderContact(profile, links) {
    byId("contact-text").textContent = profile.contactText;
    var wrap = byId("contact-links");
    links.forEach(function (link, i) {
      var attrs = linkAttrs(link.url);
      attrs.class = "btn " + (i === 0 ? "btn-primary" : "btn-ghost");
      attrs.icon = link.icon;
      wrap.appendChild(el("a", attrs, [link.label]));
    });
  }

  // --- interactions ---------------------------------------------------------

  function initTheme() {
    var root = document.documentElement;
    var button = byId("theme-toggle");

    function sync() {
      var dark = root.getAttribute("data-theme") === "dark";
      button.setAttribute("aria-pressed", String(dark));
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    }

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";

      if (!reduceMotion) {
        root.classList.add("theme-transition");
        window.setTimeout(function () { root.classList.remove("theme-transition"); }, 400);
      }

      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        // Storage blocked: theme still switches, just isn't remembered.
      }
      sync();
    });

    sync();
  }

  function initNav() {
    var header = byId("site-header");
    var toggle = byId("nav-toggle");

    function setOpen(open) {
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("nav-open"));
    });

    byId("nav-links").addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("nav-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  function observeReveals(scope) {
    var items = (scope || document).querySelectorAll(".reveal:not(.visible)");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (item) { item.classList.add("visible"); });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }

    Array.prototype.forEach.call(items, function (item) { revealObserver.observe(item); });
  }

  // --- boot -----------------------------------------------------------------

  function init() {
    var data = window.CONTENT;

    initTheme();
    initNav();
    byId("year").textContent = String(new Date().getFullYear());

    if (!data) {
      // content.js failed to load — show whatever static markup exists.
      observeReveals();
      return;
    }

    renderHero(data.profile);
    renderFilters(data.projects);
    renderSkills(data.skills);
    renderExperience(data.experience);
    renderAbout(data.profile);
    renderContact(data.profile, data.links);
    observeReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
