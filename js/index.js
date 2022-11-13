const mobileMenuButton = document.querySelector('.mobile-menu-icon')
const mobileNavContent = document.querySelector('.mobile-nav-content')
const mobileMenuClose = document.querySelector('.mobile-menu-close')

mobileMenuButton.addEventListener('click', () => {
    mobileNavContent.style.display = "flex"
    document.body.style.overflow = "hidden"
})

mobileMenuClose.addEventListener('click', () => {
    mobileNavContent.style.display = "none"
    document.body.style.overflow = "unset"
})