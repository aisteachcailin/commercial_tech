import '../scss/style.scss';
import $ from "jquery";
// import "@fancyapps/fancybox";
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperBanner = new Swiper('.swiper-banner', {
  modules: [Pagination],
  direction: 'horizontal',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1,

});

const swiperProduct = new Swiper('.swiper-product', {
  modules: [Navigation],
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 4,
  spaceBetween: 20,

});

const swiperCertificate = new Swiper('.swiper-certificate', {
  // configure Swiper to use modules
  modules: [Navigation],
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,
  spaceBetween: 125,

});
