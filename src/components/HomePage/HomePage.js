import { useState } from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=fe0d397e19456f05f6bf4b38d9ef121b&language=en&page=1&include_adult=false',
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(response => setMovies(response.results))
    .catch(error => console.warn(error));

  return (
    <>
      <h1>Popular movies</h1>
      <ul>
        {movies.map(movie => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </>
  );
}
