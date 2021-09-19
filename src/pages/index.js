import 'swiper/css/bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import Swiper from 'swiper/bundle';
import Menu from '../components/Menu.js';
import anchorToTop from '../components/TransitionToAnchor.js';
import { menuSelector, menuList } from "../utils/constants";

// Initialize Main menu
const menu = new Menu(menuSelector, menuList);
menu.createMenu();

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});
