const navBar = document.querySelector(".navbar")
const goShpButton = document.querySelector(".navbar .go-shopping")
const bottomItems = document.querySelector(".navbar .go-shopping .bottom-items")
const rightItem = document.querySelector(".navbar .go-shopping .right-items")
const showMore = document.querySelector(".navbar .go-shopping .left-items span")

let lastScrollPosition = 0

goShpButton.addEventListener("click", () => {
    bottomItems.classList.toggle("bottom-items-hidden")
    rightItem.classList.toggle("no-border")
    showMore.classList.toggle("spin")
})

setTimeout(() => {
    document.addEventListener("scroll", () => {
        let currentScrollPosition = window.scrollY
        if (currentScrollPosition >= 240 && currentScrollPosition > lastScrollPosition) {
            navBar.classList.add("navbar-hidden")
            goShpButton.classList.add("go-shopping-visible")
        } else if (currentScrollPosition >= 240 && currentScrollPosition < lastScrollPosition) {
            navBar.classList.remove("navbar-hidden")
        } else if (currentScrollPosition <= 240 && currentScrollPosition < lastScrollPosition) {
            goShpButton.classList.remove("go-shopping-visible")
            navBar.classList.remove("navbar-hidden")
        }
        lastScrollPosition = currentScrollPosition
    })
}, 50)
