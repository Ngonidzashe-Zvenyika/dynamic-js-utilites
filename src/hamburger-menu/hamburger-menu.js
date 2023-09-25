function setHamburgerMenus() {
  const hamburgerMenus = document.querySelectorAll('.hamburger-menu');

  hamburgerMenus.forEach((menu) => {
    const openMenu = menu.querySelector('.open');
    const closeMenu = menu.querySelector('.close');
    const options = menu.querySelector('.options');

    openMenu.addEventListener('click', () => {
      openMenu.classList.toggle('active');
      closeMenu.classList.toggle('active');
      options.classList.toggle('active');
    });
    closeMenu.addEventListener('click', () => {
      openMenu.classList.toggle('active');
      closeMenu.classList.toggle('active');
      options.classList.toggle('active');
    });
    options.addEventListener('click', () => {
      openMenu.classList.toggle('active');
      closeMenu.classList.toggle('active');
      options.classList.toggle('active');
    });
  });
}

module.exports = setHamburgerMenus;
