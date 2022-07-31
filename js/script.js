let myImageSlider = new Swiper(".swiper", {
  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  slideToClickedSlide: false,

  hashNavigation: {
    watchState: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  autoHeight: false,

  watchOverflow: true,

  spaceBetween: 10,

  slidesPerGroup: 1,

  centeredSlides: false,

  initialSlide: 0,

  slidesPerColumn: 1,

  loop: true,

  loopedSlides: 0,

  freeMode: true,

  autoplay: false, //{
  //delay: 1000,
  //stopOnLastSlide: false,
  // disableOnInteraction: true,
  // },

  speed: 800,

  breakpoints: {
    430: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  direction: "horizontal",

  effect: "slide",

  preloadImages: false,

  lazy: {
    loadOnTransitionStart: false,

    loadPrevNext: false,
  },

  watchSlidesProgress: true,

  watchSlidesVisibility: true,

  observer: true,

  observeParents: true,

  observeSlideChildren: true,
});

let mySlider = new Swiper(".slider", {
  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  slideToClickedSlide: false,

  hashNavigation: {
    watchState: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  autoHeight: false,

  watchOverflow: false,

  spaceBetween: 10,

  breakpoints: {
    430: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  slidesPerGroup: 1,

  centeredSlides: false,

  initialSlide: 0,

  slidesPerColumn: 1,

  loop: true,

  loopedSlides: 0,

  freeMode: true,

  autoplay: false, //{
  //delay: 1000,
  //stopOnLastSlide: false,
  // disableOnInteraction: true,
  // },

  speed: 800,

  direction: "horizontal",

  effect: "slide",

  preloadImages: false,

  watchSlidesVisibility: true,

  observer: true,

  observeParents: true,

  observeSlideChildren: true,
});

const acc = document.querySelectorAll(".accordeon-title");

acc.forEach((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("show");
    if (el.nextElementSibling.classList.contains("show")) {
      el.querySelector(".acc__img").src = "minus.png";
    } else {
      el.querySelector(".acc__img").src = "plus.png";
    }
  });
});

const burgerOpen = document.querySelector(".menu-burger");
const burgerClose = document.querySelector(".menu-burger__close");
const menu = document.querySelector(".menu-body");

burgerOpen.addEventListener("click", () => {
  menu.style.display = "block";
});

burgerClose.addEventListener("click", () => {
  menu.style.display = "none";
});
