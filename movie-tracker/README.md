# Movie Tracker App



The Movie Tracker App allows users to add movies they watch to a dynamic list and track the number of times each movie is watched. The app prevents duplicates in both the movie list and the movie history table.

### Challenges Solved
1. Dynamic HTML Table for Movie History
Dynamically generating an HTML table for the movie history was implemented using JavaScript. This allows the history table to update every time a new movie is added, providing real-time feedback on how many times each movie has been added.

2. Adding Movies Without Duplicates
The app prevents duplicate movie entries by normalizing movie names to lowercase before adding them to the list and history. This means that "Harry Potter" and "hArry PotteR" are treated as the same movie. They won’t show up twice in the movie history, but the count will increase with each addition.

3. Efficient Data Management with Objects
The app utilizes a JavaScript object (movieHistory) to track the movie history and the count of each movie. This object ensures that the list and the movie history are accurately updated whenever a movie is added, without needing to directly manipulate the DOM.

4. Filter Functionality
Users will be able to filter the movies based on movie name. As users type into the search bar, the list dynamically updates to show only the movies that match the input. The filtering system is case-insensitive, ensuring that searches like “hArry potter” will correctly display entries for “Harry Potter.

### Future features
1. Local Storage Integration
- Implement local storage to save the movie list and movie history so that even if the user closes or refreshes the page, their movie data will persist.