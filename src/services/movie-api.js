const BASE_URL = 'https://developers.themoviedb.org/3';
async function fetchMovies(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies() {
  return fetchMovies(`${BASE_URL}/trending/get-trending`);
}
export function fetchMoviesByQuery() {
  return fetchMovies(`${BASE_URL}/search/search-movies`);
}
export function fetchMovieDetails() {
  return fetchMovies(`${BASE_URL}/movies/get-movie-details`);
}
export function fetchMovieCast() {
  return fetchMovies(`${BASE_URL}/movies/get-movie-credits`);
}
export function fetchMovieReviews() {
  return fetchMovies(`${BASE_URL}/get-movie-reviews`);
}
