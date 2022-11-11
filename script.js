const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const next = 1; const prev = -1;
    const clickedButton = button.dataset.carouselButton === 'next' ? next : prev;
    const slides = document.querySelector('[data-slides]');
    const children = [...slides.children];
    const activeSlide = slides.querySelector('[data-active]');

    var nextSlide = children.indexOf(activeSlide) + clickedButton;

    if (nextSlide >= children.length) nextSlide = 0;
    if (nextSlide < 0) nextSlide = children.length -1;

    children[nextSlide].dataset.active = 'true';
    delete activeSlide.dataset.active;
  })
});