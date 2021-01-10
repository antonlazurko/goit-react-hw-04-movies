import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Route, useParams } from 'react-router-dom';

import * as moviesAPI from '../services/movie-api';
export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    moviesAPI
      .fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              {review.author}
              {review.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${review.avatar_path}`}
                  alt={review.name}
                />
              )}
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
