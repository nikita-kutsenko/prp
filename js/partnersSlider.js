function initPartners() {
  var INDEX_P = 1;
  var STEP_P = getStep_P(window.innerWidth);
  var { width_P, height_P } = checkResize_P();
  var inAnim_P = false;
  const LENGTH_P = document.getElementById("partnersSlider").children.length;
  var timer_P = setInterval(next_P, 3000);

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

  document
    .getElementById("partnersRightController")
    .addEventListener("click", next_P, true);
  document
    .getElementById("partnersLeftController")
    .addEventListener("click", prev_P, true);
  window.addEventListener("resize", checkResize_P);

  function next_P(userClicked) {
    if (inAnim_P) return;
    if (userClicked && !isNaN(timer_P)) clearInterval(timer_P);
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
  }
  function prev_P(userClicked) {
    if (inAnim_P) return;
    if (userClicked && !isNaN(timer_P)) clearInterval(timer_P);
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
  }
  function resizeCarousel_P() {
    slider_P.style.left = `-${(2 + INDEX_P) * STEP_P}px`;
  }
  function getStep_P(width) {
    var result;
    switch (true) {
      case width <= 833:
        result = 98;
        break;

      case width <= 1024:
        result = 160;
        break;

      default:
        result = 228;
        break;
    }
    return result;
  }
  function checkResize_P() {
    if (!width_P && !height_P) {
      return { width_P: window.innerWidth, height_P: window.innerHeight };
    }
    var testStep_P = getStep_P(window.innerWidth, window.innerHeight);
    if (testStep_P !== STEP_P) {
      STEP_P = testStep_P;
      resizeCarousel_P();
    }
  }
}
