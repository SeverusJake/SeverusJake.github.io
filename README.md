# SeverusJake.github.io

Portfolio of **Nguyen The Thien Phuc**, Unity & Web Developer.

Plain HTML, CSS, and JavaScript. No build step, no dependencies.

## Edit content

All text lives in [`js/content.js`](js/content.js). Search for `PLACEHOLDER` and replace each one:

| What | Where in `content.js` |
|---|---|
| Name, role, tagline, bio | `profile` |
| Contact email | `profile.email` and the `Email` entry in `links` |
| GitHub / LinkedIn | `links` |
| Projects | `projects`: `category` is `"xr"`, `"game"`, or `"web"` (chips appear only for categories in use) |
| Skills | `skills` |
| Jobs | `experience`, newest first |

**Project images:** put a 16:9 image in `assets/img/` and set `image: "assets/img/name.png"`.
Without an image, a YouTube `video` link's thumbnail is used. Otherwise the card gets a gradient tile with its initials.

**Project links:** any of `demo`, `android`, `ios`, `video`, `live`, `repo`. Links you leave out are hidden.

**CV:** replace `assets/resume.pdf` with your own file (keep the name, or change `profile.resumeUrl`).

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Deploy

Push to `main`. In the repo's **Settings → Pages**, set the source to *Deploy from a branch* → `main` / root.
The site goes live at `https://severusjake.github.io/`.

## Theme

The site opens in light mode by default. Visitors can switch to dark with the sun/moon button, and the choice is saved in their browser.
Colors are CSS variables at the top of [`css/style.css`](css/style.css): `:root` holds light mode, `:root[data-theme="dark"]` holds dark mode.
