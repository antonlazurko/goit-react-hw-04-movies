import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, useParams, useLocation, useHistory } from 'react-router-dom';
import { NavLink, useRouteMatch } from 'react-router-dom';

import * as moviesAPI from '../services/movie-api';
import Status from '../services/Status';
import s from '../views/MovieDetailsPage.module.css';
type TParams = { movieId: string }
type LocationState = {
  state: string

  from: string

};
const initialState = { id: 'string', name: 'string', title: 'string', poster_path: 'string', release_date: 'string' }

type TMovie = { id: string, name: string, title: string,poster_path:string,release_date:string }

const NotFoundView = lazy(() =>
  import('../views/NotFoundView' /*webpackChunkName: "NotFoundView" */),
);
const Cast = lazy(() => import('./Cast' /*webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('./Reviews' /*webpackChunkName: "Reviews" */),
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState<TMovie>(initialState);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  const { movieId } = useParams<TParams>();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation<LocationState>();
  const handleGoBack = () => {
    location?.state?.from
      ? history.push(location.state.from)
      : history.push((location.state.from = '/movies'));
  };

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI
      .fetchMovieDetails(movieId)
      .then(movie => {
        setMovie(movie);
        setStatus(Status.RESOLVED);
      })
      .catch(Error => {
        setError(Error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);
  return (
    <>
      {status === Status.PENDING && <p>Download movie</p>}
      {status === Status.REJECTED && <NotFoundView error={error} />}
      {status === Status.RESOLVED && (
        <>
          <button onClick={handleGoBack} className={s.goBackBtn}>
            Go back
          </button>
          <h1>{movie.title}</h1>

          <span>Release date: {movie.release_date}</span>
          {movie.poster_path && (
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <NavLink
            to={{
              pathname: `${url}/Cast`,
              state: { from: location },
            }}
            className={s.Cast}
          >
            Cast of "{movie.title}" movie
          </NavLink>
          <NavLink
            to={{
              pathname: `${url}/Reviews`,
              state: { from: location },
            }}
            className={s.Reviews}
          >
            Reviews of "{movie.title}" movie
          </NavLink>
          <hr />
          <Suspense fallback={<div>Downloading...</div>}>
            <Route path={`${path}/Cast`}>
              <Cast movieId={movieId} />
            </Route>
            <Route path={`${path}/Reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
