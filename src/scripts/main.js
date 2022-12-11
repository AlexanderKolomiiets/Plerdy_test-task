'use strict';

import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

new Swiper('.swiper', {
  modules: [Navigation],

  grabCursor: true,
  rewind: true,
  slidesPerView: 4.2,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
