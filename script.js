function absen() {
  const nama = document.getElementById("nama").value;
  if (nama) {
    const li = document.createElement("li");
    li.textContent = nama + " ✔️";
    document.getElementById("daftar-absensi").appendChild(li);
    document.getElementById("nama").value = "";
  } else {
    alert("Masukkan nama dulu!");
  }
}
