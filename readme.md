## Movie Tickets App
This is a simple movie ticket booking application that allows users to view movies currently showing, along with their details such as runtime, available tickets, and showtime. Users can select a movie and buy tickets if available.

## Features
Movie List: Displays a list of movies available for booking.
Movie Details: Shows detailed information about a selected movie, including its runtime, available tickets, and showtime.
Buy Ticket: Users can click the "Buy Ticket" button to purchase a ticket for the movie, which decreases the available ticket count. If tickets are sold out, an error message is displayed.
Sold-Out Message: If there are no available tickets, a message appears to inform the user that tickets are sold out.
Responsive Design: The application is designed to work well on various screen sizes, ensuring a user-friendly experience on both desktop and mobile devices.

## Structure
The project consists of the following files:

index.html: The main HTML file containing the structure of the movie ticket booking system.
style.css: Contains the styling for the webpage, making it responsive and user-friendly.
index.js: JavaScript file responsible for fetching movie data, updating the movie details, and handling the ticket buying logic.

## HTML Structure
The HTML file defines:

The main heading (Now Showing).
A section to display movie details (#movie-details) which includes an image of the movie poster, title, runtime, showtime, and available tickets.
A list of movies (#films) displayed as clickable items that fetch and display movie details when clicked.
A Buy Ticket button that allows users to buy a ticket.

## CSS Styling
The style.css file defines the visual style of the webpage:

A clean, modern look with a neutral color scheme for readability.
Flexbox layout for the movie list, ensuring movies are displayed in a grid-like structure.
Hover effects for clickable elements like the movie list items.
Styles for the movie details section, including image scaling and spacing.

## JavaScript Functionality
The index.js file is responsible for:

Fetching movie data: The application fetches movie data from a local server at http://localhost:3000/films.
Displaying movie details: When a user clicks on a movie in the list, the details (poster, title, runtime, showtime, available tickets) are shown in the movie details section.
Buying tickets: When the user clicks the "Buy Ticket" button, it updates the available tickets count and displays the updated movie details. If tickets are sold out, a red error message is shown for a short time.
Handling errors: If there is an issue fetching the movie data, an error message will be logged to the console.

## Troubleshooting
Movies not displaying: Ensure that your local server at http://localhost:3000/films is running and that the movie data is available in the correct format.
Button not working: Make sure the browser supports JavaScript, and check the developer console for errors.

## Contributions
Feel free to fork the project and submit a pull request if you have suggestions for improvements or fixes.

