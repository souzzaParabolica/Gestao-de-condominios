// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Menu hamburger functionality
  lucide.createIcons();
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  // Fechar o menu ao clicar em um item
  const menuItems = mobileMenu.querySelectorAll(".nav-items li");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollContent = document.querySelector(".scroll-content");
  const scrollWidth = scrollContent.scrollWidth;
  const viewportWidth = window.innerWidth;

  gsap.to(scrollContent, {
    x: () => `-${scrollWidth - viewportWidth}px`,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-scroll",
      start: "top top",
      end: () => `+=${scrollWidth - viewportWidth}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: false,
    },
  });
});
