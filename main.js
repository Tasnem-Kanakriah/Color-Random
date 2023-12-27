let button = document.querySelector("button")
let body = document.querySelector("body")
let interval = null
button.addEventListener("click", () => {
    if (interval) {
        return
    }
    setInterval(() => {
        button.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
        interval = body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    }, 4000)
})