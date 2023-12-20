const input = document.querySelector('#guess');
const btn = document.querySelector('#btn');
const answer = Math.floor(Math.random() * 20) + 1;
console.log(answer)

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        play()
    }
})

btn.addEventListener('click', play);

function play() {
    const userNumber = document.querySelector('#guess').value;
    // console.log(userNumber)
    if (userNumber < 1 || userNumber > 20) {
        // alert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 1 to 20!',
        });
    } else if (isNaN(userNumber)) {
        // alert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number!',
        });
    } else {
        if (userNumber < answer) {
            Swal.fire('Enter a larger number!', 'Computer is winning so far!')
        }
        else if (userNumber > answer) {
            Swal.fire('Enter a smaller  number!', 'Computer is winning so far!')
        }
        else {
            Swal.fire({
                title: 'Victory!!!',
                imageUrl: 'victory.jpg',
                imageWidth: 300,
                imageHeight: 400,
                imageAlt: 'victory',
            })
        }
    }
}
