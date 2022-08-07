const btnMobile = document.getElementsByClassName('btn-mobile')

function toggleMenu() {
  const nav = document.getElementsByClassName('navbar-container')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
