const links = document.querySelectorAll('.header__nav__link')
const btnMenu = document.querySelector('.icon-menu')
const menuResponsive = document.querySelector('.header__nav')

// SELECTION LINK MENU

links.forEach((link)=>{
    link.addEventListener('click', ()=>{
        removeLinkActive(links)
        link.classList.add('header__nav__link--active')
        
    })
})

// SHOW MENU RESPONSIVE

btnMenu.addEventListener('click', ()=> menuResponsive.classList.toggle('header__nav--active'))

// FUNCTIONS

function removeLinkActive(links){
    links.forEach((link)=>{
        link.classList.remove('header__nav__link--active')
    })
}