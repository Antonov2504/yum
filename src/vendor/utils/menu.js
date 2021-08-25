const coverElement = document.querySelector('.cover');
const menuElement = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
  coverElement.classList.toggle('cover_hidden');
  menuElement.classList.toggle('menu_opened');
  menuButton.classList.toggle('menu-button_type_close-menu');
});

window.addEventListener('resize', (evt) => {
  if (evt.target.outerWidth > 800) {
    coverElement.classList.add('cover_hidden');
    menuElement.classList.remove('menu_opened');
    menuButton.classList.remove('menu-button_type_close-menu');
  }
});