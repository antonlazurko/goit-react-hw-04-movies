import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as moviesAPI from '../services/movie-api';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export default function HomeView() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI.fetchPopularMovies().then(({ results }) => {
      if (!results.length) {
        setStatus(Status.REJECTED);
        setMovies(movies);
      } else {
        setMovies(results);
        setStatus(Status.RESOLVED);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <p>Trending this week</p>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}${movie.id}`}>{movie.name}</Link>
            </li>
          ))}
        <li></li>
      </ul>
    </>
  );
  // if (status === Status.PENDING) {return <h1>Download movie's collection</h1>}
  // if (status === Status.REJECTED) {return <h1>Error!!!</h1>}

  // if (status === Status.RESOLVED) {
  //   return (
  //     (
  //       <>
  //         <p>Trending this week</p>
  //         <ul>
  //           {movies &&
  //             movies.map(movie => <li key={movie.id}>{movie.name}</li>)}
  //           <li></li>
  //         </ul>
  //       </>
  //     )
  //   );
  // }
}
