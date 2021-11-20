var slider;

function initSliderImages() {
  var sliderData = {
    isInSearch: true,
    isNotInSearch: false,
    img: "",
    li: "",
    liArray: new Array(),
    i: 1,
    interval: setInterval(loadImage, 5),
  };

  function loadImage() {
    if (sliderData.isNotInSearch) {
      clearInterval(sliderData.interval);
      insertImages();
      return;
    }

    if (sliderData.isInSearch) {
      sliderData.isInSearch = false;

      sliderData.img = new Image();
      sliderData.img.onload = keepSearch;
      sliderData.img.onerror = stopSearch;
      sliderData.img.src = `assets/gallery/${sliderData.i}.jpeg`;
      sliderData.img.dataset.item_id = sliderData.i;
      sliderData.img.dataset.loading = "lazy";

      sliderData.li = document.createElement("li");
      sliderData.li.className = "slider_item";
      sliderData.li.append(sliderData.img);
    }
  }

  function keepSearch() {
    sliderData.liArray.push(sliderData.li);
    sliderData.i++;
    sliderData.isInSearch = true;
  }

  function stopSearch() {
    sliderData.isNotInSearch = true;
  }

  function insertImages() {
    slider.append(...sliderData.liArray);
    initGallery();
  }
}
