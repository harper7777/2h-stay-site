document.addEventListener("DOMContentLoaded", function () {
  const revealItems = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    revealItems.forEach(function (item) {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight * 0.86) {
        item.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll, { passive: true });
  window.addEventListener("load", revealOnScroll);

  revealOnScroll();
});