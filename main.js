document.addEventListener("DOMContentLoaded", () => {
  // --- THEME TOGGLE ---
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const nav = document.querySelector("nav");
  const buttons = document.querySelectorAll(".btn");

  function setDarkMode(isDark) {
    body.classList.toggle("dark-mode", isDark);
    nav.classList.toggle("dark-mode", isDark);
    buttons.forEach(btn => btn.classList.toggle("dark-mode", isDark));
  }

  const saved = localStorage.getItem("theme");
  if (saved === "dark") setDarkMode(true);

  toggleBtn.addEventListener("click", () => {
    const isDark = !body.classList.contains("dark-mode");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // --- HAMBURGER MENU TOGGLE ---
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Accessibility toggle
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
  });

  // --- PROJECT CAROUSEL ---
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const cards = document.querySelectorAll(".project-card");

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 20; // includes margin
    const offset = currentIndex * cardWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }

  if (nextBtn && prevBtn && track) {
    nextBtn.addEventListener("click", () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    window.addEventListener("resize", updateCarousel);
  }
});
