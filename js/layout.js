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

function initFloatingActions() {
  if (document.querySelector(".floating-actions")) return;

  const floatingActions = document.createElement("div");
  floatingActions.className = "floating-actions";

  floatingActions.innerHTML = `
    <a
      class="floating-line-btn"
      href="https://line.me/R/ti/p/%40866acglg"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="使用 Line 預約訂房"
      title="Line預約訂房"
    >
      <span class="floating-line-label">Line預約訂房</span>

      <span class="floating-line-icon" aria-hidden="true">
        <i class="bi bi-chat-dots-fill"></i>
      </span>
    </a>

    <button
      class="floating-top-btn"
      type="button"
      aria-label="回到頁面頂部"
      title="回到頂部"
    >
      <i class="bi bi-chevron-up"></i>
    </button>
  `;

  document.body.appendChild(floatingActions);

  const topButton = floatingActions.querySelector(".floating-top-btn");

  function toggleTopButton() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const isNearBottom = scrollTop + windowHeight >= documentHeight - 280;

    topButton.classList.toggle("is-visible", isNearBottom);
  }

  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", toggleTopButton, { passive: true });
  window.addEventListener("resize", toggleTopButton);

  toggleTopButton();
}

async function initLayout() {
  await Promise.all([
    loadPartial("site-header", "./partials/header.html"),
    loadPartial("site-footer", "./partials/footer.html")
  ]);

  setActiveNav();
  initMenuToggle();
  initHeaderScroll();
  initFloatingActions();
}

document.addEventListener("DOMContentLoaded", initLayout);
