import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useLocation, useHistory } from 'react-router-dom';

import * as moviesAPI from '../services/movie-api';
import Searchbar from '../Components/Searchbar';
import Status from '../services/Status';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();

  const [movieQuery, setMovieQuery] = useState(
    new URLSearchParams(location.search).get('query') ?? '',
  );
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  const onSearchbarSubmit = data => {
    history.push({ ...location, search: `query=${data}` });
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
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
