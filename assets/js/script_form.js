
const scriptURL = 'https://script.google.com/macros/s/AKfycbw6E5CFLsqF7B6WvH8khobsBEN50_m6NfPZ9GlA8EsD3kp8_c7N6WOmsm0Kp9sGlUVZ/exec'
const form = document.forms['submit-to-google-sheet'];
const button = document.querySelector('.btnb');

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
});
  





  const searchButtonId = document.getElementById('searchButtonId');
  const searchInputId = document.getElementById('searchInputId');
  const searchInputName = document.getElementById('searchInputName');
  const dataIdInput = document.getElementById('dataId');
  const firstNameInput = document.querySelector('input[name="firstName"]');
  const lastNameInput = document.querySelector('input[name="lastName"]');

  // Event listener untuk formulir submit (Add/Update)
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => response.json())
      .then(data => {
        if (data.status === 'updated') {
          alert('Data berhasil diperbarui!');
        } else if (data.status === 'added') {
          alert('Data berhasil ditambahkan!');
        }
        // showAllData();
      })
      .catch(error => console.error('Error!', error.message));
  });




  // Event listener untuk tombol "Cari Berdasarkan ID"
  searchButtonId.addEventListener('click', () => {
    const searchId = searchInputId.value;
    if (searchId) {
      dataContainer.innerHTML = `Mencari data dengan ID: ${searchId}...`;
      fetch(`${scriptURL}?searchId=${encodeURIComponent(searchId)}`)
        .then(response => response.json())
        .then(data => {
          if (data.result === 'success' && data.data.length > 0) {
            const foundData = data.data[0];
            dataIdInput.value = foundData.id;
            firstNameInput.value = foundData.firstName;
            lastNameInput.value = foundData.lastName;
            alert('Data ditemukan, silakan perbarui.');
            showData(data); // Menampilkan hasil pencarian di tabel
          } else {
            alert('Data tidak ditemukan.');
            dataIdInput.value = '';
            firstNameInput.value = '';
            lastNameInput.value = '';
            dataContainer.innerHTML = '<p>Data tidak ditemukan.</p>';
          }
        })
        .catch(error => console.error('Error:', error));
    } else {
      alert('Silakan masukkan ID yang ingin dicari.');
    }
  });
