import { useState, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import { NavLink, useRouteMatch } from 'react-router-dom';

import * as moviesAPI from '../services/movie-api';
import Cast from './Cast';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  console.log(url);
  useEffect(() => {
    moviesAPI.fetchMovieDetails(movieId).then(movie => {
      setMovie(movie);
      setStatus(Status.RESOLVED);
    });
  }, [movieId]);
  return (
    <>
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
          <hr />
          <Route exact path={`${url}/Cast`}>
            <Cast movieId={movieId} />
          </Route>
        </>
      )}
    </>
  );
}
