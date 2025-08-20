const scriptURL = 'https://script.google.com/macros/s/AKfycbw6E5CFLsqF7B6WvH8khobsBEN50_m6NfPZ9GlA8EsD3kp8_c7N6WOmsm0Kp9sGlUVZ/exec'
const showAllDataButton = document.getElementById('showAllDataButton');
const dataContainer = document.getElementById('data-container');
const searchButtonName = document.getElementById('searchButtonName');


// Fungsi untuk menampilkan semua data atau hasil pencarian
function showData(data) {
  dataContainer.innerHTML = '';
  if (data.result === 'success' && data.data.length > 0) {
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
    
    tableHTML += '</tbody></table>';
    dataContainer.innerHTML = tableHTML;
  } else {
    dataContainer.innerHTML = '<p>Tidak ada data ditemukan.</p>';
  }
}



// Event listener untuk tombol "Tampilkan Semua Data"
showAllDataButton.addEventListener('click', () => {
  dataContainer.innerHTML = 'Memuat semua data...';
  fetch(scriptURL, { method: 'GET' })
    .then(response => response.json())
    .then(showData)
    .catch(error => {
      dataContainer.innerHTML = `<p>Terjadi kesalahan: ${error.message}</p>`;
      console.error('Error:', error);
    });
});

  // Event listener untuk tombol "Cari Berdasarkan Nama"
searchButtonName.addEventListener('click', () => {
const searchName = searchInputName.value;
if (searchName) {
    dataContainer.innerHTML = `Mencari data dengan nama: ${searchName}...`;
    fetch(`${scriptURL}?searchName=${encodeURIComponent(searchName)}`)
    .then(response => response.json())
    .then(data => {
        showData(data); // Menampilkan semua data yang cocok di tabel
        if (data.data.length > 0) {
            alert(`${data.data.length} data ditemukan.`);
        } else {
            alert('Data tidak ditemukan.');
        }
    })
    .catch(error => console.error('Error:', error));
} else {
    alert('Silakan masukkan nama yang ingin dicari.');
}
});

document.addEventListener('DOMContentLoaded', () => {
  // Tampilkan pesan "Memuat data..." di awal
  dataContainer.innerHTML = 'Memuat semua data...';

  // Lakukan fetch data
  fetch(scriptURL, { method: 'GET' })
    .then(response => response.json())
    .then(showData)
    .catch(error => {
      dataContainer.innerHTML = `<p>Terjadi kesalahan: ${error.message}</p>`;
      console.error('Error:', error);
    });
});