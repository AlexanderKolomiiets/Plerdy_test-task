'use strict';

import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

new Swiper('.swiper', {
  modules: [Navigation],

  grabCursor: true,
  slidesPerView: 5,
  spaceBetween: 17,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
