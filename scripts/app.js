const swiper = new Swiper(".package-ad__swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const packagesSliders = new Swiper(".hack-coding-packages-sliders", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  speed: 600,
});
const specialPackagesOffersSliders = new Swiper(
  ".packages-special-offers-swiper",
  {
    loop: true,
    autoplay: {
      delay: 16000,
      disableOnInteraction: false,
    },
    speed: 400,
  },
);
const specialPackagesSliders = new Swiper(".special-package__swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 1.4,
    },
    768: {
      slidesPerView: 2,
    },
    922: {
      slidesPerView: 2.2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  speed: 400,
});
const userCommentsSliders = new Swiper(".user-comments-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 1.4,
    },
    768: {
      slidesPerView: 2,
    },
    922: {
      slidesPerView: 2.2,
    },
    1200: {
      slidesPerView: 2.5,
    },
  },
  speed: 400,
});
const latestArticlesSliders = new Swiper(".latest-articles-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 400,
});
