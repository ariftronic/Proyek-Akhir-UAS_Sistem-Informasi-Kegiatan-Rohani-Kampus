/* SIKRK Authentication Pages and UI Logic */

const pagesAuth = {
  login: () => `
    <div class="auth-wrapper fade-in">
      <div class="auth-card">
        <div class="auth-logo">🕌</div>
        <h2>Masuk ke SIKRK</h2>
        <p class="auth-subtitle">Sistem Informasi Kegiatan Rohani Kampus</p>
        
        <div id="login-error" class="alert-message error-message" style="display:none"></div>
        
        <form id="login-form" onsubmit="handleLoginSubmit(event)">
          <div class="form-group">
            <label for="login-email">Alamat Email Kampus</label>
            <input type="email" id="login-email" class="form-control" placeholder="Contoh: anggota@sikrk.ac.id" required>
          </div>
          <div class="form-group">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" class="form-control" placeholder="Masukkan password" required>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Masuk Sekarang</button>
        </form>

        <div class="auth-divider">
          <span>ATAU</span>
        </div>

        <div class="demo-logins">
          <h4>Demo Login Sekali Klik:</h4>
          <div class="demo-buttons">
            <button class="btn btn-sm btn-outline" onclick="fillAndLogin('admin@sikrk.ac.id', 'admin123')">🔑 Admin Demo</button>
            <button class="btn btn-sm btn-outline" onclick="fillAndLogin('anggota@sikrk.ac.id', 'anggota123')">👤 Anggota Demo</button>
          </div>
        </div>

        <div class="auth-footer">
          Belum punya akun? <a href="#" data-page="register">Daftar sebagai Anggota</a>
        </div>
      </div>
    </div>
  `,

  register: () => `
    <div class="auth-wrapper fade-in">
      <div class="auth-card" style="max-width: 500px;">
        <div class="auth-logo">🕌</div>
        <h2>Daftar Anggota</h2>
        <p class="auth-subtitle">Bergabung dengan civitas rohani kampus</p>
        
        <div id="register-error" class="alert-message error-message" style="display:none"></div>
        
        <form id="register-form" onsubmit="handleRegisterSubmit(event)">
          <div class="form-group">
            <label for="reg-name">Nama Lengkap</label>
            <input type="text" id="reg-name" class="form-control" placeholder="Contoh: Budi Santoso" required>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="reg-email">Email</label>
              <input type="email" id="reg-email" class="form-control" placeholder="email@gmail.com" required>
            </div>
            <div class="form-group">
              <label for="reg-password">Password</label>
              <input type="password" id="reg-password" class="form-control" placeholder="Min 6 karakter" required minlength="6">
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="reg-nim">NIM</label>
              <input type="text" id="reg-nim" class="form-control" placeholder="Nomor Induk Mahasiswa" required>
            </div>
            <div class="form-group">
              <label for="reg-prodi">Program Studi / Fak.</label>
              <input type="text" id="reg-prodi" class="form-control" placeholder="Informatika / Teknik" required>
            </div>
          </div>
          
          <div class="form-group">
            <label for="reg-whatsapp">Nomor WhatsApp Aktif</label>
            <input type="tel" id="reg-whatsapp" class="form-control" placeholder="08xxxxxxxxxx" required>
          </div>
          
          <button type="submit" class="btn btn-primary btn-block">Registrasi Anggota →</button>
        </form>

        <div class="auth-footer">
          Sudah punya akun? <a href="#" data-page="login">Masuk di sini</a>
        </div>
      </div>
    </div>
  `
};

// Global form submit handlers
window.handleLoginSubmit = function(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const errorEl = document.getElementById("login-error");

  const result = window.db.login(email, password);
  if (result.success) {
    errorEl.style.display = "none";
    alert(`Selamat datang kembali, ${result.user.name}!`);
    // Redirect based on role
    if (result.user.role === "admin") {
      navigateTo("manajemen-data");
    } else {
      navigateTo("dashboard-peserta");
    }
    updateNavbarState();
  } else {
    errorEl.textContent = result.message;
    errorEl.style.display = "block";
  }
};

window.fillAndLogin = function(email, password) {
  document.getElementById("login-email").value = email;
  document.getElementById("login-password").value = password;
  const form = document.getElementById("login-form");
  // Trigger form submit
  const event = new Event('submit', { cancelable: true });
  form.dispatchEvent(event);
};

window.handleRegisterSubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;
  const nim = document.getElementById("reg-nim").value;
  const prodi = document.getElementById("reg-prodi").value;
  const whatsapp = document.getElementById("reg-whatsapp").value;
  const errorEl = document.getElementById("register-error");

  const result = window.db.register(name, email, password, nim, prodi, whatsapp);
  if (result.success) {
    errorEl.style.display = "none";
    alert(result.message);
    navigateTo("login");
  } else {
    errorEl.textContent = result.message;
    errorEl.style.display = "block";
  }
};

// UI helper to update Navbar when login status changes
window.updateNavbarState = function() {
  const user = window.db.getCurrentUser();
  const navMenu = document.getElementById("nav-menu");
  
  // Find or create login/profile list item
  let loginLi = document.getElementById("nav-user-item");
  if (!loginLi) {
    loginLi = document.createElement("li");
    loginLi.id = "nav-user-item";
    navMenu.appendChild(loginLi);
  }

  if (user) {
    const roleBadge = user.role === "admin" ? "🔑 Admin" : "👤 Anggota";
    loginLi.innerHTML = `
      <div class="nav-dropdown user-nav-profile">
        <a href="#" class="nav-link user-profile-btn">
          <span class="user-avatar-mini">🕌</span>
          <span class="user-name-mini">${user.name.split(" ")[0]} (${roleBadge})</span>
        </a>
        <ul class="dropdown-menu">
          ${user.role === "admin" ? `
            <li><a href="#" data-page="manajemen-data">Manajemen Data</a></li>
            <li><a href="#" data-page="moderasi-komentar">Moderasi Komentar</a></li>
            <li><a href="#" data-page="log-aktivitas">Log Aktivitas</a></li>
          ` : `
            <li><a href="#" data-page="dashboard-peserta">Dashboard Peserta</a></li>
            <li><a href="#" data-page="status-pendaftaran">Status Pendaftaran</a></li>
            <li><a href="#" data-page="pengaturan-akun">Pengaturan Akun</a></li>
          `}
          <hr class="dropdown-divider">
          <li><a href="#" onclick="handleLogout(event)">Logout</a></li>
        </ul>
      </div>
    `;
    
    // Wire up navigation for dynamic entries
    loginLi.querySelectorAll("[data-page]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(el.dataset.page);
        document.getElementById("nav-menu").classList.remove("open");
      });
    });

    // Make dropdown hover work for mobile clicks as well
    const profileBtn = loginLi.querySelector(".user-profile-btn");
    profileBtn.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        profileBtn.parentElement.classList.toggle("open");
      }
    });

  } else {
    loginLi.innerHTML = `
      <a href="#" class="nav-link btn-login" data-page="login">Masuk</a>
    `;
    loginLi.querySelector("[data-page]").forEach = function() {}; // Safe fallback
    loginLi.querySelector(".btn-login").addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("login");
      document.getElementById("nav-menu").classList.remove("open");
    });
  }
};

window.handleLogout = function(event) {
  event.preventDefault();
  if (confirm("Apakah Anda yakin ingin keluar?")) {
    window.db.logout();
    alert("Anda berhasil logout.");
    navigateTo("beranda");
    updateNavbarState();
  }
};

// Export page
window.pagesAuth = pagesAuth;
