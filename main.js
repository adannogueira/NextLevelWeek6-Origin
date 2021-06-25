// Funções
function changeHeaderOnScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
  header.classList.remove('scroll')
  }
}

function toggleBackToTopButton() {
  const button = document.querySelector('.back-to-top')
  if(window.scrollY >= 560) {
    button.classList.add('show')
  } else {
    button.classList.remove('show')
  }
}

// Controle do menu hamburguer
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

// Controle do menu pelos links
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

// Mudar sombreamento do header com scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight



// Testimonials com carrossel
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

// Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
  #home .image,
  #home .text,
  #about .image,
  #about .text,
  #services header,
  #services .card,
  #testimonials header,
  #testimonials .testimonials,
  #contact .text,
  #contact .links,
  footer .branding,
  footer .social
`, { interval: 100 })

// Manter Menu de seção ativo
const sections = document.querySelectorAll('main section[id]')
function menuActivCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*= ' + sectionId + ']')
        .classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*= ' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// Window Scroll Listener
window.addEventListener('scroll', function() {
  toggleBackToTopButton()
  changeHeaderOnScroll()
  menuActivCurrentSection()
})


