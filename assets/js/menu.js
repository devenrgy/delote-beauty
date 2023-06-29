'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const btnOpenMenu = document.querySelector('#menu-open')
  const menu = document.querySelector('#menu')
  const btnCloseMenu = document.querySelector('#menu-close')

  ;[btnOpenMenu, btnCloseMenu].forEach(btn => btn.addEventListener('click', toggleMenu))

  function toggleMenu(evt) {
    menu.classList.contains('menu--hide') ? menu.classList.remove('menu--hide') : menu.classList.add('menu--hide')
  }
})