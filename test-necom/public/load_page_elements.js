// fetch('navbar.html')
//     .then(response => response.text())
//     .then(navbar => {
//         fetch('footer.html')
//             .then(response => response.text())
//             .then(footer => {
//                 document.body.innerHTML = navbar+footer;
//             })
//     });
const deskNavTag = document.getElementById('navbar')
const mobNavTag = document.getElementById("mobile-navbar")
const footTag = document.getElementById("body-footer")
const headTag = document.head
const bodyTag = document.body

bodyTag.setAttribute("style", "display: none")

async function loadElements() {
    try {
        const res1 = await fetch("head.html")
        const res2 = await fetch("pages/nav.html")
        const res3 = await fetch("mobile-nav.html")
        const res4 = await fetch("pages/footer.html")

        const headData = await res1.text()
        const deskNavData = await res2.text()
        const mobNavData = await res3.text()
        const footData = await res4.text()

        deskNavTag.innerHTML = deskNavData
        mobNavTag.innerHTML = mobNavData
        footTag.innerHTML = footData
        headTag.innerHTML += headData

        // Carica gli script dopo che tutti gli altri elementi sono stati inseriti nel DOM
        await loadScripts()
    } catch (error) {
        console.log(error.message)
    }
}

// Funzione per caricare gli script
function loadScripts() {
    return Promise.all([
        fetchScript("js/navbar-animations-jobs.js"),
        fetchScript("js/navbar-animations.js"),
        fetchScript("js/toggle-mobile-nav.js"),
        fetchScript("js/toggle-mobile-nav-go-shopping.js"),
        fetchScript("js/footer.js"),
        fetchScript("js/toggle-hero-go-shopping"),
        fetchScript("js/carousel-buttons.js"),
        fetchScript("js/clock.js"),
        fetchScript("js/sliding-boxes.js"),
    ])
}

