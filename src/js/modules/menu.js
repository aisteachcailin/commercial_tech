export function menuq(burgerw, menuw, closew) {

if (burgerw) {
  burgerw.addEventListener('click', function() {
    menuw.classList.toggle('active');
  })
}

if (closew) {
  closew.addEventListener('click', function() {
    menuw.classList.toggle('active');
  })
}

}
