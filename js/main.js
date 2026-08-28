/* =========================================================================
   MAIN.JS — starts up each page. Reads the current page name from
   <body data-page="..."> and calls the matching render functions.
   You shouldn't need to edit this file.
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderModalShell();   // sets up the popup used by every card on every page

  const page = document.body.dataset.page || '';
  renderHeader(page);
  renderFooter();

  switch (page) {
    case 'home':         renderHome(); break;
    case 'projects':     renderProjectsGrid(); break;
    case 'publications': renderPublications(); break;
    case 'blog':         renderBlogGrid(); break;
    case 'awards':       renderAwards(); break;
    case 'training':     renderTrainings(); break;
    case 'gallery':      renderGallery(); break;
    case 'contact':      renderContact(); break;
  }
});
