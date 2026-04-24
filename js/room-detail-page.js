function getCurrentRoomId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || "pink";
}

function findRoomById(id) {
  const allRooms = [...rooms, ...roomPackages];
  return allRooms.find(function (room) {
    return room.id === id;
  });
}

function updateMeta(room) {
  document.title = `${room.name}｜房型介紹｜2H分享家`;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      "content",
      `${room.name}，${room.capacity}，${room.summary}。查看房型照片、設備與訂房資訊。`
    );
  }
}

let currentSlideIndex = 0;
let currentGalleryImages = [];

function renderCarousel(room) {
  const slides = document.querySelector("#detailSlides");
  const dots = document.querySelector("#carouselDots");

  slides.innerHTML = "";
  dots.innerHTML = "";

  currentGalleryImages = room.gallery || [];
  currentSlideIndex = 0;

  currentGalleryImages.forEach(function (image, index) {
    const slide = document.createElement("div");
    slide.className = index === 0 ? "detail-slide active" : "detail-slide";

    slide.innerHTML = `
      <img src="${image}" alt="${room.name} 房間照片 ${index + 1}">
    `;

    slides.appendChild(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = index === 0 ? "carousel-dot active" : "carousel-dot";
    dot.setAttribute("aria-label", `切換到第 ${index + 1} 張照片`);

    dot.addEventListener("click", function () {
      goToSlide(index);
    });

    dots.appendChild(dot);
  });
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".detail-slide");
  const dots = document.querySelectorAll(".carousel-dot");

  if (!slides.length) return;

  currentSlideIndex = (index + slides.length) % slides.length;

  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });

  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");

  updateLightboxImage();
}

function initCarousel() {
  const prevBtn = document.querySelector("#prevSlide");
  const nextBtn = document.querySelector("#nextSlide");

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      goToSlide(currentSlideIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      goToSlide(currentSlideIndex + 1);
    });
  }

  setInterval(function () {
    goToSlide(currentSlideIndex + 1);
  }, 5600);
}

function updateLightboxImage() {
  const lightboxImage = document.querySelector("#lightboxImage");
  if (!lightboxImage || !currentGalleryImages.length) return;

  lightboxImage.src = currentGalleryImages[currentSlideIndex];
}

function initLightbox() {
  const expandBtn = document.querySelector("#expandGalleryBtn");
  const lightbox = document.querySelector("#galleryLightbox");
  const closeBtn = document.querySelector("#closeLightbox");
  const prevBtn = document.querySelector("#lightboxPrev");
  const nextBtn = document.querySelector("#lightboxNext");

  if (!expandBtn || !lightbox) return;

  expandBtn.addEventListener("click", function () {
    updateLightboxImage();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });

  closeBtn.addEventListener("click", function () {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    }
  });

  prevBtn.addEventListener("click", function () {
    goToSlide(currentSlideIndex - 1);
  });

  nextBtn.addEventListener("click", function () {
    goToSlide(currentSlideIndex + 1);
  });

  window.addEventListener("keydown", function (event) {
    if (!lightbox.classList.contains("open")) return;

    if (event.key === "Escape") {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    }

    if (event.key === "ArrowLeft") {
      goToSlide(currentSlideIndex - 1);
    }

    if (event.key === "ArrowRight") {
      goToSlide(currentSlideIndex + 1);
    }
  });
}

function renderRoomDetail(room) {
  document.querySelector("#breadcrumbRoomName").textContent = room.name;
  document.querySelector("#roomCapacity").textContent = room.capacity;
  document.querySelector("#roomName").textContent = room.name;
  document.querySelector("#roomSummary").textContent = room.summary;

  document.querySelector("#storyImage").src = room.gallery[0];
  document.querySelector("#storyImage").alt = room.name;

  document.querySelector("#storySubtitle").textContent = room.storySubtitle;
  document.querySelector("#storyTitle").textContent = room.storyTitle;

  const storyParagraphs = document.querySelector("#storyParagraphs");
  storyParagraphs.innerHTML = "";

  room.story.forEach(function (paragraph) {
    const p = document.createElement("p");
    p.textContent = paragraph;
    storyParagraphs.appendChild(p);
  });

  document.querySelector("#infoName").textContent = room.name;
  document.querySelector("#infoCapacity").textContent = room.capacity;
  document.querySelector("#infoFloor").textContent = room.floor;
  document.querySelector("#infoBed").textContent = room.bed;

  const facilityGrid = document.querySelector("#facilityGrid");
  facilityGrid.innerHTML = "";

  room.facilities.forEach(function (facility) {
    const item = document.createElement("div");
    item.className = "facility-item";
    item.textContent = facility;
    facilityGrid.appendChild(item);
  });

  const bookingBtn = document.querySelector("#detailBookingBtn");
  if (bookingBtn) {
    bookingBtn.href = room.bookingUrl;
  }
  const regularPrice = document.querySelector("#regularPrice");
const holidayPrice = document.querySelector("#holidayPrice");
const weekdayPrice = document.querySelector("#weekdayPrice");
const priceRuleList = document.querySelector("#priceRuleList");
const roomDetailList = document.querySelector("#roomDetailList");

if (regularPrice) {
  regularPrice.textContent = room.prices?.regular || "請洽詢";
}

if (holidayPrice) {
  holidayPrice.textContent = room.prices?.holiday || "請洽詢";
}

if (weekdayPrice) {
  weekdayPrice.textContent = room.prices?.weekday || "請洽詢";
}

if (priceRuleList) {
  priceRuleList.innerHTML = "";

  if (Array.isArray(room.priceRules)) {
    room.priceRules.forEach(function (rule) {
      const li = document.createElement("li");
      li.textContent = rule;
      priceRuleList.appendChild(li);
    });
  }
}

if (roomDetailList) {
  roomDetailList.innerHTML = "";

  if (Array.isArray(room.roomDetails)) {
    room.roomDetails.forEach(function (detail) {
      const li = document.createElement("li");
      li.textContent = detail;
      roomDetailList.appendChild(li);
    });
  }
}
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  function handleReveal() {
    revealItems.forEach(function (item) {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight * 0.86) {
        item.classList.add("show");
      }
    });
  }

  window.addEventListener("load", handleReveal);
  window.addEventListener("scroll", handleReveal, { passive: true });
  handleReveal();
}

document.addEventListener("DOMContentLoaded", function () {
  const roomId = getCurrentRoomId();
  const room = findRoomById(roomId);

  if (!room) {
    window.location.href = "room.html";
    return;
  }

  updateMeta(room);
  renderCarousel(room);
  renderRoomDetail(room);
  initCarousel();
  initLightbox();
  initReveal();
});