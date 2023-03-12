export function dropdown(burger_mobile, burger_tablet, menu, close) {

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
