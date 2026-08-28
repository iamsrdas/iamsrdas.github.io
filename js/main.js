/* =========================================================================
   MAIN.JS — starts up each page. Reads the current page name from
   <body data-page="..."> and calls the matching render functions.
   You shouldn't need to edit this file.
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || '';
  renderHeader();
  renderFooter(page);

  switch (page) {
    case 'home':         renderHome(); break;
    case 'projects':     renderProjectsGrid(); break;
    case 'project':      renderProjectDetail(); break;
    case 'publications': renderPublications(); break;
    case 'blog':         renderBlogGrid(); break;
    case 'post':          renderPostDetail(); break;
    case 'awards':       renderAwards(); break;
    case 'training':     renderTrainings(); break;
    case 'gallery':      renderGallery(); break;
    case 'contact':      renderContact(); break;
  }
});
