const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);

const buttonTip = document.querySelector('#addTip')
buttonTip.addEventListener('click', showTip)

function showTip(e) {
    // prevent reload the page
    e.preventDefault();
    tip.style.display = 'block';
}

function calculateAmount(e) {
    // prevent reload the page
    e.preventDefault();
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;

    if (bill === '' || people === '' || people < 1) {
        // https://sweetalert2.github.io/#download
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, enter your information!'
        });
    }

    // bill amount per person
    let amountPerPerson = bill / people;

    // tip amount per person
    let tipPerPerson = (bill * tip) / people;

    // bill + tip
    let totalSum = amountPerPerson + tipPerPerson;

    document.querySelector('#dividedBill').textContent =
        amountPerPerson.toFixed(2);
    document.querySelector('#dividedTip').textContent = tipPerPerson.toFixed(2);
    document.querySelector('#billAndTip').textContent = totalSum.toFixed(2);
}
