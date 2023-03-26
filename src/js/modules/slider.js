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

  slidesPerView: 1

});

const swiperProduct = new Swiper('.swiper-product', {
  modules: [Navigation],

  navigation: {
    nextEl: '.swiper-product-button-next',
    prevEl: '.swiper-product-button-prev',
  },
  spaceBetween: 20,

  breakpoints: {
  320: {
    slidesPerView: 4,
    direction: 'vertical',
    allowTouchMove: 'true',
allowTouchMove: 'false',
noSwiping: 'true',
preventInteractionOnTransition: 'true'
  },
  768: {
    slidesPerView: 2,
    direction: 'horizontal'
  },
  1280: {
    slidesPerView: 4,
    direction: 'horizontal'
  }
}

});

const swiperCertificate = new Swiper('.swiper-certificate', {
  modules: [Navigation],
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-certificate-button-next',
    prevEl: '.swiper-certificate-button-prev',
  },

  breakpoints: {
  320: {
    slidesPerView: 1,
    spaceBetween: 0
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
