const body = document.querySelector("body")
const disto = document.querySelector(".distortion")
const intro = document.querySelector(".intro")

body.style.background = "linear-gradient(60deg, white, blue)"
intro.style.color = "black"

new hoverEffect({
    parent: document.querySelector(".distortion"),
    intensity: 0.9,
    image1: './img/img3.png',
    image2: './img/img4.png',    
    displacementImage: './img/li2.png'
});


disto.addEventListener('mouseover', () => {
    body.style.background = "linear-gradient(60deg, black, red)"
    intro.style.color = "white"
})
disto.addEventListener('mouseout', () => {
    body.style.background = "linear-gradient(60deg, white, blue)"
    intro.style.color = "black"
})

