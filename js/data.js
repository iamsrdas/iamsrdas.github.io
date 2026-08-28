/* =========================================================================
   DATA.JS  —  THIS IS THE ONLY FILE YOU SHOULD NEED TO EDIT DAY-TO-DAY.
   -------------------------------------------------------------------------
   Every page on the site (home, projects, publications, blog, awards,
   training, gallery) reads its content from the objects below and builds
   the page automatically. To add, remove, or change something, edit the
   arrays here — you never need to touch the .html files themselves.

   RULES THAT MATTER:
   1. Keep the commas between items. Every "{ ... }," entry is one card.
   2. Put NEW entries at the TOP of an array. The home page always shows
      whichever item is FIRST in "projects", "publications" and "blog" —
      so item [0] = "latest".
   3. Any field marked "(HTML allowed)" can contain formatting tags:
        <b>bold</b>  <i>italic</i>  <u>underline</u>
        <span style="color:#e8a23d">colored text</span>
        <br> for a line break, <p>...</p> for a new paragraph.
      Just be careful to close every tag you open.
   4. "size" on a media item controls how big the image/video shows on the
      detail page. Options: "small", "medium", "large".
   5. Image/video files themselves go in the /assets/img/... folders and
      you just reference the file path here, e.g. "assets/img/projects/ev1.jpg".
   ========================================================================= */

/* ---------------------------------------------------------------------
   1) SITE-WIDE INFO — used in the navbar, hero, footer, and contact page
   --------------------------------------------------------------------- */
const SITE = {
  name: "Shuvo Ronjon Das",          // EDIT: your full name — shown in the hero heading, browser tab title, and footer
  role: "Electrical Engineer & Researcher",   // EDIT: your title/tagline — shown right after your name in the hero heading
  institution: "Indian Institute of Technology Roorkee",
  location: "Roorkee, Uttarakhand, India",
  thesis: "Researching power electronics and battery management strategies for next-generation electric vehicles, with a long-term goal of pursuing a funded PhD abroad.",
  photo: "assets/img/profile.jpg",   // EDIT: replace this file with your photo (same name, or update the path)
  email: "you@example.com",          // EDIT
  cvFile: "assets/cv/CV.pdf",        // EDIT: drop your CV PDF into assets/cv/ with this name

  // EDIT each URL below. Leave the quotes empty ("") to hide an icon site-wide.
  social: {
    linkedin:  "https://linkedin.com/in/yourprofile",
    facebook:  "https://facebook.com/yourprofile",
    instagram: "https://instagram.com/yourprofile",
    youtube:   "https://youtube.com/@yourchannel",
    scholar:   "https://scholar.google.com/citations?user=XXXXXXX"
  }
};

/* ---------------------------------------------------------------------
   2) PROJECTS — powers the Projects page AND each project's own detail
      page (project.html?id=...). Newest project first.
   --------------------------------------------------------------------- */
const projects = [
  {
    id: "battery-thermal-management",     // EDIT: unique short id, no spaces (used in the URL)
    title: "Battery Thermal Management System for EV Packs",
    date: "2026-08",                      // YYYY-MM, used for sorting/display
    tags: ["Battery Systems", "Thermal Design", "MATLAB/Simulink"],
    cover: "assets/img/projects/placeholder-1.jpg",   // shown on cards
    summary: "A liquid-cooling control strategy that keeps an EV battery pack within its safe operating window under fast-charging loads.",
    // Full write-up, shown only on the project's own detail page. HTML allowed.
    description: `
      <p>This project designs and simulates a <b>closed-loop thermal management
      strategy</b> for a lithium-ion EV battery pack, targeting stable cell
      temperatures during DC fast charging.</p>
      <p>Key contributions:</p>
      <ul>
        <li>Built a lumped-parameter thermal model of an 18650 module in Simulink</li>
        <li>Designed a <span style="color:var(--accent-2)">PID coolant-flow controller</span> to hold cells under 40&deg;C</li>
        <li>Validated results against bench test data from the EV lab</li>
      </ul>
      <blockquote>Replace this paragraph with your own abstract, methodology and results.</blockquote>
    `,
    // Photos/videos for the detail page. type: "image" or "video". size: "small" | "medium" | "large"
    media: [
      { type: "image", src: "assets/img/projects/placeholder-1.jpg", size: "large", caption: "Test setup / model overview" },
      { type: "image", src: "assets/img/projects/placeholder-2.jpg", size: "medium", caption: "Simulation results" }
    ],
    links: { repo: "", demo: "" }        // EDIT: GitHub repo / live demo URLs, or leave blank
  },
  {
    id: "example-project-2",
    title: "Example Second Project — replace me",
    date: "2026-03",
    tags: ["Tag One", "Tag Two"],
    cover: "assets/img/projects/placeholder-2.jpg",
    summary: "One or two sentence summary that appears on the card in the Projects grid.",
    description: `<p>Write the full project description here. This box accepts <b>bold</b>, <i>italic</i>, and <span style="color:var(--accent)">colored</span> text.</p>`,
    media: [
      { type: "image", src: "assets/img/projects/placeholder-2.jpg", size: "medium", caption: "" }
    ],
    links: { repo: "", demo: "" }
  }
];

/* ---------------------------------------------------------------------
   3) PUBLICATIONS — powers the Publications page. Newest first.
   --------------------------------------------------------------------- */
const publications = [
  {
    title: "Example Paper Title — replace with your publication",
    authors: "S. Das, Co-Author A, Co-Author B",
    venue: "IEEE Transactions on Transportation Electrification",
    year: "2026",
    link: "",     // EDIT: DOI or journal URL
    pdf: "",      // EDIT: path to a local PDF, e.g. "assets/cv/paper1.pdf", or leave blank
    abstract: "Short abstract or summary of the paper (HTML allowed)."
  }
];

/* ---------------------------------------------------------------------
   4) BLOG — powers the Blog page AND each post's detail page
      (post.html?id=...). Newest first.
   --------------------------------------------------------------------- */
const blogPosts = [
  {
    id: "first-post",
    title: "Starting my M.Tech in EV Technology at IIT Roorkee",
    date: "2026-08-20",
    cover: "assets/img/blog/placeholder-1.jpg",
    excerpt: "A short teaser shown on the blog list and the homepage.",
    content: `
      <p>Write your full blog post here. HTML formatting is allowed:</p>
      <p><b>bold</b>, <i>italic</i>, <span style="color:var(--accent-2)">colored text</span>, links, etc.</p>
    `
  }
];

/* ---------------------------------------------------------------------
   5) AWARDS — powers the Awards page. Newest first.
   --------------------------------------------------------------------- */
const awards = [
  {
    title: "ICCR Suborno Jayanti Scholarship",
    org: "Indian Council for Cultural Relations",
    year: "2025",
    description: "Full scholarship awarded for M.Tech study in India."
  }
];

/* ---------------------------------------------------------------------
   6) TRAINING & WORKSHOPS — powers the Training page. Newest first.
   --------------------------------------------------------------------- */
const trainings = [
  {
    title: "Example Workshop — replace me",
    org: "Organizing Institution",
    year: "2026",
    description: "One or two lines describing what the training covered."
  }
];

/* ---------------------------------------------------------------------
   7) GALLERY — powers the Gallery page. type: "image" or "video".
   --------------------------------------------------------------------- */
const gallery = [
  { type: "image", src: "assets/img/gallery/placeholder-1.jpg", caption: "Lab / campus / event photo — replace me" },
  { type: "image", src: "assets/img/gallery/placeholder-2.jpg", caption: "Another photo — replace me" }
];
