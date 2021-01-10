import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import * as moviesAPI from '../services/movie-api';
import Searchbar from '../Components/Searchbar';
import Status from '../services/Status';

export default function MoviesView() {
  const { url } = useRouteMatch();
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  const onSearchbarSubmit = data => {
    setMovieQuery(data);
  };
  useEffect(() => {
    if (movieQuery === '') {
      return;
    }
    setStatus(Status.PENDING);
    moviesAPI
      .fetchMoviesByQuery(movieQuery)
      .then(({ results }) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieQuery]);
  return (
    <>
      <Searchbar onSearchbarSubmit={onSearchbarSubmit} />
      <ToastContainer autoClose={3000} position="top-center" />

      {status === Status.PENDING && <p>Download movie collection</p>}
      {status === Status.REJECTED && <p>{error}</p>}

      {status === Status.RESOLVED && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
