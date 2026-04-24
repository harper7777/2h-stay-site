document.addEventListener("DOMContentLoaded", function () {
  initScrollEffects({
    revealSelector: ".reveal",
    zoomSelector: ".zoom-box",
    revealTrigger: 0.85,
    zoomTrigger: 0.9
  });
});

function initHomeLocationMap() {
  const openMapBtn = document.querySelector("#homeOpenMapBtn");

  if (!openMapBtn) return;

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("南投縣魚池鄉秀水路60號");

  openMapBtn.addEventListener("click", function () {
    window.open(mapUrl, "_blank");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initHomeLocationMap();
});


if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});