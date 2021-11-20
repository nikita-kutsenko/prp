class SetContent {
  static hero = (data) =>
    `<div class="hero__side">
      <h1 class="hero__side_title">${data.title}</h1>
      <div class="hero__side_block">
        <h2 class="hero__side_block_description">${data.description}</h2>
        <a href="#about" class="hero__side_block_cta">${data.cta}</a>
      </div>
      <span class="hero__side_scroll"></span>   
    </div>`;

  static getAboutBlocks = (array) =>
    array
      .map((e) => `<p class="about__textBlock_text">${e}</p>`)
      .reduce((p, c) => p + c);

  static about = (data) => `<h2 class="block__title">${data.title}</h2>
    <div class="about__card">
      <span class="about__card_img"></span>
      <div class="about__card_content">
        <h3 class="name">${data.card.name}</h3>
        <h4 class="work-title">${data.card.workTitle}</h4>
        <p class="description">${data.card.description}</p>
        <ul class="socialMedia">
          <li class="socialMedia_item">
            <a href="${data.card.url_linkedin}" class="socialMedia_item_link">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5459 9.8818C11.5459 10.9279 10.7584 11.7649 9.49413 11.7649H9.47096C8.25365 11.7649 7.46667 10.9279 7.46667 9.8818C7.46667 8.8136 8.27762 8 9.51803 8C10.7584 8 11.5223 8.8136 11.5459 9.8818ZM11.307 13.2519V24.1464H7.68109V13.2519H11.307ZM24.3834 24.1464L24.3836 17.8998C24.3836 14.5535 22.5948 12.9961 20.2088 12.9961C18.2836 12.9961 17.4217 14.0535 16.9405 14.7953V13.2522H13.3141C13.3619 14.2745 13.3141 24.1467 13.3141 24.1467H16.9405V18.0623C16.9405 17.7367 16.964 17.4119 17.0599 17.1788C17.3219 16.5283 17.9186 15.8548 18.9203 15.8548C20.2329 15.8548 20.7576 16.8538 20.7576 18.3178V24.1464H24.3834Z" fill="#0077B5"/>
              </svg>
            </a>
          </li>
          <li class="socialMedia_item">
            <a href="${data.card.url_facebook}" class="socialMedia_item_link">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6678 25.4077V16.7028H20.0707L20.3891 13.7031H17.6678L17.6718 12.2017C17.6718 11.4193 17.7462 11.0001 18.8699 11.0001H20.3721V8H17.9688C15.0821 8 14.0661 9.4552 14.0661 11.9024V13.7034H12.2667V16.7031H14.0661V25.4077H17.6678Z" fill="#3B5998"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="about__textBlock">
      <h3 class="about__textBlock_title">${data.textBlock.title}</h3>
      ${this.getAboutBlocks(data.textBlock.text)}
    </div>`;

  static getServicesBlocks = (array) =>
    array
      .map(
        (e, i) =>
          `<li class="services__list_item">
            <img 
              src="assets/services/${i++}.png" 
              alt="${e.title}" 
              class="services__list_item_icon">
            <h4 class="services__list_item_title">${e.title}</h4>
            <p class="services__list_item_description">${e.description}</p>
          </li>`
      )
      .reduce((p, c) => p + c);

  static services = (data) =>
    `<div class="services_blur"></div>
    <h2 class="block__title">${data.title}</h2>
    <ul class="services__list">${this.getServicesBlocks(data.list)}</ul>
    <span id="seeAllServices" class="services__scroll"></span>`;

  static gallery = (data) =>
    `<h2 class="block__title">${data.title}</h2>
    <div id="sliderBlock" class="sliderBlock">
      <div class="controllers">
        <span id="sliderPrevBtn" class="controllers_side left"></span>
        <span id="sliderNextBtn" class="controllers_side right"></span>
      </div>
      <ul id="slider" class="slider"></ul>
    </div>`;

  static partners = (data) =>
    `<h2 class="block__title">${data.title}</h2>
    <div id="partnersSliderBlock" class="partnersSliderBlock">
      <div class="controllers">
        <span id="partnersLeftController" class="controllers_side left"></span>
        <span id="partnersRightController" class="controllers_side right"></span>
      </div>
      <ul id="partnersSlider" class="partnersSlider"></ul>
    </div>`;

  // <li class="partnersSlider_item"><img src="assets/img/temp_partners.png" loading="lazy" alt="1" srcset=""></li>

  static getContactsPhones = (list) =>
    list
      .map(
        (e) => `<a href="tel:${e.callTo}" class="info__phone">${e.toShow}</a>`
      )
      .join("");

  static contactsInfo = (data) =>
    `<h2 class="info__title">${data.title}</h2>
  
    <h3 class="info__subtitle">${data.subtitle}</h3>
    <p class="info__location">${data.company}</p>
    <address class="info__location">${data.location}</address>

    ${this.getContactsPhones(data.phones)}
    <a href="mailto:${data.email}" class="info__email">${data.email}</a>`;
}
