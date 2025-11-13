// ==================== Data Produk Global ====================
// **PERUBAHAN:** Data produk dipindah ke sini (menjadi global)
// agar bisa dibaca oleh script di 'product detail.html'
const allProducts = [
  {
    id: 1,
    name: "Benih Cabai Carolina",
    category: "benih",
    price: 12000,
    img: "img/general/Cabai Carolina.png",
    char: "1 pack berisi ±12 biji <br> - Benih Unggul <br> - Tingkat Pedas: Sangat Tinggi (±2.200.000 SHU) <br> - Perawatan: Sedang <br> - Masa Panen: ±90 hari",
    desc: "Benih Cabai Carolina Reaper, hasil persilangan antara Habanero dan Ghost Pepper, dikenal sebagai salah satu cabai terpedas di dunia dengan tingkat kepedasan mencapai sekitar 2,2 juta Scoville Heat Units (SHU). Cabai ini memiliki bentuk keriput dan ekor khas pada ujung buahnya. Cocok untuk para pecinta pedas ekstrem dan penggemar koleksi cabai langka. Tumbuh optimal di daerah tropis dengan sinar matahari penuh, penyiraman rutin, serta pemupukan organik seimbang untuk hasil terbaik.",
  },
  {
    id: 2,
    name: "Benih Cabai Fatalii",
    category: "benih",
    price: 12000,
    img: "img/general/Cabai Fatalii.png",
    char: "1 pack berisi ±12 biji <br> - Rasa Pedas & Sitrus <br> - Tingkat Pedas: 125.000–400.000 SHU <br> - Asal: Afrika Tengah <br> - Panen: ±80 hari",
    desc: "Benih Cabai Fatalii berasal dari Afrika Tengah dan terkenal dengan rasa pedas tajam berpadu aroma sitrus yang segar. Buahnya berwarna kuning cerah ketika matang, cocok untuk saus pedas, sambal fermentasi, atau olahan cabai segar. Varietas ini mudah tumbuh di iklim tropis, cepat berbuah, dan memiliki produktivitas tinggi. Cocok untuk ditanam di pot maupun lahan terbuka dengan paparan sinar matahari penuh.",
  },
  {
    id: 3,
    name: "Benih Cabai Ghost Pepper",
    category: "benih",
    price: 15000,
    img: "img/general/Cabai Ghost Pepper.png",
    char: "1 pack berisi ±12 biji <br> - Super Pedas <br> - Tingkat Pedas: ±1.041.427 SHU <br> - Asal: India Timur Laut <br> - Panen: ±100 hari",
    desc: "Benih Cabai Ghost Pepper atau Bhut Jolokia berasal dari Assam, India, dan pernah menyandang gelar cabai terpedas di dunia. Dengan tingkat pedas lebih dari 1 juta SHU, cabai ini memberikan sensasi pedas yang datang perlahan namun bertahan lama. Memiliki warna merah menyala dengan aroma khas buah tropis. Cocok untuk olahan saus super pedas dan sambal bubuk. Dapat tumbuh baik di iklim hangat dengan sinar matahari penuh.",
  },
  {
    id: 4,
    name: "Benih Cabai Habanero",
    category: "benih",
    price: 10000,
    img: "img/general/Cabai Habanero.png",
    char: "1 pack berisi ±12 biji <br> - Pedas Buah Tropis <br> - Tingkat Pedas: 100.000–350.000 SHU <br> - Warna: Oranye/merah <br> - Panen: ±80 hari",
    desc: "Benih Cabai Habanero merupakan varietas populer dari Meksiko dan Karibia. Dikenal dengan rasa pedas tajam yang berpadu aroma buah tropis seperti mangga dan pepaya. Buahnya kecil dan berwarna oranye cerah saat matang, sangat cocok untuk saus pedas dan bumbu masakan. Tumbuh optimal pada suhu hangat dan membutuhkan penyiraman teratur dengan tanah berdrainase baik.",
  },
  {
    id: 5,
    name: "Benih Cabai Jalapeno",
    category: "benih",
    price: 20000,
    img: "img/general/Cabai Jalapeno.png",
    char: "1 pack berisi ±12 biji <br> - Pedas Sedang <br> - Tingkat Pedas: 2.500–8.000 SHU <br> - Asal: Meksiko <br> - Panen: ±75 hari",
    desc: "Benih Cabai Jalapeno adalah varietas klasik asal Meksiko dengan rasa pedas sedang dan aroma segar. Cabai ini sering digunakan dalam pizza, taco, dan berbagai masakan internasional. Buahnya berwarna hijau tua dan berubah merah saat matang, berukuran sekitar 7–9 cm. Cocok untuk ditanam di pot atau kebun kecil dengan hasil panen melimpah dan perawatan mudah.",
  },
  {
    id: 6,
    name: "Benih Cabai Naga Viper",
    category: "benih",
    price: 28000,
    img: "img/general/Cabai Naga Viper.png",
    char: "1 pack berisi ±12 biji <br> - Super Hibrida <br> - Tingkat Pedas: ±1.382.118 SHU <br> - Asal: Inggris <br> - Panen: ±95 hari",
    desc: "Benih Cabai Naga Viper merupakan hasil persilangan antara tiga varietas ekstrem: Naga Morich, Bhut Jolokia, dan Trinidad Scorpion. Dikenal karena tingkat kepedasannya yang luar biasa tinggi dengan sensasi pedas bertahap. Buahnya berwarna merah tua dengan tekstur keriput khas. Cocok untuk kolektor cabai langka atau penggemar cabai ekstrem. Tumbuh baik di iklim hangat dengan penyinaran penuh.",
  },
  {
    id: 7,
    name: "Benih Cabai Orange Drop",
    category: "benih",
    price: 17000,
    img: "img/general/Cabai Orange Drop.png",
    char: "1 pack berisi ±12 biji <br> - Cabai Mini <br> - Warna Oranye Cerah <br> - Pedas Menyegarkan <br> - Panen: ±85 hari",
    desc: "Benih Cabai Orange Drop menghasilkan cabai mini berwarna oranye cerah yang menarik. Rasa pedasnya ringan hingga sedang dengan aroma segar khas cabai muda. Selain untuk konsumsi, varietas ini juga sering dijadikan tanaman hias karena tampilannya yang estetik dan produktif. Cocok untuk ditanam di pot hias di teras atau balkon.",
  },
  {
    id: 8,
    name: "Benih Cabai Scotch Bonnet",
    category: "benih",
    price: 25000,
    img: "img/general/Cabai Scotch Bonnet.png",
    char: "1 pack berisi ±12 biji <br> - Pedas Tropis <br> - Tingkat Pedas: 100.000–350.000 SHU <br> - Asal: Karibia <br> - Panen: ±90 hari",
    desc: "Benih Cabai Scotch Bonnet berasal dari Kepulauan Karibia dan sangat populer dalam masakan Jamaika. Cabai ini memiliki bentuk menyerupai topi (bonnet) dengan warna kuning hingga merah cerah saat matang. Rasa pedasnya tajam dengan aroma buah tropis seperti nanas dan mangga. Cocok untuk saus pedas, masakan panggang, dan sambal khas Karibia.",
  },
  {
    id: 9,
    name: "Benih Cabai Thai Chili",
    category: "benih",
    price: 15000,
    img: "img/general/Cabai Thai Chili.png",
    char: "1 pack berisi ±12 biji <br> - Pedas Tajam <br> - Tingkat Pedas: 50.000–100.000 SHU <br> - Ukuran Kecil <br> - Panen: ±75 hari",
    desc: "Benih Cabai Thai Chili (Prik Kee Noo) merupakan cabai khas Asia Tenggara dengan rasa pedas tajam dan aroma segar. Sering digunakan dalam kuliner Thailand dan Indonesia seperti tumisan, sambal, dan sup pedas. Ukurannya kecil namun sangat produktif. Dapat tumbuh baik di pot maupun lahan, tahan panas, dan mudah perawatannya.",
  },
  {
    id: 15,
    name: "Pupuk ZA",
    category: "nutrisi",
    price: 30000,
    img: "img/general/Pupuk X.png",
    char: "Sumber Nitrogen <br> - Non-Organik <br> - Merangsang Daun <br> - 1kg",
    desc: "Pupuk ZA (Zwavelzure Ammoniak) merupakan pupuk kimia yang mengandung Nitrogen (21%) dan Sulfur (24%). Berfungsi utama untuk mempercepat pertumbuhan daun dan batang pada fase vegetatif. Sangat baik digunakan pada tanaman sayuran daun, padi, dan tanaman hias. Sebaiknya digunakan dengan dosis terukur dan tidak berlebihan.",
  },
  {
    id: 21,
    name: "Sekam Bakar",
    category: "media",
    price: 7000,
    img: "img/general/Sekam Bakar.png",
    char: "Media Tanam <br> - Porositas Tinggi <br> - Steril <br> - 1 karung",
    desc: "Sekam bakar adalah hasil pembakaran sebagian kulit padi yang dijadikan media tanam dengan porositas tinggi. Mampu menjaga kelembapan dan sirkulasi udara di dalam tanah, serta membantu akar tanaman tumbuh lebih sehat. Sudah steril dari jamur dan hama, ideal untuk campuran tanah maupun media hidroponik.",
  },
  {
    id: 22,
    name: "Spons Hidroponik",
    category: "media",
    price: 3000,
    img: "img/general/Spons Hidroponik.png",
    char: "Media Semai <br> - Hidroponik <br> - Menyerap Air <br> - 1 Papan",
    desc: "Spons khusus untuk penyemaian benih pada sistem hidroponik. Memiliki daya serap air tinggi namun tetap menjaga aerasi akar agar tidak tergenang. Cocok digunakan untuk semai sayuran daun seperti selada, bayam, dan kangkung. Dapat dipotong sesuai ukuran netpot atau tray semai.",
  },
  {
    id: 31,
    name: "Gunting Tanaman",
    category: "peralatan",
    price: 38000,
    img: "img/general/Gunting Tanaman.png",
    char: "Stainless Steel <br> - Tajam & Presisi <br> - Ergonomis <br> - Anti Karat",
    desc: "Gunting pangkas berkualitas tinggi berbahan stainless steel yang tahan lama dan tajam. Dirancang dengan gagang ergonomis agar nyaman di tangan, cocok untuk memangkas ranting kecil, daun, atau bunga. Ideal digunakan untuk tanaman hias maupun kebun sayur.",
  },
  {
    id: 41,
    name: "Set Komplit Berkebun",
    category: "promo",
    price: 75000,
    img: "img/general/Set Komplit.png",
    char: "Peralatan Lengkap <br> - Termasuk Sekop, Sarung Tangan, dan Gunting <br> - Material Kuat <br> - Cocok untuk Pemula",
    desc: "Set komplit berkebun berisi perlengkapan dasar seperti sekop mini, sarung tangan, gunting tanaman, dan garpu tanah. Terbuat dari bahan berkualitas tinggi dan desain ergonomis untuk kenyamanan berkebun. Ideal bagi pemula yang ingin memulai berkebun di rumah atau kebun kecil.",
  },
];

