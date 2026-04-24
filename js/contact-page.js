function initRevealAnimation() {
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

function initMapActions() {
  const openMapBtn = document.querySelector("#openMapBtn");
  const copyAddressBtn = document.querySelector("#copyAddressBtn");
  const addressText = document.querySelector("#addressText");

  const mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("南投縣魚池鄉秀水路60號");

  if (openMapBtn) {
    openMapBtn.addEventListener("click", function () {
      window.open(mapUrl, "_blank");
    });
  }

  if (copyAddressBtn && addressText) {
    copyAddressBtn.addEventListener("click", async function () {
      const address = addressText.textContent.trim();

      try {
        await navigator.clipboard.writeText(address);
        copyAddressBtn.textContent = "已複製";
        setTimeout(function () {
          copyAddressBtn.textContent = "複製地址";
        }, 1600);
      } catch (error) {
        copyAddressBtn.textContent = "請手動複製";
        setTimeout(function () {
          copyAddressBtn.textContent = "複製地址";
        }, 1600);
      }
    });
  }
}

function initContactForm() {
  const form = document.querySelector("#contactForm");
  const message = document.querySelector("#formMessage");

  if (!form || !message) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const contactData = {
      name: formData.get("guestName"),
      phone: formData.get("guestPhone"),
      email: formData.get("guestEmail"),
      type: formData.get("messageType"),
      message: formData.get("guestMessage"),
      createdAt: new Date().toISOString()
    };

    localStorage.setItem("latestContactInquiry", JSON.stringify(contactData));

    message.textContent = "已收到你的詢問資料。正式上線後，這裡可以串接 Email、後台或 CRM 系統。";

    form.reset();

    setTimeout(function () {
      message.textContent = "";
    }, 5200);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initRevealAnimation();
  initMapActions();
  initContactForm();
});