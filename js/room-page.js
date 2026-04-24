function createRoomCard(room, index) {
  const article = document.createElement("article");
  article.className = "zoom-room-card reveal";
  article.style.setProperty("--delay", `${index * 160}ms`);

  article.innerHTML = `
    <a href="${room.bookingUrl}" aria-label="查看 ${room.name} 訂房資訊">
      <div class="zoom-frame">
        <img src="${room.image}" alt="${room.name}">
      </div>
      <div class="zoom-room-info">
        <h3>${room.name}</h3>
        <p>${room.capacity}｜${room.summary}</p>
      </div>
    </a>
  `;

  return article;
}

function createPackageCard(roomPackage, index) {
  const article = document.createElement("article");
  article.className = "package-card reveal";
  article.style.setProperty("--delay", `${index * 180}ms`);

  article.innerHTML = `
    <h3>${roomPackage.name}</h3>
    <p>${roomPackage.composition}</p>
    <a href="${roomPackage.bookingUrl}">預約此房型</a>
  `;

  return article;
}

function renderRooms() {
  const list = document.querySelector("#roomList");
  if (!list || !Array.isArray(rooms)) return;

  rooms.forEach(function (room, index) {
    list.appendChild(createRoomCard(room, index));
  });
}

function renderPackages() {
  const grid = document.querySelector("#packageGrid");
  if (!grid || !Array.isArray(roomPackages)) return;

  roomPackages.forEach(function (roomPackage, index) {
    grid.appendChild(createPackageCard(roomPackage, index));
  });
}

function initRoomCardReveal() {
  const cards = document.querySelectorAll(".zoom-room-card");
  const packageCards = document.querySelectorAll(".package-card");
  const generalRevealItems = document.querySelectorAll(".reveal:not(.zoom-room-card):not(.package-card)");

  function revealGeneral() {
    generalRevealItems.forEach(function (item) {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight * 0.86) {
        item.classList.add("show");
      }
    });
  }

  function revealCardsOneByOne(cardList, trigger = 0.88) {
    cardList.forEach(function (card, index) {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight * trigger && !card.classList.contains("show")) {
        setTimeout(function () {
          card.classList.add("show");
        }, index * 260);
      }
    });
  }

  function handleReveal() {
    revealGeneral();
    revealCardsOneByOne(cards, 0.88);
    revealCardsOneByOne(packageCards, 0.9);
  }

  window.addEventListener("load", handleReveal);
  window.addEventListener("scroll", handleReveal, { passive: true });
  handleReveal();
}

document.addEventListener("DOMContentLoaded", function () {
  renderRooms();
  renderPackages();
  initRoomCardReveal();
});
