/**
 * Getting data from JSON
 *
 * @param {string} url
 * @returns {object} data
 */
async function getData(url) {
  let response = await fetch(url);
  return await response.json();
}

(async function contentInit() {
  const data = await getData("../data.json");

  document.getElementById("hero").innerHTML = SetContent.hero(data.hero);
  document.getElementById("about").innerHTML = SetContent.about(data.about);
  document.getElementById("services").innerHTML = SetContent.services(
    data.services
  );
  document.getElementById("gallery").innerHTML = SetContent.gallery(
    data.gallery
  );
  document.getElementById("partners").innerHTML = SetContent.partners(
    data.partners
  );
  document.getElementById("contactsInfo").innerHTML = SetContent.contactsInfo(
    data.contactsInfo
  );
  setSeeAllServices();
  slider = document.getElementById("slider");
  initSliderImages();
  slider_P = document.getElementById("partnersSlider");
  initPartnersSliderImages();
})();
