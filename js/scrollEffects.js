function initScrollEffects(options = {}) {
  const revealSelector = options.revealSelector || ".reveal";
  const zoomSelector = options.zoomSelector || ".zoom-box";
  const revealTrigger = options.revealTrigger || 0.85;
  const zoomTrigger = options.zoomTrigger || 0.9;

  const revealItems = document.querySelectorAll(revealSelector);
  const zoomBoxes = document.querySelectorAll(zoomSelector);

  function revealElements() {
    revealItems.forEach(function (item) {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight * revealTrigger) {
        item.classList.add("show");
      }
    });

    zoomBoxes.forEach(function (box) {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (boxTop < windowHeight * zoomTrigger) {
        box.classList.add("show");
      }
    });
  }

  window.addEventListener("load", revealElements);
  window.addEventListener("scroll", revealElements, { passive: true });
  revealElements();
}
