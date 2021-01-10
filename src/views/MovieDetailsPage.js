import { useState, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import { NavLink, useRouteMatch } from 'react-router-dom';
import NotFoundView from '../views/NotFoundView';

import * as moviesAPI from '../services/movie-api';
import Cast from './Cast';
import Reviews from './Reviews';
import Status from '../services/Status';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
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
      {status === Status.REJECTED && <NotFoundView />}
      {status === Status.RESOLVED && (
        <>
          <button>Go back</button>
          <h1>{movie.title}</h1>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <NavLink to={`${url}/Cast`}>Cast of "{movie.title}" movie</NavLink>
          <NavLink to={`${url}/Reviews`}>
            Reviews of "{movie.title}" movie
          </NavLink>
          <hr />
          <Route path={`${path}/Cast`}>
            <Cast movieId={movieId} />
          </Route>
          <Route path={`${path}/Reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </>
      )}
    </>
  );
}
