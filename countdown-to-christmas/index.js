function christmasCountDown() {
    // Get the current year
    const currentYear = new Date().getFullYear();

    const christmasDate = new Date(`December 25, ${currentYear} 00:00`)
    const now = new Date()
    // console.log(christmasDate, now)
    const diff = christmasDate - now
    // console.log(diff) // like - 3630718589

    // https://www.calculateme.com/time/milliseconds/to-seconds/ 
    const msInSecond = 1000 // milliseconds per second - 1 000
    const msInMinute = 60 * 1000 // milliseconds per minute - 60 000
    const msInHour = 60 * 60 * 1000 // milliseconds per hour - 3 600 000
    const msInDay = 24 * 60 * 60 * 1000 // milliseconds per day - 86 400 000

    const displayDay = Math.floor(diff / msInDay)
    document.querySelector(".days").textContent = displayDay
    // console.log("Days:", displayDay)

    const displayHour = Math.floor((diff % msInDay) / msInHour)
    document.querySelector(".hours").textContent = displayHour
    // console.log("Hours", displayHour)

    const displayMinute = Math.floor((diff % msInHour) / msInMinute)
    document.querySelector(".minutes").textContent = displayMinute
    // console.log("Minutes:", displayMinute)

    const displaySecond = Math.floor((diff % msInMinute) / msInSecond)
    document.querySelector(".seconds").textContent = displaySecond
    // console.log("Seconds:", displaySecond)

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0
        document.querySelector(".hours").textContent = 0
        document.querySelector(".minutes").textContent = 0
        document.querySelector(".seconds").textContent = 0
        // https://www.w3schools.com/jsref/met_win_clearinterval.asp
        clearInterval(timerID)
        // console.log(timerID)
        merryChristmas()
    }
}
let timerID = setInterval(christmasCountDown, 1000)

function merryChristmas() {
    const heading = document.querySelector('h1')
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!"
    heading.classList.add("red")
    console.log('HI!3')
}

const playBtn = document.querySelector('#playBtn')
const song = document.querySelector('#song');
playBtn.addEventListener('click', function () {
    if (song.paused) {
        song.play();
        playBtn.classList.toggle("pause")
    }
    else {
        song.pause();
        playBtn.classList.toggle("pause")

    }
})

/* ---- particles.js ---- */
// https://github.com/VincentGarreau/particles.js/
particlesJS("particles-js", {
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
                value_area: 631.3280775270874
            }
        },
        color: {
            value: "#fff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 3,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 0.5
                }
            },
            bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

