const bookingRoomDetails = {
  pink: {
    price: 4880,
    capacityNumber: 2,
    bedInfo: "雙人床 1 張",
    feature: "適合雙人旅行"
  },
  green: {
    price: 5880,
    capacityNumber: 4,
    bedInfo: "雙人床 2 張",
    feature: "適合家庭入住"
  },
  blue: {
    price: 5880,
    capacityNumber: 4,
    bedInfo: "雙人床 2 張",
    feature: "適合朋友同行"
  },
  wood: {
    price: 6280,
    capacityNumber: 4,
    bedInfo: "雙人床 2 張",
    feature: "沉穩木質空間"
  },
  "forest-light": {
    price: 6280,
    capacityNumber: 4,
    bedInfo: "雙人床 2 張",
    feature: "自然採光房型"
  },
  forest: {
    price: 7280,
    capacityNumber: 6,
    bedInfo: "多人床型配置",
    feature: "適合團體旅行"
  },
  "group-10": {
    price: 12800,
    capacityNumber: 10,
    bedInfo: "組合房型",
    feature: "適合 10 人團體"
  },
  "group-14": {
    price: 16800,
    capacityNumber: 14,
    bedInfo: "組合房型",
    feature: "適合 14 人團體"
  },
  "group-24": {
    price: 26800,
    capacityNumber: 24,
    bedInfo: "全館組合",
    feature: "適合包棟需求"
  }
};

const packageImages = {
  "group-10": "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
  "group-14": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop",
  "group-24": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop"
};

let selectedRoom = null;
let currentSearch = {
  checkin: "",
  checkout: "",
  guests: ""
};

document.addEventListener("DOMContentLoaded", function () {
  initScrollEffects({
    revealSelector: ".reveal",
    zoomSelector: ".zoom-box",
    revealTrigger: 0.86,
    zoomTrigger: 0.9
  });

  initDateMinValue();
  initBookingSearch();
  initBookingForm();
  initRoomFromUrl();
});

function getAllBookingRooms() {
  const normalRooms = Array.isArray(rooms)
    ? rooms.map(function (room) {
        return {
          id: room.id,
          name: room.name,
          capacity: room.capacity,
          summary: room.summary,
          description: room.description,
          image: room.image,
          type: "room",
          detail: bookingRoomDetails[room.id]
        };
      })
    : [];

  const packageRooms = Array.isArray(roomPackages)
    ? roomPackages.map(function (roomPackage) {
        return {
          id: roomPackage.id,
          name: roomPackage.name,
          capacity: roomPackage.composition,
          summary: "多人組合房型",
          description: roomPackage.composition,
          image: packageImages[roomPackage.id],
          type: "package",
          detail: bookingRoomDetails[roomPackage.id]
        };
      })
    : [];

  return [...normalRooms, ...packageRooms].filter(function (room) {
    return room.detail;
  });
}

function initDateMinValue() {
  const checkinInput = document.querySelector("#checkin");
  const checkoutInput = document.querySelector("#checkout");

  if (!checkinInput || !checkoutInput) return;

  const today = new Date();
  const todayString = formatDate(today);

  checkinInput.min = todayString;
  checkoutInput.min = todayString;

  checkinInput.addEventListener("change", function () {
    if (!checkinInput.value) return;

    const nextDay = new Date(checkinInput.value);
    nextDay.setDate(nextDay.getDate() + 1);

    checkoutInput.min = formatDate(nextDay);

    if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
      checkoutInput.value = formatDate(nextDay);
    }
  });
}

function initBookingSearch() {
  const form = document.querySelector("#bookingSearchForm");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const checkin = formData.get("checkin");
    const checkout = formData.get("checkout");
    const guests = Number(formData.get("guests"));

    if (!validateSearch(checkin, checkout, guests)) return;

    currentSearch = {
      checkin,
      checkout,
      guests
    };

    renderAvailableRooms(guests);
    updateSearchHint(checkin, checkout, guests);
  });
}

function validateSearch(checkin, checkout, guests) {
  if (!checkin || !checkout || !guests) {
    alert("請完整選擇入住日期、退房日期與入住人數。");
    return false;
  }

  if (checkout <= checkin) {
    alert("退房日期必須晚於入住日期。");
    return false;
  }

  return true;
}

function renderAvailableRooms(guests) {
  const list = document.querySelector("#availableRoomList");
  if (!list) return;

  const allRooms = getAllBookingRooms();

  const matchedRooms = allRooms.filter(function (room) {
    return room.detail.capacityNumber >= guests;
  });

  list.innerHTML = "";

  if (matchedRooms.length === 0) {
    list.innerHTML = `
      <div class="no-room-message">
        <h3>目前沒有符合人數的房型</h3>
        <p>建議調整入住人數，或直接透過 Line 與民宿確認包棟安排。</p>
      </div>
    `;
    return;
  }

  matchedRooms.forEach(function (room, index) {
    const card = createAvailableRoomCard(room, index);
    list.appendChild(card);
  });
}

