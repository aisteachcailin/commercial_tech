import Swiper, { Navigation, Pagination } from 'swiper';
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
  modules: [Navigation],
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,
  spaceBetween: 125,

});

export const banner = swiperBanner;
export const product = swiperProduct;
export const certificate = swiperCertificate;
