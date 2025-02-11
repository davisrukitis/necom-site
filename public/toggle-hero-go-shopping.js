const heroGSFooter = document.querySelector(".hero-section .go-shopping footer")
const heroGSCenterItems = document.querySelector(".hero-section .go-shopping .center-items")
const heroGSFooterIco = document.querySelector(".hero-section .go-shopping footer .ico")

heroGSFooter.addEventListener("click", () => {
    heroGSCenterItems.classList.toggle("center-items-hidden")
    heroGSFooter.classList.toggle("while-selector-visible")
    heroGSFooterIco.classList.toggle("spin")
})