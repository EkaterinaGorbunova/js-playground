const items = document.querySelectorAll('.item')
console.log(items)

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        console.log('mouseover event on item!')
        removeFocus() // remove class 'selected'
        item.classList.add('selected') // add class 'selected'
    })

    const removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected')
        })
    }
})