/* SIKRK Router & Core Logic */
const LAYER_MAP = {
  beranda: { layer: 1, parent: null, title: "Beranda" },
  "profil-organisasi": {
    layer: 2,
    parent: "beranda",
    title: "Profil Organisasi",
  },
  "jadwal-kegiatan": { layer: 2, parent: "beranda", title: "Jadwal Kegiatan" },
  "galeri-dokumentasi": {
    layer: 2,
    parent: "beranda",
    title: "Galeri & Dokumentasi",
  },
  "sejarah-struktur": {
    layer: 3,
    parent: "profil-organisasi",
    title: "Sejarah & Struktur",
  },
  "detail-kegiatan": {
    layer: 3,
    parent: "jadwal-kegiatan",
    title: "Detail Kegiatan",
  },
  "album-foto": { layer: 3, parent: "galeri-dokumentasi", title: "Album Foto" },
  "profil-pengurus": {
    layer: 4,
    parent: "sejarah-struktur",
    title: "Profil Pengurus",
  },
  "pendaftaran-kegiatan": {
    layer: 4,
    parent: "detail-kegiatan",
    title: "Pendaftaran Kegiatan",
  },
  "unggah-dokumentasi": {
    layer: 4,
    parent: "album-foto",
    title: "Unggah Dokumentasi",
  },
  "artikel-rohani": {
    layer: 5,
    parent: "profil-pengurus",
    title: "Artikel Rohani",
  },
  "status-pendaftaran": {
    layer: 5,
    parent: "pendaftaran-kegiatan",
    title: "Status Pendaftaran",
  },
  "laporan-kegiatan": {
    layer: 5,
    parent: "unggah-dokumentasi",
    title: "Laporan Kegiatan",
  },
  "detail-artikel": {
    layer: 6,
    parent: "artikel-rohani",
    title: "Detail Artikel",
  },
  "dashboard-peserta": {
    layer: 6,
    parent: "status-pendaftaran",
    title: "Dashboard Peserta",
  },
  "unduh-laporan": {
    layer: 6,
    parent: "laporan-kegiatan",
    title: "Unduh Laporan",
  },
  "komentar-diskusi": {
    layer: 7,
    parent: "detail-artikel",
    title: "Komentar & Diskusi",
  },
  notifikasi: { layer: 7, parent: "dashboard-peserta", title: "Notifikasi" },
  "statistik-kegiatan": {
    layer: 7,
    parent: "unduh-laporan",
    title: "Statistik Kegiatan",
  },
  "moderasi-komentar": {
    layer: 8,
    parent: "komentar-diskusi",
    title: "Moderasi Komentar",
  },
  "pengaturan-akun": {
    layer: 8,
    parent: "notifikasi",
    title: "Pengaturan Akun",
  },
  "manajemen-data": {
    layer: 8,
    parent: "statistik-kegiatan",
    title: "Manajemen Data",
  },
  "log-aktivitas": {
    layer: 9,
    parent: "moderasi-komentar",
    title: "Log Aktivitas",
  },
  "backup-restore": {
    layer: 9,
    parent: "pengaturan-akun",
    title: "Backup & Restore",
  },
  "hak-akses": { layer: 9, parent: "manajemen-data", title: "Hak Akses" },
  "audit-trail": { layer: 10, parent: "log-aktivitas", title: "Audit Trail" },
  "kebijakan-bantuan": {
    layer: 10,
    parent: "backup-restore",
    title: "Kebijakan & Bantuan",
  },
  "integrasi-sistem": {
    layer: 10,
    parent: "hak-akses",
    title: "Integrasi Sistem",
  },
  login: { layer: 1, parent: null, title: "Masuk / Login" },
  register: { layer: 1, parent: null, title: "Daftar Anggota" },
};

function getBreadcrumb(pageId) {
  const crumbs = [];
  let current = pageId;
  while (current) {
    const info = LAYER_MAP[current];
    if (!info) break;
    crumbs.unshift({ id: current, title: info.title, layer: info.layer });
    current = info.parent;
  }
  return crumbs;
}

function renderBreadcrumb(pageId) {
  const bar = document.getElementById("breadcrumb-bar");
  const bc = document.getElementById("breadcrumb");
  if (pageId === "beranda") {
    bar.style.display = "none";
    return;
  }
  bar.style.display = "block";
  const crumbs = getBreadcrumb(pageId);
  bc.innerHTML = crumbs
    .map((c, i) => {
      if (i === crumbs.length - 1)
        return `<span class="current">${c.title}</span>`;
      return `<a href="#" data-page="${c.id}">${c.title}</a><span class="sep">›</span>`;
    })
    .join(" ");
}

function navigateTo(pageId) {
  if (!LAYER_MAP[pageId] && pageId !== "beranda") pageId = "beranda";
  const content = document.getElementById("app-content");
  content.style.opacity = "0";
  setTimeout(() => {
    content.innerHTML = window.renderPage(pageId);
    renderBreadcrumb(pageId);
    updateActiveNav(pageId);
    content.style.opacity = "1";
    if (pageId !== "beranda") window.scrollTo({ top: 0, behavior: "smooth" });
    document.querySelectorAll("[data-page]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(el.dataset.page);
      });
    });
    document.querySelectorAll(".fade-in").forEach((el) => {
      setTimeout(() => el.classList.add("visible"), 100);
    });
  }, 200);
}

function updateActiveNav(pageId) {
  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.remove("active"));
  const link = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (link) link.classList.add("active");
}

function initApp() {
  // Preloader
  setTimeout(
    () => document.getElementById("preloader").classList.add("hidden"),
    1800,
  );

  // Content transition
  document.getElementById("app-content").style.transition = "opacity 0.2s ease";

  // Nav scroll effect
  window.addEventListener("scroll", () => {
    document
      .getElementById("main-nav")
      .classList.toggle("scrolled", window.scrollY > 50);
    document
      .getElementById("back-to-top")
      .classList.toggle("visible", window.scrollY > 400);
  });

  // Back to top
  document.getElementById("back-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Initialize Auth navbar state
  if (window.updateNavbarState) {
    window.updateNavbarState();
  }

  // Mobile toggle with hamburger animation
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  // Mobile dropdowns
  document.querySelectorAll(".nav-dropdown > .nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });

  // Nav links
  document.querySelectorAll("[data-page]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(el.dataset.page);
      navMenu.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });

  // Initial page
  navigateTo("beranda");
}

document.addEventListener("DOMContentLoaded", initApp);
