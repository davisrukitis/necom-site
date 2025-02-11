// assegnamo a delle variabili (array) tutti i bottoni
const btnsLeft = document.querySelectorAll(".carousel .button-left")
const btnsRight = document.querySelectorAll(".carousel .button-right")

const galleries = document.querySelectorAll(".carousel .right-items .gallery")

galleries.forEach(gallery => {
    const galleryContainer = gallery.parentElement
    const lBtn = galleryContainer.querySelector(".button-left")
    const rBtn = galleryContainer.querySelector(".button-right")

    // estrapoliamo la larghezza delle card
    const card = gallery.querySelector(".card")
    const cardStyle = window.getComputedStyle(card)
    const cardWidth = parseInt(cardStyle.getPropertyValue("width"))

    lBtn.addEventListener("click", () => {
        gallery.scrollLeft -= cardWidth
    })

    rBtn.addEventListener("click", () => {
        gallery.scrollLeft += cardWidth
    })

    gallery.addEventListener("scrollend", () => {
        const isAtStart = gallery.scrollLeft === 0
        const isAtEnd = gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth - 10
        if (isAtStart) {
            lBtn.classList.add("hidden")
            rBtn.classList.remove("hidden")
        } else if (isAtEnd) {
            rBtn.classList.add("hidden")
            lBtn.classList.remove("hidden")
        } else {
            lBtn.classList.remove("hidden")
            rBtn.classList.remove("hidden")
        }
    })
})
