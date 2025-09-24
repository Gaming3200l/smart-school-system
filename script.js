// Daftar anggota OSIS (ID + Nama)
const anggotaOSIS = [
  { id: "OSIS001", nama: "Andi Saputra" },
  { id: "OSIS002", nama: "Budi Santoso" },
  { id: "OSIS003", nama: "Citra Dewi" },
  { id: "OSIS004", nama: "Dinda Rahma" },
  { id: "OSIS005", nama: "Eko Pratama" }
];

// Tampilkan tabel anggota
function loadAnggota() {
  const tbody = document.getElementById("anggota-body");
  tbody.innerHTML = "";
  anggotaOSIS.forEach((a) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${a.id}</td>
      <td>${a.nama}</td>
      <td id="status-${a.id}">Belum Hadir ❌</td>
    `;
    tbody.appendChild(row);
  });
}

// Fungsi tandai hadir
function tandaiHadir(idAnggota) {
  const anggota = anggotaOSIS.find(a => a.id === idAnggota);
  if (anggota) {
    const statusCell = document.getElementById(`status-${anggota.id}`);
    if (statusCell.textContent.includes("Hadir")) {
      alert(`${anggota.nama} sudah absen sebelumnya.`);
    } else {
      statusCell.textContent = "Hadir ✅";
      statusCell.style.color = "green";
    }
  } else {
    alert("ID tidak dikenal!");
  }
}

// Event listener form absen
document.getElementById("absen-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const idInput = document.getElementById("idAnggota").value.trim();
  tandaiHadir(idInput);
  document.getElementById("idAnggota").value = "";
});

// Jalankan saat halaman pertama kali dibuka
window.onload = loadAnggota;