function createAvailableRoomCard(room, index) {
  const article = document.createElement("article");
  article.className = "available-room-card reveal show";
  article.style.transitionDelay = `${index * 80}ms`;

  article.innerHTML = `
    <div class="available-room-image">
      <img src="${room.image}" alt="${room.name}">
      <span class="available-room-tag">${room.detail.feature}</span>
    </div>

    <div class="available-room-body">
      <h3>${room.name}</h3>
      <p class="available-room-desc">${room.description}</p>

      <div class="available-room-meta">
        <span><i class="bi bi-people"></i>${room.detail.capacityNumber} 人以內</span>
        <span><i class="bi bi-moon"></i>${room.detail.bedInfo}</span>
      </div>

      <div class="available-room-price">
        <small>NT$</small>
        <strong>${formatPrice(room.detail.price)}</strong>
        <span> 起 / 晚</span>
      </div>

      <button class="select-room-btn" type="button" data-room-id="${room.id}">
        選擇此房型
      </button>
    </div>
  `;

  const button = article.querySelector(".select-room-btn");
  button.addEventListener("click", function () {
    selectRoom(room);
  });

  return article;
}

function selectRoom(room) {
  selectedRoom = room;

  const selectedRoomInput = document.querySelector("#selectedRoomId");
  if (selectedRoomInput) {
    selectedRoomInput.value = room.id;
  }

  document.querySelectorAll(".available-room-card").forEach(function (card) {
    card.classList.remove("is-selected");
  });

  const selectedButton = document.querySelector(`[data-room-id="${room.id}"]`);
  if (selectedButton) {
    selectedButton.closest(".available-room-card").classList.add("is-selected");
  }

  updateSelectedRoomSummary(room);

  const bookingFormSection = document.querySelector(".booking-form-section");
  if (bookingFormSection) {
    bookingFormSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function updateSelectedRoomSummary(room) {
  const summary = document.querySelector("#selectedRoomSummary");
  if (!summary) return;

  const nights = calculateNights(currentSearch.checkin, currentSearch.checkout);
  const totalPrice = nights > 0 ? room.detail.price * nights : room.detail.price;

  summary.innerHTML = `
    <div class="summary-room-image">
      <img src="${room.image}" alt="${room.name}">
    </div>

    <h3 class="summary-room-name">${room.name}</h3>

    <div class="summary-line">
      <strong>入住日期：</strong>
      <span>${currentSearch.checkin || "尚未選擇"}</span>
    </div>

    <div class="summary-line">
      <strong>退房日期：</strong>
      <span>${currentSearch.checkout || "尚未選擇"}</span>
    </div>

    <div class="summary-line">
      <strong>入住人數：</strong>
      <span>${currentSearch.guests || "尚未選擇"} 位</span>
    </div>

    <div class="summary-line">
      <strong>住宿晚數：</strong>
      <span>${nights || 1} 晚</span>
    </div>

    <div class="summary-line">
      <strong>參考價格：</strong>
      <span>NT$ ${formatPrice(totalPrice)} 起</span>
    </div>
  `;
}

function updateSearchHint(checkin, checkout, guests) {
  const hint = document.querySelector("#searchHint");
  if (!hint) return;

  const nights = calculateNights(checkin, checkout);

  hint.textContent = `已查詢：${checkin} 入住，${checkout} 退房，共 ${nights} 晚，${guests} 位旅客。`;
}

function initBookingForm() {
  const form = document.querySelector("#bookingForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!selectedRoom) {
      alert("請先選擇一個房型。");
      return;
    }

    if (!currentSearch.checkin || !currentSearch.checkout || !currentSearch.guests) {
      alert("請先完成入住條件查詢。");
      return;
    }

    const formData = new FormData(form);
    showBookingResult(formData);
  });
}

function showBookingResult(formData) {
  const result = document.querySelector("#bookingResult");
  if (!result || !selectedRoom) return;

  const nights = calculateNights(currentSearch.checkin, currentSearch.checkout);
  const totalPrice = selectedRoom.detail.price * nights;

  result.classList.add("show");
  result.innerHTML = `
    <h3>訂房需求已建立</h3>
    <p>
      ${formData.get("name")} 您好，您的訂房需求已建立。
      房型為「${selectedRoom.name}」，入住日期為 ${currentSearch.checkin}，
      退房日期為 ${currentSearch.checkout}，共 ${nights} 晚。
    </p>
    <p>
      參考價格為 NT$ ${formatPrice(totalPrice)} 起，實際金額與房況仍需由民宿方確認。
      後續可擴充為 Email 通知、Line 通知、資料庫訂單與後台 CRM 管理。
    </p>
  `;

  result.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function initRoomFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const roomId = params.get("room");

  if (!roomId) return;

  const checkinInput = document.querySelector("#checkin");
  const checkoutInput = document.querySelector("#checkout");
  const guestsInput = document.querySelector("#guests");

  const targetRoom = getAllBookingRooms().find(function (room) {
    return room.id === roomId;
  });

  if (!targetRoom) return;

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  checkinInput.value = formatDate(today);
  checkoutInput.value = formatDate(tomorrow);
  guestsInput.value = String(targetRoom.detail.capacityNumber);

  currentSearch = {
    checkin: checkinInput.value,
    checkout: checkoutInput.value,
    guests: guestsInput.value
  };

  renderAvailableRooms(Number(guestsInput.value));
  updateSearchHint(currentSearch.checkin, currentSearch.checkout, currentSearch.guests);

  setTimeout(function () {
    selectRoom(targetRoom);
  }, 200);
}

function calculateNights(checkin, checkout) {
  if (!checkin || !checkout) return 0;

  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const diff = checkoutDate - checkinDate;

  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatPrice(price) {
  return Number(price).toLocaleString("zh-TW");
}