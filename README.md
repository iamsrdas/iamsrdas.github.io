# Your Academic Profile Website

A responsive, dynamic academic website: home, projects, publications, blog,
awards, training & workshops, gallery, CV, and contact — built with plain
HTML/CSS/JavaScript (no build tools, no frameworks) so it runs directly on
GitHub Pages.

## How it's organized

```
├── index.html          Home page (photo, bio, "latest" cards)
├── projects.html        Projects grid
├── project.html         Single project detail (reads ?id=... from the URL)
├── publications.html    Publications list
├── blog.html            Blog grid
├── post.html            Single blog post detail (reads ?id=...)
├── awards.html          Awards list
├── training.html        Training & workshops list
├── gallery.html         Photo/video gallery with click-to-enlarge
├── cv.html              CV viewer + download button
├── contact.html         Email, institution, and social icons
├── css/style.css        All styling (colors, fonts, layout, animations)
├── js/data.js           <-- ALL YOUR CONTENT LIVES HERE
├── js/render.js          The engine that turns data.js into page content
├── js/main.js            Starts each page (you shouldn't need to edit this)
└── assets/
    ├── img/profile.jpg           your photo
    ├── img/projects/             project photos/screenshots
    ├── img/blog/                 blog cover images
    ├── img/gallery/              gallery photos
    └── cv/CV.pdf                 your CV file
```

## The only file you need to edit day-to-day: `js/data.js`

Everything you see on the site — your name, bio, social links, every
project, publication, blog post, award, training entry, and gallery item —
is one JavaScript object or array in `js/data.js`. Every field has a comment
next to it explaining what it does. To add something new, copy an existing
entry inside the `{ ... }` braces, paste it above/below with a comma between
entries, and change the text. To remove something, delete its entire
`{ ... },` block.

**Newest goes first.** The Home page always shows whichever project,
publication, and blog post is *first* in its array — so add new entries at
the top, not the bottom.

**Rich text formatting.** Any field marked "(HTML allowed)" — mainly a
project's `description` and a blog post's `content` — accepts real HTML:

```html
<b>bold</b>  <i>italic</i>  <u>underline</u>
<span style="color:#e8a23d">custom colored text</span>
<p>a new paragraph</p>   <br>   a line break
<ul><li>a bullet list</li></ul>
```

**Photos & videos on a project/post.** Each project has a `media` array.
Every item needs a `src` (the file path in `assets/img/...`), a `type`
(`"image"` or `"video"`), and a `size` (`"small"`, `"medium"`, or `"large"`)
that controls how big it displays on the page.

## Editing the look (colors, fonts, spacing)

Open `css/style.css` and change the values at the very top, inside `:root`.
Everything else in the file references those variables, so one change
updates the whole site consistently:

- `--bg`, `--panel` — background and card colors
- `--accent`, `--accent-2` — the teal/amber highlight colors used for links,
  hover states, and the animated "charge bar" divider (the EV-battery motif
  used throughout the site)
- `--f-display`, `--f-body`, `--f-mono` — the three fonts in use (headings,
  body text, and data/labels)

## Editing the navigation menu

The dropdown menu (top-right "MENU" button) is generated from the
`NAV_LINKS` list near the top of `js/render.js`. Reorder, rename, or add an
entry there — every page picks it up automatically.

## Previewing your changes before publishing

Just double-click any `.html` file (e.g. `index.html`) to open it in your
browser. Because this site doesn't use a build step, your edits to
`data.js` show up on a normal page refresh — no installation needed.

## Publishing to GitHub Pages

1. Copy every file in this folder into your repository
   `iamsrdas.github.io` (replacing what's there), keeping the same folder
   structure.
2. Commit and push (or upload via the GitHub web UI, in "Add file → Upload
   files", making sure to keep the subfolders intact).
3. In the repo's **Settings → Pages**, make sure the source is set to the
   `main` branch, root folder.
4. Your live site will be at `https://iamsrdas.github.io/` within a couple
   of minutes.

## Replacing the placeholder content

Everything currently on the site is a placeholder so you can see the design
working end-to-end:

- `assets/img/profile.jpg` → replace with your real photo (same filename,
  or update the path in `js/data.js` → `SITE.photo`)
- `assets/img/projects/`, `assets/img/blog/`, `assets/img/gallery/` →
  replace the placeholder images with your real photos/screenshots, same
  filenames or update the paths in `js/data.js`
- `assets/cv/CV.pdf` → replace with your actual CV, exported as a PDF
- `js/data.js` → replace every placeholder text field (name, email, bio,
  each project/publication/post/award/training/gallery entry, and the
  social media URLs)

Nothing else needs to change — the pages will always reflect whatever is in
`js/data.js`.
