import './culture.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Menu from '../../components/Menu.js';
import anchorToTop from '../../components/TransitionToAnchor.js';
import { menuSelector, menuList } from "../../utils/constants";

// Initialize Main menu
const menu = new Menu(menuSelector, menuList);
menu.createMenu();
