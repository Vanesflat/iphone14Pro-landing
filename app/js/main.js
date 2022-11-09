const headerNav = document.querySelector('.nav');
const headerBtn = document.querySelector('.header__btn');

headerBtn.addEventListener('click', () => {
  headerNav.classList.toggle('header__menu--open');
});