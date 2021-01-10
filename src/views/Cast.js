import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Route, useParams } from 'react-router-dom';

import * as moviesAPI from '../services/movie-api';
import Status from '../services/Status';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');
  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI
      .fetchMovieCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);
  return (
    <>
      {' '}
      {status === Status.PENDING && <p>Download cast</p>}
      {status === Status.REJECTED && <p>{error}</p>}
      {status === Status.RESOLVED && (
        <ul>
          {cast === [] && <p>No cast information</p>}
          {cast.map(artist => (
            <li key={artist.id}>
              {artist.name}
              {artist.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${artist.profile_path}`}
                  alt={artist.name}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
