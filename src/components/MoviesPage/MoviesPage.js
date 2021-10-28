import React from 'react';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
// import style from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearchInput = event => {
    setQuery(event.currentTarget.value.trim().toLocaleLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Введите название картинки');
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=fe0d397e19456f05f6bf4b38d9ef121b&query=${query}&include_adult=false`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => setMovies(response.results))
      .catch(error => console.warn(error));

    toast.success('Приятного просмотра');

    setQuery('');
  };

  return (
    <>
      <h1>Search movies</h1>

      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>
            <ImSearch />
            Search
          </span>
        </button>

        <input
          // className={style.SearchForm_input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleSearchInput}
        />
      </form>

      <ul>
        {movies.map(movie => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </>
  );
}
