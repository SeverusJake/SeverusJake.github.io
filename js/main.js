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
    demo:
      '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>',
    video:
      '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path fill="currentColor" d="m10 9 5 3-5 3z"/></g></svg>',
    android:
      '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M5 3.6v16.8a.6.6 0 0 0 .9.52l14.4-8.4a.6.6 0 0 0 0-1.04L5.9 3.08a.6.6 0 0 0-.9.52zM5.3 3.3l9.2 8.7-9.2 8.7"/></svg>',
    ios:
      '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.32-3.5zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.07 1.96-.49 2.56-1.21z"/></svg>',
    game:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r=".6" fill="currentColor"/><circle cx="18" cy="13.5" r=".6" fill="currentColor"/></g></svg>',
    web:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></g></svg>',
    server:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></g></svg>',
  };

  // Key order is the chip order and the link-button order. Labels live in CONTENT.ui.
  var CATEGORIES = ["all", "xr", "game", "web"];
  var LINK_KEYS = ["demo", "android", "ios", "video", "live", "repo"];

  var root = document.documentElement;
  var data = window.CONTENT;

  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer =
    window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var fancyMotion = finePointer && !reduceMotion;

  var state = {
    filter: "all",
    formStatus: "", // ui key under "form", e.g. "success"
    revealNow: false, // true while re-rendering for a language switch
  };

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

  function lang() {
    return root.getAttribute("lang") === "vi" ? "vi" : "en";
  }

  // Content values are either plain strings or { en, vi }.
  function tr(value) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[lang()] || value.en || "";
    }
    return value == null ? "" : value;
  }

  // Interface text lookup, e.g. ui("nav.projects"). Falls back to English.
  function ui(path) {
    function find(dict) {
      return path.split(".").reduce(function (node, key) {
        return node && node[key];
      }, dict);
    }
    var dicts = (data && data.ui) || {};
    return find(dicts[lang()]) || find(dicts.en) || "";
  }

  function isExternal(url) {
    return /^https?:\/\//.test(url);
  }

  function linkAttrs(url) {
    return isExternal(url) ? { href: url, target: "_blank", rel: "noopener" } : { href: url };
  }

  function youtubeThumb(url) {
    var match = /(?:youtube\.com\/watch\?(?:.*&)?v=|youtu\.be\/)([\w-]{11})/.exec(url || "");
    return match ? "https://img.youtube.com/vi/" + match[1] + "/hqdefault.jpg" : null;
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

  function applyStaticText() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (node) {
      var text = ui(node.getAttribute("data-i18n"));
      if (text) node.textContent = text;
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-aria]"), function (node) {
      var text = ui(node.getAttribute("data-i18n-aria"));
      if (text) node.setAttribute("aria-label", text);
    });
  }

  function renderHero(profile) {
    byId("hero-name").textContent = profile.name;
    byId("hero-role").textContent = tr(profile.role);
    byId("hero-tagline").textContent = tr(profile.tagline);
    byId("cv-link").setAttribute("href", profile.resumeUrl);
    byId("logo-text").textContent = profile.shortName;
  }

  function renderStats(projects) {
    var box = byId("hero-stats");
    var counts = { total: projects.length };
    projects.forEach(function (p) { counts[p.category] = (counts[p.category] || 0) + 1; });

    box.textContent = "";
    ["total", "xr", "game", "web"].forEach(function (key) {
      if (!counts[key]) return;
      box.appendChild(el("div", { class: "stat" }, [
        el("dt", { text: ui("stats." + key) }),
        el("dd", { text: String(counts[key]) }),
      ]));
    });
  }

  function projectThumb(project) {
    var fallback = el("div", {
      class: "project-thumb project-thumb-fallback",
      "aria-hidden": "true",
      text: initials(tr(project.title)),
    });
    var src = project.image || youtubeThumb((project.links || {}).video);
    if (!src) return fallback;

    var img = el("img", { class: "project-thumb", src: src, alt: "", loading: "lazy" });
    img.addEventListener("error", function () { img.replaceWith(fallback); });
    return img;
  }

  function addTilt(card) {
    if (!fancyMotion) return;

    card.addEventListener("pointermove", function (event) {
      var rect = card.getBoundingClientRect();
      var px = (event.clientX - rect.left) / rect.width;
      var py = (event.clientY - rect.top) / rect.height;
      card.classList.add("tilting");
      card.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      card.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      card.style.transform =
        "perspective(900px) rotateX(" + ((0.5 - py) * 8).toFixed(2) + "deg) rotateY(" +
        ((px - 0.5) * 10).toFixed(2) + "deg) translateY(-6px)";
    });

    card.addEventListener("pointerleave", function () {
      card.classList.remove("tilting");
      card.style.transform = "";
    });
  }

  function projectCard(project) {
    var title = tr(project.title);
    var tags = el("ul", { class: "tag-list" }, (project.tags || []).map(function (tag) {
      return el("li", { class: "tag", text: tr(tag) });
    }));

    var links = project.links || {};
    var buttons = LINK_KEYS
      .filter(function (key) { return links[key]; })
      .map(function (key, i) {
        var attrs = linkAttrs(links[key]);
        attrs.class = "btn btn-sm " + (i === 0 ? "btn-primary" : "btn-ghost");
        attrs.icon = key;
        attrs["aria-label"] = ui("links." + key) + ": " + title;
        return el("a", attrs, [ui("links." + key)]);
      });

    var card = el("article", { class: "glass project-card reveal" }, [
      projectThumb(project),
      el("div", { class: "project-body" }, [
        el("p", { class: "project-meta", text: tr(project.platform) || ui("filters." + project.category) }),
        el("h3", { text: title }),
        el("p", { text: tr(project.blurb) }),
        tags,
        buttons.length ? el("div", { class: "project-links" }, buttons) : null,
      ]),
    ]);
    addTilt(card);
    return card;
  }

  function renderProjects(projects) {
    var grid = byId("projects-grid");
    var list = state.filter === "all"
      ? projects
      : projects.filter(function (p) { return p.category === state.filter; });

    grid.textContent = "";
    if (!list.length) {
      grid.appendChild(el("p", { class: "glass empty-state", text: ui("empty") }));
      return;
    }
    list.forEach(function (project) {
      grid.appendChild(projectCard(project));
    });
    observeReveals(grid);
  }

  function renderFilters(projects) {
    var wrap = byId("project-filters");
    var used = projects.map(function (p) { return p.category; });
    var keys = CATEGORIES.filter(function (key) {
      return key === "all" || used.indexOf(key) !== -1;
    });
    if (keys.indexOf(state.filter) === -1) state.filter = "all";

    function syncPressed() {
      Array.prototype.forEach.call(wrap.children, function (chip) {
        chip.setAttribute("aria-pressed", String(chip.getAttribute("data-filter") === state.filter));
      });
    }

    wrap.textContent = "";
    keys.forEach(function (key) {
      var chip = el("button", { class: "chip", type: "button", "data-filter": key, text: ui("filters." + key) });
      chip.addEventListener("click", function () {
        if (state.filter === key) return;
        state.filter = key;
        syncPressed();
        renderProjects(projects);
      });
      wrap.appendChild(chip);
    });

    syncPressed();
    renderProjects(projects);
  }

  function renderSkills(skills) {
    var grid = byId("skills-grid");
    grid.textContent = "";
    skills.forEach(function (group) {
      grid.appendChild(
        el("div", { class: "glass skill-panel reveal" }, [
          el("h3", null, [el("span", { class: "skill-icon", icon: group.icon }), tr(group.group)]),
          el("ul", { class: "tag-list" }, group.items.map(function (item) {
            return el("li", { class: "tag", text: tr(item) });
          })),
        ])
      );
    });
  }

  function renderExperience(experience) {
    var list = byId("timeline");
    list.textContent = "";
    experience.forEach(function (job) {
      list.appendChild(
        el("li", { class: "glass timeline-item reveal" }, [
          el("p", { class: "timeline-period", text: tr(job.period) }),
          el("h3", { text: tr(job.role) }),
          el("p", { class: "timeline-org", text: tr(job.org) }),
          el("ul", { class: "timeline-points" }, (job.points || []).map(function (point) {
            return el("li", { text: tr(point) });
          })),
        ])
      );
    });
  }

  function renderAbout(profile) {
    var box = byId("about-text");
    box.textContent = "";
    profile.about.forEach(function (paragraph) {
      box.appendChild(el("p", { text: tr(paragraph) }));
    });
  }

  function renderContact(profile, links) {
    byId("contact-text").textContent = tr(profile.contactText);
    byId("contact-form").hidden = !profile.formspreeId;
    byId("form-status").textContent = state.formStatus ? ui("form." + state.formStatus) : "";

    var wrap = byId("contact-links");
    wrap.textContent = "";
    links.forEach(function (link, i) {
      var attrs = linkAttrs(link.url);
      // Primary style only when there's no form competing for attention.
      attrs.class = "btn " + (i === 0 && !profile.formspreeId ? "btn-primary" : "btn-ghost");
      attrs.icon = link.icon;
      wrap.appendChild(el("a", attrs, [tr(link.label)]));
    });
  }

  function renderAll() {
    applyStaticText();
    renderHero(data.profile);
    renderStats(data.projects);
    renderFilters(data.projects);
    renderSkills(data.skills);
    renderExperience(data.experience);
    renderAbout(data.profile);
    renderContact(data.profile, data.links);
    syncThemeButton();
    syncLangButton();
    syncMenuButton();
    observeReveals();
  }

  // --- theme & language -----------------------------------------------------

  function save(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Storage blocked: the choice still applies, just isn't remembered.
    }
  }

  function syncThemeButton() {
    var button = byId("theme-toggle");
    var dark = root.getAttribute("data-theme") === "dark";
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute("aria-label", ui(dark ? "theme.toLight" : "theme.toDark"));
  }

  function initTheme() {
    byId("theme-toggle").addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";

      if (!reduceMotion) {
        root.classList.add("theme-transition");
        window.setTimeout(function () { root.classList.remove("theme-transition"); }, 400);
      }

      root.setAttribute("data-theme", next);
      save("theme", next);
      syncThemeButton();
    });
  }

  function syncLangButton() {
    byId("lang-toggle").setAttribute("aria-label", ui("lang"));
  }

  function initLang() {
    byId("lang-toggle").addEventListener("click", function () {
      var next = lang() === "vi" ? "en" : "vi";
      root.setAttribute("lang", next);
      save("lang", next);

      state.revealNow = true;
      renderAll();
      state.revealNow = false;
    });
  }

  // --- navigation -----------------------------------------------------------

  function syncMenuButton() {
    var open = byId("site-header").classList.contains("nav-open");
    byId("nav-toggle").setAttribute("aria-label", ui(open ? "menu.close" : "menu.open"));
  }

  function initNav() {
    var header = byId("site-header");
    var toggle = byId("nav-toggle");

    function setOpen(open) {
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      syncMenuButton();
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

  // Highlight the nav link for the section crossing the middle of the viewport.
  function initActiveNav() {
    if (!("IntersectionObserver" in window)) return;

    var links = {};
    Array.prototype.forEach.call(document.querySelectorAll("#nav-links a"), function (link) {
      links[link.getAttribute("href").slice(1)] = link;
    });

    function setActive(id) {
      Object.keys(links).forEach(function (key) {
        var on = key === id;
        links[key].classList.toggle("active", on);
        if (on) links[key].setAttribute("aria-current", "true");
        else links[key].removeAttribute("aria-current");
      });
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    observer.observe(byId("top"));
    Object.keys(links).forEach(function (id) {
      var section = byId(id);
      if (section) observer.observe(section);
    });
  }

  function initScrollUi() {
    var toTop = byId("to-top");
    var ticking = false;

    function update() {
      toTop.classList.toggle("show", window.scrollY > 600);
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });

    update();
  }

  // --- pointer effects ------------------------------------------------------

  // Blobs drift opposite the cursor and a soft glow follows it.
  function initPointerFx() {
    if (!fancyMotion) return;

    var glow = byId("cursor-glow");
    var blobs = byId("blob-layer");
    var x = 0;
    var y = 0;
    var pending = false;

    function paint() {
      pending = false;
      glow.style.transform = "translate(" + x + "px, " + y + "px)";
      var dx = (x / window.innerWidth - 0.5) * -40;
      var dy = (y / window.innerHeight - 0.5) * -40;
      blobs.style.transform = "translate(" + dx.toFixed(1) + "px, " + dy.toFixed(1) + "px)";
    }

    document.addEventListener("pointermove", function (event) {
      x = event.clientX;
      y = event.clientY;
      glow.classList.add("on");
      if (!pending) {
        pending = true;
        window.requestAnimationFrame(paint);
      }
    }, { passive: true });

    document.documentElement.addEventListener("pointerleave", function () {
      glow.classList.remove("on");
    });
  }

  // --- contact form ---------------------------------------------------------

  function initForm(profile) {
    var form = byId("contact-form");
    var status = byId("form-status");
    var button = form.querySelector("button[type=submit]");

    function setStatus(key, kind) {
      state.formStatus = key;
      status.textContent = key ? ui("form." + key) : "";
      status.className = "form-status" + (kind ? " " + kind : "");
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!profile.formspreeId) return;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      button.disabled = true;
      setStatus("sending");

      fetch("https://formspree.io/f/" + encodeURIComponent(profile.formspreeId), {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (!response.ok) throw new Error("HTTP " + response.status);
          form.reset();
          setStatus("success", "ok");
        })
        .catch(function () {
          setStatus("error", "err");
        })
        .then(function () {
          button.disabled = false;
        });
    });
  }

  // --- reveal ---------------------------------------------------------------

  function observeReveals(scope) {
    var items = (scope || document).querySelectorAll(".reveal:not(.visible)");

    if (state.revealNow || reduceMotion || !("IntersectionObserver" in window)) {
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
    initTheme();
    initNav();
    initActiveNav();
    initScrollUi();
    initPointerFx();
    byId("year").textContent = String(new Date().getFullYear());

    if (!data) {
      // content.js failed to load — show whatever static markup exists.
      observeReveals();
      return;
    }

    initLang();
    initForm(data.profile);
    renderAll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
