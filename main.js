// change navbar styles on scroll
 window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 50)
 })

 // show/hide faq answer
const answer = document.querySelectorAll('.faq')


answer.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open')

    // change icon
    const icon = faq.querySelector('.faq__icon i')
    if(icon.className === 'uil uil-plus') {
      icon.className = "uil uil-minus"
    } else {
      icon.className = "uil uil-plus" 
    }
  })
})

// show/hide nav menu
const menu = document.querySelector('.nav__menu')
const openMenuBtn = document.querySelector('#open-menu-btn')
const closeMenuBtn = document.querySelector('#close-menu-btn')

openMenuBtn.addEventListener('click', () => {
  menu.style = 'display: flex'
  openMenuBtn.style = 'display: none'
  closeMenuBtn.style = 'display: inline-block'
})

closeMenuBtn.addEventListener('click', () => {
  menu.style.display = 'none'
  closeMenuBtn.style.display = 'none'
  openMenuBtn.style.display = 'inline-block'
})

// different ways

// const closeNav = () => {
//   menu.style.display = 'none'
//   closeMenuBtn.style.display = 'none'
//   openMenuBtn.style.display = 'inline-block'
// }

// closeMenuBtn.onclick = () => closeNav()
// closeMenuBtn.addEventListener('click', closeNav)