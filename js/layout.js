async function loadPartial(targetId, url) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}`);
    target.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

function setActiveNav() {
  const page = document.body.dataset.page;
  if (!page) return;

  document.querySelectorAll(`[data-nav="${page}"]`).forEach(function (link) {
    link.classList.add("active");
  });
}

function initMenuToggle() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-menu");
  if (!button || !nav) return;

  button.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    button.classList.toggle("is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });
}

function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  function handleHeaderScroll() {
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();
}

async function initLayout() {
  await Promise.all([
    loadPartial("site-header", "./partials/header.html"),
    loadPartial("site-footer", "./partials/footer.html")
  ]);

  setActiveNav();
  initMenuToggle();
  initHeaderScroll();
}

document.addEventListener("DOMContentLoaded", initLayout);
