import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import style from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const queryValue = new URLSearchParams(location.search).get('query');

    if (queryValue === null) {
      return;
    }

    setSearchQuery(queryValue);
  }, [location.search]);

  const handleNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(searchQuery.trim().toLowerCase());
    setSearchQuery('');
  };

  return (
    <div className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button className={style.SearchButton} type="submit">
          <span>
            <ImSearch />
          </span>
        </button>

        <input
          className={style.SearchForm_input}
          type="text"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleNameChange}
        />
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  searchQuery: PropTypes.string,
  onSubmit: PropTypes.func,
};
