document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.header__hamburger');
  const menu = document.querySelector('#mainNav');

  if (hamburger && menu) {
    console.log('Elements found:', hamburger, menu);

    hamburger.addEventListener('click', () => {
      console.log('Hamburger clicked');
      menu.classList.toggle('active');
    });
  } else {
    console.error('Elements not found');
  }
});