// ==================== Data Berita Global ====================
const allNews = 
  [
  {
    id: 1,
    title: "5 Langkah Mudah Menanam Selada Hidroponik untuk Pemula",
    summary: `
Menanam selada hidroponik kini menjadi tren di kalangan pemula karena mudah dilakukan di rumah tanpa memerlukan lahan luas. Metode ini menggunakan air bernutrisi sebagai media utama, bukan tanah, sehingga lebih bersih dan hasil panennya lebih cepat. Menurut Arkademi (2024), sistem hidroponik yang paling cocok untuk pemula adalah sistem wick atau rakit apung karena mudah dirakit dan hemat biaya.

Langkah pertama adalah memilih benih selada berkualitas dan menyemainya di media lembap seperti rockwool. Setelah tumbuh 2–3 daun sejati, bibit bisa dipindahkan ke sistem hidroponik. Pastikan media tanam tetap lembap dan terpapar cahaya cukup — jika di dalam ruangan, gunakan lampu grow light. Menurut QualityFarm.id, menjaga pH air di kisaran 5,5–6,5 serta EC nutrisi sesuai anjuran (sekitar 1.2–1.8 mS/cm) sangat penting agar akar menyerap nutrisi dengan optimal.

Liputan6 (2023) menambahkan bahwa salah satu keunggulan hidroponik adalah efisiensi air hingga 90% dibanding metode konvensional. Selain itu, tanaman bebas dari gulma dan hama tanah. Tips tambahan: ganti larutan nutrisi secara rutin dan periksa akar agar tidak membusuk. Dengan perawatan yang tepat, selada siap panen dalam waktu 30–40 hari. Hidroponik bukan hanya hemat ruang, tapi juga membuka peluang usaha kecil di rumah.
    `,
    category: "Tutorial",
    date: "10 Nov 2025",
    image: "img/coming soon.jpg",
  },
  {
    id: 2,
    title: "Nutrisi AB Mix: Rahasia Pertumbuhan Cepat Tanaman Hidroponik",
    summary: `
Nutrisi AB Mix adalah kunci utama dalam pertumbuhan tanaman hidroponik. Larutan ini terdiri dari dua bagian — A dan B — yang masing-masing mengandung unsur hara makro dan mikro penting. Berdasarkan penelitian dari Neliti (2019), keseimbangan kedua nutrisi ini berpengaruh langsung terhadap tinggi tanaman, jumlah daun, dan hasil panen. Nutrisi A umumnya berisi Nitrogen (N) dan Kalium (K), sedangkan B mengandung Fosfor (P), Sulfur (S), serta unsur mikro seperti Fe, Zn, dan Cu.

Menurut Farmee.id, larutan AB Mix tidak boleh dicampur langsung dalam bentuk pekat karena bisa menyebabkan pengendapan dan menurunkan efektivitas nutrisi. Campurkan masing-masing dengan air terlebih dahulu, baru gabungkan ke dalam tangki utama. pH ideal untuk hidroponik berkisar 5,8–6,5, sementara EC (Electrical Conductivity) sekitar 1.5–2.0 mS/cm tergantung jenis tanaman.

Agromedia.net menjelaskan, simpan AB Mix di tempat sejuk dan gelap untuk menjaga stabilitasnya. Tips tambahan: gunakan dosis yang sesuai fase tanaman — misalnya fase vegetatif memerlukan lebih banyak nitrogen, sementara fase berbunga dan berbuah memerlukan lebih banyak kalium dan fosfor. Untuk tanaman buah seperti cabai dan tomat, pilih AB Mix khusus buah. Dengan penggunaan yang benar, AB Mix mampu mempercepat pertumbuhan tanaman hingga 30% dibanding media tanah biasa, menjadikannya pilihan utama para pegiat hidroponik modern.
    `,
    category: "Berita",
    date: "9 Nov 2025",
    image: "img/coming soon.jpg",
  },
];


