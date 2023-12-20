const searchInput = document.querySelector('#search')
const divs = document.querySelectorAll('.cake')

searchInput.addEventListener('keyup', function (event) {
    const word = event.target.value.toLowerCase()

    divs.forEach(item => {
        // let message = document.querySelector(".message").textContent = 'Not found... Please, try again'
        item.querySelector('p').textContent.toLowerCase().includes(word) ?
            item.style.display = 'block' :
            item.style.display = 'none'
    })

})