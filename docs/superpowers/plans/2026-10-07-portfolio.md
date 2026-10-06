# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the one-page developer portfolio described in `docs/superpowers/specs/2026-10-07-portfolio-design.md`.

**Architecture:** Static `index.html` shell with empty mount points; `js/content.js` holds all copy as a global `CONTENT` object; `js/main.js` renders it and wires interactions; `css/style.css` drives both themes through custom properties swapped by `data-theme` on `<html>`.

**Tech Stack:** HTML5, CSS (custom properties, grid, backdrop-filter), vanilla ES2020 JS, Google Fonts (Inter, Space Grotesk). No build step.

## Global Constraints

- Light theme is default; system color preference is ignored.
- Theme stored in `localStorage["theme"]` (`"light"` | `"dark"`), every access in try/catch.
- No hard-coded copy in `main.js`; all text comes from `CONTENT`.
- Render user-facing strings with `textContent`, never `innerHTML` (icons are static SVG constants only).
- 16px side gutter, no horizontal scroll at 375px; nav collapses below 768px.
- `prefers-reduced-motion: reduce` disables all animation/transitions.
- Content visible without JS (`.reveal` only hides when `<html class="js">`).
- No personal email published; placeholder `you@example.com` until owner replaces it.

---

### Task 1: Shell + theme system

**Files:** Create `index.html`, `css/style.css`, `.nojekyll`

**Produces:** mount ids `hero-name`, `hero-role`, `hero-tagline`, `cv-link`, `project-filters`, `projects-grid`, `skills-grid`, `timeline`, `about-text`, `contact-text`, `contact-links`, `year`; buttons `#theme-toggle`, `#nav-toggle`; header `#site-header`.

- [ ] Inline `<head>` script: add `js` class; set `data-theme="dark"` only if stored value is `"dark"`.
- [ ] Tokens on `:root` (light) and `:root[data-theme="dark"]`; fixed background blobs layer (`aria-hidden`) so glass cards blur it on every section.
- [ ] Verify: open page, light by default; manually set `data-theme="dark"` in devtools → all colors swap.

### Task 2: Content + rendering

**Files:** Create `js/content.js`, `js/main.js`

**Interfaces:** `window.CONTENT = { profile, links, projects, skills, experience }` exactly as in spec. `main.js` exports nothing; runs `init()` on `DOMContentLoaded`.

- [ ] `el(tag, attrs, children)` DOM helper; `ICONS` map of inline SVG strings.
- [ ] Render hero, projects (fallback tile when no `image`, skip missing links), skills, timeline, about, contact, footer year.
- [ ] Verify: every section populated; no console errors.

### Task 3: Interactions

**Files:** Modify `js/main.js`

- [ ] Theme toggle: flips attribute, saves, updates `aria-pressed`/`aria-label`, brief `theme-transition` class unless reduced motion.
- [ ] Filter chips All/Unity/Web with `aria-pressed`; empty-state message.
- [ ] Scroll reveal via IntersectionObserver (immediate reveal if unsupported or reduced motion).
- [ ] Mobile nav: `#nav-toggle` toggles `.nav-open`, `aria-expanded`; closes on link click / Escape.
- [ ] Verify: toggle persists across reload; filters correct; nav works at 375px.

### Task 4: Assets + docs

**Files:** Create `assets/resume.pdf` (placeholder one-page PDF), `README.md`

- [ ] README: how to edit `content.js`, add thumbnails, replace CV, enable GitHub Pages.
- [ ] Verify: Download CV opens PDF.

### Task 5: Verification

- [ ] Browser pane: desktop + 375px, light + dark, reduced motion, console clean, `scrollWidth <= innerWidth`.
- [ ] Commit.
