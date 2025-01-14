// Add DOM selectors to target input and UL movie list
let inp = document.querySelector('input');
const myMovieList = document.querySelector('ul');
const movieHistory = {}; // Object to track movies and their watch counts
const movieHistoryCard = document.getElementById('movieHistoryCard');

// Add movie to the displayed list
function addToMovieList(userTypedText) {
  // Check if the movie is already in the displayed list
  let movieAlreadyExists = false;

  for (let i = 0; i < myMovieList.children.length; i++) {
    if (myMovieList.children[i].textContent === userTypedText) {
      movieAlreadyExists = true;
      break;
    }
  }

  // Add the movie if it doesn't exist
  if (!movieAlreadyExists) {
    const li = document.createElement('li');
    li.textContent = userTypedText; // Set text content directly
    myMovieList.appendChild(li); // Add the new list item to the movie list
  }
}

// Update the movie history (increment count or add new movie)
function updateMovieHistory(userTypedText) {
  // Update the history count
  movieHistory[userTypedText] ? movieHistory[userTypedText]++ : movieHistory[userTypedText] = 1;

  // Update the Movie History table
  addToMovieTable(movieHistory);
}

// Add or update the movie history table
function addToMovieTable(movieHistory) {
  // Remove any existing table
  const existingTable = document.getElementById('movieHistoryTable');
  existingTable && existingTable.remove();

  // Create a new table
  const table = document.createElement('table');
  table.id = 'movieHistoryTable';
  table.className = 'table';

  table.innerHTML = `
    <thead>
      <tr>
        <th>Movie Name</th>
        <th>Watch Count</th>
      </tr>
    </thead>
    <tbody>
      ${Object.entries(movieHistory).map(
        ([movie, count]) => `
          <tr>
            <td>${movie}</td>
            <td>${count}</td>
          </tr>
        `
      ).join('')}
    </tbody>
  `;

  // Append the table to the Movie History Card
  movieHistoryCard.appendChild(table);
}

// Function to clear input
function clearInput() {
  inp.value = '';
}

// Function to clear the movie list and history
function clearMovies() {
  // Clear the movie list <ul>
  myMovieList.innerHTML = '';

  // Clear all keys in the movie history object
  for (const key in movieHistory) {
    delete movieHistory[key];
  }

  // Remove the movie history table
  const existingTable = document.getElementById('movieHistoryTable');
  if (existingTable) existingTable.remove();
}

// Add a movie to the list and the history
function addMovie() {
  const userTypedText = inp.value.trim().toLowerCase(); // Get value of input and trim whitespace and make it to lowrcase
  if (!userTypedText) {
    alert('Enter your movie name.'); // Prevent adding empty movies
    return; // Stop function execution
  }

  // Add to the movie list
  addToMovieList(userTypedText);

  // Update the movie history and table
  updateMovieHistory(userTypedText);

  // Clear the input field
  clearInput();
}
