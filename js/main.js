// mostrar menu
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')
// ativa e remove o menu mobile
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    // ativar o link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    const navMenu = document.getElementById('nav-menu')
    // remover o menu mobile
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/* scroll reveal animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
  })
//   scroll home
  sr.reveal('.home__title',{})
  sr.reveal('.button',{delay: 200})
  sr.reveal('.home__img',{delay: 400})
  sr.reveal('.home__social-icon',{interval:200})

//   scroll about
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

//   scroll skills
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.img',{interval: 400})

//   scroll projects
sr.reveal('.work__img',{interval: 200})

//   scroll contact
sr.reveal('.links',{interval: 200})
