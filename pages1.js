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
    const events = window.db.getKegiatan();
    const rows = events.map(e => {
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
        </tr>
      `;
    }).join("");

    return pg(
      "Jadwal Kegiatan",
      `
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nama Kegiatan</th>
              <th>Tanggal Pelaksanaan</th>
              <th>Waktu</th>
              <th>Lokasi</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
      <br>
      <div class="card-grid">
        <div class="card">
          <h3>📋 Detail Kegiatan</h3>
          <p>Baca rincian acara, pemateri, dan perlengkapan yang dibutuhkan.</p><br>
          <a href="#" data-page="detail-kegiatan" class="btn btn-sm btn-primary">Buka →</a>
        </div>
        <div class="card">
          <h3>✍️ Pendaftaran</h3>
          <p>Tertarik ikut? Daftarkan dirimu segera sebelum kuota penuh.</p><br>
          <a href="#" data-page="pendaftaran-kegiatan" class="btn btn-sm btn-primary">Daftar →</a>
        </div>
      </div>`,
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
