document.addEventListener("DOMContentLoaded", function () {
  initAboutReveal();
  initAboutParallax();
});

function initAboutReveal() {
  if (typeof initScrollEffects === "function") {
    initScrollEffects({
      revealSelector: ".reveal",
      zoomSelector: ".zoom-box",
      revealTrigger: 0.86,
      zoomTrigger: 0.9
    });
  }
}

function initAboutParallax() {
  const heroBg = document.querySelector(".about-hero-bg");

  if (!heroBg) return;

  function handleParallax() {
    const scrollY = window.scrollY;
    const moveY = scrollY * 0.18;

    heroBg.style.transform = `scale(1.03) translateY(${moveY}px)`;
  }

  window.addEventListener("scroll", handleParallax, { passive: true });
}