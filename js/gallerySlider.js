const slider = document.getElementById('slider');
const left = document.getElementById('leftController');
const right = document.getElementById('rightController');
const sliderItems = slider.getElementsByClassName('slider_item');

const STEP = 376;
var INDEX = 1;
var LAST_INDEX = sliderItems.length;

const firstSlide = sliderItems[0];
const lastSlide = sliderItems[sliderItems.length - 1];
const cloneFirst = firstSlide.cloneNode(true);
const cloneLast = lastSlide.cloneNode(true);

slider.appendChild(cloneFirst);
slider.insertBefore(cloneLast, firstSlide);

const checkSlider = (direction) => {
  slider.style.left || (slider.style.left = '0px');

  if (direction === 'left') {
    if (INDEX === 1) {
      slider.style.left = `${ -1 * LAST_INDEX * STEP }px`;
      INDEX = LAST_INDEX;
      return
    }
    INDEX--
    return
  } 

  if (INDEX === LAST_INDEX) {
    slider.style.left = `${STEP}px`;
    INDEX = 1;
    return
  }
  INDEX++
}
const moveLeft = () => {
  checkSlider('left');
  slider.style.left = `${ parseInt(slider.style.left) + STEP }px`;
}
const moveRight = () => {
  checkSlider('right');
  slider.style.left = `${ parseInt(slider.style.left) - STEP }px`;
}

left.addEventListener('click', moveLeft);
right.addEventListener('click', moveRight);