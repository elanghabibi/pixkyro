let pathBeritaImg = "assets/images/background/";

const berita = [
  {
    beritaImg: `${pathBeritaImg}beranda_img.png`,
    beritaKeterangan: "12/03/2025 | PixFeed",
    beritaJudul: "Studio Kami, Dunia Kami: Selamat Datang di Pixkyro"
  },
  {
    beritaImg: `${pathBeritaImg}pp.png`,
    beritaKeterangan: "15/04/2025 | PixNews",
    beritaJudul:
      "Kiiro Terbang Tinggi! Maskot Baru dari Pixkyro Resmi Diperkenalkan"
  },
  {
    beritaImg: `${pathBeritaImg}beranda_img.png`,
    beritaKeterangan: "27/05/2025 | Inside Pixkyro",
    beritaJudul:
      "Dari Sketsa ke Dunia Nyata: Proses Kreatif Animasi Pixkyro Terungkap"
  },
  {
    beritaImg: `${pathBeritaImg}beranda_img.png`,
    beritaKeterangan: "30/05/2025 | Kiiropedia",
    beritaJudul:
      "Dari Sketsa ke Dunia Nyata: Proses Kreatif Animasi Pixkyro Terungkap"
  }
];

if (berita.length != 0) {
  for (let i = 0; i < 3; i++) {
    const beritaCard = document.createElement("div");
    beritaCard.classList.add("aos", "berita-card");
    beritaCard.setAttribute("data-aos", "fade-up");

    const beritaImg = document.createElement("div");
    beritaImg.id = "beritaImg";
    beritaImg.style.backgroundImage = `url('${berita[i].beritaImg}')`;

    const beritaKeterangan = document.createElement("h3");
    beritaKeterangan.id = "beritaKeterangan";
    beritaKeterangan.textContent = berita[i].beritaKeterangan;

    const beritaJudul = document.createElement("h2");
    beritaJudul.id = "beritaJudul";
    beritaJudul.textContent = berita[i].beritaJudul;

    const beritaContent = document.getElementById("beritaContent");
    beritaCard.appendChild(beritaImg);
    beritaCard.appendChild(beritaKeterangan);
    beritaCard.appendChild(beritaJudul);
    beritaContent.appendChild(beritaCard);
  }
}

initAOS();