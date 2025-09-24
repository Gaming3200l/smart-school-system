// === LOGIN FUNCTION ===
function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Contoh sederhana (username: admin, password: 1234)
  if (username === "admin" && password === "1234") {
    // Simpan status login
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
  return false;
}

// === LOGOUT FUNCTION ===
function logoutUser() {
  localStorage.removeItem("isLoggedIn");
}

// === CEK LOGIN ===
if (window.location.pathname.includes("dashboard.html")) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    window.location.href = "login.html";
  }
}

// === MENU TOGGLE (mobile) ===
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// === GANTI HALAMAN ===
function showSection(id) {
  let sections = document.querySelectorAll(".content");
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  // Tutup menu otomatis setelah pilih (mobile)
  document.getElementById("menu").classList.remove("show");
}
  document.getElementById("welcome-msg").textContent = 
    `Selamat datang, ${user.nama} (${user.jabatan})`;

  // Tampilkan daftar anggota
  const tbody = document.getElementById("anggota-body");
  tbody.innerHTML = "";
  users.forEach(a => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${a.id}</td>
      <td>${a.nama}</td>
      <td>${a.jabatan}</td>
      <td id="status-${a.id}">Belum Hadir ❌</td>
    `;
    tbody.appendChild(row);
  });

  // Tandai otomatis hadir
  const statusCell = document.getElementById(`status-${user.id}`);
  if (statusCell) {
    statusCell.textContent = "Hadir ✅";
    statusCell.style.color = "green";
  }

  // Sekretaris bisa upload notulen
  if (user.jabatan.includes("Sekretaris")) {
    document.getElementById("sekretaris-section").style.display = "block";
  }
}

// Simpan notulen (sementara di localStorage)
function simpanNotulen() {
  const isi = document.getElementById("notulen").value;
  localStorage.setItem("notulen", isi);
  alert("Notulen rapat tersimpan!");
}

// Logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

// Cek halaman
if (document.getElementById("login-form")) {
  document.getElementById("login-form").addEventListener("submit", login);
}

if (document.body.contains(document.getElementById("welcome-msg"))) {
  loadDashboard();
}
