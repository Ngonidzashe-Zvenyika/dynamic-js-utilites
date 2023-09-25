function setDropdownMenus() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector('.button');
    const buttonDisplay = dropdown.querySelector('.button-display');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');

    button.addEventListener('click', () => {
      button.classList.toggle('active');
      caret.classList.toggle('active');
      menu.classList.toggle('active');
      const activeButtons = document.querySelectorAll(
        '.dropdown > .button.active',
      );
      activeButtons.forEach((activeButton) => {
        if (activeButton !== button) activeButton.classList.remove('active');
      });
      const activeCarets = document.querySelectorAll(
        '.dropdown > .caret.active',
      );
      activeCarets.forEach((activeCaret) => {
        if (activeCaret !== caret) activeCaret.classList.remove('active');
      });
      const activeMenus = document.querySelectorAll('.dropdown > .menu.active');
      activeMenus.forEach((activeMenu) => {
        if (activeMenu !== menu) activeMenu.classList.remove('active');
      });
    });

    options.forEach((option) => {
      option.addEventListener('click', () => {
        buttonDisplay.innerText = option.innerText;
        button.classList.remove('active');
        caret.classList.remove('active');
        menu.classList.remove('active');
        options.forEach((option) => option.classList.remove('active'));
        option.classList.add('active');
      });
    });
  });
}

exports.setDropdownMenus = setDropdownMenus;
