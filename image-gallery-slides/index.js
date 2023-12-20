const back = document.querySelector('#back')
const next = document.querySelector('#next')

const photos = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp']

let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > photos.length - 1) {
        i = 0
    }
    document.querySelector('#pictures').src = photos[i]
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos.length - 1
    }
    document.querySelector('#pictures').src = photos[i]
})