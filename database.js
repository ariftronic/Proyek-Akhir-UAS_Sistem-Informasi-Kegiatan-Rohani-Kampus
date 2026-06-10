/* SIKRK Real-time Database Layer */

class SIKRKDatabase {
  constructor() {
    this.channelName = "sikrk_realtime_db";
    this.subscribers = {};
    
    // Initialize broadcast channel for tab synchronization
    try {
      this.channel = new BroadcastChannel(this.channelName);
      this.channel.onmessage = (event) => {
        if (event.data && event.data.type === "DB_UPDATE") {
          this.loadData();
          this.trigger(event.data.table);
        }
      };
    } catch (e) {
      console.warn("BroadcastChannel not supported. Real-time sync across tabs will be disabled.", e);
    }

    this.initDefaultData();
  }

  // Load latest data from localStorage
  loadData() {
    this.users = JSON.parse(localStorage.getItem("sikrk_users")) || [];
    this.kegiatan = JSON.parse(localStorage.getItem("sikrk_kegiatan")) || [];
    this.pendaftaran = JSON.parse(localStorage.getItem("sikrk_pendaftaran")) || [];
    this.komentar = JSON.parse(localStorage.getItem("sikrk_komentar")) || [];
    this.logs = JSON.parse(localStorage.getItem("sikrk_logs")) || [];
    this.currentUser = JSON.parse(localStorage.getItem("sikrk_current_user")) || null;
  }

  // Save specific table data to localStorage and notify other tabs
  saveData(table) {
    localStorage.setItem(`sikrk_${table}`, JSON.stringify(this[table]));
    this.trigger(table);
    
    // Broadcast change to other tabs
    if (this.channel) {
      this.channel.postMessage({ type: "DB_UPDATE", table });
    }
  }

