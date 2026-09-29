//======REVEAL-QUESTION======//
document.querySelectorAll('[data-reveal-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    const details = document.getElementById(btn.dataset.revealTarget);
    details.open = !details.open;
  });
});

//======BURGER-MENU======//
const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__menu');

burger?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', isOpen);
});