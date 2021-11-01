const API_KEY = 'fe0d397e19456f05f6bf4b38d9ef121b';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies(currentPage = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${currentPage}`,
  );
}

export function fetchSearchMovies(query, currentPage = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${currentPage}&include_adult=false`,
  );
}

export function fetchDetailsMovie(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?&api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchCastMovie(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchReviewsMovie(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
