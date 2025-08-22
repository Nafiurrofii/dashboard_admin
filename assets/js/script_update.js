const scriptURL = 'https://script.google.com/macros/s/AKfycbzeJs7RIH8CEw3-WLH3FjMfiNHyMxqDUSMwdc_b310_tzyLBskq_t4niZATmg7MZCQ-/exec'


// Menggunakan nama-nama input dari HTML yang baru
const form = document.forms["submit-to-google-sheet"];
const searchButtonId = document.getElementById("searchButtonId");
const searchInputId = document.getElementById("searchInputId");
const dataContainer = document.getElementById("data-container");
const dataIdInput = document.getElementById("dataId");
const button = document.getElementById("btn-up");



// Mengambil semua elemen input berdasarkan atribut 'name' dari HTML Anda
const namaLengkapInput = document.querySelector('input[name="Nama Lengkap"]');
const tahunMasukInput = document.querySelector('input[name="Tahun Masuk"]');
const nisnInput = document.querySelector('input[name="NISN"]');
const nismInput = document.querySelector('input[name="NISM"]');
const nikSantriInput = document.querySelector('input[name="NIK Santri"]');
const tempatLahirSantriInput = document.querySelector('input[name="Tempat Lahir Santri"]');
const tanggalLahirSantriInput = document.querySelector('input[name="Tanggal Lahir Santri"]');
const noTelpSantriInput = document.querySelector('input[name="No. Telp/WA Santri"]');
const nomorKKInput = document.querySelector('input[name="Nomor KK"]');
const jumlahSaudaraInput = document.querySelector('input[name="Jumlah Saudara"]');
const anakKeInput = document.querySelector('input[name="Anak ke"]');
const aktifitasPendidikanInput = document.querySelector('select[name="Aktifitas Pendidikan"]');
const pembiayaInput = document.querySelector('select[name="Yang Membiayai Sekolah"]');
const hobiInput = document.querySelector('input[name="Hobi"]');
const citaCitaInput = document.querySelector('input[name="Cita Cita"]');
const namaAyahInput = document.querySelector('input[name="Nama Ayah"]');
const statusAyahSelect = document.querySelector('select[name="Status Ayah"]');
const nikAyahInput = document.querySelector('input[name="NIK Ayah"]'); // Perhatikan nama input yang berbeda
const tempatLahirAyahInput = document.querySelector('input[name="Tempat Lahir Ayah"]');
const tanggalLahirAyahInput = document.querySelector('input[name="Tanggal Lahir Ayah"]');
const pekerjaanAyahInput = document.querySelector('input[name="Pekerjaan Ayah"]');
const pendidikanAyahInput = document.querySelector('input[name="Pendidikan Terakhir Ayah"]');
const namaIbuInput = document.querySelector('input[name="Nama Ibu"]');
const statusIbuSelect = document.querySelector('select[name="Status Ibu"]');
const nikIbuInput = document.querySelector('input[name="NIK Ibu"]');
const tempatLahirIbuInput = document.querySelector('input[name="Tempat Lahir Ibu"]');
const tanggalLahirIbuInput = document.querySelector('input[name="Tanggal Lahir Ibu"]');
const pekerjaanIbuInput = document.querySelector('input[name="Pekerjaan Ibu"]');
const pendidikanIbuInput = document.querySelector('input[name="Pendidikan Terakhir Ibu"]');
const noTelpOrtuInput = document.querySelector('input[name="No Telp Orang Tua"]');
const provinsiInput = document.querySelector('input[name="Provinsi"]');
const kabupatenInput = document.querySelector('input[name="Kabupaten/Kota"]');
const kecamatanInput = document.querySelector('input[name="Kecamatan"]');
const kelurahanInput = document.querySelector('input[name="Kelurahan/Desa"]');
const rtInput = document.querySelector('input[name="RT"]');
const rwInput = document.querySelector('input[name="RW"]');
const alamatLengkapInput = document.querySelector('input[name="Alamat Lengkap"]');
const kodePosInput = document.querySelector('input[name="Kode Pos"]');
const kelengkapanBerkasInput = document.querySelector('input[name="Kelengkapan Berkas"]');
const riwayatKesehatanInput = document.querySelector('input[name="Riwayat Kesehatan"]');
const pembagianKamarSelect = document.querySelector('select[name="Pembagian Kamar"]');
const statusTempatTinggalSelect = document.querySelector('select[name="Status Tempat Tinggal"]');
const statusKeaktifanSelect = document.querySelector('select[name="Status Keaktifan"]');
const statusSantriSelect = document.querySelector('select[name="Status Santri"]');
const tahunBoyongInput = document.querySelector('input[name="Tahun Boyong"]');

