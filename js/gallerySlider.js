var index = 1;
const step = 376;
const slider = document.getElementById("slider");
const sliderLength = document.getElementById("slider").children.length;

const firstItem = slider.children[0];
const firstItemClone = slider.children[0].cloneNode(true);
const afterFirstItemClone = slider.children[1].cloneNode(true);
const afterAfterFirstItemClone = slider.children[2].cloneNode(true);

const lastItem = slider.children[sliderLength - 1];
const lastItemClone = slider.children[sliderLength - 1].cloneNode(true);
const preLastItemClone = slider.children[sliderLength - 2].cloneNode(true);
const prePreLastItemClone = slider.children[sliderLength - 3].cloneNode(true);

firstItemClone.style.fontWeight = "700";
afterFirstItemClone.style.fontWeight = "700";
afterAfterFirstItemClone.style.fontWeight = "700";
lastItemClone.style.fontWeight = "700";
preLastItemClone.style.fontWeight = "700";
prePreLastItemClone.style.fontWeight = "700";

slider.append(firstItemClone);
slider.append(afterFirstItemClone);
slider.append(afterAfterFirstItemClone);

slider.insertBefore(lastItemClone, firstItem);
slider.insertBefore(preLastItemClone, lastItemClone);
slider.insertBefore(prePreLastItemClone, preLastItemClone);

const next = () => {
  console.log("-----> clicked next");
  console.dir(slider);
  console.log("sliderLength", sliderLength);
  slider.style.left || (slider.style.left = "-1128px");
  console.log("slider.style.left", slider.style.left);
  console.log("index", index);

  index++;
  if (index > sliderLength) {
    console.log(true);
    slider.style.transition = `unset`;
    slider.style.left = "-752px";
    index = 1;
  }
  setTimeout(() => {
    slider.style.transition = `left 0.25s ease-out`;
    slider.style.left = `${parseInt(slider.style.left) - step}px`;
    console.log("slider.style.left", slider.style.left);
    console.log("index", index);
  }, 100);
};

const prev = () => {
  console.log("-----> clicked prev");
  console.dir(slider);
  console.log("sliderLength", sliderLength);
  slider.style.left || (slider.style.left = "-1128px");
  console.log("slider.style.left", slider.style.left);
  console.log("index", index);

  index--;
  if (index < 1) {
    console.log(false);
    slider.style.transition = `unset`;
    slider.style.left = `${(-3 - sliderLength) * step}px`;
    index = sliderLength;
  }
  setTimeout(() => {
    slider.style.transition = `left 0.25s ease-out`;
    slider.style.left = `${parseInt(slider.style.left) + step}px`;
    console.log("slider.style.left", slider.style.left);
    console.log("index", index);
  }, 100);
};
document.getElementById("rightController").addEventListener("click", next);
document.getElementById("leftController").addEventListener("click", prev);

// const slider = document.getElementById('slider');
// const left = document.getElementById('leftController');
// const right = document.getElementById('rightController');
// const sliderItems = slider.getElementsByClassName('slider_item');

// const STEP = 376;
// var INDEX = 1;
// var LAST_INDEX = sliderItems.length;

// const firstSlide = sliderItems[0];
// const lastSlide = sliderItems[sliderItems.length - 1];
// const cloneFirst = firstSlide.cloneNode(true);
// const cloneLast = lastSlide.cloneNode(true);

// slider.appendChild(cloneFirst);
// slider.insertBefore(cloneLast, firstSlide);

// const checkSlider = (direction) => {
//   slider.style.left || (slider.style.left = '0px');

//   if (direction === 'left') {
//     if (INDEX === 1) {
//       slider.style.left = `${ -1 * LAST_INDEX * STEP }px`;
//       INDEX = LAST_INDEX;
//       return
//     }
//     INDEX--
//     return
//   }

//   if (INDEX === LAST_INDEX) {
//     slider.style.left = `${STEP}px`;
//     INDEX = 1;
//     return
//   }
//   INDEX++
// }
// const moveLeft = () => {
//   checkSlider('left');
//   slider.style.left = `${ parseInt(slider.style.left) + STEP }px`;
// }
// const moveRight = () => {
//   checkSlider('right');
//   slider.style.left = `${ parseInt(slider.style.left) - STEP }px`;
// }

// left.addEventListener('click', moveLeft);
// right.addEventListener('click', moveRight);
