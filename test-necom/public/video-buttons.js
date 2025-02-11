const videoBtns = document.querySelectorAll(".video-btn")

videoBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const parent = btn.parentElement
        const video = parent.querySelector("video")
        if (video.paused) {
            video.play()
            btn.innerHTML = "pause"
        } else {
            video.pause()
            btn.innerHTML = "play_arrow"
        }
    })
})