  // Initialize seed data if database is empty
  initDefaultData() {
    this.loadData();

    let updated = false;

    // Seed Users
    if (this.users.length === 0) {
      this.users = [
        {
          email: "admin@sikrk.ac.id",
          password: "admin123",
          role: "admin",
          name: "Super Admin SIKRK",
          nim: "-",
          prodi: "Rektorat",
          whatsapp: "081234567890"
        },
        {
          email: "anggota@sikrk.ac.id",
          password: "anggota123",
          role: "anggota",
          name: "Muhammad Rizki Amanullah",
          nim: "102345678",
          prodi: "Teknik Informatika",
          whatsapp: "0812-3456-7890"
        }
      ];
      localStorage.setItem("sikrk_users", JSON.stringify(this.users));
      updated = true;
    }

    // Seed Kegiatan
    if (this.kegiatan.length === 0) {
      this.kegiatan = [
        {
          id: "kajian-subuh",
          name: "Kajian Rutin Subuh Berjamaah",
          date: "2026-06-12",
          time: "05:00",
          location: "Masjid Utama Kampus",
          quota: 150,
          registered: 105,
          status: "Terbuka"
        },
        {
          id: "retreat-maba",
          name: "Retreat Mahasiswa Baru",
          date: "2026-06-20",
          time: "08:00",
          location: "Wisma Alam Asri",
          quota: 50,
          registered: 48,
          status: "Segera"
        },
        {
          id: "doa-bersama",
          name: "Doa Bersama Masa Ujian",
          date: "2026-06-25",
          time: "16:00",
          location: "Aula Rektorat",
          quota: 200,
          registered: 120,
          status: "Terbuka"
        },
        {
          id: "bakti-sosial",
          name: "Bakti Sosial Panti Asuhan",
          date: "2026-07-01",
          time: "07:00",
          location: "Panti Harapan Kita",
          quota: 30,
          registered: 15,
          status: "Pendaftaran"
        },
        {
          id: "seminar-etika",
          name: "Seminar Etika Digital",
          date: "2026-07-10",
          time: "09:00",
          location: "Gedung F Lt.3",
          quota: 100,
          registered: 80,
          status: "Terbuka"
        }
      ];
      localStorage.setItem("sikrk_kegiatan", JSON.stringify(this.kegiatan));
      updated = true;
    }

    // Seed Pendaftaran
    if (this.pendaftaran.length === 0) {
      this.pendaftaran = [
        {
          id: "reg_1",
          userEmail: "anggota@sikrk.ac.id",
          userName: "Muhammad Rizki Amanullah",
          userNim: "102345678",
          userProdi: "Teknik Informatika",
          userWhatsapp: "0812-3456-7890",
          eventId: "kajian-subuh",
          eventName: "Kajian Rutin Subuh Berjamaah",
          status: "Terkonfirmasi",
          date: "2026-06-01 08:15",
          notes: "Ingin memperdalam kajian tafsir Al-Kahfi."
        },
        {
          id: "reg_2",
          userEmail: "anggota@sikrk.ac.id",
          userName: "Muhammad Rizki Amanullah",
          userNim: "102345678",
          userProdi: "Teknik Informatika",
          userWhatsapp: "0812-3456-7890",
          eventId: "retreat-maba",
          eventName: "Retreat Mahasiswa Baru",
          status: "Dalam Antrean",
          date: "2026-06-05 14:30",
          notes: "Mencari ketenangan batin di sela-sela kesibukan kuliah."
        }
      ];
      localStorage.setItem("sikrk_pendaftaran", JSON.stringify(this.pendaftaran));
      updated = true;
    }

    // Seed Komentar
    if (this.komentar.length === 0) {
      this.komentar = [
        {
          id: "com_1",
          userName: "Ahmad Rizki",
          date: "2 jam yang lalu",
          text: "MasyaAllah, artikel yang sangat menampar. Kadang sibuk nugas sampai larut malam tapi malas sholat malam. Semoga kita semua dikaruniai keistiqomahan untuk rutin menjalankan tahajud.",
          articleId: "menjemput-rahmat",
          status: "Disetujui"
        },
        {
          id: "com_2",
          userName: "Siti Aisyah",
          date: "5 jam yang lalu",
          text: "Terima kasih atas ilmunya Ustadz. Kalau boleh request materi, mohon dishare juga panduan adab dan urutan doa saat sholat tahajud yang disunnahkan untuk mahasiswa pemula.",
          articleId: "menjemput-rahmat",
          status: "Disetujui"
        },
        {
          id: "com_3",
          userName: "David Kurniawan",
          date: "Kemarin",
          text: "Izin bertanya, bagaimana tips praktis mengatur jam tidur untuk mahasiswa kosan agar tidak kebablasan alarm tahajud dan tetap segar kuliah pagi?",
          articleId: "menjemput-rahmat",
          status: "Disetujui"
        }
      ];
      localStorage.setItem("sikrk_komentar", JSON.stringify(this.komentar));
      updated = true;
    }

    // Seed Logs
    if (this.logs.length === 0) {
      this.logs = [
        {
          time: "Hari ini, 07:45",
          user: "Sistem Moderator",
          action: "Meloloskan komentar sdr. Hasan pada thread sholat malam"
        },
        {
          time: "Hari ini, 07:30",
          user: "Rizki A. (Ketua)",
          action: "Membuka batch pendaftaran baru untuk relawan Bakti Sosial"
        },
        {
          time: "Kemarin, 22:15",
          user: "Cron Bot",
          action: "Rutinitas pencadangan (backup) terselesaikan tanpa error (Size: 156 MB)"
        }
      ];
      localStorage.setItem("sikrk_logs", JSON.stringify(this.logs));
      updated = true;
    }

    if (updated) {
      this.loadData();
    }
  }

  // Pub/Sub pattern for page elements to update dynamically
  subscribe(table, callback) {
    if (!this.subscribers[table]) {
      this.subscribers[table] = [];
    }
    this.subscribers[table].push(callback);
    return () => {
      this.subscribers[table] = this.subscribers[table].filter(cb => cb !== callback);
    };
  }

  trigger(table) {
    if (this.subscribers[table]) {
      this.subscribers[table].forEach(callback => {
        try {
          callback(this[table]);
        } catch (e) {
          console.error(`Error in subscriber callback for table: ${table}`, e);
        }
      });
    }
  }

  // --- Auth API ---
  getCurrentUser() {
    this.loadData();
    return this.currentUser;
  }

