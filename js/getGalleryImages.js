const slider = document.getElementById("slider");
var test = {
  isInSearch: true,
  isNotInSearch: false,
  img: "",
  li: "",
  liArray: new Array(),
  i: 1,
  interval: setInterval(loadImage, 1),
};

function loadImage() {
  if (test.isNotInSearch) {
    clearInterval(test.interval);
    insertImages();
    return;
  }

  if (test.isInSearch) {
    test.isInSearch = false;

    test.img = new Image();
    test.img.onload = keepSearch;
    test.img.onerror = stopSearch;
    test.img.src = `../assets/gallery/gallery-${test.i}.jpeg`;
    test.img.dataset.item_id = test.i;
    test.img.dataset.loading = "lazy";

    test.li = document.createElement("li");
    test.li.className = "slider_item";
    test.li.append(test.img);
  }
}

function keepSearch() {
  test.liArray.push(test.li);
  test.i++;
  test.isInSearch = true;
}

function stopSearch() {
  test.isNotInSearch = true;
}

function insertImages() {
  slider.append(...test.liArray);
  createGalleryClones();
}
