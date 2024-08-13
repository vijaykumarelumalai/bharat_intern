// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = 'YOUR_API_KEY';
const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const movieRow = document.getElementById('movie-row');

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');

            const moviePoster = document.createElement('img');
            moviePoster.src = `${IMAGE_URL}${movie.poster_path}`;
            moviePoster.alt = movie.title;

            movieItem.appendChild(moviePoster);
            movieRow.appendChild(movieItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
