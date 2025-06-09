const berita = [
  {
    id: "1",
    waktu: "07 Juni 2025",
    jenis: "PixFeed",
    judul: "Langkah awal berdirinya Pixkyro Studio",
    isi: "<img src='../../assets/images/background/beranda_img.png'><p>Pada tanggal 26 Maret 2025, Elang Alamsyah Habibi secara resmi membentuk sebuah studio kreatif bernama Pixkyro Studio. Studio ini berlokasi di Indonesia dan dibuat sebagai tempat untuk menuangkan berbagai ide kreatif, mulai dari pengembangan game, animasi, hingga konten digital lainnya.</p><br><p>Pixkyro Studio difokuskan untuk mengembangkan proyek berupa Game ataupun Animasi. Studio ini akan menjadi wadah untuk menghasilkan karya-karya digital yang sesuai dengan minat dan gaya Elang sendiri.</p><br><p>Studio ini juga menjadi langkah awal bagi Elang untuk lebih serius dalam berkarya di dunia digital. Ia ingin menjadikan Pixkyro sebagai tempat belajar, berkembang, dan mencoba berbagai hal baru tanpa tekanan dari luar.</p><br><p>Hingga saat ini, Elang masih dalam proses belajar dan menyusun fondasi awal untuk Pixkyro Studio. Saat ini, Pixkyro Studio belum aktif memproduksi konten, namun sedang dipersiapkan secara perlahan agar ke depannya bisa berjalan dengan lebih terarah. Meski masih dalam tahap awal, Elang berharap Pixkyro Studio bisa terus aktif dan konsisten menghasilkan konten yang positif dan menginspirasi.</p>"
  },
  {
    id: "2",
    waktu: "08 Juni 2025",
    jenis: "PixFeed",
    judul: "Pixkyro Studio Resmi Meluncurkan Website Resminya",
    isi: "<p>Pada tanggal 8 Juni 2025, Pixkyro Studio resmi meluncurkan situs web resminya sebagai pusat informasi dan update terkait semua aktivitas studio. Website ini dirancang untuk menjadi tempat utama dalam membagikan pengembangan proyek, aktivitas studio, hingga teaser konten yang sedang dikerjakan oleh Elang Alamsyah Habibi, pendiri dari Pixkyro Studio.</p><br><p>Tampilan situs dibuat simpel, sederhana dan mudah diakses, memuat berbagai halaman seperti Karya, Tentang Studio, Kontak, dan Berita. Dalam halaman berita terdapat beberapa kategori seperti Pixlog, Insight, PixFeed, KirooPedia, hingga Pixkyro Talks yang akan diisi secara bertahap sesuai perkembangan studio.</p><br><p>Dengan hadirnya website ini, Pixkyro Studio berharap bisa lebih terbuka dalam membagikan proses di balik layar, berbagi ilmu, serta menjadi arsip digital bagi setiap langkah kecil yang dilakukan ke depannya.</p><br><p>Website ini juga menjadi bagian dari upaya awal dalam membangun identitas digital studio secara perlahan, sambil terus belajar dan berkembang di dunia kreatif.</p>"
  },
  {
    id: "3",
    waktu: "09 Juni 2025",
    jenis: "PixFeed",
    judul:
      "Pixkyro Studio Kini Terbuka untuk Kamu yang Ingin Ikut Berkontribusi",
    isi: "<p>Pixkyro Studio kini membuka pintu lebih lebar bagi kamu yang ingin mendukung perkembangan studio ini. Mulai hari ini, Pixkyro menerima donasi melalui platform Trakteer, sebagai salah satu cara sederhana untuk bantu studio terus berjalan dan berkembang.</p><br><p>Selain itu, Pixkyro juga membuka kesempatan bagi siapa pun yang ingin ikut berkontribusi dalam pengembangan proyek—baik itu dalam bentuk ide, ilustrasi, pemrograman, atau sekadar bantu semangat dari balik layar. Studio ini masih dalam tahap awal dan semua bantuan, sekecil apa pun, sangat berarti.</p><br><p>Bagi kamu yang ingin mendukung secara finansial, bisa mampir ke halaman Trakteer berikut: <a href='https://trakteer.id/pixkyro' target='_blank' rel='noopener noreferrer'>Dukung Kami</a></p><br><p>Bagi yang tertarik gabung dan ingin berkembang dengan kami, bisa klik teks berwarna biru disamping ini, isi data diri dan keahlian kalian. <a href='https://forms.gle/UVtvew1ajoJ25CpD8' target='_blank' rel='noopener noreferrer'>Formulir Gabung ke Pixkyro Studio</a></p><br><p> Kami tunggu kehadiran kalian.</p><br><p>'Karena kadang, sebuah langkah kecil dari orang lain, bisa jadi dorongan besar untuk terus berkarya.'</p>"
  }
];

const selectKategori = document.getElementById("kategoriSelect");
const beritaContent = document.getElementById("beritaContent");

function tampilkanBerita(kategori) {
  beritaContent.innerHTML = "";

  let beritaYangDitampilkan = [];

  if (kategori === "all") {
    beritaYangDitampilkan = berita;
  } else {
    for (let i = 0; i < berita.length; i++) {
      if (berita[i].jenis.toLowerCase() === kategori) {
        beritaYangDitampilkan.push(berita[i]);
      }
    }
  }

  if (beritaYangDitampilkan.length === 0) {
    beritaContent.style.gridTemplateColumns = "repeat(1, 1fr)";
    beritaContent.innerHTML = "<p>Tidak ada berita untuk kategori ini.</p>";
  } else {
    if (beritaYangDitampilkan.length === 1) {
      beritaContent.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else {
      beritaContent.style.gridTemplateColumns = "repeat(2, 1fr)";
    }

    const path = window.location.pathname;

    let start = 0;
    let end;

    if (path.includes("/pages/berita/")) {
      end = beritaYangDitampilkan.length;
    } else {
      if (beritaYangDitampilkan.length <= 5) {
        end = beritaYangDitampilkan.length;
      } else {
        end = 5;
      }
    }

    for (let i = start; i < end; i++) {
      const indexTerbalik = beritaYangDitampilkan.length - 1 - i;

      const b = beritaYangDitampilkan[indexTerbalik];
      const beritaCard = document.createElement("div");
      beritaCard.className = "berita-card";

      beritaCard.onclick = function () {
        if (path.includes("/pages/berita/")) {
          window.location.href = `../berita/berita.html?id=${b.id}`;
        } else {
          window.location.href = `pages/berita/berita.html?id=${b.id}`;
        }
      };

      const beritaKeterangan = document.createElement("h5");
      beritaKeterangan.id = "beritaKeterangan";
      let classNewsCat = b.jenis.toLowerCase();
      beritaKeterangan.innerHTML = `${b.waktu} | <span class="news-cat ${classNewsCat}">${b.jenis}</span>`;

      const beritaJudul = document.createElement("h4");
      beritaJudul.id = "beritaJudul";
      beritaJudul.textContent = b.judul;

      beritaCard.appendChild(beritaJudul);
      beritaCard.appendChild(beritaKeterangan);
      beritaContent.appendChild(beritaCard);
    }
  }
}

// Saat halaman pertama kali dibuka, tampilkan semua
tampilkanBerita("all");

selectKategori.addEventListener("change", function () {
  const kategoriYangDipilih = selectKategori.value;
  tampilkanBerita(kategoriYangDipilih);
});
