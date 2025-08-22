// Ganti URL ini dengan URL Google Apps Script Anda yang telah dideploy
const scriptURL = 'https://script.google.com/macros/s/AKfycbwjG1Ns5cVXj0LsafmJLrolYO1D8ct6FsNKiETJSVRWP95Dwojwj1xGCfPFswFeKu5l/exec';

// Ambil elemen HTML
const kategoriContainer = document.getElementById('kategori_container');
const categoryHeaderSelect = document.getElementById("categoryHeader");
const searchByCategoryButton = document.getElementById("searchByCategoryButton");
const dataContainer = document.getElementById('data-container');


// Buat elemen input teks default
const categoryValueInput = document.createElement('select');
categoryValueInput.innerHTML = `
  <option value="">-- Pilih --</option>
`;
categoryValueInput.type = 'text';
categoryValueInput.id = 'categoryValue';
// Buat elemen dropdown untuk Status Keaktifan
const statusKeaktifanDropdown = document.createElement('select');
statusKeaktifanDropdown.id = 'categoryValue';
statusKeaktifanDropdown.innerHTML = `
  <option value="">-- Pilih --</option>
  <option value="Aktif">Aktif</option>
  <option value="Tidak Aktif">Tidak Aktif</option>
`;
statusKeaktifanDropdown.style.display = 'none';

// Buat elemen dropdown untuk Status Santri
const statusSantriDropdown = document.createElement('select');
statusSantriDropdown.id = 'categoryValue';
statusSantriDropdown.innerHTML = `
  <option value="">-- Pilih --</option>
  <option value="Aktif">Aktif</option>
  <option value="Boyong">Boyong</option>
`;
statusSantriDropdown.style.display = 'none';

// Buat elemen dropdown untuk Tahun Masuk
const tahunMasukDropdown = document.createElement('select');
tahunMasukDropdown.id = 'categoryValue';
tahunMasukDropdown.style.display = 'none';
// Buat opsi-opsi tahun
let tahunOptions = '<option value="">-- Pilih --</option>';
const currentYear = new Date().getFullYear();
for (let year = currentYear; year >= 2019; year--) {
 tahunOptions += `<option value="${year}">${year}</option>`;
}
tahunMasukDropdown.innerHTML = tahunOptions;

// Buat elemen dropdown untuk Pembagian Kamar
const pembagianKamarDropdown = document.createElement('select');
pembagianKamarDropdown.id = 'categoryValue';
pembagianKamarDropdown.innerHTML = `
 <option value="">-- Pilih --</option>
 <option value="Kamar Umar">Kamar Umar</option>
 <option value="Kamar As Salam">Kamar As Salam</option>
 <option value="Kamar Wali Songo">Kamar Wali Songo</option>
 <option value="Kamar Asy'ari">Kamar Asy'ari</option>
 <option value="Kamar Syafi'i">Kamar Syafi'i</option>
 <option value="Kamar Maliki">Kamar Maliki</option>
 <option value="Kamar Takhfidz">Kamar Takhfidz</option>
 <option value="Kamar Mustakmir">Kamar Mustakmir</option>
 <option value="Kamar Al Azhar">Kamar Al Azhar</option>
 <option value="Kamar Al Badar">Kamar Al Badar</option>
 <option value="Kamar Al Hikam">Kamar Al Hikam</option>
 <option value="Kamar Riyadhoh">Kamar Riyadhoh</option>
`;
pembagianKamarDropdown.style.display = 'none';

// Buat elemen dropdown untuk Aktivitas Pendidikan
const aktivitasPendidikanDropdown = document.createElement('select');
aktivitasPendidikanDropdown.id = 'categoryValue';
aktivitasPendidikanDropdown.innerHTML = `
 <option value="">-- Pilih --</option>
 <option value="SD/MI">SD/MI</option>
 <option value="SMP/MTs">SMP/MTs</option>
 <option value="SMA/MA/SMK">SMA/MA/SMK</option>
 <option value="PTN/PTS">PTN/PTS</option>
 <option value="Pondok Saja">Pondok Saja</option>
`;
aktivitasPendidikanDropdown.style.display = 'none';

