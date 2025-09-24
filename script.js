// Daftar anggota OSIS (ID + Nama)
const anggotaOSIS = [
  { id: "OSIS001", nama: "Andi Saputra" },
  { id: "OSIS002", nama: "Budi Santoso" },
  { id: "OSIS003", nama: "Citra Dewi" },
  { id: "OSIS004", nama: "Dinda Rahma" },
  { id: "OSIS005", nama: "Eko Pratama" }
];

// Tampilkan daftar anggota ke tabel
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

// Fungsi untuk update status hadir berdasarkan hasil scan QR
function tandaiHadir(idAnggota) {
  const anggota = anggotaOSIS.find(a => a.id === idAnggota);
  if (anggota) {
    const statusCell = document.getElementById(`status-${anggota.id}`);
    if (statusCell) {
      statusCell.textContent = "Hadir ✅";
      statusCell.style.color = "green";
    }
  } else {
    alert("ID tidak dikenal: " + idAnggota);
  }
}

// Fungsi simulasi scan QR (sementara tombol input manual)
function scanQR() {
  const input = prompt("Masukkan kode QR (contoh: OSIS001)");
  if (input) {
    tandaiHadir(input.trim());
  }
}

// Jalankan saat halaman dibuka
window.onload = loadAnggota;        alert("ID tidak dikenal!");
      }
      html5QrCode.stop(); // stop setelah scan 1 orang
    }
  ).catch(err => {
    console.error("Scan gagal", err);
  });
}
