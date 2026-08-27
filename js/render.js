/* =========================================================================
   RENDER.JS — the "engine". You normally don't need to edit this file.
   It reads the arrays from data.js and builds each page's HTML.
   If you want to change WHAT shows up, edit data.js instead.
   If you want to change HOW it looks, edit css/style.css instead.
   This file is only for changing site BEHAVIOUR/STRUCTURE.
   ========================================================================= */

/* ---- small icon set (inline SVG, colored via currentColor) ---- */
const ICONS = {
  linkedin: `<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.32h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-4v-12z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 2c2.71 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.07.06 1.41.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.76 4.9 4.9 0 01-1.76 1.15c-.64.25-1.37.42-2.43.47-1.07.05-1.41.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.76-1.15 4.9 4.9 0 01-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.71 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 015.44 2.53c.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.29 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 8.34 4.27 8.66 4.27 12s.01 3.66.06 4.71c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.71s-.01-3.66-.06-4.71c-.04-.87-.18-1.34-.3-1.65a2.6 2.6 0 00-.66-1.02 2.6 2.6 0 00-1.02-.66c-.31-.12-.78-.26-1.65-.3-1.05-.05-1.37-.06-4.04-.06zm0 4.36a3.84 3.84 0 110 7.68 3.84 3.84 0 010-7.68zm0 1.8a2.04 2.04 0 100 4.08 2.04 2.04 0 000-4.08zm4.89-1.99a.9.9 0 110 1.8.9.9 0 010-1.8z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>`,
  scholar: `<svg viewBox="0 0 24 24"><path d="M12 2L1 8l11 6 9-4.9V17h2V8L12 2zM5 13.2V17c0 2.2 3.1 4 7 4s7-1.8 7-4v-3.8l-7 3.8-7-3.8z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6l-8 6-8-6zm0 3.24V18h16V9.24l-8 6-8-6z"/></svg>`,
  location: `<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>`,
  institution: `<svg viewBox="0 0 24 24"><path d="M12 2L1 8l11 6 9-4.9V17h2V8L12 2zM5 13.2V17c0 2.2 3.1 4 7 4s7-1.8 7-4v-3.8l-7 3.8-7-3.8z"/></svg>`
};

/* ---- NAV LINKS shown in the dropdown menu on every page ---- */
const NAV_LINKS = [
  { key: "home",         label: "Home",                 href: "index.html" },
  { key: "projects",     label: "Projects",              href: "projects.html" },
  { key: "publications", label: "Publications",          href: "publications.html" },
  { key: "blog",         label: "Blog",                  href: "blog.html" },
  { key: "awards",       label: "Awards",                href: "awards.html" },
  { key: "training",     label: "Training & Workshops",  href: "training.html" },
  { key: "gallery",      label: "Gallery",                href: "gallery.html" },
  { key: "cv",           label: "CV",                     href: "cv.html" },
  { key: "contact",      label: "Contact",                href: "contact.html" }
];

function qs(name){
  return new URLSearchParams(window.location.search).get(name);
}

/* ---- header / footer, injected into <div id="site-header">/<div id="site-footer"> ---- */
function renderHeader(active){
  const items = NAV_LINKS.map(l =>
    `<a href="${l.href}" class="charge-link ${l.key === active ? 'active' : ''}">${l.label}</a>`
  ).join('');
  const html = `
    <div class="nav-inner">
      <a class="brand" href="index.html"><span class="dot"></span>${SITE.name}</a>
      <nav class="nav-links">${items}</nav>
    </div>`;
  const el = document.getElementById('site-header');
  if (el) el.innerHTML = html;
}

  const btn = document.getElementById('menuBtn');
  const wrap = document.getElementById('menuWrap');
  if (btn){
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', wrap.classList.contains('open'));
    });
    document.addEventListener('click', () => wrap.classList.remove('open'));
  }
}

