import Swiper, { A11y, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperCategories = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    speed: 500,
    freeMode: true,
    modules: [A11y, Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return swiper;
};

window.addEventListener('DOMContentLoaded', swiperCategories);
