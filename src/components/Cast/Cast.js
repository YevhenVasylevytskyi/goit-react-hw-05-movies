import { useState, useEffect } from 'react';
import * as MovieApiServise from '../../servises/MovieApiServise';
import style from './Cast.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    MovieApiServise.fetchCastMovie(movieId).then(response =>
      setCast(response.cast),
    );
  }, [movieId]);

  return (
    <>
      {cast && (
        <div className={style.Cast}>
          {cast.map(({ cast_id, character, name, profile_path }) => (
            <li key={cast_id} className={style.Item}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
              )}
              <h3 className={style.Title}>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
        </div>
      )}
    </>
  );
}