  login(email, password) {
    this.loadData();
    const normalizedEmail = email.trim().toLowerCase();
    const user = this.users.find(u => u.email.trim().toLowerCase() === normalizedEmail && u.password === password);
    if (user) {
      this.currentUser = { ...user };
      delete this.currentUser.password; // Don't store password in session
      localStorage.setItem("sikrk_current_user", JSON.stringify(this.currentUser));
      this.addLog(user.name, `Telah masuk (login) sebagai ${user.role}`);
      this.trigger("currentUser");
      return { success: true, user: this.currentUser };
    }
    return { success: false, message: "Email atau password salah." };
  }

  logout() {
    this.loadData();
    if (this.currentUser) {
      const name = this.currentUser.name;
      this.currentUser = null;
      localStorage.removeItem("sikrk_current_user");
      this.addLog(name, "Telah keluar (logout) dari sistem");
      this.trigger("currentUser");
      return true;
    }
    return false;
  }

  register(name, email, password, nim, prodi, whatsapp) {
    this.loadData();
    const normalizedEmail = email.trim().toLowerCase();
    if (this.users.some(u => u.email.trim().toLowerCase() === normalizedEmail)) {
      return { success: false, message: "Email sudah terdaftar." };
    }
    const newUser = {
      email: normalizedEmail,
      password,
      role: "anggota",
      name,
      nim,
      prodi,
      whatsapp
    };
    this.users.push(newUser);
    this.saveData("users");
    this.addLog(name, "Mendaftarkan akun anggota baru");
    return { success: true, message: "Registrasi berhasil! Silakan login." };
  }

  updateProfile(name, nim, prodi, whatsapp) {
    this.loadData();
    if (!this.currentUser) return { success: false, message: "Tidak ada session aktif." };
    
    // Update in users table
    const userIndex = this.users.findIndex(u => u.email === this.currentUser.email);
    if (userIndex !== -1) {
      this.users[userIndex].name = name;
      this.users[userIndex].nim = nim;
      this.users[userIndex].prodi = prodi;
      this.users[userIndex].whatsapp = whatsapp;
      this.saveData("users");
    }

    // Update in session
    this.currentUser.name = name;
    this.currentUser.nim = nim;
    this.currentUser.prodi = prodi;
    this.currentUser.whatsapp = whatsapp;
    localStorage.setItem("sikrk_current_user", JSON.stringify(this.currentUser));
    
    this.addLog(name, "Mengubah informasi profil akun");
    this.trigger("currentUser");
    return { success: true, user: this.currentUser };
  }

  // --- Kegiatan API ---
  getKegiatan() {
    this.loadData();
    return this.kegiatan;
  }

  addKegiatan(name, date, time, location, quota) {
    this.loadData();
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newEvent = {
      id,
      name,
      date,
      time,
      location,
      quota: parseInt(quota),
      registered: 0,
      status: "Terbuka"
    };
    this.kegiatan.push(newEvent);
    this.saveData("kegiatan");
    
    const user = this.getCurrentUser();
    this.addLog(user ? user.name : "Admin", `Menambahkan kegiatan baru: ${name}`);
    return newEvent;
  }

  // --- Pendaftaran API ---
  getPendaftaran() {
    this.loadData();
    return this.pendaftaran;
  }

  registerForEvent(eventId, name, nim, prodi, whatsapp, notes) {
    this.loadData();
    const event = this.kegiatan.find(e => e.id === eventId);
    if (!event) return { success: false, message: "Kegiatan tidak ditemukan." };

    if (event.registered >= event.quota) {
      return { success: false, message: "Pendaftaran gagal. Kuota kegiatan ini sudah penuh!" };
    }

    const user = this.getCurrentUser();
    const email = user ? user.email : "guest@sikrk.ac.id";

    // Check if already registered
    if (this.pendaftaran.some(p => p.userEmail === email && p.eventId === eventId)) {
      return { success: false, message: "Anda sudah mendaftar untuk kegiatan ini." };
    }

    const regId = "reg_" + Date.now();
    const newReg = {
      id: regId,
      userEmail: email,
      userName: name,
      userNim: nim,
      userProdi: prodi,
      userWhatsapp: whatsapp,
      eventId: eventId,
      eventName: event.name,
      status: "Dalam Antrean",
      date: new Date().toLocaleString("id-ID"),
      notes: notes
    };

    this.pendaftaran.push(newReg);
    this.saveData("pendaftaran");

    // Increment registered count for the event
    event.registered = (event.registered || 0) + 1;
    if (event.registered >= event.quota) {
      event.status = "Penuh";
    }
    this.saveData("kegiatan");

    this.addLog(name, `Mendaftar untuk kegiatan "${event.name}"`);
    return { success: true, registration: newReg };
  }

