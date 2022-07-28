const hambugerMenu = document.querySelector('.hambuger_icon')
const closeMenu = document.querySelector('.close_menu')
const mobileMenu = document.querySelector('.mobile_col')

hambugerMenu.addEventListener('click', ()=>{
    mobileMenu.classList.add('show_menu')
})

closeMenu.addEventListener('click', () =>{
    mobileMenu.classList.remove('show_menu')
})