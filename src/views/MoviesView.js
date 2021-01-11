import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useLocation, useHistory } from 'react-router-dom';

import * as moviesAPI from '../services/movie-api';
import Searchbar from '../Components/Searchbar';
import Status from '../services/Status';
import s from '../views/MoviesView.module.css';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();

  const [movieQuery, setMovieQuery] = useState(
    new URLSearchParams(location.search).get('query') ?? '',
  );
  const [queryPage, setQueryPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');
  const onSearchbarSubmit = data => {
    history.push({ ...location, search: `query=${data}` });
    setMovieQuery(data);
  };
  useEffect(() => {
    setQueryPage(1);
    setMovies([]);
  }, [movieQuery]);
  const onLoadMoreBtn = () => setQueryPage(prevState => prevState + 1);

  useEffect(() => {
    if (movieQuery === '') {
      return;
    }
    setStatus(Status.PENDING);
    moviesAPI
      .fetchMoviesByQuery(movieQuery, queryPage)
      .then(({ results }) => {
        setMovies(prevState => [...prevState, ...results]);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieQuery, queryPage]);
  return (
    <>
      <Searchbar onSearchbarSubmit={onSearchbarSubmit} />
      <ToastContainer autoClose={3000} position="top-center" />

      {status === Status.PENDING && <p>Download movie collection</p>}
      {status === Status.REJECTED && <p>{error}</p>}

      {status === Status.RESOLVED && (
        <>
          <ul className={s.list}>
            {movies.map(movie => (
              <li key={movie.id} className={s.item}>
                <Link
                  className={s.title}
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
          <button onClick={onLoadMoreBtn}>Load more</button>
        </>
      )}
    </>
  );
}
