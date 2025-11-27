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
    if (slides.length > 0) {
        createDots();
        startInterval();
    }
  }

  // Manually start Alpine.js after all stores and components are registered.
  Alpine.start();
});