searchButtonId.addEventListener("click", () => {
            const searchId = searchInputId.value;
            if (searchId) {
                searchButtonId.classList.toggle('btn-loading')
                // dataContainer.innerHTML = `Mencari data dengan ID: ${searchId}...`;
                fetch(`${scriptURL}?searchId=${encodeURIComponent(searchId)}`)
                .then((response) => response.json())
                .then((data) => {
                        if (data.result === "success" && data.data.length > 0) {
                            const foundData = data.data[0];
                            dataIdInput.value = foundData["ID Santri"] || "";
                            namaLengkapInput.value = foundData["Nama Lengkap"] || "";
                            tahunMasukInput.value = foundData["Tahun Masuk"] || "";
                            nisnInput.value = foundData["NISN"] || "";
                            nismInput.value = foundData["NISM"] || "";
                            nikSantriInput.value = foundData["NIK Santri"] || "";
                            tempatLahirSantriInput.value = foundData["Tempat Lahir Santri"] || "";
                            tanggalLahirSantriInput.value = foundData["Tanggal Lahir Santri"] ? new Date(foundData["Tanggal Lahir Santri"]).toISOString().split('T')[0] : "";
                            noTelpSantriInput.value = foundData["No. Telp/WA Santri"] || "";
                            nomorKKInput.value = foundData["Nomor KK"] || "";
                            jumlahSaudaraInput.value = foundData["Jumlah Saudara"] || "";
                            anakKeInput.value = foundData["Anak ke"] || "";
                            aktifitasPendidikanInput.value = foundData["Aktifitas Pendidikan"] || "";
                            pembiayaInput.value = foundData["Yang Membiayai Sekolah"] || "";
                            hobiInput.value = foundData["Hobi"] || "";
                            citaCitaInput.value = foundData["Cita Cita"] || "";
                            namaAyahInput.value = foundData["Nama Ayah"] || "";
                            statusAyahSelect.value = foundData["Status Ayah"] || "";
                            nikAyahInput.value = foundData["NIK Ayah"] || "";
                            tempatLahirAyahInput.value = foundData["Tempat Lahir Ayah"] || "";
                            tanggalLahirAyahInput.value = foundData["Tanggal Lahir Ayah"] ? new Date(foundData["Tanggal Lahir Ayah"]).toISOString().split('T')[0] : "";
                            pekerjaanAyahInput.value = foundData["Pekerjaan Ayah"] || "";
                            pendidikanAyahInput.value = foundData["Pendidikan Terakhir Ayah"] || "";
                            namaIbuInput.value = foundData["Nama Ibu"] || "";
                            statusIbuSelect.value = foundData["Status Ibu"] || "";
                            nikIbuInput.value = foundData["NIK Ibu"] || "";
                            tempatLahirIbuInput.value = foundData["Tempat Lahir Ibu"] || "";
                            tanggalLahirIbuInput.value = foundData["Tanggal Lahir Ibu"] ? new Date(foundData["Tanggal Lahir Ibu"]).toISOString().split('T')[0] : "";
                            pekerjaanIbuInput.value = foundData["Pekerjaan Ibu"] || "";
                            pendidikanIbuInput.value = foundData["Pendidikan Terakhir Ibu"] || "";
                            noTelpOrtuInput.value = foundData["No Telp Orang Tua"] || "";
                            provinsiInput.value = foundData["Provinsi"] || "";
                            kabupatenInput.value = foundData["Kabupaten/Kota"] || "";
                            kecamatanInput.value = foundData["Kecamatan"] || "";
                            kelurahanInput.value = foundData["Kelurahan/Desa"] || "";
                            rtInput.value = foundData["RT"] || "";
                            rwInput.value = foundData["RW"] || "";
                            alamatLengkapInput.value = foundData["Alamat Lengkap"] || "";
                            kodePosInput.value = foundData["Kode Pos"] || "";
                            kelengkapanBerkasInput.value = foundData["Kelengkapan Berkas"] || "";
                            riwayatKesehatanInput.value = foundData["Riwayat Kesehatan"] || "";
                            pembagianKamarSelect.value = foundData["Pembagian Kamar"] || "";
                            statusTempatTinggalSelect.value = foundData["Status Tempat Tinggal"] || "";
                            statusKeaktifanSelect.value = foundData["Status Keaktifan"] || "";
                            statusSantriSelect.value = foundData["Status Santri"] || "";
                            tahunBoyongInput.value = foundData["Tahun Boyong"] || "";

                            searchButtonId.classList.toggle('btn-loading')
                            alert("Data ditemukan, silakan perbarui.");
                        } else {
                            alert("Data tidak ditemukan.");
                        }
                    })
                    .catch((error) => console.error("Error:", error));
            } else {
                alert("Silakan masukkan ID yang ingin dicari.");
            }
        });



// Event listener untuk formulir submit (Add/Update)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    button.classList.toggle('btn-loading');
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === "updated") {
                button.classList.toggle('btn-loading');
                alert("Data berhasil diperbarui!");
            } else if (data.status === "added") {
                alert("Data berhasil ditambahkan!");
            }
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});