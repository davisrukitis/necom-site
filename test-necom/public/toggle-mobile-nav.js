const mobileNavOpenBtn = document.querySelector(".hamburger-menu")
const mobileNav = document.querySelector(".mobile-nav")
const mobileNavCloseBtn = document.querySelector (".mobile-nav .close")
const overlayAll = document.querySelector(".overlay-all")

mobileNavCloseBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-visible")    
    overlayAll.classList.toggle("overlay-all-active")
})

mobileNavOpenBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-visible")
    overlayAll.classList.toggle("overlay-all-active")
})

overlayAll.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-visible")
    overlayAll.classList.toggle("overlay-all-active")
})