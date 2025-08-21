const scriptURL = 'https://script.google.com/macros/s/AKfycbzeJs7RIH8CEw3-WLH3FjMfiNHyMxqDUSMwdc_b310_tzyLBskq_t4niZATmg7MZCQ-/exec'
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