document.addEventListener("DOMContentLoaded", function () {
  initScrollEffects({
    revealSelector: ".reveal",
    zoomSelector: ".zoom-box",
    revealTrigger: 0.86,
    zoomTrigger: 0.9
  });

  initNoticeTabs();
  initActiveNoticeTabOnScroll();
});

function initNoticeTabs() {
  const tabs = document.querySelectorAll(".notice-tab");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const targetId = tab.dataset.target;
      const target = document.getElementById(targetId);

      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      setActiveTab(targetId);
    });
  });
}

function initActiveNoticeTabOnScroll() {
  const sections = document.querySelectorAll(".notice-block[id]");

  if (!sections.length) return;

  function handleScroll() {
    let currentId = sections[0].id;

    sections.forEach(function (section) {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 180) {
        currentId = section.id;
      }
    });

    setActiveTab(currentId);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

function setActiveTab(targetId) {
  const tabs = document.querySelectorAll(".notice-tab");

  tabs.forEach(function (tab) {
    tab.classList.toggle("is-active", tab.dataset.target === targetId);
  });
}