// ==================== NEWS RENDER FIX ====================
function renderNewsCards(newsData) {
  const container = document.getElementById("index-news-container");
  if (!container) return; // kalau belum ada di halaman, skip

  container.innerHTML = ""; // bersihkan kontainer dulu

  newsData.forEach((news) => {
    const card = document.createElement("a");
    card.href = `news detail.html?id=${news.id}`;
    card.classList.add("news-card");
    card.innerHTML = `
      <img src="${news.image}" alt="${news.title}" />
      <div class="news-card-content">
        <div class="news-card-category">${news.category}</div>
        <h3 class="news-card-title">${news.title}</h3>
        <p class="news-card-summary">${news.summary}</p>
        <div class="news-card-date">${news.date}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Jalankan otomatis setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("index-news-container");
  if (container) {
    renderNewsCards(allNews);
  }

  // feather icon
  if (typeof feather !== "undefined") feather.replace();
});

// ==================== Alpine.js Product Data ====================
window.products = function () {
  return {
    searchTerm: "",
    currentPage: 1,
    itemsPerPage: 8,
    selectedCategory: "all",
    sortOption: "default",
    items: allProducts,

    // --- TAMBAHAN: Fungsi init untuk me-reset halaman saat filter berubah ---
    init() {
      const updateAndRefreshIcons = () => {
        this.currentPage = 1;
        this.$nextTick(() => feather.replace());
      };

      this.$watch("selectedCategory", updateAndRefreshIcons);
      this.$watch("searchTerm", updateAndRefreshIcons);
      this.$watch("sortOption", updateAndRefreshIcons);
    },
    // --- AKHIR TAMBAHAN ---

    formatRupiah(value) {
      if (!value) return "Rp 0";
      return "Rp " + value.toLocaleString("id-ID");
    },

    // REFACTOR: Menggabungkan logika filter dan sort ke dalam satu computed property
    // untuk kejelasan dan memastikan urutan operasi yang benar.
    processedItems() {
      // Selalu mulai dengan salinan lengkap dari semua item produk
      let processed = [...this.items];

      // 1. Filter berdasarkan kategori yang dipilih
      if (this.selectedCategory !== "all") {
        processed = processed.filter(
          (item) => item.category === this.selectedCategory
        );
      }

      // 2. Filter berdasarkan kata kunci pencarian
      if (this.searchTerm.trim() !== "") {
        processed = processed.filter((item) =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      // 3. Lakukan pengurutan (sorting) berdasarkan opsi yang dipilih
      // Operasi pengurutan dilakukan setelah pemfilteran agar lebih efisien
      if (this.sortOption === "price-asc") {
        processed.sort((a, b) => a.price - b.price);
      } else if (this.sortOption === "price-desc") {
        processed.sort((a, b) => b.price - a.price);
      }

      // Kembalikan item yang sudah diproses (difilter dan diurutkan)
      // Logika paginasi akan diterapkan pada hasil dari fungsi ini
      return processed;
    },

    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      // Langsung slice dari data yang sudah diproses (filter + sort)
      return this.processedItems().slice(start, end);
    },

    totalPages() {
      // Kalkulasi total halaman berdasarkan data yang sudah diproses
      return Math.ceil(this.processedItems().length / this.itemsPerPage);
    },

    goToPage(page) {
      if (page >= 1 && page <= this.totalPages()) {
        this.currentPage = page;
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.$nextTick(() => feather.replace());
      }
    },
  };
};

// ==================== Alpine Store: Cart ====================
document.addEventListener("alpine:init", () => {
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    init() {
      // Load from localStorage and then calculate totals
      this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
      this.updateTotalsAndSave();
    },

    add(newItem) {
      const existing = this.items.find((item) => item.id === newItem.id);

      if (existing) {
        existing.quantity++;
      } else {
        // Add new item with quantity 1
        this.items.push({ ...newItem, quantity: 1 });
      }
      this.updateTotalsAndSave();
    },

    remove(id, force = false) {
      const item = this.items.find((i) => i.id === id);
      if (!item) return;

      // If force is true (from trash button) or quantity is 1, remove the item
      if (force || item.quantity === 1) {
        this.items = this.items.filter((i) => i.id !== id);
      } else {
        // Otherwise, just decrement the quantity
        item.quantity--;
      }
      this.updateTotalsAndSave();
    },

    updateTotalsAndSave() {
      // Calculate total quantity and price
      this.quantity = this.items.reduce((sum, i) => sum + i.quantity, 0);
      this.total = this.items.reduce((sum, i) => sum + (i.price * i.quantity), 0);

      // Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    },
  });

  // ==================== Search Box ====================
  // (Kode ini dibiarkan apa adanya, meski watcher di init() juga menangani search)
  document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector("#search-box-home");
    if (searchBox) {
      searchBox.addEventListener("input", (e) => {
        const productsComponent = Alpine.store("productsComponent");
        if (productsComponent) {
          productsComponent.searchTerm = e.target.value;
          productsComponent.currentPage = 1;
        }
      });
    }
  });

  // ==================== Hero Slider Logic ====================
  initHeroSlider();
});

function initHeroSlider() {
  const slider = document.getElementById("hero-slider");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".slide-item"));
  const dotsContainer = slider.querySelector(".slider-dots");
  const prevButton = slider.querySelector(".slider-arrow.prev");
  const nextButton = slider.querySelector(".slider-arrow.next");

  if (slides.length <= 1) {
    if (slides.length === 1) slides[0].classList.add("active");
    if (prevButton) prevButton.style.display = "none";
    if (nextButton) nextButton.style.display = "none";
    return;
  }

  let currentIndex = 0;
  let intervalId;

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => moveToSlide(index));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.querySelectorAll("button"));

  function updateSlider() {
    slides.forEach((slide, index) =>
      slide.classList.toggle("active", index === currentIndex)
    );
    dots.forEach((dot, index) =>
      dot.classList.toggle("active", index === currentIndex)
    );
  }

  function moveToSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    updateSlider();
    resetAutoPlay();
  }

  if (prevButton)
    prevButton.addEventListener("click", () => moveToSlide(currentIndex - 1));
  if (nextButton)
    nextButton.addEventListener("click", () => moveToSlide(currentIndex + 1));

  function startAutoPlay() {
    intervalId = setInterval(() => moveToSlide(currentIndex + 1), 5000);
  }

  function resetAutoPlay() {
    clearInterval(intervalId);
    startAutoPlay();
  }

  updateSlider();
  startAutoPlay();
}
// ==================== Fungsi untuk Memuat Detail Berita ====================
function loadNewsById(id) {
  const news = allNews.find((n) => n.id == id); // Gunakan '==' untuk perbandingan longgar

  if (!news) {
    document.getElementById("news-title").innerText = "Berita Tidak Ditemukan";
    document.getElementById("news-body").innerHTML =
      "<p>Maaf, berita yang Anda cari tidak dapat ditemukan. Silakan kembali ke halaman utama.</p>";
    return;
  }

  // Isi konten ke dalam elemen HTML
  document.getElementById("news-title").innerText = news.title;
  document.getElementById("news-date").innerText = news.date;

  // Placeholder untuk penulis jika tidak ada di data
  document.getElementById("news-author").innerText = news.author || "Tim Redaksi";

  // Konten Hero (Gambar)
  const heroContainer = document.getElementById("news-hero-content");
  heroContainer.innerHTML = `<img src="${news.image}" alt="${news.title}" />`;

  // Isi body berita (jika ada, jika tidak, tampilkan summary)
  const bodyContent =
    news.fullContent || `<p>${news.summary}</p><p><i>(Konten lengkap belum tersedia.)</i></p>`;
  document.getElementById("news-body").innerHTML = bodyContent;
}

// Ekspor fungsi agar bisa diakses dari file lain (misalnya, dari <script> di HTML)
window.loadNewsById = loadNewsById;
