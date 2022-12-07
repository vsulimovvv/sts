window.addEventListener('DOMContentLoaded', () => {
  //   // * ===== Mask input
  //   $('input[type="tel"]').mask('+7 (999) 999-99-99');

  //   // * ===== Nice Select
  //   // $('select').niceSelect();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.news__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      breakpoints: {
        991: {
          spaceBetween: 45,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.screen-slider__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.screen-slider__content .swiper-button-next',
        prevEl: '.screen-slider__content .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.certificates-slider__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.certificates-slider__content .swiper-button-next',
        prevEl: '.certificates-slider__content .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      breakpoints: {
        991: {
          spaceBetween: 40,
        },
      },
    });
  })();

  //   // * ===== Slider
  //   (function slider() {
  //     const sliderEl = document.querySelector('.price-list-top__slider');
  //     new Swiper(sliderEl, {
  //       slidesPerView: 'auto',
  //       centeredSlides: true,
  //       slideToClickedSlide: true,
  //       initialSlide: 4,
  //       spaceBetween: 20,
  //       navigation: {
  //         nextEl: '.price-list-top__slider .swiper-button-next',
  //         prevEl: '.price-list-top__slider .swiper-button-prev',
  //       },
  //     });
  //   })();

  //   // * ===== Fixed Header
  //   (function fixedHeader() {
  //     function scrollHeader() {
  //       const nav = document.querySelector('header');
  //       if (this.scrollY >= 90) {
  //         nav.classList.add('scroll-header');
  //       } else {
  //         nav.classList.remove('scroll-header');
  //       }
  //     }

  //     window.addEventListener('scroll', scrollHeader);

  //     // ! Change
  //     function changeBg() {
  //       const header = document.querySelector('header');
  //       if (window.pageYOffset >= 90) {
  //         header.classList.add('scroll-header');
  //       }
  //     }

  //     changeBg();
  //   })();

  //   // * ===== Show Menu
  //   (function showMenu() {
  //     const menuBtn = document.querySelector('.header__toggle');
  //     const menu = document.querySelector('.mobile-menu');
  //     const menuCloseBtn = document.querySelector('.mobile-menu__close');
  //     const body = document.querySelector('body');
  //     const overlay = document.querySelector('.overlay');

  //     menuBtn.addEventListener('click', (e) => {
  //       menu.classList.toggle('active');
  //       overlay.classList.toggle('active');
  //       body.classList.toggle('no-scroll');
  //     });

  //     overlay.addEventListener('click', (e) => {
  //       menu.classList.remove('active');
  //       overlay.classList.remove('active');
  //       body.classList.remove('no-scroll');
  //     });

  //     menuCloseBtn.addEventListener('click', (e) => {
  //       menu.classList.remove('active');
  //       overlay.classList.remove('active');
  //       body.classList.remove('no-scroll');
  //     });
  //   })();

  //   // * ===== Modal
  //   (function modals() {
  //     function bindModal(openBtn, modal, close) {
  //       const openBtnEl = document.querySelectorAll(openBtn);
  //       const modalEl = document.querySelector(modal);
  //       const closeEl = document.querySelectorAll(close);
  //       const body = document.querySelector('body');
  //       if (modalEl) {
  //         openBtnEl.forEach((el) => {
  //           el.addEventListener('click', (e) => {
  //             if (e.target) {
  //               e.preventDefault();
  //             }
  //             modalEl.classList.add('active');
  //             body.classList.add('no-scroll');
  //           });
  //         });
  //         closeEl.forEach((btn) => {
  //           btn.addEventListener('click', (e) => {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           });
  //         });
  //         modalEl.addEventListener('click', (e) => {
  //           if (e.target === modalEl) {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           }
  //         });
  //       }
  //     }
  //     bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  //   })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs(
    '.equipment-tabs',
    '.equipment-tabs__left-btn',
    '.equipment-tabs__content',
    'active'
  );
  someTabs(
    '.licenses-tabs',
    '.licenses-tabs__left-btn',
    '.licenses-tabs__content',
    'active'
  );
  someTabs(
    '.team-tabs',
    '.team-tabs__top-btn',
    '.team-tabs__content',
    'active'
  );
  someTabs(
    '.cards-tabs',
    '.cards-tabs__top-btn',
    '.cards-tabs__content',
    'active'
  );
  someTabs(
    '.screen-tabs',
    '.screen-tabs__left-btn',
    '.screen-tabs__content',
    'active'
  );
  someTabs(
    '.vehicle-tabs',
    '.vehicle-tabs__left-btn',
    '.vehicle-tabs__content',
    'active'
  );
});
