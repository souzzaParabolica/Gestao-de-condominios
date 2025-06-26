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

const depoimentos = document.querySelectorAll(".depoimento");
const dots = document.querySelectorAll(".dot");

let current = 0;
let isTransitioning = false;

function showSlide(index) {
  if (index === current || isTransitioning) return;
  isTransitioning = true;

  const currentSlide = depoimentos[current];
  const nextSlide = depoimentos[index];

  currentSlide.classList.add("opacity-0", "scale-95");
  currentSlide.classList.remove("opacity-100", "scale-100");

  dots[current].classList.remove("bg-[#F0C75E]");

  setTimeout(() => {
    currentSlide.classList.add("hidden");

    nextSlide.classList.remove("hidden");
    nextSlide.classList.remove("opacity-100", "scale-100");
    nextSlide.classList.add("opacity-0", "scale-95");

    void nextSlide.offsetWidth;

    nextSlide.classList.replace("opacity-0", "opacity-100");
    nextSlide.classList.replace("scale-95", "scale-100");

    dots[index].classList.add("bg-[#F0C75E]");

    current = index;
    isTransitioning = false;
  }, 300);
}

window.addEventListener("DOMContentLoaded", () => {
  const firstSlide = depoimentos[0];
  firstSlide.classList.remove("hidden");
  firstSlide.classList.replace("opacity-0", "opacity-100");
  firstSlide.classList.replace("scale-95", "scale-100");
  dots[0].classList.add("bg-[#F0C75E]");
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});

// --- AQUI COMEÇA O SHOW DO SWIPE --- //
let touchStartX = 0;
let touchEndX = 0;
const minSwipeDistance = 50; // quanto precisa deslizar pra valer

const carrossel = document.querySelector("#carrossel-depoimentos");

carrossel.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carrossel.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) < minSwipeDistance) {
    // Swipe muito curto, ignora
    return;
  }

  if (distance > 0) {
    // Swipe pra direita -> slide anterior
    const prevIndex = current === 0 ? depoimentos.length - 1 : current - 1;
    showSlide(prevIndex);
  } else {
    // Swipe pra esquerda -> próximo slide
    const nextIndex = current === depoimentos.length - 1 ? 0 : current + 1;
    showSlide(nextIndex);
  }
}


  // Carrega os ícones Lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Verifica se GSAP está disponível
  if (typeof gsap !== "undefined") {
    // Registra o ScrollTrigger se existir
    if (typeof ScrollTrigger !== "undefined" && gsap.registerPlugin) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Animação principal do footer
    gsap.to("footer", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Animação dos itens em sequência
    gsap.utils.toArray(".footer-item").forEach((item, i) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: "footer",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animação do divisor
    gsap.to(".footer-divider", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.6,
      scrollTrigger: {
        trigger: "footer",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Animação de flutuação dos ícones
    gsap.utils.toArray(".icon-svg").forEach((icon) => {
      gsap.to(icon, {
        y: -4,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      });
    });

    // Efeitos hover melhorados
    document.querySelectorAll(".icon-float").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          y: -3,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
        const icon = item.querySelector(".icon-svg");
        if (icon) {
          gsap.to(icon, {
            y: -8,
            duration: 0.4,
            ease: "back.out(2)",
          });
        }
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
        });
        const icon = item.querySelector(".icon-svg");
        if (icon) {
          gsap.to(icon, {
            y: 0,
            duration: 0.9,
            ease: "elastic.out(1, 0.5)",
          });
        }
      });
    });
};