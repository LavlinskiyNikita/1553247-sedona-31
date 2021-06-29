// popup

const openClosePopupBtn = document.querySelector(".map-section-btn");
const popup = document.querySelector(".popup");

openClosePopupBtn.addEventListener("click", function() {
  popup.classList.toggle("modal-visibility");
});