  updateRegistrationStatus(id, status) {
    this.loadData();
    const reg = this.pendaftaran.find(p => p.id === id);
    if (!reg) return { success: false, message: "Pendaftaran tidak ditemukan." };

    const oldStatus = reg.status;
    reg.status = status;
    this.saveData("pendaftaran");

    const event = this.kegiatan.find(e => e.id === reg.eventId);

    // Adjust event registered count if registration is rejected/canceled
    if ((status === "Ditolak" || status === "Dibatalkan") && oldStatus !== "Ditolak" && oldStatus !== "Dibatalkan") {
      if (event) {
        event.registered = Math.max(0, (event.registered || 0) - 1);
        if (event.registered < event.quota && event.status === "Penuh") {
          event.status = "Terbuka";
        }
        this.saveData("kegiatan");
      }
    } else if (status === "Terkonfirmasi" && oldStatus !== "Terkonfirmasi" && (oldStatus === "Ditolak" || oldStatus === "Dibatalkan")) {
      if (event) {
        event.registered = (event.registered || 0) + 1;
        if (event.registered >= event.quota) {
          event.status = "Penuh";
        }
        this.saveData("kegiatan");
      }
    }

    const user = this.getCurrentUser();
    this.addLog(user ? user.name : "Admin", `Mengubah status pendaftaran ${reg.userName} untuk "${reg.eventName}" menjadi: ${status}`);
    return { success: true, registration: reg };
  }

  // --- Komentar API ---
  getKomentar(articleId = null) {
    this.loadData();
    if (articleId) {
      return this.komentar.filter(c => c.articleId === articleId && c.status === "Disetujui");
    }
    return this.komentar; // returns all comments for admin moderation panel
  }

  addKomentar(articleId, text) {
    this.loadData();
    const user = this.getCurrentUser();
    if (!user) return { success: false, message: "Anda harus login untuk menulis komentar." };

    const newCom = {
      id: "com_" + Date.now(),
      userName: user.name,
      date: "Baru saja",
      text: text,
      articleId: articleId,
      status: user.role === "admin" ? "Disetujui" : "Menunggu" // Admins auto-approve
    };

    this.komentar.push(newCom);
    this.saveData("komentar");

    this.addLog(user.name, `Menulis komentar pada artikel "${articleId}"`);
    return { success: true, comment: newCom };
  }

  approveKomentar(id) {
    this.loadData();
    const com = this.komentar.find(c => c.id === id);
    if (!com) return false;

    com.status = "Disetujui";
    this.saveData("komentar");

    const user = this.getCurrentUser();
    this.addLog(user ? user.name : "Admin", `Menyetujui komentar dari ${com.userName}`);
    return true;
  }

  deleteKomentar(id) {
    this.loadData();
    const index = this.komentar.findIndex(c => c.id === id);
    if (index === -1) return false;

    const name = this.komentar[index].userName;
    this.komentar.splice(index, 1);
    this.saveData("komentar");

    const user = this.getCurrentUser();
    this.addLog(user ? user.name : "Admin", `Menghapus komentar dari ${name}`);
    return true;
  }

  // --- Logs API ---
  getLogs() {
    this.loadData();
    return this.logs;
  }

  addLog(user, action) {
    this.loadData();
    const newLog = {
      time: new Date().toLocaleTimeString("id-ID") + " " + new Date().toLocaleDateString("id-ID"),
      user,
      action
    };
    this.logs.unshift(newLog); // Prepend so latest is first
    // Limit to 50 logs
    if (this.logs.length > 50) {
      this.logs = this.logs.slice(0, 50);
    }
    this.saveData("logs");
  }
}

// Instantiate globally
window.db = new SIKRKDatabase();
