/* Pages L7-L10 */
const pages3 = {
  "komentar-diskusi": () =>
    pg(
      "Komentar & Diskusi",
      `
      <div class="card fade-in" style="margin-bottom:24px">
        <h3>💬 Topik: Menjemput Rahmat di Sepertiga Malam</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 20px;">Berbagi insight dan bertukar pandangan secara sehat.</p>
        
        <div class="comment">
          <div class="comment-avatar">👤</div>
          <div class="comment-body">
            <div class="comment-meta"><strong>Ahmad Rizki</strong> · 2 jam yang lalu</div>
            <div class="comment-text">MasyaAllah, artikel yang sangat menampar. Kadang sibuk nugas sampai larut malam tapi malas sholat malam. Semoga kita semua dikaruniai keistiqomahan untuk rutin menjalankan tahajud.</div>
          </div>
        </div>
        
        <div class="comment">
          <div class="comment-avatar">👤</div>
          <div class="comment-body">
            <div class="comment-meta"><strong>Siti Aisyah</strong> · 5 jam yang lalu</div>
            <div class="comment-text">Terima kasih atas ilmunya Ustadz. Kalau boleh request materi, mohon dishare juga panduan adab dan urutan doa saat sholat tahajud yang disunnahkan untuk mahasiswa pemula.</div>
          </div>
        </div>
        
        <div class="comment">
          <div class="comment-avatar">👤</div>
          <div class="comment-body">
            <div class="comment-meta"><strong>David Kurniawan</strong> · Kemarin</div>
            <div class="comment-text">Izin bertanya, bagaimana tips praktis mengatur jam tidur untuk mahasiswa kosan agar tidak kebablasan alarm tahajud dan tetap segar kuliah pagi?</div>
          </div>
        </div>
      </div>
      
      <div class="card fade-in">
        <h3>✍️ Ikut Berdiskusi</h3>
        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom: 12px;">Punya pertanyaan atau tanggapan? Silakan ketik di bawah.</p>
        <div class="form-group">
          <textarea class="form-control" placeholder="Tuliskan komentar, opini, atau pertanyaanmu dengan bahasa yang santun..."></textarea>
        </div>
        <button class="btn btn-primary" onclick="alert('Komentarmu sudah terkirim dan akan muncul setelah melalui filter sistem moderasi kami.')">Kirim Komentar</button>
      </div>
      <br>
      <a href="#" data-page="moderasi-komentar" class="btn btn-outline">🛡️ (Khusus Admin) Panel Moderasi →</a>`,
    ),

  notifikasi: () =>
    pg(
      "Kotak Pemberitahuan",
      `
      <div class="tabs">
        <button class="tab-btn active">Semua Kotak</button>
        <button class="tab-btn">Pesan Belum Dibaca</button>
        <button class="tab-btn">Seputar Kegiatan</button>
      </div>
      
      <div class="notif-item unread fade-in">
        <div class="notif-icon">✅</div>
        <div class="notif-content">
          <h4>Pendaftaranmu Telah Terkonfirmasi!</h4>
          <p>Alhamdulillah, posisimu untuk acara Kajian Rutin Subuh Berjamaah sudah diamankan. Ditunggu kehadirannya ya.</p>
        </div>
        <div class="notif-time">2 jam lalu</div>
      </div>
      
      <div class="notif-item unread fade-in">
        <div class="notif-icon">📅</div>
        <div class="notif-content">
          <h4>Pengingat: Acara Semakin Dekat</h4>
          <p>Retreat Kerohanian akan dimulai dalam 5 hari lagi. Jangan lupa cek list barang bawaan pribadimu.</p>
        </div>
        <div class="notif-time">Kemarin</div>
      </div>
      
      <div class="notif-item fade-in">
        <div class="notif-icon">📝</div>
        <div class="notif-content">
          <h4>Bacaan Baru untukmu</h4>
          <p>Artikel "Puasa dan Ketenangan Mental" baru saja rilis. Yuk, luangkan waktu 5 menit untuk membacanya.</p>
        </div>
        <div class="notif-time">3 hari lalu</div>
      </div>
      
      <div class="notif-item fade-in">
        <div class="notif-icon">🏆</div>
        <div class="notif-content">
          <h4>E-Sertifikat Tersedia</h4>
          <p>E-Sertifikat atas kehadiranmu di acara Seminar Etika Digital sudah bisa diunduh dari dashboard.</p>
        </div>
        <div class="notif-time">Minggu lalu</div>
      </div>
      <br>
      <a href="#" data-page="pengaturan-akun" class="btn btn-outline">⚙️ Kelola Preferensi Akunmu →</a>`,
    ),

  "statistik-kegiatan": () =>
    pg(
      "Statistik & Pencapaian",
      `
      <div class="stats-row fade-in">
        <div class="stat-card"><div class="stat-number">86</div><div class="stat-label">Total Agenda Terlaksana</div></div>
        <div class="stat-card"><div class="stat-number">3.450</div><div class="stat-label">Total Kehadiran Mahasiswa</div></div>
        <div class="stat-card"><div class="stat-number">95%</div><div class="stat-label">Indeks Kepuasan Acara</div></div>
        <div class="stat-card"><div class="stat-number">12</div><div class="stat-label">Mitra Organisasi Terjalin</div></div>
      </div>
      <br>
      
      <div class="chart-box fade-in">
        <h3>📊 Minat Mahasiswa Berdasarkan Tipe Kegiatan</h3>
        <p style="color:var(--text-muted); font-size:0.85rem;">Persentase rata-rata animo partisipasi</p>
        <br>
        <div class="chart-bar-container">
          <div class="chart-bar-item"><div class="chart-bar" style="height:75%"></div><div class="chart-bar-label">Kajian Umum</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:45%"></div><div class="chart-bar-label">Retreat</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:60%"></div><div class="chart-bar-label">Bakti Sosial</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:80%"></div><div class="chart-bar-label">Seminar Besar</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:35%"></div><div class="chart-bar-label">Kelas Khusus</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:50%"></div><div class="chart-bar-label">Doa Bersama</div></div>
        </div>
      </div>
      
      <div class="chart-box fade-in">
        <h3>📈 Pertumbuhan Partisipan dari Tahun ke Tahun</h3>
        <p style="color:var(--text-muted); font-size:0.85rem;">Grafik kenaikan partisipasi sejak 2021 hingga saat ini</p>
        <br>
        <div class="chart-bar-container">
          <div class="chart-bar-item"><div class="chart-bar" style="height:30%"></div><div class="chart-bar-label">2021</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:45%"></div><div class="chart-bar-label">2022</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:55%"></div><div class="chart-bar-label">2023</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:65%"></div><div class="chart-bar-label">2024</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:78%"></div><div class="chart-bar-label">2025</div></div>
          <div class="chart-bar-item"><div class="chart-bar" style="height:90%"></div><div class="chart-bar-label">2026</div></div>
        </div>
      </div>
      <a href="#" data-page="manajemen-data" class="btn btn-primary">🗄️ Menuju Pengelolaan Data Pokok →</a>`,
    ),

  "moderasi-komentar": () =>
    pg(
      "Panel Moderasi",
      `
      <div class="card fade-in" style="margin-bottom:20px">
        <h3>🛡️ Antrean Peninjauan Komentar</h3>
        <p style="color:var(--text-muted); font-size:0.9rem;">Tugas kita menjaga ruang diskusi tetap positif dan bebas spam.</p>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nama Penulis</th>
              <th>Potongan Komentar</th>
              <th>Topik Artikel</th>
              <th>Status</th>
              <th>Keputusan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hasan (Fak. Teknik)</td>
              <td>"Artikel yang sangat mencerahkan, izin..."</td>
              <td>Sholat Tahajud</td>
              <td><span class="badge badge-warning">Menunggu</span></td>
              <td><button class="btn btn-sm btn-primary" onclick="alert('Komentar Hasan disetujui dan akan dipublikasikan.')">Terima ✓</button></td>
            </tr>
            <tr>
              <td>[Akun Anonim]</td>
              <td>"Coba bahas topik kontroversial tentang..."</td>
              <td>Indahnya Hidup...</td>
              <td><span class="badge badge-warning">Menunggu</span></td>
              <td><button class="btn btn-sm btn-primary" onclick="alert('Komentar telah dihapus dari antrean.')">Tolak ✗</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      <a href="#" data-page="log-aktivitas" class="btn btn-outline">📋 Pantau Log Sistem Keseluruhan →</a>`,
    ),

  "pengaturan-akun": () =>
    pg(
      "Pengaturan Akun",
      `
      <div class="card fade-in">
        <h3>⚙️ Profil Pengguna</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 20px;">Pastikan datamu selalu mutakhir agar sertifikat namamu tidak salah cetak.</p>
        
        <div class="form-row">
          <div class="form-group">
            <label>Nama Lengkap (Ditampilkan di Sertifikat)</label>
            <input class="form-control" value="Muhammad Rizki Amanullah">
          </div>
          <div class="form-group">
            <label>Alamat Email Institusi</label>
            <input class="form-control" value="m.rizki@student.kampus.ac.id">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Nomor Telepon / WhatsApp Aktif</label>
            <input class="form-control" value="0812-3456-7890">
          </div>
          <div class="form-group">
            <label>Asal Fakultas / Prodi</label>
            <input class="form-control" value="Fak. Ilmu Agama / Pendidikan Agama Islam">
          </div>
        </div>
        
        <hr class="glow-line">
        
        <h3>🔔 Pengaturan Privasi & Notifikasi</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 20px;">Atur informasi apa saja yang ingin kami kirimkan ke perangkatmu.</p>
        
        <div style="display:flex;flex-direction:column;gap:16px">
          <label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span>Kirimkan saya info pendaftaran acara baru</label>
          <label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span>Berikan alarm/pengingat H-1 sebelum acaraku dimulai</label>
          <label class="toggle"><input type="checkbox"><span class="toggle-slider"></span>Langganan buletin rohani edisi akhir pekan (Email)</label>
        </div>
        <br><br>
        <button class="btn btn-primary" onclick="alert('Bagus! Preferensi akun terbarumu telah kami amankan.')">Simpan Perubahan</button>
      </div>
      <br>
      <a href="#" data-page="backup-restore" class="btn btn-outline">💾 (Khusus Admin) Cadangkan Data →</a>`,
    ),

  "manajemen-data": () =>
    pg(
      "Pusat Manajemen Data",
      `
      <div class="stats-row fade-in">
        <div class="stat-card"><div class="stat-number">2.840</div><div class="stat-label">Baris Entri Aktif</div></div>
        <div class="stat-card"><div class="stat-number">156 MB</div><div class="stat-label">Beban Storage Server</div></div>
        <div class="stat-card"><div class="stat-number">99.8%</div><div class="stat-label">Kesehatan Database</div></div>
      </div>
      <br>
      
      <div class="card fade-in">
        <h3>🗄️ Status Modul Basis Data</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 16px;">Ikhtisar kesehatan koleksi data organisasi rohani kita secara real-time.</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nama Modul Utama</th>
                <th>Volume Data</th>
                <th>Sinkronisasi Terakhir</th>
                <th>Status Servis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Katalog Kegiatan</td>
                <td>86 Acara</td>
                <td>Hari ini, 09:00</td>
                <td><span class="badge badge-success">Sehat</span></td>
              </tr>
              <tr>
                <td>Direktori Peserta</td>
                <td>1.240 Akun</td>
                <td>Hari ini, 09:00</td>
                <td><span class="badge badge-success">Sehat</span></td>
              </tr>
              <tr>
                <td>Repositori Artikel</td>
                <td>124 Postingan</td>
                <td>Kemarin</td>
                <td><span class="badge badge-success">Sehat</span></td>
              </tr>
              <tr>
                <td>Bank Dokumentasi Multimedia</td>
                <td>890 Berkas</td>
                <td>2 hari yang lalu</td>
                <td><span class="badge badge-warning">Mendekati Limit</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br>
      <a href="#" data-page="hak-akses" class="btn btn-outline">🔐 Konfigurasi Hak Akses Sistem →</a>`,
    ),

  "log-aktivitas": () =>
    pg(
      "Riwayat Log Sistem",
      `
      <div class="card fade-in">
        <h3>📋 Jejak Digital Organisasi</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 20px;">Memantau setiap pergerakan yang dilakukan oleh staf, admin, dan otomatisasi bot sistem.</p>
        
        <div class="log-item">
          <div class="log-time">Hari ini, 07:45</div>
          <div class="log-user">Sistem Moderator</div>
          <div class="log-action">Meloloskan komentar sdr. Hasan pada thread sholat malam</div>
        </div>
        <div class="log-item">
          <div class="log-time">Hari ini, 07:30</div>
          <div class="log-user">Rizki A. (Ketua)</div>
          <div class="log-action">Membuka batch pendaftaran baru untuk relawan Bakti Sosial</div>
        </div>
        <div class="log-item">
          <div class="log-time">Kemarin, 22:15</div>
          <div class="log-user">Cron Bot</div>
          <div class="log-action">Rutinitas pencadangan (backup) terselesaikan tanpa error (Size: 156 MB)</div>
        </div>
        <div class="log-item">
          <div class="log-time">Kemarin, 18:00</div>
          <div class="log-user">Aisyah R. (Media)</div>
          <div class="log-action">Selesai mengunggah album foto Retreat Kerohanian (5 item)</div>
        </div>
        <div class="log-item">
          <div class="log-time">Kemarin, 14:20</div>
          <div class="log-user">Tim Admin</div>
          <div class="log-action">Merevisi pamflet jadwal Kajian Subuh edisi bulan Juni</div>
        </div>
        <div class="log-item">
          <div class="log-time">Lusa, 09:00</div>
          <div class="log-user">Mail Service</div>
          <div class="log-action">Menyebarkan broadcast 45 email pengingat kepada peserta retreat</div>
        </div>
      </div>
      <br>
      <a href="#" data-page="audit-trail" class="btn btn-primary">🔍 Gali Data Audit Mendalam →</a>`,
    ),

  "backup-restore": () =>
    pg(
      "Cadangkan & Pulihkan",
      `
      <div class="card fade-in" style="margin-bottom:20px">
        <h3>💾 Brankas Data Terakhir</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 16px;">File keamanan sistem kita. Gunakan dengan sangat hati-hati.</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID Snaphot</th>
                <th>Tanggal Buat</th>
                <th>Bobot File</th>
                <th>Pemicu</th>
                <th>Aksi Darurat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>snap_20260609_cron</td>
                <td>Hari ini</td>
                <td>156 MB</td>
                <td><span class="badge badge-success">Otomatis Bot</span></td>
                <td><button class="btn btn-sm btn-outline" onclick="alert('Peringatan! Anda meminta restorasi server.')">Rollback ke Sini</button></td>
              </tr>
              <tr>
                <td>snap_20260608_admin_rizki</td>
                <td>Kemarin</td>
                <td>154 MB</td>
                <td><span class="badge badge-info">Intervensi Manusia</span></td>
                <td><button class="btn btn-sm btn-outline" onclick="alert('Peringatan! Anda meminta restorasi server.')">Rollback ke Sini</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="card fade-in">
        <h3>⚙️ Aturan Penyimpanan</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 16px;">Kami menyarankan backup terjadwal agar kinerja server terjaga di luar jam sibuk mahasiswa.</p>
        <label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span>Jalankan Backup Diam-diam Setiap Pukul 02:00 Pagi</label>
        <br><br>
        <button class="btn btn-primary" onclick="alert('Sedang mengompres database saat ini. Harap tidak menutup jendela.')">💾 Paksa Backup Detik Ini Juga</button>
      </div>
      <br>
      <a href="#" data-page="kebijakan-bantuan" class="btn btn-outline">📜 Pelajari Etika Penggunaan Platform →</a>`,
    ),

  "hak-akses": () =>
    pg(
      "Pembagian Izin (Role)",
      `
      <div class="card fade-in">
        <h3>🔐 Hierarki Keamanan Organisasi</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 16px;">Semua fungsionaris maupun mahasiswa memiliki kunci yang berbeda untuk membuka pintu fasilitas di web ini.</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Jabatan Sistem</th>
                <th>Populasi</th>
                <th>Batas Keleluasaan</th>
                <th>Stamina Peran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Root / Developer</td>
                <td>1 Akun</td>
                <td><span class="badge badge-danger">Tanpa Batas</span></td>
                <td><span class="badge badge-success">Live</span></td>
              </tr>
              <tr>
                <td>Inti BPH (Ketua/Wakil)</td>
                <td>3 Akun</td>
                <td><span class="badge badge-warning">Sangat Tinggi</span></td>
                <td><span class="badge badge-success">Live</span></td>
              </tr>
              <tr>
                <td>Tim Pengawas Opini</td>
                <td>5 Akun</td>
                <td><span class="badge badge-info">Fokus Teks Diskusi</span></td>
                <td><span class="badge badge-success">Live</span></td>
              </tr>
              <tr>
                <td>Panitia Eksekutor</td>
                <td>12 Akun</td>
                <td><span class="badge badge-info">Buka/Tutup Pendaftaran</span></td>
                <td><span class="badge badge-success">Live</span></td>
              </tr>
              <tr>
                <td>Mahasiswa Biasa</td>
                <td>1.240 Akun</td>
                <td><span class="badge badge-success">Hanya Membaca & Daftar</span></td>
                <td><span class="badge badge-success">Live</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br>
      <a href="#" data-page="integrasi-sistem" class="btn btn-primary">🔗 Tinjau Sambungan Aplikasi Luar →</a>`,
    ),

  "audit-trail": () =>
    pg(
      "Jejak Keamanan Dalam",
      `
      <div class="card fade-in">
        <h3>🔍 Penyelidikan Sistem Tertutup</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 20px;">Laporan level terdalam untuk melacak perubahan struktur fundamental sistem.</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Waktu Kejadian</th>
                <th>Aktor Terlibat</th>
                <th>Tipe Injeksi</th>
                <th>Target Permukaan</th>
                <th>Laporan Spesifik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09/06/26 07:45</td>
                <td>Engine.Mod</td>
                <td>UPDATE_STATE</td>
                <td>Table_Comments</td>
                <td>Ubah bendera status ke TRUE (ID#1234)</td>
              </tr>
              <tr>
                <td>09/06/26 07:30</td>
                <td>Usr.BPH_01</td>
                <td>INSERT_ROW</td>
                <td>Table_Registry</td>
                <td>Alokasi memori form baru (Form#5678)</td>
              </tr>
              <tr>
                <td>08/06/26 22:15</td>
                <td>Sys.CronJob</td>
                <td>DUMP_DATA</td>
                <td>Storage_Core</td>
                <td>Verifikasi ukuran snapshot: 156.4MB</td>
              </tr>
              <tr>
                <td>08/06/26 18:00</td>
                <td>Usr.Media_03</td>
                <td>BLOB_UPLOAD</td>
                <td>Bucket_Galeri</td>
                <td>Alir masuk 5 paket JPG terenkripsi</td>
              </tr>
              <tr>
                <td>08/06/26 14:20</td>
                <td>Tim_Content</td>
                <td>MUTATE_TEXT</td>
                <td>Table_Events</td>
                <td>Rekalibrasi penanggalan event (Evt#401)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`,
    ),

  "kebijakan-bantuan": () =>
    pg(
      "Pusat Bantuan & Kebijakan",
      `
      <div class="card fade-in" style="margin-bottom:20px">
        <h3>📜 Hal-hal yang Perlu Kamu Pahami</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 20px;">Agar wadah kita tetap jadi tempat yang sejuk dan aman untuk berorganisasi.</p>
        
        <p><strong>1. Menjaga Adab di Dunia Maya</strong><br>
        Kami memohon agar setiap komentar dan opini yang dituangkan di platform ini tetap berpegang teguh pada norma kesopanan dan tidak menyinggung isu sensitif (SARA).</p>
        <br>
        <p><strong>2. Janji Privasimu Terjamin</strong><br>
        Nomor HP dan email yang disetorkan saat mendaftar murni dipakai kepanitiaan untuk menyapamu terkait acara, tidak akan dibocorkan ke pihak iklan mana pun.</p>
        <br>
        <p><strong>3. Kualitas vs Kuantitas Konten</strong><br>
        Kalau kamu mengunggah dokumentasi, pastikan filenya tidak terlalu gelap atau pecah. Biar kita semua bisa menikmati senyum cerah di foto tersebut.</p>
        <br>
        <p><strong>4. Hak Kekayaan Karya</strong><br>
        Artikel opini murni milik penulis masing-masing. Panitia hanya mewadahi pendistribusiannya.</p>
      </div>
      
      <div class="card fade-in">
        <h3>❓ Pintu Pertolongan Buka 24 Jam</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 16px;">Ada yang macet saat memakai web ini? Atau punya kritik manis buat tim IT?</p>
        <div class="form-group">
          <label>Tentang Apa Nih?</label>
          <input class="form-control" placeholder="Contoh: Lupa password akun e-sertifikat">
        </div>
        <div class="form-group">
          <label>Coba Ceritain Kronologinya</label>
          <textarea class="form-control" placeholder="Tadi aku klik tombol daftar, terus layarnya malah..."></textarea>
        </div>
        <button class="btn btn-primary" onclick="alert('Makasih banget atas masukannya! Curhatanmu sudah kami selipkan ke kotak tugas divisi IT kami.')">Lempar Pertanyaan</button>
      </div>`,
    ),

  "integrasi-sistem": () =>
    pg(
      "Garis Penghubung Eksternal",
      `
      <div class="card fade-in" style="margin-bottom:20px">
        <h3>🔗 Kabel ke Dunia Luar</h3>
        <p style="color:var(--text-muted); font-size:0.9rem;">Di balik layar, kami bergantung pada servis dari instansi lain agar organisasi ini berjalan ngebut.</p>
      </div>
      <div class="table-wrap fade-in">
        <table>
          <thead>
            <tr>
              <th>Mitra Teknologi</th>
              <th>Protokol</th>
              <th>Status Sambungan</th>
              <th>Detak Jantung Terakhir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Portal Akademik Kampus (SIAKAD)</td>
              <td>RESTful API</td>
              <td><span class="badge badge-success">Kokoh</span></td>
              <td>Hari ini, 07:00</td>
            </tr>
            <tr>
              <td>Google Calendar (Sinkronisasi Event)</td>
              <td>OAuth 2 Token</td>
              <td><span class="badge badge-success">Kokoh</span></td>
              <td>Hari ini, 06:00</td>
            </tr>
            <tr>
              <td>Mesin Pengirim WhatsApp Massal</td>
              <td>Webhook Polling</td>
              <td><span class="badge badge-warning">Dalam Perbaikan Provider</span></td>
              <td>Semalam, 22:00</td>
            </tr>
            <tr>
              <td>Server Kotak Surat Organisasi</td>
              <td>SMTP Relays</td>
              <td><span class="badge badge-success">Kokoh</span></td>
              <td>Hari ini, 07:30</td>
            </tr>
            <tr>
              <td>Gudang Awan (Amazon S3) File Galeri</td>
              <td>S3 Binary Push</td>
              <td><span class="badge badge-success">Kokoh</span></td>
              <td>Hari ini, 05:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      <div class="card fade-in">
        <h3>📊 Skor Ketahanan Kabel</h3>
        <br>
        <div class="stats-row">
          <div class="stat-card"><div class="stat-number">5</div><div class="stat-label">Titik Integrasi Inti</div></div>
          <div class="stat-card"><div class="stat-number">4</div><div class="stat-label">Menyala Hijau</div></div>
          <div class="stat-card"><div class="stat-number">99.5%</div><div class="stat-label">Keandalan Ping Server</div></div>
        </div>
      </div>`,
    ),
};

window.pages3 = pages3;
