/* Pages L7-L10 */
window.submitComment = function(e, articleId) {
  e.preventDefault();
  const textInput = document.getElementById("comment-text-input");
  const text = textInput.value.trim();
  if (!text) return;
  
  const user = window.db.getCurrentUser();
  if (!user) {
    alert("Silakan login terlebih dahulu untuk menulis komentar.");
    navigateTo("login");
    return;
  }

  const res = window.db.addKomentar(articleId, text);
  if (res.success) {
    if (user.role === "admin") {
      alert("Komentar berhasil dipublikasikan!");
    } else {
      alert("Komentar terkirim! Sedang dalam moderasi admin.");
    }
    textInput.value = "";
    navigateTo("komentar-diskusi");
  } else {
    alert(res.message);
  }
};

window.deleteComment = function(id) {
  if (confirm("Apakah Anda yakin ingin menghapus komentar ini?")) {
    window.db.deleteKomentar(id);
    alert("Komentar telah dihapus.");
    navigateTo("komentar-diskusi");
  }
};

window.approveCommentAdmin = function(id) {
  window.db.approveKomentar(id);
  alert("Komentar disetujui!");
  navigateTo("moderasi-komentar");
};

window.rejectCommentAdmin = function(id) {
  window.db.deleteKomentar(id);
  alert("Komentar ditolak.");
  navigateTo("moderasi-komentar");
};

window.submitNewEventAdmin = function(e) {
  e.preventDefault();
  const name = document.getElementById("evt-name").value;
  const date = document.getElementById("evt-date").value;
  const time = document.getElementById("evt-time").value;
  const location = document.getElementById("evt-location").value;
  const quota = document.getElementById("evt-quota").value;

  const newEvt = window.db.addKegiatan(name, date, time, location, quota);
  if (newEvt) {
    alert(`Kegiatan "${name}" berhasil ditambahkan ke database!`);
    navigateTo("manajemen-data");
  }
};

window.submitProfileUpdate = function(e) {
  e.preventDefault();
  const name = document.getElementById("profile-name").value;
  const nim = document.getElementById("profile-nim").value;
  const prodi = document.getElementById("profile-prodi").value;
  const whatsapp = document.getElementById("profile-whatsapp").value;

  const res = window.db.updateProfile(name, nim, prodi, whatsapp);
  if (res.success) {
    alert("Profil berhasil diperbarui!");
    navigateTo("pengaturan-akun");
    updateNavbarState();
  } else {
    alert(res.message);
  }
};

