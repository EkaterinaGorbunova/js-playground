const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = inputField.value.trim(); // .trim() method removes whitespace from both ends

    if (inputField.value.length === 0) {
        return alert('Oops! Type your To Do and retry.');
    }

    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item);
    inputField.value = ''; // clear input after adding ToDo

    item.addEventListener('click', () => {
        item.classList.toggle('toDoCompleted'); // .toggle() method switches between adding and removing a class name
    });

    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item);
    });
});
