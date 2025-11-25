document.addEventListener("DOMContentLoaded", () => {
  feather.replace();

  // --- Hero Slider Logic ---
  const slider = document.getElementById("hero-slider");
  if (slider) {
    const slides = slider.querySelectorAll(".slide-item");
    const dotsContainer = slider.querySelector(".slider-dots");
    const prevButton = slider.querySelector(".slider-arrow.prev");
    const nextButton = slider.querySelector(".slider-arrow.next");
    let currentIndex = 0;
    let slideInterval;

    function createDots() {
      slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.classList.add("slider-dot");
        if (index === 0) dot.classList.add("active");
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
        dot.addEventListener("click", () => {
          goToSlide(index);
          resetInterval();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function updateDots() {
      const dots = dotsContainer.querySelectorAll(".slider-dot");
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    function goToSlide(index) {
      slides[currentIndex].classList.remove("active");
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add("active");
      updateDots();
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startInterval() {
      slideInterval = setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
    }

    function resetInterval() {
      clearInterval(slideInterval);
      startInterval();
    }

    // Event Listeners
    nextButton.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    prevButton.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });

    // Initialize
    createDots();
    startInterval();
  }

  // --- News Rendering Logic ---
  const newsContainer = document.getElementById("index-news-container");
  if (newsContainer && window.mockNewsData) {
    // Ambil hanya 3 berita pertama untuk ditampilkan di halaman utama
    const newsToShow = window.mockNewsData.slice(0, 3);
    newsToShow.forEach((newsItem) => {
      const newsCard = `
        <a href="${newsItem.link}" class="news-card-link">
          <article class="news-card">
            <div class="news-card-image-wrapper">
              <img src="${newsItem.imageUrl}" alt="${newsItem.title}" />
            </div>
            <div class="news-card-content">
              <p class="news-card-meta">${new Date(
                newsItem.date
              ).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</p>
              <h3>${newsItem.title}</h3>
              <p class="news-card-excerpt">${newsItem.summary}</p>
            </div>
          </article>
        </a>
      `;
      newsContainer.innerHTML += newsCard;
    });
  }

  // Mobile menu toggle logic might be added here later if needed

  // Manually start Alpine.js after all stores and components are registered.
  Alpine.start();
});
