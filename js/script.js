// popup

const OpenClosePopupBtn = document.querySelector(".map-section-btn");
const Popup = document.querySelector(".popup");

OpenClosePopupBtn.addEventListener("click", function() {
  Popup.classList.toggle("hidden");
  console.log(OpenClosePopupBtn);
});
