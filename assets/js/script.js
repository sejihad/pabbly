const swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  freeMode: true,
  breakpoints: {
    // When window width is >= 1024px
    1150: {
      slidesPerView: 5, // 5 images on large screens
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4, // 5 images on large screens
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 3, // 5 images on large screens
      spaceBetween: 10,
    },
    300: {
      slidesPerView: 2, // 5 images on large screens
      spaceBetween: 10,
    },
  },
});
