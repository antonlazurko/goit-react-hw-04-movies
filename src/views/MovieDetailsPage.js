import { useState, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import { NavLink, useRouteMatch } from 'react-router-dom';

import * as moviesAPI from '../services/movie-api';
import Cast from './Cast';
import Reviews from './Reviews';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  useEffect(() => {
    moviesAPI.fetchMovieDetails(movieId).then(movie => {
      setMovie(movie);
      setStatus(Status.RESOLVED);
    });
  }, [movieId]);
  return (
    <>
      <button>Go back</button>
      {movie && (
        <>
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
