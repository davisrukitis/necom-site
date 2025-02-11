const navGSFooter = document.querySelector(".mobile-nav .go-shopping footer")
const navGSCenterItems = document.querySelector(".mobile-nav .go-shopping .center-items")
const footerIcon = document.querySelector(".mobile-nav .go-shopping footer .ico")

navGSFooter.addEventListener("click", () => {
    navGSCenterItems.classList.toggle("center-items-hidden")
    navGSFooter.classList.toggle("while-selector-visible")
    footerIcon.classList.toggle("spin")
})