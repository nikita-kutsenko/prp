var INDEX_P = 1;
const STEP_P = 228;
var inAnim_P = false;
const slider_P = document.getElementById("partnersSlider");
const LENGTH_P = document.getElementById("partnersSlider").children.length;

const first_P = slider_P.children[0];
const firstClone_P = slider_P.children[0].cloneNode(true);
const secondClone_P = slider_P.children[1].cloneNode(true);
const thirdClone_P = slider_P.children[2].cloneNode(true);
const fourthClone_P = slider_P.children[3].cloneNode(true);
const fifthClone_P = slider_P.children[4].cloneNode(true);

const firstLastClone_P = slider_P.children[LENGTH_P - 1].cloneNode(true);
const secondLastClone_P = slider_P.children[LENGTH_P - 2].cloneNode(true);
const thirdLastClone_P = slider_P.children[LENGTH_P - 3].cloneNode(true);
const fourthLastClone_P = slider_P.children[LENGTH_P - 4].cloneNode(true);
const fifthLastClone_P = slider_P.children[LENGTH_P - 5].cloneNode(true);

slider_P.append(
  firstClone_P,
  secondClone_P,
  thirdClone_P,
  fourthClone_P,
  fifthClone_P
);
slider_P.insertBefore(firstLastClone_P, first_P);
slider_P.insertBefore(secondLastClone_P, firstLastClone_P);
slider_P.insertBefore(thirdLastClone_P, secondLastClone_P);
slider_P.insertBefore(fourthLastClone_P, thirdLastClone_P);
slider_P.insertBefore(fifthLastClone_P, fourthLastClone_P);

const next_P = () => {
  if (inAnim_P) return;
  inAnim_P = true;
  slider_P.style.left || (slider_P.style.left = `-${5 * STEP_P}px`);
  INDEX_P++;
  if (INDEX_P > LENGTH_P) {
    slider_P.style.transition = `unset`;
    slider_P.style.left = `-${4 * STEP_P}px`;
    INDEX_P = 1;
  }
  setTimeout(() => {
    slider_P.style.transition = `left 0.25s ease-out`;
    slider_P.style.left = `${parseInt(slider_P.style.left) - STEP_P}px`;
    inAnim_P = false;
  }, 100);
};

const prev_P = () => {
  if (inAnim_P) return;
  inAnim_P = true;
  slider_P.style.left || (slider_P.style.left = `-${5 * STEP_P}px`);
  INDEX_P--;
  if (INDEX_P < 1) {
    slider_P.style.transition = `unset`;
    slider_P.style.left = `${(-5 - LENGTH_P) * STEP_P}px`;
    INDEX_P = LENGTH_P;
  }
  setTimeout(() => {
    slider_P.style.transition = `left 0.25s ease-out`;
    slider_P.style.left = `${parseInt(slider_P.style.left) + STEP_P}px`;
    inAnim_P = false;
  }, 100);
};
document
  .getElementById("partnersRightController")
  .addEventListener("click", next_P);
document
  .getElementById("partnersLeftController")
  .addEventListener("click", prev_P);
