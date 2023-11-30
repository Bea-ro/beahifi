export const showMenu = () => {
  const mobileMenu = document.querySelector('#mobile-menu')
  const navbar = document.querySelector('nav')
  navbar.classList.toggle('show')
  navbar.id === 'desktop-navbar'
    ? (navbar.id = 'mobile-navbar')
    : (navbar.id = 'desktop-navbar')
  mobileMenu.innerHTML === 'X'
    ? (mobileMenu.innerHTML = '\u2630')
    : (mobileMenu.innerHTML = 'X')
  document.querySelector('.location-phone').classList.toggle('hide')
  document.querySelector('.contact-cta').classList.toggle('hide')
}

export const navbarToggle = () => {
  const mobileMenu = document.querySelector('#mobile-menu')
  mobileMenu.addEventListener('click', showMenu)
}
