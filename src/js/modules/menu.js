export function dropdown() {

  let menu = document.querySelector('.header__adapt__right__menu');
  let close = document.querySelector('.header__adapt__right__menu--close');
  let burger_tablet = document.querySelector('.header__adapt__right--burger');
  let burger_mobile = document.querySelector('.header__mobile--burger');

if (burger_mobile) {
  burger_mobile.addEventListener('click', function() {
    menu.classList.toggle('active');
  })
}

if (burger_tablet) {
  burger_tablet.addEventListener('click', function() {
    menu.classList.toggle('active');
  })
}

if (close) {
  close.addEventListener('click', function() {
    menu.classList.toggle('active');
  })
}

}

dropdown();
