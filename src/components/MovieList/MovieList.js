import { Link } from 'react-router-dom';
// import style from './MovieList.module.css';

export default function MovieList({ movies, url, location }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{ pathname: `${url}/${movie.id}`, state: { from: location } }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
