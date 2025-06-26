document.addEventListener("DOMContentLoaded", function () {
  // Carrega o ícone (se já não estiver carregado)
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  const backToTopButton = document.getElementById("back-to-top");

  // Mostra/oculta o botão ao rolar
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  // Função para voltar ao topo
  function scrollToTop() {
    // Verifica se GSAP está disponível para animação suave
    if (typeof gsap !== "undefined") {
      gsap.to(window, {
        scrollTo: { y: 0, autoKill: false },
        duration: 0.8,
        ease: "power2.inOut",
      });
    } else {
      // Fallback caso GSAP não esteja disponível
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Efeito de clique
    if (backToTopButton) {
      backToTopButton.style.transform = "scale(0.9)";
      setTimeout(() => {
        backToTopButton.style.transform = "";
      }, 200);
    }
  }

  // Adiciona o evento de clique
  if (backToTopButton) {
    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToTop();
    });

    // Para acessibilidade - teclado
    backToTopButton.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToTop();
      }
    });
  }

  // Opcional: Efeito de flutuação sutil com GSAP
  if (typeof gsap !== "undefined" && backToTopButton) {
    gsap.to(backToTopButton, {
      y: -5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });
  }
});
