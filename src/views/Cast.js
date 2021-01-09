import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Route, useParams } from 'react-router-dom';

import * as moviesAPI from '../services/movie-api';
export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);
  return (
    <>
      {cast && (
        <ul>
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
