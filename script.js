// Daftar anggota OSIS
const anggota = [
  {id: "OSIS001", nama: "Andi", status: "Belum Hadir"},
  {id: "OSIS002", nama: "Budi", status: "Belum Hadir"},
  {id: "OSIS003", nama: "Citra", status: "Belum Hadir"},
];

// Render tabel
const tableBody = document.getElementById("anggotaTable");
function renderTable() {
  tableBody.innerHTML = "";
  anggota.forEach(a => {
    let row = `<tr>
      <td>${a.id}</td>
      <td>${a.nama}</td>
      <td>${a.status}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}
renderTable();

// Fungsi scan QR
function startScan() {
  const html5QrCode = new Html5Qrcode("reader");
  html5QrCode.start(
    { facingMode: "environment" }, 
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      // Cari anggota berdasarkan ID
      let orang = anggota.find(a => a.id === decodedText);
      if (orang) {
        orang.status = "Hadir ✅";
        renderTable();
        alert(`${orang.nama} sudah absen`);
      } else {
        alert("ID tidak dikenal!");
      }
      html5QrCode.stop(); // stop setelah scan 1 orang
    }
  ).catch(err => {
    console.error("Scan gagal", err);
  });
}
