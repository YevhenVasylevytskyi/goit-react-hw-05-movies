import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Link,
  Route,
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import * as MovieApiServise from '../../servises/MovieApiServise';

import Loader from 'react-loader-spinner';
// import style from "./MoviesPage.module.css";

const Cast = lazy(() => import('../Cast/Cast' /*webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /*webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    MovieApiServise.fetchDetailsMovie(movieId).then(response =>
      setMovie(response),
    );
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={onGoBack}>
            go back
          </button>

          <div>
            <div>
              <div>
                <img
                  src={
                    movie.poster_path ? (
                      `https://www.themoviedb.org/t/p/w300${movie.poster_path}`
                    ) : (
                      <h2>Not Found</h2>
                    )
                  }
                  alt={movie.title}
                />
              </div>
              <div>
                <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
                <span>{`User score: ${Math.trunc(
                  movie.vote_average * 10,
                )}%`}</span>
                <h2>Overview:</h2>
                <p>{movie.overview}</p>
                <h2>Genres:</h2>
                <span>{movie.genres.map(({ name }) => name).join(', ')}</span>
              </div>
            </div>

            <div>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <Link
                    to={{
                      pathname: `${url}/cast`,
                      state: { from: location },
                    }}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `${url}/reviews`,
                      state: { from: location },
                    }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            <Suspense
              fallback={
                <Loader type="Circles" color="#00BFFF" height={80} width={80} />
              }
            >
              <Route path={`${url}/cast`}>
                <Cast movieId={movieId} />
              </Route>

              <Route path={`${url}/reviews`}>
                <Reviews movieId={movieId} />
              </Route>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
