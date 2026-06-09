/* Pages L3-L6 */
const pages2 = {
  "sejarah-struktur": () =>
    pg(
      "Sejarah & Struktur",
      `
      <div class="timeline fade-in">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>2010</h4>
          <h3>Pembentukan Komunitas Awal</h3>
          <p>Berawal dari perkumpulan kecil mahasiswa yang rutin mengadakan diskusi kerohanian di pelataran masjid kampus.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>2015</h4>
          <h3>Pengesahan Unit Kegiatan Mahasiswa (UKM)</h3>
          <p>Diakui secara resmi oleh rektorat. Mulai membentuk divisi-divisi seperti sosial, pendidikan, dan hubungan antar iman.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>2020</h4>
          <h3>Langkah Menuju Era Digital</h3>
          <p>Memanfaatkan teknologi untuk menjangkau lebih banyak mahasiswa, termasuk peluncuran platform pendaftaran kegiatan daring.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>2026</h4>
          <h3>Peluncuran SIKRK</h3>
          <p>Perilisan Sistem Informasi Kegiatan Rohani Kampus yang terintegrasi secara komprehensif untuk seluruh sivitas akademika.</p>
        </div>
      </div>
      <hr class="glow-line">
      
      <h3>Struktur Organisasi Saat Ini</h3>
      <br>
      <div class="card-grid">
        <div class="card">
          <h3>🏛️ Dewan Pembina</h3>
          <p>Dr. H. Ahmad Fauzi, M.Ag.<br><small style="color:var(--text-muted)">Dosen Fakultas Ilmu Agama</small></p>
        </div>
        <div class="card">
          <h3>👑 Ketua Umum</h3>
          <p>Muhammad Rizki Amanullah<br><small style="color:var(--text-muted)">Teknik Informatika '23</small></p>
        </div>
        <div class="card">
          <h3>📋 Sekretaris</h3>
          <p>Siti Nurhaliza Putri<br><small style="color:var(--text-muted)">Sastra Arab '24</small></p>
        </div>
        <div class="card">
          <h3>💰 Bendahara</h3>
          <p>Yohanes Kristianto<br><small style="color:var(--text-muted)">Akuntansi '23</small></p>
        </div>
      </div>
      <br>
      <a href="#" data-page="profil-pengurus" class="btn btn-primary">Lihat Detail Pengurus →</a>`,
    ),

  "detail-kegiatan": () =>
    pg(
      "Detail Kegiatan",
      `
      <div class="card fade-in" style="margin-bottom:24px">
        <span class="badge badge-success">Pendaftaran Masih Dibuka</span>
        <h3 style="margin-top:12px">🕌 Kajian Rutin Subuh Berjamaah — Edisi Bulan Ini</h3>
        <p>Mari awali pagi dengan keberkahan. Kajian rutin setiap Jumat subuh kali ini akan membedah tafsir Al-Quran surah Al-Kahfi dan hadits pilihan bersama Ustadz kampus tercinta.</p>
        <br>
        <div class="form-row">
          <div><strong>📅 Tanggal:</strong> Setiap Jumat, Juni 2026</div>
          <div><strong>🕐 Waktu:</strong> 05:00 - 06:30 WIB</div>
        </div>
        <div class="form-row">
          <div><strong>📍 Lokasi:</strong> Masjid Utama Kampus</div>
          <div><strong>👥 Sisa Kuota:</strong> 45 dari 150 peserta</div>
        </div>
      </div>
      
      <div class="card fade-in" style="margin-bottom:24px">
        <span class="badge badge-warning">Hampir Penuh</span>
        <h3 style="margin-top:12px">⛰️ Retreat Kerohanian Semester Genap</h3>
        <p>Bebaskan pikiran sejenak dari hiruk-pikuk tugas kuliah. Kegiatan penguatan spiritual selama 3 hari 2 malam di alam terbuka, diisi dengan materi character building dan renungan malam.</p>
        <br>
        <div class="form-row">
          <div><strong>📅 Tanggal:</strong> 20-22 Juni 2026</div>
          <div><strong>📍 Lokasi:</strong> Wisma Alam Asri, Puncak</div>
        </div>
      </div>
      
      <div class="card-grid">
        <div class="card">
          <h3>✍️ Tertarik Ikut?</h3>
          <p>Pastikan kamu sudah mendaftar agar kami bisa menyiapkan konsumsi dan fasilitas untukmu.</p><br>
          <a href="#" data-page="pendaftaran-kegiatan" class="btn btn-sm btn-primary">Daftar Sekarang →</a>
        </div>
      </div>`,
    ),

  "album-foto": () =>
    pg(
      "Album Foto",
      `
      <div class="tabs">
        <button class="tab-btn active">Tahun 2026</button>
        <button class="tab-btn">Tahun 2025</button>
        <button class="tab-btn">Tahun 2024</button>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(100deg,hsl(30,40%,25%),hsl(60,50%,15%));display:flex;align-items:center;justify-content:center;font-size:2rem">🌅</div>
          <div class="gallery-overlay"><span>Kajian Subuh Awal Tahun</span></div>
        </div>
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(125deg,hsl(65,40%,25%),hsl(95,50%,15%));display:flex;align-items:center;justify-content:center;font-size:2rem">📿</div>
          <div class="gallery-overlay"><span>Dzikir Bersama</span></div>
        </div>
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(150deg,hsl(100,40%,25%),hsl(130,50%,15%));display:flex;align-items:center;justify-content:center;font-size:2rem">⛰️</div>
          <div class="gallery-overlay"><span>Momen Retreat Puncak</span></div>
        </div>
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(175deg,hsl(135,40%,25%),hsl(165,50%,15%));display:flex;align-items:center;justify-content:center;font-size:2rem">🎁</div>
          <div class="gallery-overlay"><span>Penyerahan Bantuan Baksos</span></div>
        </div>
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(200deg,hsl(170,40%,25%),hsl(200,50%,15%));display:flex;align-items:center;justify-content:center;font-size:2rem">🕊️</div>
          <div class="gallery-overlay"><span>Diskusi Lintas Iman</span></div>
        </div>
        <div class="gallery-item fade-in">
          <div style="width:100%;height:100%;background:linear-gradient(225deg,hsl(205,40%,25%),hsl(235,50%,15%));display:flex;align-items:center;justify-content:center;font-size:2rem">🎓</div>
          <div class="gallery-overlay"><span>Wisuda Angkatan 2022</span></div>
        </div>
      </div>
      <br>
      <a href="#" data-page="unggah-dokumentasi" class="btn btn-outline">📤 Bagikan Dokumentasimu</a>`,
    ),

  "profil-pengurus": () =>
    pg(
      "Profil Pengurus",
      `
      <div class="card-grid">
        <div class="card fade-in">
          <div class="card-icon">👤</div>
          <h3>Muhammad Rizki Amanullah</h3>
          <p><strong>Ketua Umum</strong></p>
          <p>Mahasiswa Teknik Informatika angkatan 2023. Senang mengkolaborasikan teknologi dengan dakwah.</p>
        </div>
        <div class="card fade-in">
          <div class="card-icon">👤</div>
          <h3>Siti Nurhaliza Putri</h3>
          <p><strong>Sekretaris Umum</strong></p>
          <p>Mahasiswa Sastra Arab angkatan 2024. Teliti, cekatan, dan penjaga kerapian administrasi organisasi.</p>
        </div>
        <div class="card fade-in">
          <div class="card-icon">👤</div>
          <h3>Yohanes Kristianto</h3>
          <p><strong>Bendahara</strong></p>
          <p>Mahasiswa Akuntansi angkatan 2023. Transparan dan akurat dalam mengelola amanah keuangan.</p>
        </div>
        <div class="card fade-in">
          <div class="card-icon">👤</div>
          <h3>Fatimah Az-Zahra</h3>
          <p><strong>Koordinator Divisi Kajian</strong></p>
          <p>Mahasiswa PAI angkatan 2024. Merancang silabus kurikulum rohani sepanjang semester.</p>
        </div>
        <div class="card fade-in">
          <div class="card-icon">👤</div>
          <h3>David Setiawan</h3>
          <p><strong>Koordinator Divisi Sosial</strong></p>
          <p>Mahasiswa Sosiologi angkatan 2024. Paling aktif turun tangan dalam kegiatan bakti sosial masyarakat.</p>
        </div>
        <div class="card fade-in">
          <div class="card-icon">👤</div>
          <h3>Aisyah Rahmawati</h3>
          <p><strong>Koordinator Divisi Media</strong></p>
          <p>Mahasiswa DKV angkatan 2025. Desainer grafis handal di balik semua poster dan publikasi kita.</p>
        </div>
      </div>
      <hr class="glow-line">
      <a href="#" data-page="artikel-rohani" class="btn btn-primary">📝 Jelajahi Tulisan & Artikel Kami →</a>`,
    ),

  "pendaftaran-kegiatan": () =>
    pg(
      "Pendaftaran Kegiatan",
      `
      <div class="card fade-in">
        <h3>📝 Formulir Keikutsertaan</h3><br>
        <div class="form-row">
          <div class="form-group">
            <label>Nama Lengkap Sesuai KTM</label>
            <input class="form-control" placeholder="Contoh: Budi Santoso">
          </div>
          <div class="form-group">
            <label>NIM (Nomor Induk Mahasiswa)</label>
            <input class="form-control" placeholder="Contoh: 102345678">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Fakultas / Program Studi</label>
            <input class="form-control" placeholder="Contoh: Fakultas Teknik / Informatika">
          </div>
          <div class="form-group">
            <label>Nomor WhatsApp Aktif</label>
            <input class="form-control" placeholder="08xx-xxxx-xxxx">
          </div>
        </div>
        <div class="form-group">
          <label>Kegiatan yang Ingin Diikuti</label>
          <select class="form-control">
            <option>— Pilih Kegiatan Tersedia —</option>
            <option>Kajian Rutin Subuh Berjamaah</option>
            <option>Retreat Kerohanian Semester Genap</option>
            <option>Doa Bersama Masa Ujian</option>
            <option>Bakti Sosial Panti Asuhan</option>
          </select>
        </div>
        <div class="form-group">
          <label>Apa harapan atau motivasimu mengikuti kegiatan ini?</label>
          <textarea class="form-control" placeholder="Ceritakan singkat motivasimu..."></textarea>
        </div>
        <button class="btn btn-primary" onclick="alert('Alhamdulillah, formulir pendaftaranmu sudah kami terima! Silakan tunggu konfirmasi panitia lewat WhatsApp.')">Kirim Formulir →</button>
      </div>
      <br>
      <a href="#" data-page="status-pendaftaran" class="btn btn-outline">📊 Cek Status Konfirmasi</a>`,
    ),

  "unggah-dokumentasi": () =>
    pg(
      "Unggah Dokumentasi",
      `
      <div class="card fade-in">
        <h3>📤 Kontribusi Dokumentasi Acara</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 20px;">Punya hasil jepretan atau rekaman momen menarik? Yuk kumpulkan di sini agar bisa jadi kenangan bersama.</p>
        <div class="form-group">
          <label>Judul Dokumentasi</label>
          <input class="form-control" placeholder="Contoh: Suasana Malam Keakraban Retreat">
        </div>
        <div class="form-group">
          <label>Dari Kegiatan Apa?</label>
          <select class="form-control">
            <option>— Pilih Nama Kegiatan —</option>
            <option>Kajian Rutin Subuh</option>
            <option>Retreat Kerohanian</option>
            <option>Bakti Sosial</option>
            <option>Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label>Pilih File (Foto / Video)</label>
          <input type="file" class="form-control" accept="image/*,video/*" multiple>
        </div>
        <div class="form-group">
          <label>Catatan atau Cerita Singkat</label>
          <textarea class="form-control" placeholder="Ceritain sedikit dong keseruan di momen ini..."></textarea>
        </div>
        <button class="btn btn-primary" onclick="alert('Terima kasih! Dokumentasimu berhasil diunggah ke server dan sedang ditinjau oleh admin divisi media.')">Unggah Sekarang →</button>
      </div>
      <br>
      <a href="#" data-page="laporan-kegiatan" class="btn btn-outline">📊 Laporan & Evaluasi Kegiatan</a>`,
    ),

  "artikel-rohani": () =>
    pg(
      "Artikel Rohani",
      `
      <div class="search-box">
        <input class="form-control" placeholder="🔍 Cari judul bacaan, ustadz, atau topik...">
        <button class="btn btn-primary btn-sm">Cari</button>
      </div>
      <div class="card-grid">
        <div class="card fade-in">
          <div class="card-icon">🌙</div>
          <h3>Menjemput Rahmat di Sepertiga Malam</h3>
          <p>Mendalami hikmah tersembunyi dan ketenangan batin yang didapat dari bangun menunaikan sholat tahajud.</p>
          <br><small style="color:var(--text-muted)">Ditulis 15 Jun 2026</small><br><br>
          <a href="#" data-page="detail-artikel" class="btn btn-sm btn-outline">Baca Selengkapnya →</a>
        </div>
        <div class="card fade-in">
          <div class="card-icon">🕊️</div>
          <h3>Indahnya Hidup Berdampingan</h3>
          <p>Meneladani sikap saling menghargai perbedaan dan merawat persaudaraan lintas keyakinan di dunia kampus.</p>
          <br><small style="color:var(--text-muted)">Ditulis 10 Jun 2026</small><br><br>
          <a href="#" data-page="detail-artikel" class="btn btn-sm btn-outline">Baca Selengkapnya →</a>
        </div>
        <div class="card fade-in">
          <div class="card-icon">📖</div>
          <h3>Adab Sebelum Ilmu</h3>
          <p>Mengapa ulama terdahulu selalu menekankan pentingnya membersihkan hati sebelum mengisi akal di bangku kuliah.</p>
          <br><small style="color:var(--text-muted)">Ditulis 5 Jun 2026</small><br><br>
          <a href="#" data-page="detail-artikel" class="btn btn-sm btn-outline">Baca Selengkapnya →</a>
        </div>
        <div class="card fade-in">
          <div class="card-icon">🌿</div>
          <h3>Puasa dan Ketenangan Mental</h3>
          <p>Korelasi menakjubkan antara menahan hawa nafsu dengan berkurangnya tingkat stres pada mahasiswa tingkat akhir.</p>
          <br><small style="color:var(--text-muted)">Ditulis 1 Jun 2026</small><br><br>
          <a href="#" data-page="detail-artikel" class="btn btn-sm btn-outline">Baca Selengkapnya →</a>
        </div>
      </div>`,
    ),

  "status-pendaftaran": () =>
    pg(
      "Status Pendaftaran",
      `
      <div class="card fade-in" style="margin-bottom:20px">
        <h3>📊 Pantau Riwayat Pendaftaranmu</h3>
        <p style="color:var(--text-muted); font-size:0.9rem;">Di sini kamu bisa mengecek apakah formulirmu sudah divalidasi panitia.</p>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nama Kegiatan</th>
              <th>Waktu Mendaftar</th>
              <th>Status Saat Ini</th>
              <th>Tindakan Lanjutan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kajian Rutin Subuh Berjamaah</td>
              <td>1 Jun 2026, 08:15</td>
              <td><span class="badge badge-success">Terkonfirmasi</span></td>
              <td><a href="#" data-page="dashboard-peserta" class="btn btn-sm btn-outline">Masuk Dashboard</a></td>
            </tr>
            <tr>
              <td>Retreat Kerohanian Semester</td>
              <td>5 Jun 2026, 14:30</td>
              <td><span class="badge badge-warning">Dalam Antrean</span></td>
              <td><span style="color:var(--text-muted); font-size:0.85rem;">Menunggu verifikasi admin</span></td>
            </tr>
            <tr>
              <td>Bakti Sosial Panti Asuhan</td>
              <td>8 Jun 2026, 20:00</td>
              <td><span class="badge badge-info">Sedang Ditinjau</span></td>
              <td><span style="color:var(--text-muted); font-size:0.85rem;">Menunggu seleksi kuota</span></td>
            </tr>
          </tbody>
        </table>
      </div>`,
    ),

  "laporan-kegiatan": () =>
    pg(
      "Laporan Kegiatan",
      `
      <div class="card-grid">
        <div class="card fade-in">
          <h3>📊 Rekapitulasi Semester Ganjil 2025/2026</h3>
          <p>Alhamdulillah, sebanyak 42 program kerja telah terlaksana dengan total partisipasi lebih dari 3.200 mahasiswa.</p><br>
          <a href="#" data-page="unduh-laporan" class="btn btn-sm btn-primary">Akses File Laporan →</a>
        </div>
        <div class="card fade-in">
          <h3>📊 Progress Semester Genap 2025/2026</h3>
          <p>Semester ini masih berjalan — tercatat 28 kegiatan sukses dieksekusi dari target 44 kegiatan.</p><br>
          <a href="#" data-page="unduh-laporan" class="btn btn-sm btn-outline">Lihat Detail Progress →</a>
        </div>
      </div>
      <hr class="glow-line">
      
      <div class="chart-box">
        <h3>Grafik Partisipasi Kehadiran per Bulan</h3>
        <br>
        <div class="chart-bar-container">
          <div class="chart-bar-item"><div class="chart-bar" style="height:40%"></div><div class="chart-bar-label">Januari</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:55%"></div><div class="chart-bar-label">Februari</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:70%"></div><div class="chart-bar-label">Maret</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:50%"></div><div class="chart-bar-label">April</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:85%"></div><div class="chart-bar-label">Mei</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:65%"></div><div class="chart-bar-label">Juni</div></div>
        </div>
      </div>`,
    ),

  "detail-artikel": () =>
    pg(
      "Membaca Artikel",
      `
      <div class="card fade-in">
        <span class="badge badge-info">Artikel Kerohanian Pilihan</span>
        <h3 style="margin-top:12px;font-size:1.6rem">🌙 Menjemput Rahmat di Sepertiga Malam</h3>
        <p style="font-size:0.85rem;color:var(--text-muted)">Ditulis oleh: Ustadz Dr. Ahmad Fauzi · Dipublikasikan 15 Juni 2026 · Estimasi 5 menit baca</p>
        <hr class="glow-line">
        
        <p>Di tengah padatnya jadwal perkuliahan dan tumpukan tugas, seringkali kita kehilangan momen untuk sejenak bermunajat dalam sunyi. Sholat tahajud merupakan salah satu ibadah sunnah yang sangat istimewa. Rasulullah SAW bersabda dalam sebuah hadits shahih: <em>"Sebaik-baik sholat setelah ibadah fardhu adalah sholat di tengah malam."</em> (HR. Muslim)</p><br>
        
        <p>Ada ketenangan jiwa tersendiri yang tidak bisa didapatkan pada siang hari yang bising. Di saat sebagian besar manusia tertidur lelap, seorang hamba yang bangun membentangkan sajadahnya akan merasakan kedekatan yang luar biasa dengan Sang Pencipta. Tahajud melatih kedisiplinan mental mahasiswa, mengajarkan kesabaran, serta menjadi waktu di mana doa-doa lebih mudah menemukan jalan kabulnya.</p><br>
        
        <p>Para ulama salaf senantiasa menasihati agar kita menjaga rakaat-rakaat malam ini, sekecil apapun itu. Mulailah dari satu atau dua rakaat secara konsisten. Sebab waktu sepertiga malam terakhir adalah waktu emas—saat pintu ampunan dibuka seluas-luasnya, dan kasih sayang Tuhan turun merangkul hamba-Nya yang bersimpuh.</p>
        <hr class="glow-line">
        <a href="#" data-page="komentar-diskusi" class="btn btn-primary">💬 Ruang Diskusi Terbuka →</a>
      </div>`,
    ),

  "dashboard-peserta": () =>
    pg(
      "Dashboard Peserta",
      `
      <div class="stats-row fade-in">
        <div class="stat-card"><div class="stat-number">5</div><div class="stat-label">Acara Pernah Diikuti</div></div>
        <div class="stat-card"><div class="stat-number">3</div><div class="stat-label">Sertifikat Diperoleh</div></div>
        <div class="stat-card"><div class="stat-number">92%</div><div class="stat-label">Rasio Kehadiran</div></div>
      </div>
      <br>
      
      <div class="card fade-in">
        <h3>📅 Jadwal Terdekatmu</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 16px;">Pastikan kamu tidak melupakan agenda yang sudah terdaftar di bawah ini.</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nama Kegiatan</th>
                <th>Tanggal Pelaksanaan</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kajian Rutin Subuh Berjamaah</td>
                <td>14 Jun 2026</td>
                <td><span class="badge badge-success">Siap Hadir</span></td>
              </tr>
              <tr>
                <td>Retreat Kerohanian Semester</td>
                <td>20 Jun 2026</td>
                <td><span class="badge badge-warning">Dalam Waiting List</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br>
      <div class="card-grid">
        <div class="card">
          <h3>🔔 Pesan & Notifikasi</h3>
          <p>Jangan sampai ada pemberitahuan penting dari panitia yang terlewat.</p><br>
          <a href="#" data-page="notifikasi" class="btn btn-sm btn-primary">Buka Kotak Masuk →</a>
        </div>
      </div>`,
    ),

  "unduh-laporan": () =>
    pg(
      "Akses File Dokumen",
      `
      <div class="card fade-in" style="margin-bottom:16px">
        <h3>📥 Daftar Dokumen Laporan Resmi</h3>
        <p style="color:var(--text-muted); font-size:0.9rem;">Sebagai bentuk transparansi kepengurusan, kami menyediakan laporan yang dapat diunduh oleh anggota.</p>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Judul Dokumen</th>
              <th>Periode Cakupan</th>
              <th>Format</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Laporan Pertanggungjawaban Ganjil</td>
              <td>Juli - Des 2025</td>
              <td><span class="badge badge-info">Dokumen PDF</span></td>
              <td><button class="btn btn-sm btn-primary" onclick="alert('Memulai proses unduhan dokumen...')">Download</button></td>
            </tr>
            <tr>
              <td>Rekapitulasi Kehadiran Peserta</td>
              <td>Jan - Juni 2026</td>
              <td><span class="badge badge-success">Spreadsheet</span></td>
              <td><button class="btn btn-sm btn-primary" onclick="alert('Memulai proses unduhan dokumen...')">Download</button></td>
            </tr>
            <tr>
              <td>Laporan Transparansi Keuangan</td>
              <td>Tahun Ajaran 25/26</td>
              <td><span class="badge badge-info">Dokumen PDF</span></td>
              <td><button class="btn btn-sm btn-primary" onclick="alert('Memulai proses unduhan dokumen...')">Download</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      <a href="#" data-page="statistik-kegiatan" class="btn btn-outline">📈 Lanjut ke Halaman Statistik Eksekutif →</a>`,
    ),
};

window.pages2 = pages2;
