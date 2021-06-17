// popup

const OpenPopupBtn = document.querySelector(".map-section-btn");
const ClosePopupBtn = document.querySelector(".map-section-btn");
const Popup = document.querySelector("popup");


// range

window.onload = function(){
	slideOne();
	slideTwo();
}


let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");

let displayValuesOne = document.getElementById("range1");
let displayValuesTwo = document.getElementById("range2");

let minGap = 200;

let sliderTrack = document.querySelector(".slider-tarck");
let sliderMaxVal = document.getElementById("slider-1").max;


function slideOne(){
	if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){sliderOne.value = parseInt(sliderTwo.value) - minGap;
	}
	displayValuesOne.textContent = sliderOne.value;
	fillColor();
};

function slideTwo(){
	if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){sliderTwo.value = parseInt(sliderOne.value) + minGap;
	}
	displayValuesTwo.textContent = sliderTwo.value;
	fillColor();
};

function fillColor() {
	percent1 = (sliderOne.value / sliderMaxVal) *
	100;
	percent2= (sliderTwo.value / sliderMaxVal) *
	100;
	sliderTrack.style.background = `linear-gradient(to right, #ABABAB ${percent1}%
	, #ffffff ${percent1}% , #ffffff ${percent2}%,
	#ABABAB ${percent2}%)`;
};

