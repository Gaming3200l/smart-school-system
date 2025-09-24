// Data akun OSIS
const users = [
  { id: "KETUA01", nama: "Andi Saputra", jabatan: "Ketua OSIS", password: "12345" },
  { id: "WAKET01", nama: "Budi Santoso", jabatan: "Wakil Ketua", password: "12345" },
  { id: "SEKRE01", nama: "Citra Dewi", jabatan: "Sekretaris", password: "12345" },
  { id: "WSEKR01", nama: "Dinda Rahma", jabatan: "Wakil Sekretaris", password: "12345" },
  { id: "BENDA01", nama: "Eko Pratama", jabatan: "Bendahara", password: "12345" },
  { id: "WBEND01", nama: "Farhan Putra", jabatan: "Wakil Bendahara", password: "12345" },
  { id: "KSDTIK01", nama: "Dede Satrio", jabatan: "Ketua Sekbid 4 TIK", password: "12345" },
  { id: "ANGSB01", nama: "Hari Saputra", jabatan: "Anggota", password: "12345" },
  { id: "ANG003", nama: "Intan Wulandari", jabatan: "Anggota", password: "12345" }
];

// Simpan login ke localStorage
function login(event) {
  event.preventDefault();
  const id = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const user = users.find(u => u.id === id && u.password === pass);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("login-msg").textContent = "Login gagal! Periksa ID & Password.";
  }
}

// Tampilkan data dashboard
function loadDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "index.html";
    return;
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
