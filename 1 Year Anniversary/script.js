const startBtn = document.getElementById("startBtn")
const story = document.getElementById("story")
const loveBtn = document.getElementById("loveBtn")
const secretMessage = document.getElementById("secretMessage")

startBtn.onclick = () => {

    story.classList.remove("hidden")
    startBtn.style.display = "none"
    document.querySelector(".subtitle").style.display = "none"

    // Play music after user clicks
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {
        console.log("Autoplay blocked, waiting for interaction.");
    });

    story.scrollIntoView({ behavior: "smooth" });

}

// flip photo cards

document.querySelectorAll(".photo-card").forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped")

    })

})

// surprise messages

const surprises = [
    "You are the best thing that has ever happened to me ❤️",
    "I still get excited every time I see you",
    "You make my life better in every way",
    "I love your smile more than anything",
    "I would choose you in every lifetime",
    "You are my safe place",
    "You make my world brighter",
    "I fall more in love with you every day",
    "You are my favourite person",
    "Forever wouldn't be long enough with you ❤️"
]

let surpriseIndex = 0

loveBtn.onclick = () => {

    if (surpriseIndex < surprises.length) {

        secretMessage.classList.remove("hidden")
        secretMessage.innerText = surprises[surpriseIndex]

        surpriseIndex++

    } else {

        secretMessage.innerText = "I will always love you ❤️"

    }

}

// relationship timer

const startDate = new Date("March 17, 2025")

function updateCounter() {

    const now = new Date()

    const diff = now - startDate

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(diff / (1000 * 60) % 60)

    document.getElementById("timeTogether").innerHTML =
        days + " days " + hours + " hours " + minutes + " minutes"

}

setInterval(updateCounter, 1000)

updateCounter()

// floating hearts

function createHeart() {

    const heart = document.createElement("div")
    heart.classList.add("heart")
    heart.innerHTML = "❤️"

    heart.style.left = Math.random() * 100 + "%"
    heart.style.fontSize = (Math.random() * 20 + 10) + "px"

    document.querySelector(".hearts").appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, 6000)

}

setInterval(createHeart, 300)