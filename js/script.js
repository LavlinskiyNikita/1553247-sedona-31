// popup

const openClosePopupBtn = document.querySelector(".map-section-btn");
const popup = document.querySelector(".popup");

openClosePopupBtn.addEventListener("click", function() {
  popup.classList.toggle("modal-visibility");
});


const btnPlus = document.querySelector(".popup__block-one-number__pluse");
const btnMinus = document.querySelector(".popup__block-one-number__munus");
const numberText = document.querySelector(".popup__block-1-number-text");

let cont = 0;



btnPlus.addEventListener("click", function() {
  cont++;
  numberText.value = cont;
});

btnMinus.addEventListener("click", function() {
  cont--;
  numberText.value = cont;
});


// aa
