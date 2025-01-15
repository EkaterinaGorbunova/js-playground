
let inp = document.querySelector('input');
const myMovieList = document.querySelector('ul');
const movieHistoryCard = document.getElementById('movieHistoryCard');
const searchInput = document.querySelector('#filter');
const myMovies = {};

function renderMovieList() {
  myMovieList.innerHTML = Object.keys(myMovies)
    .map((value) => `<li class='item'>${value}</li>`)
    .join('');
}

function renderMovieTable() {
  const existingTable = document.getElementById('movieHistoryTable');
  existingTable && existingTable.remove();

  const table = document.createElement('table');
  table.id = 'movieHistoryTable';
  table.className = 'table';

  table.innerHTML = `
      <thead>
        <tr>
          <th>Movies</th>
          <th>Watched</th>
        </tr>
      </thead>
      <tbody>
        ${Object.keys(myMovies)
          .map(
            (key) => `
          <tr>
            <td>${key}</td>
            <td>${myMovies[key]}</td>
          </tr>
          `
          )
          .join('')}
      </tbody>
    `;

  movieHistoryCard.appendChild(table);
}

searchInput.addEventListener('keyup', function (event) {
  const word = event.target.value.toLowerCase();

  const lis = myMovieList.querySelectorAll('li.item');

  lis.forEach((movie) => {
    movie.textContent.toLowerCase().includes(word)
      ? (movie.style.display = 'block')
      : (movie.style.display = 'none');
  });
});

function clearInput() {
  inp.value = '';
}

function clearMovies() {
  myMovieList.innerHTML = '';

  for (const key in myMovies) {
    delete myMovies[key];
  }

  const existingTable = document.getElementById('movieHistoryTable');
  existingTable && existingTable.remove();
}

function addMovie() {
  const userTypedText = inp.value.trim().toLowerCase();

  if (!userTypedText) {
    alert('Enter your movie name.');
    return;
  }

  !(userTypedText in myMovies)
    ? (myMovies[userTypedText] = 1)
    : myMovies[userTypedText]++;

  renderMovieList(myMovies);

  renderMovieTable(myMovies);

  // addToLocalStorageDatabase(myMovies);

  clearInput();
}

inp.addEventListener('keyup', (event) => event.key === 'Enter' && addMovie());
