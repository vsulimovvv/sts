window.addEventListener('DOMContentLoaded', () => {
  //   // * ===== Mask input
  //   $('input[type="tel"]').mask('+7 (999) 999-99-99');

  //   // * ===== Nice Select
  //   // $('select').niceSelect();

  // * ===== Scroll anchor
  $(document).ready(function () {
    $('a[href*="#"]').bind('click', function (e) {
      var anchor = $(this);
      $('html, body').animate({
        scrollTop: $(anchor.attr('href')).offset().top - 120,
      });
      e.preventDefault();
    });
    return false;
  });

  (function showDropdown() {
    const links = document.querySelectorAll('.menu__link');
    const dropdowns = document.querySelectorAll('.dropmenu');

    links.forEach((link) => {
      if (link) {
        link.addEventListener('mouseover', (e) => {
          dropdowns.forEach((dropdown) => {
            console.log(dropdown.dataset.target);

            if (link.dataset.target === dropdown.dataset.target) {
              dropdown.classList.toggle('active');
            }
          });
        });
        link.addEventListener('mouseleave', (e) => {
          dropdowns.forEach((dropdown) => {
            dropdown.classList.remove('active');
          });
        });
      }
    });
  })();

  // (function scrolAnchor() {
  //   $('a').on('click', function () {
  //     let href = $(this).attr('href');

  //     $('html, body').animate(
  //       {
  //         scrollTop: $(href).offset().top - 120,
  //       },
  //       {
  //         duration: 500, // по умолчанию «400»
  //         easing: 'linear', // по умолчанию «swing»
  //       }
  //     );

  //     return false;
  //   });
  // })();

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

  // * ==== Dropdown
  document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });
  });

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 50) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 50) {
        header.classList.add('scroll-header');
      }
    }

    changeBg();
  })();

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'horizontal',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

      allowTouchMove: false,

      breakpoints: {
        300: {
          allowTouchMove: true,
        },

        768: {
          allowTouchMove: false,
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      slidesPerView: 1,
      speed: 300,
      effect: 'fade',

      thumbs: {
        swiper: mySwiperNav,
      },
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.back-call-btn', '.popup--back-call', '.popup__close');
  })();

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
    '.models-tabs',
    '.models-tabs__left-btn',
    '.models-tabs__content',
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
  someTabs(
    '.wialon-descr',
    '.wialon-descr-btn',
    '.wialon-descr-content',
    'active'
  );
  someTabs(
    '.wialon-screen',
    '.wialon-screen-btn',
    '.wialon-screen-content',
    'active'
  );
  someTabs(
    '.scout-descr',
    '.scout-descr-btn',
    '.scout-descr-content',
    'active'
  );
  someTabs(
    '.scout-screen',
    '.scout-screen-btn',
    '.scout-screen-content',
    'active'
  );
  someTabs('.fort-descr', '.fort-descr-btn', '.fort-descr-content', 'active');
  someTabs(
    '.fort-screen',
    '.fort-screen-btn',
    '.fort-screen-content',
    'active'
  );
  someTabs(
    '.omnicomm-descr',
    '.omnicomm-descr-btn',
    '.omnicomm-descr-content',
    'active'
  );
  someTabs(
    '.omnicomm-screen',
    '.omnicomm-screen-btn',
    '.omnicomm-screen-content',
    'active'
  );
  someTabs('.asm-screen', '.asm-screen-btn', '.asm-screen-content', 'active');
});