// Masukkan semua elemen ke dalam container
kategoriContainer.appendChild(categoryValueInput);
kategoriContainer.appendChild(statusKeaktifanDropdown);
kategoriContainer.appendChild(statusSantriDropdown);
kategoriContainer.appendChild(tahunMasukDropdown);
kategoriContainer.appendChild(pembagianKamarDropdown);
kategoriContainer.appendChild(aktivitasPendidikanDropdown);

// Tambahkan event listener untuk mendeteksi perubahan pada dropdown kategori
categoryHeaderSelect.addEventListener('change', (event) => {
 const selectedValue = event.target.value;

 // Sembunyikan semua input dan dropdown terlebih dahulu
 categoryValueInput.style.display = 'none';
 statusKeaktifanDropdown.style.display = 'none';
 statusSantriDropdown.style.display = 'none';
 tahunMasukDropdown.style.display = 'none';
 pembagianKamarDropdown.style.display = 'none';
 aktivitasPendidikanDropdown.style.display = 'none';

 // Tampilkan elemen yang sesuai dengan pilihan
 if (selectedValue === 'Status Keaktifan') {
  statusKeaktifanDropdown.style.display = 'inline';
 } else if (selectedValue === 'Status Santri') {
  statusSantriDropdown.style.display = 'inline';
 } else if (selectedValue === 'Tahun Masuk') {
  tahunMasukDropdown.style.display = 'inline';
 } else if (selectedValue === 'Pembagian Kamar') {
  pembagianKamarDropdown.style.display = 'inline';
 } else if (selectedValue === 'Aktifitas Pendidikan') {
  aktivitasPendidikanDropdown.style.display = 'inline';
 } else {
  categoryValueInput.style.display = 'inline';
 }
});

// Event listener untuk tombol pencarian kategori
searchByCategoryButton.addEventListener("click", () => {
  const categoryHeader = categoryHeaderSelect.value;
    searchByCategoryButton.classList.toggle('btn-loading')

  let categoryValue;

  // Ambil nilai dari elemen yang sedang terlihat
  if (categoryHeader === 'Status Keaktifan') {
    categoryValue = statusKeaktifanDropdown.value;
  } else if (categoryHeader === 'Status Santri') {
    categoryValue = statusSantriDropdown.value;
  } else if (categoryHeader === 'Tahun Masuk') {
    categoryValue = tahunMasukDropdown.value;
  } else if (categoryHeader === 'Pembagian Kamar') {
    categoryValue = pembagianKamarDropdown.value;
  } else if (categoryHeader === 'Aktifitas Pendidikan') {
    categoryValue = aktivitasPendidikanDropdown.value;
  } else {
    categoryValue = categoryValueInput.value;
  }

  if (categoryHeader && categoryValue) {
    // Buat URL dengan parameter kategori
    const url = `${scriptURL}?category=${encodeURIComponent(categoryValue)}&categoryHeader=${encodeURIComponent(categoryHeader)}`;
    // Lakukan fetch request ke Google Apps Script
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.result === "success" && data.data.length > 0) {
    let tableHTML = '<table class="table table-bordered"><thead><tr>';
    const headers = Object.keys(data.data[0]);
    headers.forEach(header => {
      tableHTML += `<th>${header}</th>`;
    });
    tableHTML += '</tr></thead><tbody>';
    
    data.data.forEach(item => {
      tableHTML += '<tr>';
      headers.forEach(header => {
        tableHTML += `<td>${item[header]}</td>`;
      });
      tableHTML += '</tr>';
    });
    searchByCategoryButton.classList.toggle('btn-loading')

    
    tableHTML += '</tbody></table>';
    dataContainer.innerHTML = tableHTML;
        } else {
          alert("Tidak ada data yang ditemukan untuk kategori ini.");
          console.log("Tidak ada data yang ditemukan.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat mencari data.");
      });
  } else {
    alert("Silakan pilih kolom kategori dan masukkan nilai pencarian.");
  }
});