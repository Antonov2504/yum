(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var n=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._element=document.querySelector(e),this._menuList=t,this._menuButton=this._element.parentElement.querySelector(".menu-button"),this._menuCover=document.querySelector(".cover"),this._pathname=window.location.pathname}var i,r;return i=n,(r=[{key:"createMenu",value:function(){var t=this;if("/"===this._pathname||"/index.html"===this._pathname)this._pathname="/";else{var n=window.location.pathname.split("/");this._pathname="/".concat(n[n.length-1])}return this._menuList.map((function(n){var i="menu__link ".concat(t._pathname===n.link.substring(1)?"menu__link_active":"").trim();t._element.append(function(t,n,i){var r,o,a=document.createElement("a");if(n&&(r=a.classList).add.apply(r,function(t){if(Array.isArray(t))return e(t)}(o=n.split(" "))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i)for(var l in i)a[l]=i[l];return a}(0,i,{href:n.link,textContent:n.title}))})),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._menuButton.addEventListener("click",(function(){e._menuCover.classList.toggle("cover_hidden"),e._element.classList.toggle("menu_opened"),e._menuButton.classList.toggle("menu-button_type_close-menu"),console.log("click")})),window.addEventListener("resize",(function(t){t.target.outerWidth>800&&(e._menuCover.classList.add("cover_hidden"),e._element.classList.remove("menu_opened"),e._menuButton.classList.remove("menu-button_type_close-menu"))}))}}])&&t(i.prototype,r),n}(),i=document.querySelector("#toTop");i.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){window.scrollY>=1e3?i.classList.remove("anchor_hidden"):i.classList.add("anchor_hidden")})),new n(".menu",[{title:"Главная",link:"./"},{title:"Digital",link:"./digital.html"},{title:"Культура KFC",link:"./culture.html"},{title:"Новое лидерство",link:"#"},{title:"Обучение",link:"./training.html"},{title:"Программы",link:"#"}]).createMenu()})();