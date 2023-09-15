// open tap
function openTab(tabName) {
  const tabs = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
}

// Default: Tampilkan tab Registrasi
openTab("registrasi");

// Data dataPendaftar
let dataPendaftar = [];
// memasukn data
function submitForm() {
  const name = document.getElementsByTagName("input")[0].value;
  const age = parseInt(document.getElementsByTagName("input")[1].value);
  const PocketMoney = parseInt(document.getElementsByTagName("input")[2].value);

  //   validasi data yang tidak valid
  if (
    name.length < 10 ||
    age < 25 ||
    PocketMoney < 100000 &&
    PocketMoney > 1000000
  ) {
    alert(
      "Data tidak valid. Pastikan nama minimal 10 karakter, umur  minimal 25 tahun, dan uang saku antara 100 ribu hingga 1 juta."
    );
    return;
  }

  dataPendaftar.push({ name, age, PocketMoney });

  alert(`data  berhasil diatmbahkan silahkan cek pada halaman  List pendaftar`);

  // Menampilkan data pada tabel
  displaydataPendaftar();

  // Menghitung rata-rata umur dan uang saku
  calculateAverages();

  // Mereset form
  document.getElementsByClassName("registrasiForm").reset();
}

// Menampilkan data pada tabel

function displaydataPendaftar() {
  const table = document.getElementById("dataTables");
  const tBody = table.getElementsByTagName("tbody")[0];

  const newRow = tBody.insertRow();
  const cellNo = newRow.insertCell(0);
  const cellName = newRow.insertCell(1);
  const cellAge = newRow.insertCell(2);
  const cellPocketMoney = newRow.insertCell(3);

  const lastIndex = dataPendaftar.length - 1;
  cellNo.innerHTML = dataPendaftar.length;
  cellName.innerHTML = dataPendaftar[lastIndex].name;
  cellAge.innerHTML = dataPendaftar[lastIndex].age + " Tahun";
  cellPocketMoney.innerHTML =
    " Rp." + dataPendaftar[lastIndex].PocketMoney.toLocaleString();
}

function calculateAverages() {
  const sumAge = dataPendaftar.reduce((acc, p) => acc + p.age, 0);
  const sumPocketMoney = dataPendaftar.reduce(
    (acc, p) => acc + p.PocketMoney,
    0
  );
  const avgAge = sumAge / dataPendaftar.length;
  const avgPocketMoney = sumPocketMoney / dataPendaftar.length;

  document.getElementById("avgAge").innerHTML = avgAge.toFixed(2);
  document.getElementById("avgPocketMoney").innerHTML = "Rp." + avgPocketMoney.toLocaleString();
}
