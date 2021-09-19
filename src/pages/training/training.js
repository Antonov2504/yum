import './training.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Menu from '../../components/Menu.js';
import anchorToTop from '../../components/TransitionToAnchor.js';
import { menuSelector, menuList } from "../../utils/constants";

const staffElement = document.querySelector('.staff');
// Initialize Main menu
const menu = new Menu(menuSelector, menuList);
menu.createMenu();

staffElement.addEventListener('click', (evt) => {
  const button = evt.target;
  const staffItemElement = button.parentElement;
  const staffInfoElement = button.previousElementSibling;
  const isUpsideCard = staffItemElement.classList.contains('staff__item_type_inverted');
  if (evt.target.classList.contains('card__button')) {
    isUpsideCard ? button.textContent = 'Подробнее' : button.textContent = 'Назад';
    button.classList.toggle('card__button_type_close');
    staffItemElement.classList.toggle('staff__item_type_inverted');
    staffInfoElement.classList.toggle('staff__info_type_inverted');
  }
});
