
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx3sMuTZvBWytbDrNtwWciF2Pw_6KQ78t-YbOnWHeFzLdsqxfbAXMIfja48j2HRsYZK/exec'
  const form = document.forms['submit-to-google-sheet']
  const button = document.querySelector('.btnb')

// insert data
  form.addEventListener('submit', e => {
    e.preventDefault();
    // ketika tombol submit dikirim
    button.classList.toggle('btn-loading');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        button.classList.toggle('btn-loading');
        alert("Data Berhasil Ditambahkan");
        console.log('Success!', response);
        form.reset();
    })
      .catch(error => {
        alert("Data Gagal Ditambahkan")
        console.error('Error!', error.message)})
  })

  // Event listener untuk formulir submit (Add/Update)
//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => response.json())
//       .then(data => {
//         if (data.status === 'updated') {
//           alert('Data berhasil diperbarui!');
//         } else if (data.status === 'added') {
//           alert('Data berhasil ditambahkan!');
//         }
//         // showAllData();
//       })
//       .catch(error => console.error('Error!', error.message));
//   });






//   const searchButtonId = document.getElementById('searchButtonId');
//   const searchButtonName = document.getElementById('searchButtonName');
//   const showAllDataButton = document.getElementById('showAllDataButton');
//   const searchInputId = document.getElementById('searchInputId');
//   const searchInputName = document.getElementById('searchInputName');
//   const dataIdInput = document.getElementById('dataId');
//   const firstNameInput = document.querySelector('input[name="firstName"]');
//   const lastNameInput = document.querySelector('input[name="lastName"]');
//   const dataContainer = document.getElementById('data-container');

  // Fungsi untuk menampilkan semua data atau hasil pencarian
//   function showData(data) {
//     dataContainer.innerHTML = '';
//     if (data.result === 'success' && data.data.length > 0) {
//       let tableHTML = '<table><thead><tr>';
//       const headers = Object.keys(data.data[0]);
//       headers.forEach(header => {
//         tableHTML += `<th>${header}</th>`;
//       });
//       tableHTML += '</tr></thead><tbody>';
      
//       data.data.forEach(item => {
//         tableHTML += '<tr>';
//         headers.forEach(header => {
//           tableHTML += `<td>${item[header]}</td>`;
//         });
//         tableHTML += '</tr>';
//       });
      
//       tableHTML += '</tbody></table>';
//       dataContainer.innerHTML = tableHTML;
//     } else {
//       dataContainer.innerHTML = '<p>Tidak ada data ditemukan.</p>';
//     }
//   }

  // Event listener untuk tombol "Tampilkan Semua Data"
//   showAllDataButton.addEventListener('click', () => {
//     dataContainer.innerHTML = 'Memuat semua data...';
//     fetch(scriptURL, { method: 'GET' })
//       .then(response => response.json())
//       .then(showData)
//       .catch(error => {
//         dataContainer.innerHTML = `<p>Terjadi kesalahan: ${error.message}</p>`;
//         console.error('Error:', error);
//       });
//   });

  // Event listener untuk tombol "Cari Berdasarkan ID"
//   searchButtonId.addEventListener('click', () => {
//     const searchId = searchInputId.value;
//     if (searchId) {
//       dataContainer.innerHTML = `Mencari data dengan ID: ${searchId}...`;
//       fetch(`${scriptURL}?searchId=${encodeURIComponent(searchId)}`)
//         .then(response => response.json())
//         .then(data => {
//           if (data.result === 'success' && data.data.length > 0) {
//             const foundData = data.data[0];
//             dataIdInput.value = foundData.id;
//             firstNameInput.value = foundData.firstName;
//             lastNameInput.value = foundData.lastName;
//             alert('Data ditemukan, silakan perbarui.');
//             showData(data); // Menampilkan hasil pencarian di tabel
//           } else {
//             alert('Data tidak ditemukan.');
//             dataIdInput.value = '';
//             firstNameInput.value = '';
//             lastNameInput.value = '';
//             dataContainer.innerHTML = '<p>Data tidak ditemukan.</p>';
//           }
//         })
//         .catch(error => console.error('Error:', error));
//     } else {
//       alert('Silakan masukkan ID yang ingin dicari.');
//     }
//   });

  // Event listener untuk tombol "Cari Berdasarkan Nama"
//   searchButtonName.addEventListener('click', () => {
//     const searchName = searchInputName.value;
//     if (searchName) {
//       dataContainer.innerHTML = `Mencari data dengan nama: ${searchName}...`;
//       fetch(`${scriptURL}?searchName=${encodeURIComponent(searchName)}`)
//         .then(response => response.json())
//         .then(data => {
//           showData(data); // Menampilkan semua data yang cocok di tabel
//           if (data.data.length > 0) {
//              alert(`${data.data.length} data ditemukan.`);
//           } else {
//              alert('Data tidak ditemukan.');
//           }
//         })
//         .catch(error => console.error('Error:', error));
//     } else {
//       alert('Silakan masukkan nama yang ingin dicari.');
//     }
//   });



  // Memuat data saat halaman pertama kali dimuat
//   showAllData();
