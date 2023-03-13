export function replacement() {
  window.addEventListener("resize", (event) => {
    if (window.innerWidth <= 991) {
      document.getElementById("swiper-banner__item--img").src='../../../images/banner-tablet.png';
    } else {
      document.getElementById("swiper-banner__item--img").src='../../../images/banner.png';
    }
  })
}

replacement();
