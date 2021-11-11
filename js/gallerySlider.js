var INDEX = 1;
var STEP = getStep(window.innerWidth);
var { width, height } = checkResize();
var inAnim = false;
const slider = document.getElementById("slider");
const LENGTH = document.getElementById("slider").children.length;
var timer = setInterval(nextSlider, 3000);
const arrayFullScreen = Array.from(slider.children);

/**
 * Slider carousel
 */
const first = slider.children[0];
const firstClone = slider.children[0].cloneNode(true);
const secondClone = slider.children[1].cloneNode(true);
const thirdClone = slider.children[2].cloneNode(true);

const firstLastClone = slider.children[LENGTH - 1].cloneNode(true);
const secondLastClone = slider.children[LENGTH - 2].cloneNode(true);
const thirdLastClone = slider.children[LENGTH - 3].cloneNode(true);

slider.append(firstClone, secondClone, thirdClone);
slider.insertBefore(firstLastClone, first);
slider.insertBefore(secondLastClone, firstLastClone);
slider.insertBefore(thirdLastClone, secondLastClone);

document.getElementById("sliderNextBtn").addEventListener("click", nextSlider);
document.getElementById("sliderPrevBtn").addEventListener("click", prevSlider);
window.addEventListener("resize", checkResize);

function nextSlider(userClicked) {
  if (inAnim) return;
  if (userClicked && !isNaN(timer)) clearInterval(timer);
  inAnim = true;
  slider.style.left ||
    (slider.style.left =
      STEP == 250 ? `-${3 * STEP - 22}px` : `-${3 * STEP}px`);
  INDEX++;
  if (INDEX > LENGTH) {
    slider.style.transition = `unset`;
    slider.style.left = STEP == 250 ? `-${2 * STEP - 22}px` : `-${2 * STEP}px`;
    INDEX = 1;
  }
  setTimeout(() => {
    slider.style.transition = `left 0.25s ease-out`;
    slider.style.left = `${parseInt(slider.style.left) - STEP}px`;
    inAnim = false;
  }, 100);
}
function prevSlider(userClicked) {
  if (inAnim) return;
  if (userClicked && !isNaN(timer)) clearInterval(timer);
  inAnim = true;
  slider.style.left ||
    (slider.style.left =
      STEP == 250 ? `-${3 * STEP - 22}px` : `-${3 * STEP}px`);
  INDEX--;
  if (INDEX < 1) {
    slider.style.transition = `unset`;
    slider.style.left =
      STEP == 250
        ? `${(-3 - LENGTH) * STEP + 22}px`
        : `${(-3 - LENGTH) * STEP}px`;
    INDEX = LENGTH;
  }
  setTimeout(() => {
    slider.style.transition = `left 0.25s ease-out`;
    slider.style.left = `${parseInt(slider.style.left) + STEP}px`;
    inAnim = false;
  }, 100);
}
function resizeCarousel() {
  slider.style.left =
    STEP == 250 ? `-${(2 + INDEX) * STEP - 22}px` : `-${(2 + INDEX) * STEP}px`;
}
function getStep(width) {
  var result;
  switch (true) {
    case width <= 833:
      result = 250;
      break;

    case width <= 1024:
      result = 266;
      break;

    default:
      result = 376;
      break;
  }
  return result;
}
function checkResize() {
  if (!width && !height) {
    return { width: window.innerWidth, height: window.innerHeight };
  }
  var testStep = getStep(window.innerWidth, window.innerHeight);
  if (testStep !== STEP) {
    STEP = testStep;
    resizeCarousel();
  }
}

// swipe for mobile version
let start = null;
const swipe = document.getElementById("slider");
const sliderBlock = document.getElementById("sliderBlock");
swipe.addEventListener("click", (e) => {
  if (window.innerWidth <= 833) {
    openFullSize(e);
  }
});

sliderBlock.addEventListener("touchstart", function (e) {
  if (window.innerWidth <= 833) {
    start = e.changedTouches[0];
  }
});
sliderBlock.addEventListener("touchend", function (e) {
  if (window.innerWidth <= 833) {
    const end = e.changedTouches[0];

    if (end.screenX - start.screenX > 60) {
      prevSlider(true);
    } else if (end.screenX - start.screenX < -60) {
      nextSlider(true);
    }
  }
});

/**
 * Full screen carousel
 */
var INDEX_FullScreen = 0;
const imageFullScreen = document.getElementById("imageFullScreen");
const bodyTag = document.getElementsByTagName("body")[0];

const openFullSize = (e) => {
  INDEX_FullScreen = e.target.dataset.item_id;
  console.dir(e.target);
  bodyTag.classList.add("openedFullScreen");
  imageFullScreen.src = e.target.src;
};
const closeFullSize = () => bodyTag.classList.toggle("openedFullScreen");
const nextFullSize = () => {
  INDEX_FullScreen++;
  if (INDEX_FullScreen > LENGTH) INDEX_FullScreen = 1;
  const src = arrayFullScreen.filter(
    (i) => i.children[0].dataset.item_id == INDEX_FullScreen
  )[0].children[0].src;
  imageFullScreen.src = src;
};
const prevFullSize = () => {
  INDEX_FullScreen--;
  if (INDEX_FullScreen < 1) INDEX_FullScreen = LENGTH;
  const src = arrayFullScreen.filter(
    (i) => i.children[0].dataset.item_id == INDEX_FullScreen
  )[0].children[0].src;
  imageFullScreen.src = src;
};

document
  .querySelectorAll(".slider_item")
  .forEach((e) => e.addEventListener("click", openFullSize));

document
  .getElementById("closeBtnFullScreen")
  .addEventListener("click", closeFullSize);

document
  .getElementById("nextBtnFullScreen")
  .addEventListener("click", nextFullSize);

document
  .getElementById("prevBtnFullScreen")
  .addEventListener("click", prevFullSize);