function renderFooter(){
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="container foot-inner">
      <p>&copy; ${new Date().getFullYear()} ${SITE.name}. Built with Love using claude.</p>
      <p class="mono">${SITE.institution}</p>
    </div>`;
}

function renderSocialIcons(container){
  const s = SITE.social;
  const map = [
    ['linkedin', s.linkedin], ['facebook', s.facebook], ['instagram', s.instagram],
    ['youtube', s.youtube], ['scholar', s.scholar]
  ];
  container.innerHTML = map
    .filter(([, url]) => url)
    .map(([key, url]) => `<a href="${url}" target="_blank" rel="noopener">${ICONS[key]}</a>`)
    .join('');
}

/* ---- HOME PAGE: hero + "latest" readout cards ---- */
function renderHome(){
  const photo = document.getElementById('heroPhoto');
  if (photo) photo.src = SITE.photo;
  const nameEl = document.getElementById('heroName');
  if (nameEl) nameEl.textContent = SITE.name;
  const roleEl = document.getElementById('heroRole');
  if (roleEl) roleEl.textContent = `${SITE.role} · ${SITE.institution}`;
  const thesisEl = document.getElementById('heroThesis');
  if (thesisEl) thesisEl.textContent = SITE.thesis;
  const socialEl = document.getElementById('heroSocial');
  if (socialEl) renderSocialIcons(socialEl);

  const p = projects[0], pub = publications[0], b = blogPosts[0];
  const readout = document.getElementById('readoutCards');
  if (readout){
    readout.innerHTML = `
      ${p ? `<a class="card-link" href="project.html?id=${p.id}"><div class="card">
        <span class="label">Latest Project</span><h3>${p.title}</h3>
        <span class="date">${p.date}</span><p>${p.summary}</p></div></a>` : ''}
      ${pub ? `<a class="card-link" href="publications.html"><div class="card">
        <span class="label">Latest Publication</span><h3>${pub.title}</h3>
        <span class="date">${pub.venue}, ${pub.year}</span><p>${pub.authors}</p></div></a>` : ''}
      ${b ? `<a class="card-link" href="post.html?id=${b.id}"><div class="card">
        <span class="label">Latest Blog Post</span><h3>${b.title}</h3>
        <span class="date">${b.date}</span><p>${b.excerpt}</p></div></a>` : ''}
    `;
  }
}

/* ---- PROJECTS LIST ---- */
function renderProjectsGrid(){
  const el = document.getElementById('projectsGrid');
  if (!el) return;
  if (!projects.length){ el.innerHTML = emptyNote('projects'); return; }
  el.innerHTML = projects.map(p => `
    <a class="card-link" href="project.html?id=${p.id}">
      <div class="card">
        <img src="${p.cover}" alt="${p.title}">
        <span class="date">${p.date}</span>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div>${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </a>`).join('');
}

/* ---- PROJECT DETAIL ---- */
function renderProjectDetail(){
  const el = document.getElementById('projectDetail');
  if (!el) return;
  const p = projects.find(x => x.id === qs('id')) || projects[0];
  if (!p){ el.innerHTML = emptyNote('projects'); return; }
  document.title = `${p.title} — ${SITE.name}`;
  el.innerHTML = `
    <span class="eyebrow">Project · ${p.date}</span>
    <h1>${p.title}</h1>
    <div>${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="detail-media">
      ${p.media.map(m => mediaTag(m)).join('')}
    </div>
    <div class="detail-body">${p.description}</div>
    <p>
      ${p.links.repo ? `<a class="btn outline" href="${p.links.repo}" target="_blank">View Repository</a>` : ''}
      ${p.links.demo ? `<a class="btn outline" href="${p.links.demo}" target="_blank">Live Demo</a>` : ''}
    </p>`;
}

function mediaTag(m){
  const cls = `media-${m.size || 'medium'}`;
  const el = m.type === 'video'
    ? `<video src="${m.src}" class="${cls}" controls></video>`
    : `<img src="${m.src}" class="${cls}" alt="${m.caption || ''}">`;
  return `<figure style="margin:0">${el}${m.caption ? `<figcaption class="muted mono" style="font-size:.8rem;margin-top:6px">${m.caption}</figcaption>` : ''}</figure>`;
}

/* ---- PUBLICATIONS ---- */
function renderPublications(){
  const el = document.getElementById('pubList');
  if (!el) return;
  if (!publications.length){ el.innerHTML = emptyNote('publications'); return; }
  el.innerHTML = publications.map(pub => `
    <div class="card" style="margin-bottom:16px">
      <span class="date">${pub.venue} · ${pub.year}</span>
      <h3>${pub.title}</h3>
      <p class="muted">${pub.authors}</p>
      <p>${pub.abstract || ''}</p>
      <p>
        ${pub.link ? `<a href="${pub.link}" target="_blank">View Publication →</a>` : ''}
        ${pub.pdf ? ` &nbsp;·&nbsp; <a href="${pub.pdf}" target="_blank">PDF</a>` : ''}
      </p>
    </div>`).join('');
}

/* ---- BLOG LIST ---- */
function renderBlogGrid(){
  const el = document.getElementById('blogGrid');
  if (!el) return;
  if (!blogPosts.length){ el.innerHTML = emptyNote('blog posts'); return; }
  el.innerHTML = blogPosts.map(b => `
    <a class="card-link" href="post.html?id=${b.id}">
      <div class="card">
        <img src="${b.cover}" alt="${b.title}">
        <span class="date">${b.date}</span>
        <h3>${b.title}</h3>
        <p>${b.excerpt}</p>
      </div>
    </a>`).join('');
}

/* ---- BLOG DETAIL ---- */
function renderPostDetail(){
  const el = document.getElementById('postDetail');
  if (!el) return;
  const b = blogPosts.find(x => x.id === qs('id')) || blogPosts[0];
  if (!b){ el.innerHTML = emptyNote('blog posts'); return; }
  document.title = `${b.title} — ${SITE.name}`;
  el.innerHTML = `
    <span class="eyebrow">Blog · ${b.date}</span>
    <h1>${b.title}</h1>
    <img src="${b.cover}" style="margin:20px 0;max-width:600px" alt="${b.title}">
    <div class="detail-body">${b.content}</div>`;
}

/* ---- AWARDS ---- */
function renderAwards(){
  const el = document.getElementById('awardsList');
  if (!el) return;
  if (!awards.length){ el.innerHTML = emptyNote('awards'); return; }
  el.innerHTML = awards.map(a => `
    <div class="card" style="margin-bottom:14px">
      <span class="date">${a.year} · ${a.org}</span>
      <h3>${a.title}</h3>
      <p>${a.description}</p>
    </div>`).join('');
}

/* ---- TRAINING ---- */
function renderTrainings(){
  const el = document.getElementById('trainingList');
  if (!el) return;
  if (!trainings.length){ el.innerHTML = emptyNote('training entries'); return; }
  el.innerHTML = trainings.map(t => `
    <div class="card" style="margin-bottom:14px">
      <span class="date">${t.year} · ${t.org}</span>
      <h3>${t.title}</h3>
      <p>${t.description}</p>
    </div>`).join('');
}

/* ---- GALLERY + lightbox ---- */
function renderGallery(){
  const el = document.getElementById('galleryGrid');
  if (!el) return;
  if (!gallery.length){ el.innerHTML = emptyNote('gallery items'); return; }
  el.innerHTML = gallery.map((g, i) => `
    <figure data-index="${i}">
      ${g.type === 'video' ? `<video src="${g.src}" muted></video>` : `<img src="${g.src}" alt="${g.caption || ''}">`}
      <figcaption>${g.caption || ''}</figcaption>
    </figure>`).join('');

  const box = document.getElementById('lightbox');
  el.querySelectorAll('figure').forEach(fig => {
    fig.addEventListener('click', () => {
      const g = gallery[fig.dataset.index];
      box.querySelector('.lightbox-content').innerHTML = g.type === 'video'
        ? `<video src="${g.src}" controls autoplay></video>`
        : `<img src="${g.src}" alt="${g.caption || ''}">`;
      box.classList.add('open');
    });
  });
  const closeBtn = box && box.querySelector('.close');
  if (closeBtn) closeBtn.addEventListener('click', () => box.classList.remove('open'));
  if (box) box.addEventListener('click', (e) => { if (e.target === box) box.classList.remove('open'); });
}

/* ---- CONTACT PAGE ---- */
function renderContact(){
  const el = document.getElementById('contactCard');
  if (!el) return;
  el.innerHTML = `
    <div class="contact-row"><span class="ic">${ICONS.mail}</span><a href="mailto:${SITE.email}">${SITE.email}</a></div>
    <div class="contact-row"><span class="ic">${ICONS.institution}</span><span>${SITE.institution}</span></div>
    <div class="contact-row"><span class="ic">${ICONS.location}</span><span>${SITE.location}</span></div>`;
  const socialEl = document.getElementById('contactSocial');
  if (socialEl) renderSocialIcons(socialEl);
}

function emptyNote(label){
  return `<p class="empty-note">No ${label} yet — add one in <code>js/data.js</code>.</p>`;
}
