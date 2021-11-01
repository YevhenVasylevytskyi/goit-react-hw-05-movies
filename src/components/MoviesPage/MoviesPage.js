import React from 'react';
import { useState, useEffect } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import Searchbar from '../Searchbar';
import MovieList from '../MovieList';
import * as MovieApiServise from '../../servises/MovieApiServise';
import notFound from '../../images/NotFound.png';
// import { toast } from 'react-toastify';
// import style from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('query');

    if (searchQuery === null) {
      return;
    }

    setQuery(searchQuery);
  }, [location.search]);

  useEffect(() => {
    if (!query) {
      return;
    }

    MovieApiServise.fetchSearchMovies(query).then(response =>
      setMovies(response.results),
    );
  }, [query]);

  const handleSubmit = value => {
    setQuery(value);
    history.push({ ...location, search: `query=${value}` });
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />

      {movies &&
        (movies.length ? (
          <MovieList location={location} movies={movies} url={url} />
        ) : (
          <img src={notFound} alt="Not Found" />
        ))}
    </>
  );
}
