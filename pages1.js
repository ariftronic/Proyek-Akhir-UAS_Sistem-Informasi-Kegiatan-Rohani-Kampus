/* Pages L1-L5 */
function pg(title, body) {
  return `
    <div class="page-header">
      <div class="container">
        <h1>${title}</h1>
      </div>
    </div>
    <div class="section">
      <div class="container">
        ${body}
      </div>
    </div>
  `;
}

const pages1 = {
  beranda: () => `
    <section class="hero">
      <div class="hero-bg-pattern"></div>
      <div class="hero-content">
        <div class="hero-badge">Sistem Informasi Kegiatan Rohani</div>
        <p class="hero-arabic">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
        <h1><span class="gradient-text">SIKRK</span><br>Kegiatan Rohani Kampus</h1>
        <p>Wadah silaturahmi dan pusat informasi kegiatan kerohanian mahasiswa, menyatukan langkah dalam kebaikan di lingkungan kampus.</p>
        <div class="hero-buttons">
          <a href="#" data-page="profil-organisasi" class="btn btn-primary">Jelajahi →</a>
          <a href="#" data-page="jadwal-kegiatan" class="btn btn-outline">Jadwal Kegiatan</a>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Layanan Utama</h2>
          <p>Akses berbagai kemudahan fitur kegiatan rohani kampus kami</p>
          <div class="section-divider"></div>
        </div>
        <div class="card-grid">
          <div class="card fade-in">
            <div class="card-icon">🕌</div>
            <h3>Profil Organisasi</h3>
            <p>Kenali lebih dekat visi, misi, dan struktur kepengurusan organisasi rohani kampus.</p><br>
            <a href="#" data-page="profil-organisasi" class="btn btn-sm btn-outline">Selengkapnya</a>
          </div>
          <div class="card fade-in">
            <div class="card-icon">📅</div>
            <h3>Jadwal Kegiatan</h3>
            <p>Jangan lewatkan kajian, retreat, dan kegiatan positif lainnya yang akan datang.</p><br>
            <a href="#" data-page="jadwal-kegiatan" class="btn btn-sm btn-outline">Lihat Jadwal</a>
          </div>
          <div class="card fade-in">
            <div class="card-icon">📸</div>
            <h3>Galeri & Dokumentasi</h3>
            <p>Kumpulan momen indah dan berkesan dari setiap kegiatan rohani kita.</p><br>
            <a href="#" data-page="galeri-dokumentasi" class="btn btn-sm btn-outline">Lihat Galeri</a>
          </div>
          <div class="card fade-in">
            <div class="card-icon">📝</div>
            <h3>Artikel Rohani</h3>
            <p>Perkaya batin dengan bacaan, renungan, dan inspirasi rohani harian.</p><br>
            <a href="#" data-page="artikel-rohani" class="btn btn-sm btn-outline">Baca Artikel</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="stats-row">
          <div class="stat-card fade-in"><div class="stat-number">1,240</div><div class="stat-label">Anggota Aktif</div></div>
          <div class="stat-card fade-in"><div class="stat-number">86</div><div class="stat-label">Kegiatan/Tahun</div></div>
          <div class="stat-card fade-in"><div class="stat-number">12</div><div class="stat-label">Unit Kerohanian</div></div>
          <div class="stat-card fade-in"><div class="stat-number">4.8★</div><div class="stat-label">Rating Kepuasan</div></div>
        </div>
      </div>
    </section>`,

  "profil-organisasi": () =>
    pg(
      "Profil Organisasi",
      `
      <div class="card-grid">
        <div class="card fade-in">
          <div class="card-icon">📜</div>
          <h3>Visi</h3>
          <p>Mewujudkan lingkungan kampus yang beriman, bermoral, dan menjunjung tinggi nilai-nilai toleransi antar mahasiswa.</p>
        </div>
        <div class="card fade-in">
          <div class="card-icon">🎯</div>
          <h3>Misi</h3>
          <p>Menyelenggarakan kegiatan rohani yang inspiratif guna membangun karakter unggul dan mempererat persaudaraan.</p>
        </div>
        <div class="card fade-in">
          <div class="card-icon">🤝</div>
          <h3>Nilai Inti</h3>
          <p>Keimanan, Kedisiplinan, Kebersamaan, Integritas, dan Semangat Melayani Sesama.</p>
        </div>
      </div>
      <hr class="glow-line">
      
      <div class="section-header"><h2>Jelajahi Lebih Dalam</h2></div>
      <div class="card-grid">
        <div class="card">
          <h3>📖 Sejarah & Struktur</h3>
          <p>Pelajari cerita awal mula berdirinya organisasi dan bagaimana kami terstruktur.</p><br>
          <a href="#" data-page="sejarah-struktur" class="btn btn-sm btn-primary">Buka →</a>
        </div>
        <div class="card">
          <h3>👥 Profil Pengurus</h3>
          <p>Kenali teman-teman pengurus yang berdedikasi melayani kegiatan rohani kampus saat ini.</p><br>
          <a href="#" data-page="profil-pengurus" class="btn btn-sm btn-primary">Buka →</a>
        </div>
      </div>`,
    ),

  "jadwal-kegiatan": () => {
    // Define the component render function if not already globally defined
    if (!window.renderEventsPage) {
      window.selectedFilter = "Semua";
      window.searchQuery = "";
      window.viewType = "card"; // 'card' or 'table'

      window.renderEventsPage = () => {
        const events = window.db.getKegiatan();
        const filtered = events.filter(e => {
          const matchesSearch = e.name.toLowerCase().includes(window.searchQuery.toLowerCase()) ||
                                e.location.toLowerCase().includes(window.searchQuery.toLowerCase());
          
          if (window.selectedFilter === "Semua") return matchesSearch;
          return e.status === window.selectedFilter && matchesSearch;
        });

        // Generate Cards View
        const cardsHTML = filtered.map(e => {
          let badgeClass = "badge-success";
          if (e.status === "Segera") badgeClass = "badge-warning";
          if (e.status === "Pendaftaran") badgeClass = "badge-info";
          if (e.status === "Penuh") badgeClass = "badge-danger";

          const percent = Math.min(Math.round((e.registered / e.quota) * 100), 100);
          
          let emoji = "🕌";
          if (e.id.includes("retreat")) emoji = "⛰️";
          if (e.id.includes("doa")) emoji = "🤲";
          if (e.id.includes("bakti")) emoji = "🎁";
          if (e.id.includes("seminar")) emoji = "💻";
          
          return `
            <div class="card event-card fade-in visible">
              <div class="event-card-header">
                <div class="event-icon-circle">${emoji}</div>
                <span class="badge ${badgeClass}">${e.status}</span>
              </div>
              <h3 class="event-card-title">${e.name}</h3>
              <div class="event-meta-info">
                <p><strong>📅 Tanggal:</strong> ${e.date}</p>
                <p><strong>🕐 Waktu:</strong> ${e.time} WIB</p>
                <p><strong>📍 Lokasi:</strong> ${e.location}</p>
              </div>
              <div class="quota-container">
                <div class="quota-header">
                  <span>Partisipasi</span>
                  <span>${e.registered} / ${e.quota} Terdaftar (${percent}%)</span>
                </div>
                <div class="quota-bar-bg">
                  <div class="quota-bar-fill" style="width: ${percent}%"></div>
                </div>
              </div>
              <div class="event-card-actions">
                <button class="btn btn-sm btn-outline" onclick="window.selectEvent('${e.id}', 'detail-kegiatan')">Lihat Detail</button>
                ${e.status !== 'Penuh' ? `
                  <button class="btn btn-sm btn-primary" onclick="window.selectEvent('${e.id}', 'pendaftaran-kegiatan')">Daftar</button>
                ` : `
                  <button class="btn btn-sm btn-outline" disabled style="cursor:not-allowed;">Penuh</button>
                `}
              </div>
            </div>
          `;
        }).join("");

        // Generate Table View Rows
        const rowsHTML = filtered.map(e => {
          let badgeClass = "badge-success";
          if (e.status === "Segera") badgeClass = "badge-warning";
          if (e.status === "Pendaftaran") badgeClass = "badge-info";
          if (e.status === "Penuh") badgeClass = "badge-danger";

          return `
            <tr>
              <td><strong>${e.name}</strong></td>
              <td>${e.date}</td>
              <td>${e.time} WIB</td>
              <td>${e.location}</td>
              <td><span class="badge ${badgeClass}">${e.status}</span></td>
              <td>
                <div style="display:flex; gap: 8px;">
                  <button class="btn btn-sm btn-outline" style="padding: 4px 12px; font-size:0.75rem;" onclick="window.selectEvent('${e.id}', 'detail-kegiatan')">Detail</button>
                  ${e.status !== 'Penuh' ? `
                    <button class="btn btn-sm btn-primary" style="padding: 4px 12px; font-size:0.75rem;" onclick="window.selectEvent('${e.id}', 'pendaftaran-kegiatan')">Daftar</button>
                  ` : ''}
                </div>
              </td>
            </tr>
          `;
        }).join("");

        const container = document.getElementById("events-display-container");
        if (container) {
          if (window.viewType === "card") {
            container.innerHTML = `<div class="card-grid">${cardsHTML || "<p style='grid-column: 1/-1; text-align:center; color:var(--text-muted); padding: 40px;'>Tidak ada kegiatan yang cocok.</p>"}</div>`;
          } else {
            container.innerHTML = `
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Nama Kegiatan</th>
                      <th>Tanggal Pelaksanaan</th>
                      <th>Waktu</th>
                      <th>Lokasi</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rowsHTML || "<tr><td colspan='6' style='text-align:center;'>Tidak ada kegiatan yang cocok.</td></tr>"}
                  </tbody>
                </table>
              </div>
            `;
          }
        }
      };

      // Handler to select event and navigate
      window.selectEvent = (eventId, targetPage) => {
        window.selectedEventId = eventId;
        navigateTo(targetPage);
      };

      window.setFilter = (filter) => {
        window.selectedFilter = filter;
        document.querySelectorAll(".filter-tag").forEach(btn => {
          btn.classList.toggle("active", btn.dataset.filter === filter);
        });
        window.renderEventsPage();
      };

      window.toggleViewType = (type) => {
        window.viewType = type;
        document.querySelectorAll(".view-toggle-btn").forEach(btn => {
          btn.classList.toggle("active", btn.dataset.view === type);
        });
        window.renderEventsPage();
      };

      window.handleSearchInput = (e) => {
        window.searchQuery = e.target.value;
        window.renderEventsPage();
      };
    }

    // Trigger rendering after injecting container
    setTimeout(() => {
      window.renderEventsPage();
    }, 50);

    return pg(
      "Jadwal Kegiatan",
      `
      <div class="events-controls-row">
        <div class="search-box" style="margin: 0; max-width: 350px;">
          <input class="form-control" placeholder="🔍 Cari nama atau lokasi..." value="${window.searchQuery || ""}" oninput="window.handleSearchInput(event)">
        </div>
        
        <div class="events-filters">
          <button class="tab-btn filter-tag ${window.selectedFilter === "Semua" ? "active" : ""}" data-filter="Semua" onclick="window.setFilter('Semua')">Semua</button>
          <button class="tab-btn filter-tag ${window.selectedFilter === "Terbuka" ? "active" : ""}" data-filter="Terbuka" onclick="window.setFilter('Terbuka')">Terbuka</button>
          <button class="tab-btn filter-tag ${window.selectedFilter === "Pendaftaran" ? "active" : ""}" data-filter="Pendaftaran" onclick="window.setFilter('Pendaftaran')">Pendaftaran</button>
          <button class="tab-btn filter-tag ${window.selectedFilter === "Segera" ? "active" : ""}" data-filter="Segera" onclick="window.setFilter('Segera')">Segera</button>
          <button class="tab-btn filter-tag ${window.selectedFilter === "Penuh" ? "active" : ""}" data-filter="Penuh" onclick="window.setFilter('Penuh')">Penuh</button>
        </div>

        <div class="view-switchers" style="display:flex; gap: 8px;">
          <button class="tab-btn view-toggle-btn ${window.viewType === "card" ? "active" : ""}" data-view="card" onclick="window.toggleViewType('card')" title="Tampilan Kartu">🎴 Kartu</button>
          <button class="tab-btn view-toggle-btn ${window.viewType === "table" ? "active" : ""}" data-view="table" onclick="window.toggleViewType('table')" title="Tampilan Tabel">📋 Tabel</button>
        </div>
      </div>
      
      <br>
      <div id="events-display-container">
        <!-- Will be loaded dynamically -->
      </div>
      `
    );
  },

  "galeri-dokumentasi": () =>
    pg(
      "Galeri & Dokumentasi",
      `
      <div class="gallery-grid">
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(135deg,var(--emerald-dark),var(--purple-deep));display:flex;align-items:center;justify-content:center;font-size:2.5rem">🕌</div>
          <div class="gallery-overlay"><span>Kajian Subuh Berjamaah</span></div>
        </div>
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(165deg,var(--emerald-dark),var(--purple-deep));display:flex;align-items:center;justify-content:center;font-size:2.5rem">⛰️</div>
          <div class="gallery-overlay"><span>Retreat Tahunan 2025</span></div>
        </div>
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(195deg,var(--emerald-dark),var(--purple-deep));display:flex;align-items:center;justify-content:center;font-size:2.5rem">🤲</div>
          <div class="gallery-overlay"><span>Kegiatan Bakti Sosial</span></div>
        </div>
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(225deg,var(--emerald-dark),var(--purple-deep));display:flex;align-items:center;justify-content:center;font-size:2.5rem">🕊️</div>
          <div class="gallery-overlay"><span>Doa Bersama Awal Tahun</span></div>
        </div>
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(255deg,var(--emerald-dark),var(--purple-deep));display:flex;align-items:center;justify-content:center;font-size:2.5rem">📖</div>
          <div class="gallery-overlay"><span>Seminar Kerohanian</span></div>
        </div>
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(285deg,var(--emerald-dark),var(--purple-deep));display:flex;align-items:center;justify-content:center;font-size:2.5rem">🎓</div>
          <div class="gallery-overlay"><span>Pelepasan Wisudawan</span></div>
        </div>
      </div>
      <hr class="glow-line">
      <div class="card-grid">
        <div class="card">
          <h3>📁 Album Foto</h3>
          <p>Cari foto dirimu dari berbagai kegiatan rohani yang telah berlalu.</p><br>
          <a href="#" data-page="album-foto" class="btn btn-sm btn-primary">Buka →</a>
        </div>
        <div class="card">
          <h3>📤 Unggah Dokumentasi</h3>
          <p>Punya jepretan bagus saat acara? Bagikan ke koleksi galeri kami.</p><br>
          <a href="#" data-page="unggah-dokumentasi" class="btn btn-sm btn-primary">Unggah →</a>
        </div>
      </div>`,
    ),
};

window.pages1 = pages1;
