gsap.registerPlugin(ScrollTrigger);

// Selecionar os elementos
const hero = document.querySelector(".hero");
const h1 = document.querySelector(".hero h1");
const p = document.querySelector(".hero p");
const button = document.querySelector(".hero button");
const img = document.querySelector(".hero img");

// Reset inicial - esconder elementos antes da animação
gsap.set([h1, p, button, img], { autoAlpha: 0 });
gsap.set(h1, { y: 50 });
gsap.set(p, { y: 30 });
gsap.set(button, { y: 20, scale: 0.8 });
gsap.set(img, { x: 100, rotation: -5, scale: 0.9 });

// Criar a timeline
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

// Animação principal
tl.to(hero, { autoAlpha: 1, duration: 0.2 })
  .to(h1, { y: 0, autoAlpha: 1, duration: 0.8 }, 0.2)
  .to(p, { y: 0, autoAlpha: 1, duration: 0.6 }, 0.4)
  .to(button, { y: 0, scale: 1, autoAlpha: 1, duration: 0.5 }, 0.6)
  .to(img, { x: 0, rotation: 0, scale: 1, autoAlpha: 1, duration: 0.8 }, 0.3);

// Efeito de brilho no botão ao passar o mouse
button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.05,
    boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
    duration: 0.3,
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
    boxShadow: "none",
    duration: 0.3,
  });
});

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 768px)": function () {
    const anim = gsap.to(".hero", {
      opacity: 0,
      backgroundImage: "linear-gradient(292, #1e1e1e 70%, #1e1e1e)",
      scrollTrigger: {
        trigger: ".sobre-mim",
        start: "top 55%",
        end: "top 0%",
        scrub: 2,
        markers: false,
      },
    });

    return () => {
      anim.kill();
    };
  },

  // MOBILE
  "(max-width: 767px)": function () {
    const anim = gsap.to(".hero", {
      opacity: 0,
      y: 0, // 👈 FORÇA o y a ficar no lugar
      scrollTrigger: {
        trigger: ".sobre-mim",
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
        markers: false,
      },
    });

    return () => {
      anim.kill();
    };
  },
});

gsap.from(".carrossel", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".carrossel",
    start: "top 50%",
    end: "top 15%",
    scrub: 1.5,
    markers: false,
  },
});

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 768px)": function () {
    const anim = gsap.to(".scroller", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".sobremim",
        start: "top 70%",
        end: "top 30%",
        scrub: 1.5,
        markers: false,
      },
    });

    return () => {
      anim.kill();
    };
  },

  // MOBILE
  "(max-width: 767px)": function () {
    const anim = gsap.to(".scroller", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".sobremim",
        start: "top 45%", // 👈 mais embaixo pra começar depois
        end: "top 25%", // 👈 termina mais suave no mobile
        scrub: 1.5,
        markers: false,
      },
    });

    return () => {
      anim.kill();
    };
  },
});

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 768px)": function () {
    gsap.from(".sobremim", {
      opacity: 0,
      filter: "blur(2px)",
      scale: 0.9,
      y: 50,
      scrollTrigger: {
        trigger: ".sobre-mim",
        start: "top 55%",
        end: "top 20%",
        scrub: 1,
        markers: false,
      },
    });

    gsap.from(".container p", {
      opacity: 0,
      filter: "blur(2px)",
      x: 30,
      scrollTrigger: {
        trigger: ".container",
        start: "top 50%",
        end: "top 20%",
        scrub: 1.5,
        markers: false,
      },
    });

    gsap.from(".container img", {
      opacity: 0,
      x: -30,
      scrollTrigger: {
        trigger: ".container",
        start: "top 50%",
        end: "top 20%",
        scrub: 1.5,
        markers: false,
      },
    });
  },

  // MOBILE
  "(max-width: 767px)": function () {
    gsap.from(".sobremim", {
      opacity: 0,
      filter: "blur(2px)",
      scale: 0.9,
      y: 50,
      scrollTrigger: {
        trigger: ".sobre-mim",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
        markers: false,
      },
    });

    gsap.from(".container img", {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".container",
        start: "top 60%",
        end: "top 20%",
        scrub: 1.5,
        markers: false,
      },
    });

    gsap.from(
      ".container p",
      {
        opacity: 0,
        filter: "blur(2px)",
        transform: "scale(0.95)",
        duration: 1,
        scrollTrigger: {
          trigger: ".container",
          start: "top 60%",
          end: "top 20%",
          scrub: 1.5,
          markers: false,
        },
      },
      "+=2);"
    );
  },
});

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 768px)": function () {
    gsap.to(".sobre-mim", {
      opacity: 0,
      filter: "blur(2px)",
      y: -100,
      scrollTrigger: {
        trigger: ".servicos",
        start: "top 55%",
        end: "top 0%",
        scrub: 2,
        markers: false,
      },
    });
  },

  // MOBILE
  "(max-width: 767px)": function () {
    gsap.to(".sobre-mim", {
      opacity: 0,
      filter: "blur(2px)",
      scrollTrigger: {
        trigger: ".servicos",
        start: "top 55%",
        end: "top 0%",
        scrub: 2,
        markers: false,
      },
    });
  },
});

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 768px)": function () {
    gsap.to(".servicos", {
      backgroundImage: "linear-gradient(135deg, #1e1e1e 70%, #ffac8b5e)",
      ease: "none",
      scrollTrigger: {
        trigger: ".servicos",
        start: "top 60%",
        end: "top -50%",
        scrub: 1.5,
        markers: false,
      },
    });
  },

  // MOBILE
  "(max-width: 767px)": function () {
    // Não faz nada no mobile, deixa o CSS reinar soberano ✊
  },
});

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 768px)": function () {
    gsap.to(".sobre-mim", {
      backgroundImage: "linear-gradient(290deg, #1e1e1e 80%, #FFAB8B2E)",
      scrollTrigger: {
        trigger: ".sobre-mim",
        start: "top 80%",
        end: "top 0%",
        scrub: 2,
        markers: false,
      },
    });
  },

  // MOBILE
  "(max-width: 767px)": function () {
    // Não faz nada no mobile, deixa o CSS reinar soberano ✊
  },
});

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 768px)": function () {
    gsap.from(".titulo-servicos, .desc-servicos", {
      opacity: 0,
      filter: "blur(2px)",
      scale: 0.98,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".servicos",
        start: "top 40%",
        end: "top 10%",
        scrub: 1.5,
        markers: false,
      },
    });
  },

  // MOBILE
  "(max-width: 767px)": function () {
    gsap.from(".titulo-servicos, .desc-servicos", {
      opacity: 0,
      filter: "blur(2px)",
      scale: 0.98,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".servicos",
        start: "top 60%", // 👈 Start mais tarde no scroll
        end: "top 20%",
        scrub: 1.5,
        markers: false,
      },
    });
  },
});

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 768px)": function () {
    gsap.from(".cards .card", {
      opacity: 0,
      filter: "blur(2px)",
      y: 50,
      scale: 0.98,
      duration: 6,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".cards",
        start: "top 60%",
        end: "top 40%",
        scrub: 1.5,
        markers: false,
      },
    });
  },

  // MOBILE
  "(max-width: 767px)": function () {
    // Pega todos os cards individualmente
    document.querySelectorAll(".cards .card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        filter: "blur(2px)",
        y: 50,
        scale: 0.98,
        duration: 1.5,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
          markers: false,
        },
      });
    });
  },
});

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 768px)": function () {
    gsap.from(".titulo-depoimentos, .desc-depoimentos", {
      opacity: 0,
      filter: "blur(2px)",
      scale: 0.98,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".secao-depoimentos",
        start: "top 80%",
        end: "top 50%",
        scrub: 1.5,
        markers: false,
      },
    });
  },

  // MOBILE
  "(max-width: 767px)": function () {
    gsap.from(".titulo-depoimentos, .desc-depoimentos", {
      opacity: 0,
      filter: "blur(2px)",
      scale: 0.98,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".secao-depoimentos",
        start: "top 80%", // 👈 Start mais tarde no scroll
        end: "top 40%",
        scrub: 1.5,
        markers: false,
      },
    });
  },
});

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 768px)": function () {
    gsap.from(".carrossel-depoimentos", {
      opacity: 0,
      filter: "blur(2px)",
      scale: 0.98,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".secao-depoimentos",
        start: "top 50%",
        end: "top 40%",
        scrub: 1.5,
        markers: false,
      },
    });
  },

  // MOBILE
  "(max-width: 767px)": function () {
    gsap.from(".carrossel-depoimentos", {
      opacity: 0,
      filter: "blur(2px)",
      scale: 0.98,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".secao-depoimentos",
        start: "top 60%", // 👈 Start mais tarde no scroll
        end: "top 20%",
        scrub: 1.5,
        markers: false,
      },
    });
  },
});

