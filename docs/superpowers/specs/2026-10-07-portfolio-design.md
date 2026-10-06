# Portfolio Site — Design

Date: 2026-10-07
Owner: Nguyen The Thien Phuc (GitHub: SeverusJake)
Hosting: GitHub Pages user site `SeverusJake.github.io`, served from `main` root.

## Goal

One-page portfolio aimed at **developer jobs** (Unity + web). IT support / helpdesk
experience is presented as supporting background (troubleshooting, user-facing
problem solving), not the headline.

## Decisions

| Topic | Choice |
|---|---|
| Audience | Developer recruiters / hiring managers |
| Style | Bold modern: gradient blobs, glassmorphism cards, scroll animations |
| Theme | **Light by default**, toggle to dark; choice remembered per browser |
| Content | Placeholders now, real content later via one data file |
| Stack | Plain HTML/CSS/JS, no build step, no framework |
| Sections | Hero, Projects, Skills, Experience, About, Contact, CV download |

## File structure

```
index.html          single page, semantic sections, theme bootstrap script in <head>
css/style.css       design tokens (light + dark), layout, components, animations
js/content.js       ALL editable content: profile, links, projects, skills, experience
js/main.js          renders content, project filter, theme toggle, scroll reveal, mobile nav
assets/img/         project thumbnails (none required; fallback tile used)
assets/resume.pdf   placeholder CV
.nojekyll           serve files as-is on GitHub Pages
README.md           how to edit content.js and deploy
```

Unit boundaries:
- `content.js` — pure data, exposes one global `CONTENT` object. No logic.
- `main.js` — reads `CONTENT`, renders DOM, wires interactions. No hard-coded copy.
- `style.css` — all visuals via CSS custom properties; theme switch only swaps tokens.

## `CONTENT` shape

```js
const CONTENT = {
  profile: { name, shortName, role, tagline, about: [paragraphs], email, resumeUrl },
  links:   [{ label, url, icon }],                 // github, linkedin, email
  projects:[{ title, category: "unity"|"web", blurb, tags: [], image?, links: { live?, repo?, play? } }],
  skills:  [{ group, items: [] }],                 // Game Dev, Web, IT & Systems
  experience: [{ role, org, period, points: [] }]  // newest first
};
```

Profile defaults: name "Nguyen The Thien Phuc", shortName "Phuc",
role "Unity & Web Developer".

## Visual design

**Tokens** defined on `:root` (light), overridden on `:root[data-theme="dark"]`:
`--bg`, `--bg-elev`, `--text`, `--text-muted`, `--border`, `--glass`,
`--glass-border`, `--accent`, `--accent-2`, `--blob-1..3`, `--shadow`.

- Light: off-white background (~`#f6f6fb`), dark slate text, pastel blobs
  (violet / cyan / pink at low opacity), white translucent glass cards.
- Dark: near-black background (~`#0b0b12`), light text, saturated glowing blobs,
  dark translucent glass cards.
- Accent gradient violet → cyan used for name text, primary buttons, filter chip
  active state.
- Fonts: Space Grotesk (headings), Inter (body) via Google Fonts; system fallback.
- Glass cards: translucent bg, `backdrop-filter: blur(14px)`, 1px border, hover lift
  + glow. Fallback solid `--bg-elev` when `backdrop-filter` unsupported.
- Blobs: 3 absolutely positioned blurred circles behind hero, slow drift keyframes.
- Scroll reveal: elements with `.reveal` fade up via IntersectionObserver.
- `prefers-reduced-motion: reduce` disables blob drift, reveals, hover transforms.
- Layout mobile-first; 16px side gutter; no horizontal scroll at 375px.
  Nav collapses to hamburger below 768px.

## Theme behavior

1. Inline script in `<head>` (before CSS paints) reads `localStorage["theme"]`
   inside try/catch; if `"dark"`, sets `data-theme="dark"` on `<html>`.
   Otherwise stays light. **System preference is ignored — light is default.**
2. Toggle button in nav (sun/moon icon, `aria-label`, `aria-pressed`) flips
   `data-theme` and writes to localStorage (try/catch; works without storage,
   just not remembered).
3. Smooth color transition on toggle, skipped under reduced motion.

## Sections (in order)

1. **Nav** — short name logo, anchor links, theme toggle, hamburger on mobile.
2. **Hero** — "Hi, I'm" + full name in gradient text, role, tagline. Buttons:
   View Work (→ #projects), Contact (→ #contact), Download CV (→ resumeUrl).
3. **Projects** — filter chips All / Unity / Web. Cards: thumbnail, title,
   blurb, tag pills, link buttons (Live / Repo / Play). 4 placeholder projects
   (2 Unity, 2 Web).
4. **Skills** — three glass panels: Game Dev, Web, IT & Systems.
5. **Experience** — vertical timeline, newest first; dev roles first, helpdesk
   roles framed around troubleshooting and user support. Placeholder entries.
6. **About** — short bio paragraphs.
7. **Contact** — heading, one line CTA, icon links (email, GitHub, LinkedIn).
   No form.
8. **Footer** — © year (auto), name.

## Edge cases

- Project without `image` → gradient tile with category icon/initials.
- Project link missing → that button not rendered; no links → no button row.
- Empty filter result → "No projects in this category yet." message.
- JS disabled → `<noscript>` block with name, role, email, GitHub link.
- localStorage blocked → theme toggle still works for the session.

## Accessibility

Semantic landmarks, skip-to-content link, visible focus rings, AA color
contrast in both themes, filter chips as buttons with `aria-pressed`,
decorative blobs `aria-hidden`.

## Testing

Manual in browser pane:
- Desktop and 375px mobile widths: no horizontal scroll, nav works.
- Theme toggle flips all colors; reload keeps choice; first visit is light.
- Filter chips show correct cards.
- Reduced motion emulation: no animation.
- Console: zero errors.

## Out of scope

Contact form backend, blog, per-project pages, analytics, build tooling.
