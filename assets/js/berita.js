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
  }
];

const path = window.location.pathname;

let start = 0;
let end;

if (path.includes("/pages/berita/")) {
  end = berita.length;
} else {
  if (berita.length <= 5) {
    end = berita.length;
  } else {
    end = 5;
  }
}

if (berita.length != 0) {
  for (let i = start; i < end; i++) {
    const indexTerbalik = berita.length - 1 - i;
    console.log(indexTerbalik);
    const beritaCard = document.createElement("div");
    beritaCard.classList.add("aos", "berita-card");
    beritaCard.setAttribute("data-aos", "fade-up");
    beritaCard.onclick = function () {
      if (path.includes("/pages/berita/")) {
        window.location.href = `../berita/berita.html?id=${berita[indexTerbalik].id}`;
      } else {
        window.location.href = `pages/berita/berita.html?id=${berita[indexTerbalik].id}`;
      }
    };

    const beritaKeterangan = document.createElement("h5");
    beritaKeterangan.id = "beritaKeterangan";
    let classNewsCat = berita[indexTerbalik].jenis.toLowerCase();
    beritaKeterangan.innerHTML = `${berita[indexTerbalik].waktu} | <span class="news-cat ${classNewsCat}">${berita[indexTerbalik].jenis}</span>`;

    const beritaJudul = document.createElement("h4");
    beritaJudul.id = "beritaJudul";
    beritaJudul.textContent = berita[indexTerbalik].judul;

    const beritaContent = document.getElementById("beritaContent");
    beritaCard.appendChild(beritaJudul);
    beritaCard.appendChild(beritaKeterangan);
    beritaContent.appendChild(beritaCard);
  }
}

initAOS();
