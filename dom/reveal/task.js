const hiddenElement = document.querySelectorAll('.reveal');

for (let i = 0; i < hiddenElement.length; i++) {
  function isInViewport() {
    const elementTop = hiddenElement[i].getBoundingClientRect().top;
    const elementBottom = hiddenElement[i].getBoundingClientRect().bottom;
    const viewportHeight = (window.innerHeight);
    if ((elementBottom < viewportHeight) && (elementTop >= 0)) {
      hiddenElement[i].classList.add('reveal_active');
    } else {
      hiddenElement[i].classList.remove('reveal_active');
    }
  }
  window.addEventListener('scroll', isInViewport);
}