const btnMobile = document.querySelector('.btn-mobile')

function toggleMenu(event) {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }
  const navbar = document.querySelector('.navbar-container')
  navbar.classList.toggle('active')
  const active = navbar.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
