/*const baseUrl = 'http://localhost:3000/films';

// Fetch and display movie details
function displayMovie(movie) {
  document.getElementById('poster').src = movie.poster;
  document.getElementById('title').textContent = movie.title;
  document.getElementById('runtime').textContent = movie.runtime;
  document.getElementById('showtime').textContent = movie.showtime;

  const availableTickets = movie.capacity - movie.tickets_sold;
  document.getElementById('available-tickets').textContent = availableTickets;

  // Update "Buy Ticket" button
  const buyButton = document.getElementById('buy-ticket');
  buyButton.disabled = availableTickets <= 0;

  // Attach event listener to the button
  buyButton.onclick = () => {
    if (availableTickets > 0) {
      movie.tickets_sold++;
      displayMovie(movie);
    } else {
      showSoldOutMessage();  // Show an error message if tickets are sold out
    }
  };
}

// Show an error message when tickets are sold out
function showSoldOutMessage() {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Sorry, tickets are sold out for this movie.';
  errorMessage.style.color = 'red';
  errorMessage.style.fontSize = '1.2em';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.marginTop = '20px';
  
  // Add the error message to the movie details section
  const movieDetails = document.getElementById('movie-details');
  movieDetails.appendChild(errorMessage);

  // Optional: Automatically remove the error message after 3 seconds
  setTimeout(() => {
    errorMessage.remove();
  }, 3000);
}

// Fetch and display the list of movies
function populateMovieList(movies) {
  const filmList = document.getElementById('films');
  filmList.innerHTML = ''; // Clear existing list

  movies.forEach(movie => {
    const listItem = document.createElement('li');
    listItem.textContent = movie.title;
    listItem.className = 'film item';

    listItem.onclick = () => displayMovie(movie);
    filmList.appendChild(listItem);
  });
}

// Fetch movies from the server
async function fetchMovies() {
  try {
    const response = await fetch(baseUrl);
    const movies = await response.json();

    if (movies.length > 0) {
      displayMovie(movies[0]); // Show first movie by default
    }

    populateMovieList(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Initialize the app
fetchMovies();*/
const baseUrl = 'http://localhost:3000/films';

// Fetch and display movie details
function displayMovie(movie) {
  document.getElementById('poster').src = movie.poster;
  document.getElementById('title').textContent = movie.title;
  document.getElementById('runtime').textContent = movie.runtime;
  document.getElementById('showtime').textContent = movie.showtime;

  const availableTickets = movie.capacity - movie.tickets_sold;
  document.getElementById('available-tickets').textContent = availableTickets;

  // Update "Buy Ticket" button
  const buyButton = document.getElementById('buy-ticket');
  buyButton.disabled = availableTickets <= 0;

  // Attach event listener to the button
  buyButton.onclick = () => {
    if (availableTickets > 0) {
      movie.tickets_sold++;
      displayMovie(movie);
    } else {
      showSoldOutMessage();  // Show an error message if tickets are sold out
    }
  };

  // Clear any previous error message (if present)
  const errorMessage = document.getElementById('sold-out-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}

// Show an error message when tickets are sold out
function showSoldOutMessage() {
  const errorMessage = document.createElement('p');
  errorMessage.id = 'sold-out-message';
  errorMessage.textContent = 'Sorry, tickets are sold out for this movie.';
  errorMessage.style.color = 'red';
  errorMessage.style.fontSize = '1.2em';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.marginTop = '20px';
  
  // Add the error message to the movie details section
  const movieDetails = document.getElementById('movie-details');
  movieDetails.appendChild(errorMessage);

  // Optional: Automatically remove the error message after 3 seconds
  setTimeout(() => {
    errorMessage.remove();
  }, 3000);
}

// Fetch and display the list of movies
function populateMovieList(movies) {
  const filmList = document.getElementById('films');
  filmList.innerHTML = ''; // Clear existing list

  movies.forEach(movie => {
    const listItem = document.createElement('li');
    listItem.textContent = movie.title;
    listItem.className = 'film item';

    listItem.onclick = () => displayMovie(movie);
    filmList.appendChild(listItem);
  });
}

// Fetch movies from the server
async function fetchMovies() {
  try {
    const response = await fetch(baseUrl);
    const movies = await response.json();

    if (movies.length > 0) {
      displayMovie(movies[0]); // Show first movie by default
    }

    populateMovieList(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Initialize the app
fetchMovies();