// Animação para o CTA entre seções
gsap.to(".cta-entre-secoes", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "back.out(1.2)",
  scrollTrigger: {
    trigger: ".cta-entre-secoes",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

// Animação dos botões do CTA
gsap.to(".cta-button-whatsapp", {
  y: -3,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.5,
});

gsap.to(".cta-button-call", {
  y: -3,
  duration: 1.8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.8,
});

// Animação quase imperceptível
gsap.to(".primeiro-cta", {
  y: -4,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 1,
});

// ANIMAÇÃO OTIMIZADA PARA O BOTÃO CONTINUE-APPLICATION (SEM EMBAÇADO)
gsap.set(".continue-application", {
  willChange: "transform",
  transformPerspective: 1000,
  backfaceVisibility: "hidden",
  force3D: true,
});

// Timeline específica para este botão
const continueTl = gsap.timeline({
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.5,
});

continueTl
  .to(".continue-application", {
    y: -2,
    duration: 1.8,
    ease: "power1.inOut",
    modifiers: {
      y: function (y) {
        // Arredonda o valor para evitar subpixels que causam embaçado
        return Math.round(y * 10) / 10;
      },
    },
  })
  .to(".continue-application", {
    y: 0,
    duration: 1.8,
    ease: "power1.inOut",
  });

// Otimização para elementos internos do botão
gsap.set(
  ".continue-application svg, .continue-application .pencil, .continue-application .folder",
  {
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    willChange: "transform",
  }
);

// Efeitos hover nos botões do CTA
document
  .querySelectorAll(".cta-button-whatsapp, .cta-button-call")
  .forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        y: -5,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });
// Limpa will-change após as animações para liberar recursos
ScrollTrigger.addEventListener("refresh", () => {
  animatedElements.forEach((el) => {
    el.style.willChange = "auto";
  });
});

const continueBtn = document.querySelector(".continue-application");

function checkButtonPosition() {
  const rect = continueBtn.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const buttonCenter = rect.top + rect.height / 2;
  const screenCenter = windowHeight / 2;
  const threshold = windowHeight * 0.2; // 20% da altura da tela

  if (Math.abs(buttonCenter - screenCenter) < threshold) {
    continueBtn.classList.add("hover-sim");
  } else {
    continueBtn.classList.remove("hover-sim");
  }
}

window.addEventListener("scroll", checkButtonPosition);
window.addEventListener("resize", checkButtonPosition);

// Checar na carga também
checkButtonPosition();
