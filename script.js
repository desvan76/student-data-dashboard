
// mock data siswa
const siswa = [
    {
        name: "Andi Saputra",
        class: "Full Stack A",
        score: 85
    },
    {
        name: "Budi Santoso",
        class: "Full Stack A",
        score: 78
    },
    {
        name: "Citra Lestari",
        class: "Full Stack B",
        score: 92
    },
    {
        name: "Dewi Anggraini",
        class: "Backend Core",
        score: 88
    },
    {
        name: "Eko Prasetyo",
        class: "Backend Core",
        score: 75
    },
    {
        name: "Fina Amelia",
        class: "Full Stack A",
        score: 95
    },
    {
        name: "Gilang Ramadhan",
        class: "Full Stack B",
        score: 80
    },
    {
        name: "Hani Fitriani",
        class: "Backend Core",
        score: 89
    },
    {
        name: "Irfan Hakim",
        class: "Full Stack B",
        score: 70
    },
    {
        name: "Joko Susilo",
        class: "Backend Core",
        score: 82
    }
];

// mengambil elemen html
const tabelSiswa = document.getElementById("tabelSiswa");
const searchInput = document.getElementById("searchInput");

// fungsi untuk menampilkan data
function tampilkanSiswa(data) {

    // Menggunakan map() untuk merender tabel
    tabelSiswa.innerHTML = data.map((siswa, index) => {

        // Menentukan warna nilai
        let warna;

        if (siswa.score >= 85) {
            warna = "high";
        } else if (siswa.score >= 75) {
            warna = "medium";
        } else {
            warna = "low";
        }

        return `
            <tr>
                <td>${index + 1}</td>
                <td>${siswa.name}</td>
                <td>
                    <span class="class-badge">
                        ${siswa.class}
                    </span>
                </td>
                <td>
                    <span class="score ${warna}">
                        ${siswa.score}
                    </span>
                </td>
            </tr>
        `;

    }).join("");

    // menggunakan reduce() untuk menghitung total nilai
    const totalNilai = data.reduce((total, siswa) => {
        return total + siswa.score;
    }, 0);

    // menggunakan reduce() untuk menghitung rata-rata
    const rataRata = data.length > 0
        ? (totalNilai / data.length).toFixed(1)
        : "0.0";

    // memperbarui statistik
    document.getElementById("totalSiswa").textContent = siswa.length;
    document.getElementById("jumlahTampil").textContent = data.length;
    document.getElementById("rataRata").textContent = rataRata;

    // memperbarui footer
    document.getElementById("footerJumlah").textContent = data.length;
    document.getElementById("footerRataRata").textContent = rataRata;

    // jika data tidak ditemukan
    if (data.length === 0) {
        tabelSiswa.innerHTML = `
            <tr>
                <td colspan="4" style="text-align:center; padding:30px;">
                    Data siswa tidak ditemukan.
                </td>
            </tr>
        `;
    }
}

// event listener untuk fitur pencarian
searchInput.addEventListener("input", function() {

    const keyword = searchInput.value.toLowerCase();

    // menggunakan filter() untuk mencari nama siswa
    const hasilPencarian = siswa.filter((data) => {
        return data.name.toLowerCase().includes(keyword);
    });

    // menampilkan hasil pencarian
    tampilkanSiswa(hasilPencarian);

});

// menampilkan semua data saat halaman dibuka
tampilkanSiswa(siswa);
