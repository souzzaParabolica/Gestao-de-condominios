// script.js
document.addEventListener("DOMContentLoaded", function () {
  const depoimentos = document.querySelectorAll(".depoimento");
  const dots = document.querySelectorAll(".dot");

  let current = 0;
  let isTransitioning = false;

  function showSlide(index) {
    if (index === current || isTransitioning) return;
    isTransitioning = true;

    const currentSlide = depoimentos[current];
    const nextSlide = depoimentos[index];

    // Anima saída do slide atual
    currentSlide.classList.add("opacity-0", "scale-95");
    currentSlide.classList.remove("opacity-100", "scale-100");

    // Remove destaque das bolinhas e volta ao cinza
    dots.forEach((dot) => {
      dot.classList.remove("bg-[#F0C75E]");
      dot.classList.add("bg-gray-400");
    });

    setTimeout(() => {
      currentSlide.classList.add("hidden");

      nextSlide.classList.remove("hidden");
      nextSlide.classList.remove("opacity-100", "scale-100");
      nextSlide.classList.add("opacity-0", "scale-95");

      // Força reflow pra garantir transição suave
      void nextSlide.offsetWidth;

      // Anima entrada do próximo slide
      nextSlide.classList.replace("opacity-0", "opacity-100");
      nextSlide.classList.replace("scale-95", "scale-100");

      // Marca a bolinha certa
      dots[index].classList.add("bg-[#F0C75E]");
      dots[index].classList.remove("bg-gray-400");

      current = index;
      isTransitioning = false;
    }, 300);
  }

  // Inicializa com o primeiro slide e bolinha selecionada
  window.addEventListener("DOMContentLoaded", () => {
    const firstSlide = depoimentos[0];
    firstSlide.classList.remove("hidden");
    firstSlide.classList.replace("opacity-0", "opacity-100");
    firstSlide.classList.replace("scale-95", "scale-100");

    dots.forEach((dot) => {
      dot.classList.remove("bg-[#F0C75E]");
      dot.classList.add("bg-gray-400");
    });

    dots[current].classList.add("bg-[#F0C75E]");
    dots[current].classList.remove("bg-gray-400");
  });

  // Evento para troca ao clicar nas bolinhas
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });

  // --- SWIPE MOBILE --- //
  let touchStartX = 0;
  let touchEndX = 0;
  const minSwipeDistance = 50; // distância mínima pra considerar swipe

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
      // swipe curto, ignora
      return;
    }

    if (distance > 0) {
      // swipe pra direita -> slide anterior
      const prevIndex = current === 0 ? depoimentos.length - 1 : current - 1;
      showSlide(prevIndex);
    } else {
      // swipe pra esquerda -> próximo slide
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

    // Animação para o CTA
    gsap.to(".footer-cta", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

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

    // Animação especial para o botão do CTA
    gsap.to(".cta-button", {
      y: -3,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    // Efeitos hover
    document.querySelectorAll(".icon-float, .cta-button").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          y: -5,
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
  }
});

function showNewsletterMessage() {
  const input = document.getElementById("emailInput");
  const message = document.getElementById("newsletterMessage");

  if (input.value.trim() === "") {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  message.classList.remove("hidden");
  input.value = "";

  // Esconde a mensagem após 5 segundos
  setTimeout(() => {
    message.classList.add("hidden");
  }, 5000);
}