import { getElement } from "../utils/utils";

export default class Menu {
  constructor(menuSelector, menuList) {
    this._element = document.querySelector(menuSelector);
    this._menuList = menuList;
    this._menuButton = this._element.parentElement.querySelector('.menu-button');
    this._menuCover = document.querySelector('.cover');
    this._pathname = window.location.pathname;
  }

  createMenu() {
    if (this._pathname === '/' || this._pathname === '/index.html') {
      this._pathname = '/';
    } else {
      const pathnames = window.location.pathname.split('/');
      this._pathname = `/${pathnames[pathnames.length - 1]}`;
    }
    this._menuList.map(item => {
      const menuLinkClass = (`menu__link ${this._pathname === item.link.substring(1) ? 'menu__link_active' : ''}`).trim();
      this._element.append(getElement('a', menuLinkClass, {
        href: item.link,
        textContent: item.title
      }));
    });

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._menuButton.addEventListener('click', () => {
      this._menuCover.classList.toggle('cover_hidden');
      this._element.classList.toggle('menu_opened');
      this._menuButton.classList.toggle('menu-button_type_close-menu');
      console.log('click');
    });

    window.addEventListener('resize', (evt) => {
      if (evt.target.outerWidth > 800) {
        this._menuCover.classList.add('cover_hidden');
        this._element.classList.remove('menu_opened');
        this._menuButton.classList.remove('menu-button_type_close-menu');
      }
    });
  }
}
