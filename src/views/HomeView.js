import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as moviesAPI from '../services/movie-api';
import Status from '../services/Status';

export default function HomeView() {
  // const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI
      .fetchPopularMovies()
      .then(({ results }) => {
        if (!results.length) {
          setStatus(Status.REJECTED);
          setMovies(movies);
        } else {
          setMovies(results);
          setStatus(Status.RESOLVED);
        }
      })
      .catch(error => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {status === Status.PENDING && <p>Download trending collection</p>}
      {status === Status.REJECTED && <p>{error}</p>}
      {status === Status.RESOLVED && (
        <>
          <p>Trending this week</p>
          <ul>
            {movies &&
              movies.map(movie => (
                <li key={movie.id}>
                  <Link to={`movies/${movie.id}`}>
                    {movie.name ?? movie.title}
                  </Link>
                </li>
              ))}
          </ul>
        </>
      )}
    </>
  );

  // if (status === Status.PENDING) {return <h1>Download movie's collection</h1>}
  // if (status === Status.REJECTED) {return <h1>Error!!!</h1>}

  // if (status === Status.RESOLVED) {
  //   return (
  //     (
  // <>
  //   <p>Trending this week</p>
  //   <ul>
  //     {movies &&
  //       movies.map(movie => <li key={movie.id}>{movie.name}</li>)}
  //     <li></li>
  //   </ul>
  // </>
  //     )
  //   );
  // }
}