const pages3 = {
  "komentar-diskusi": () => {
    const user = window.db.getCurrentUser();
    const comments = window.db.getKomentar("menjemput-rahmat");
    
    const commentsList = comments.map(c => `
      <div class="comment">
        <div class="comment-avatar">👤</div>
        <div class="comment-body" style="width: 100%;">
          <div class="comment-meta" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span><strong>${c.userName}</strong> · ${c.date}</span>
            ${user && user.role === "admin" ? `<button class="btn btn-sm btn-outline" style="color:red; border-color:red; padding: 2px 8px; font-size:0.75rem;" onclick="deleteComment('${c.id}')">Hapus</button>` : ""}
          </div>
          <div class="comment-text" style="margin-top:4px;">${c.text}</div>
        </div>
      </div>
    `).join("");

    return pg(
      "Komentar & Diskusi",
      `
      <div class="card fade-in" style="margin-bottom:24px">
        <h3>💬 Topik: Menjemput Rahmat di Sepertiga Malam</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 20px;">Berbagi insight dan bertukar pandangan secara sehat.</p>
        
        <div id="comments-container">
          ${commentsList || "<p style='color:var(--text-muted); text-align:center;'>Belum ada komentar disetujui.</p>"}
        </div>
      </div>
      
      <div class="card fade-in">
        <h3>✍️ Ikut Berdiskusi</h3>
        ${user ? `
          <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom: 12px;">Masuk sebagai: <strong>${user.name}</strong></p>
          <form onsubmit="submitComment(event, 'menjemput-rahmat')">
            <div class="form-group">
              <textarea id="comment-text-input" class="form-control" placeholder="Tuliskan komentar, opini, atau pertanyaanmu dengan bahasa yang santun..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Kirim Komentar</button>
          </form>
        ` : `
          <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom: 12px;">Anda harus login untuk ikut berdiskusi.</p>
          <a href="#" data-page="login" class="btn btn-primary">Masuk untuk Berkomentar</a>
        `}
      </div>
      <br>
      ${user && user.role === "admin" ? `<a href="#" data-page="moderasi-komentar" class="btn btn-outline">🛡️ Panel Moderasi Komentar →</a>` : ""}`,
    );
  },

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

  "moderasi-komentar": () => {
    const user = window.db.getCurrentUser();
    if (!user || user.role !== "admin") {
      return pg("Akses Ditolak", `<div class="card fade-in"><p>Maaf, halaman ini hanya dapat diakses oleh Admin SIKRK.</p></div>`);
    }

    const allComments = window.db.getKomentar();
    const queue = allComments.filter(c => c.status === "Menunggu");
    
    let tableRows = "";
    if (queue.length === 0) {
      tableRows = `<tr><td colspan="5" style="text-align:center;">Tidak ada komentar baru di antrean moderasi.</td></tr>`;
    } else {
      tableRows = queue.map(c => `
        <tr>
          <td><strong>${c.userName}</strong></td>
          <td><span style="font-size:0.88rem;">"${c.text.substring(0, 45)}..."</span></td>
          <td>${c.articleId}</td>
          <td><span class="badge badge-warning">Menunggu</span></td>
          <td>
            <div style="display:flex; gap:5px;">
              <button class="btn btn-sm btn-primary" onclick="approveCommentAdmin('${c.id}')">Terima ✓</button>
              <button class="btn btn-sm btn-outline" style="color:red; border-color:red;" onclick="rejectCommentAdmin('${c.id}')">Tolak ✗</button>
            </div>
          </td>
        </tr>
      `).join("");
    }

    return pg(
      "Panel Moderasi",
      `
      <div class="card fade-in" style="margin-bottom:20px">
        <h3>🛡️ Antrean Peninjauan Komentar</h3>
        <p style="color:var(--text-muted); font-size:0.9rem;">Menyaring komentar dari anggota SIKRK secara real-time.</p>
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
            ${tableRows}
          </tbody>
        </table>
      </div>
      <br>
      <a href="#" data-page="log-aktivitas" class="btn btn-outline">📋 Pantau Log Sistem Keseluruhan →</a>`,
    );
  },

  "pengaturan-akun": () => {
    const user = window.db.getCurrentUser();
    if (!user) {
      return pg("Pengaturan Akun", `<div class="card fade-in text-center"><p>Silakan login terlebih dahulu untuk mengakses pengaturan akun.</p><br><a href="#" data-page="login" class="btn btn-primary">Login</a></div>`);
    }

    return pg(
      "Pengaturan Akun",
      `
      <div class="card fade-in">
        <h3>⚙️ Profil Pengguna</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 20px;">Pastikan datamu selalu mutakhir agar sertifikat namamu tidak salah cetak.</p>
        
        <form onsubmit="submitProfileUpdate(event)">
          <div class="form-row">
            <div class="form-group">
              <label>Nama Lengkap (Ditampilkan di Sertifikat)</label>
              <input id="profile-name" class="form-control" value="${user.name || ""}" required>
            </div>
            <div class="form-group">
              <label>Alamat Email Institusi</label>
              <input class="form-control" value="${user.email || ""}" disabled style="background:#e2e8f0; cursor:not-allowed;">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Nomor Telepon / WhatsApp Aktif</label>
              <input id="profile-whatsapp" class="form-control" value="${user.whatsapp || ""}" required>
            </div>
            <div class="form-group">
              <label>Asal Fakultas / Prodi</label>
              <input id="profile-prodi" class="form-control" value="${user.prodi || ""}" required>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Simpan Perubahan</button>
        </form>
      </div>
      <br>
      ${user.role === "admin" ? `<a href="#" data-page="backup-restore" class="btn btn-outline">💾 (Khusus Admin) Cadangkan Data →</a>` : ""}`,
    );
  },

  "manajemen-data": () => {
    const user = window.db.getCurrentUser();
    if (!user || user.role !== "admin") {
      return pg("Akses Ditolak", `<div class="card fade-in"><p>Maaf, halaman ini hanya dapat diakses oleh Admin SIKRK.</p></div>`);
    }

    const eventsCount = window.db.getKegiatan().length;
    const usersCount = window.db.users.length;
    const commentsCount = window.db.getKomentar().length;
    const registrationsCount = window.db.getPendaftaran().length;

    return pg(
      "Pusat Manajemen Data",
      `
      <div class="stats-row fade-in">
        <div class="stat-card"><div class="stat-number">${eventsCount}</div><div class="stat-label">Total Kegiatan</div></div>
        <div class="stat-card"><div class="stat-number">${registrationsCount}</div><div class="stat-label">Pendaftaran Masuk</div></div>
        <div class="stat-card"><div class="stat-number">${usersCount}</div><div class="stat-label">Akun Civitas</div></div>
        <div class="stat-card"><div class="stat-number">${commentsCount}</div><div class="stat-label">Total Komentar</div></div>
      </div>
      <br>
      
      <div class="card fade-in" style="margin-bottom:24px">
        <h3>➕ Tambah Kegiatan Baru (Admin Panel)</h3><br>
        <form onsubmit="submitNewEventAdmin(event)">
          <div class="form-group">
            <label>Nama Kegiatan</label>
            <input id="evt-name" class="form-control" placeholder="Contoh: Kajian Fiqih Kontemporer" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Tanggal Pelaksanaan</label>
              <input type="date" id="evt-date" class="form-control" required>
            </div>
            <div class="form-group">
              <label>Waktu Mulai</label>
              <input type="time" id="evt-time" class="form-control" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Tempat / Lokasi</label>
              <input id="evt-location" class="form-control" placeholder="Contoh: Gedung Rektorat Lt. 2" required>
            </div>
            <div class="form-group">
              <label>Kuota Maksimal Peserta</label>
              <input type="number" id="evt-quota" class="form-control" placeholder="Contoh: 100" required>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Publikasikan Kegiatan →</button>
        </form>
      </div>

      <div class="card fade-in">
        <h3>🗄️ Status Modul Basis Data (Real-time)</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 16px;">Tinjauan modular terhadap database real-time SIKRK.</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nama Modul Utama</th>
                <th>Volume Data</th>
                <th>Status Servis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Katalog Kegiatan</td>
                <td>${eventsCount} Acara</td>
                <td><span class="badge badge-success">Aktif</span></td>
              </tr>
              <tr>
                <td>Pendaftaran Anggota</td>
                <td>${registrationsCount} Entri</td>
                <td><span class="badge badge-success">Aktif</span></td>
              </tr>
              <tr>
                <td>Direktori Peserta</td>
                <td>${usersCount} Akun</td>
                <td><span class="badge badge-success">Aktif</span></td>
              </tr>
              <tr>
                <td>Repositori Komentar</td>
                <td>${commentsCount} Baris</td>
                <td><span class="badge badge-success">Aktif</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br>
      <a href="#" data-page="status-pendaftaran" class="btn btn-outline">📊 Kelola Pendaftaran Masuk →</a>`,
    );
  },

  "log-aktivitas": () => {
    const user = window.db.getCurrentUser();
    if (!user || user.role !== "admin") {
      return pg("Akses Ditolak", `<div class="card fade-in"><p>Maaf, halaman ini hanya dapat diakses oleh Admin SIKRK.</p></div>`);
    }

    const logs = window.db.getLogs();
    const logItems = logs.map(l => `
      <div class="log-item" style="border-bottom: 1px solid var(--border); padding: 12px 0; display: flex; flex-direction: column; gap: 4px;">
        <div class="log-time" style="color: var(--text-muted); font-size: 0.8rem;">${l.time}</div>
        <div class="log-user" style="font-weight:600; color: var(--gold-dark);">${l.user}</div>
        <div class="log-action" style="font-size:0.9rem;">${l.action}</div>
      </div>
    `).join("");

    return pg(
      "Riwayat Log Sistem",
      `
      <div class="card fade-in">
        <h3>📋 Jejak Digital Organisasi (Real-time)</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 20px;">Melacak aktivitas login, pendaftaran, persetujuan komentar, dan backup secara real-time.</p>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${logItems || "<p style='color:var(--text-muted); text-align:center;'>Belum ada log aktivitas.</p>"}
        </div>
      </div>
      <br>
      <a href="#" data-page="audit-trail" class="btn btn-primary">🔍 Gali Data Audit Mendalam →</a>`,
    );
  },

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
