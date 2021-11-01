import { useState, useEffect } from 'react';
import * as MovieApiServise from '../../servises/MovieApiServise';
import MovieList from '../../components/MovieList';
// import style from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieApiServise.fetchPopularMovies().then(response =>
      setMovies(response.results),
    );
  }, []);
  // console.log(movies);

  return (
    <>
      <h2>Populars today</h2>

      {movies && <MovieList movies={movies} url={'/movies'} />}
    </>
  );
}
