//swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Слайдер №{{index}}'
  },
});

//burger
let burger = document.querySelector('.button-burger');
let menu = document.querySelector('.nav__list');
let menuLinks = document.querySelectorAll('.nav__link');



burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav__list--active');
    document.body.classList.toggle('stop-scroll');
    console.log(this.classList)
    if (this.classList.contains('burger--active')) {
      this.ariaLabel = 'Закрыть меню'
    } else {
      this.ariaLabel = 'Меню'
    }
  }
)

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav__list--active');
    document.body.classList.remove('stop-scroll');
  })
})

// search

let searchBtn = document.querySelector('.header__search');
let searchForm = document.querySelector('.header-form');
let searchClose = document.querySelector('.header-form__close')

searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  searchForm.classList.toggle('header-form--active');
})

searchClose.addEventListener('click', function (e) {
  e.preventDefault();
    searchForm.classList.remove('header-form--active');

})

//tabs

let tabsBtns = document.querySelectorAll('.working-btns__link');
let tabsItems = document.querySelectorAll('.working-info__descr');
let img = document.querySelectorAll('.working-image')

tabsBtns.forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;
    tabsBtns.forEach(function (btn) {
      btn.classList.remove('working-btns__link--active')
    });
    e.currentTarget.classList.add('working-btns__link--active');
    tabsItems.forEach(function (tabsBtn) {
      tabsBtn.classList.remove('working-info__descr--active')
    });
    img.forEach(function (item) {
      item.classList.remove('working-image--active');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('working-info__descr--active');
    document.querySelector(`[data-img="${path}"]`).classList.add('working-image--active');
  });
});


// Аккордион
new Accordion('.accordion');
