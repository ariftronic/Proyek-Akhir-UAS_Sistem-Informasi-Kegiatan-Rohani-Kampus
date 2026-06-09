/* SIKRK - Main App - Combines all page modules */
window.renderPage = function (pageId) {
  const allPages = Object.assign(
    {},
    window.pages1 || {},
    window.pages2 || {},
    window.pages3 || {},
  );
  const renderer = allPages[pageId];
  if (renderer) return renderer();
  return `<div class="page-header"><div class="container"><h1>Halaman Tidak Ditemukan</h1><p>Kembali ke <a href="#" data-page="beranda">Beranda</a></p></div></div>`;
};
