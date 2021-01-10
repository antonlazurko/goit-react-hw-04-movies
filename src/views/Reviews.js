import { useState, useEffect } from 'react';
import * as moviesAPI from '../services/movie-api';
import Status from '../services/Status';
import PropTypes from 'prop-types';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');
  useEffect(() => {
    setStatus(Status.PENDING);

    moviesAPI
      .fetchMovieReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);
  return (
    <>
      {status === Status.PENDING && <p>Download movie reviews</p>}
      {status === Status.REJECTED && <p>{error}</p>}

      {status === Status.RESOLVED && (
        <ul>
          {reviews.length === 0 && <p>There is no one review for this movie</p>}
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
Reviews.propTypes = {
  movieId: PropTypes.string,
};
