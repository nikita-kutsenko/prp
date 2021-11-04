const sliderP = document.getElementById("partnersSlider");
const leftP = document.getElementById("partnersLeftController");
const rightP = document.getElementById("partnersRightController");
const sliderItemsP = sliderP.getElementsByClassName("partnersSlider_item");

const STEP_P = 228;
var INDEX_P = 1;
var LAST_INDEX_P = sliderItemsP.length;

const firstSlideP = sliderItemsP[0];
const lastSlideP = sliderItemsP[sliderItemsP.length - 1];
const cloneFirstP = firstSlideP.cloneNode(true);
const cloneLastP = lastSlideP.cloneNode(true);

sliderP.appendChild(cloneFirstP);
sliderP.insertBefore(cloneLastP, firstSlideP);

const checkSliderP = (direction) => {
  sliderP.style.left || (sliderP.style.left = "0px");

  if (direction === "left") {
    if (INDEX_P === 1) {
      sliderP.style.left = `${-1 * LAST_INDEX_P * STEP_P}px`;
      INDEX_P = LAST_INDEX_P;
      return;
    }
    INDEX_P--;
    return;
  }

  if (INDEX_P === LAST_INDEX_P) {
    sliderP.style.left = `${STEP_P}px`;
    INDEX_P = 1;
    return;
  }
  INDEX_P++;
};
const moveLeftP = () => {
  checkSliderP("left");
  sliderP.style.left = `${parseInt(sliderP.style.left) + STEP_P}px`;
};
const moveRightP = () => {
  checkSliderP("right");
  sliderP.style.left = `${parseInt(sliderP.style.left) - STEP_P}px`;
};

leftP.addEventListener("click", moveLeftP);
rightP.addEventListener("click", moveRightP);
