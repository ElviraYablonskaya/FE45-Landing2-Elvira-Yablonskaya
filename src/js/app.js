const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  autoHeight: true,
  spaceBetween: 15,

  autoplay: {
    delay: 5000,
    stopOnLastSlide: true,
    disableOneInteraction: false,
  },
  speed: 800,
});
