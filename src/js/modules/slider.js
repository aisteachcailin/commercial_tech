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
  spaceBetween: 20,

  breakpoints: {
  320: {
    slidesPerView: 4,
    direction: 'vertical'
  },
  768: {
    slidesPerView: 2
  },
  1280: {
    slidesPerView: 4
  }
}

});

const swiperCertificate = new Swiper('.swiper-certificate', {
  modules: [Navigation],
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
  320: {
    slidesPerView: 1
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 61
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 125
  }
}


});

export const banner = swiperBanner;
export const product = swiperProduct;
export const certificate = swiperCertificate;
