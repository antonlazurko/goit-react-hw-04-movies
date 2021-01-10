import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as moviesAPI from '../services/movie-api';
import Searchbar from '../Components/Searchbar';
export default function MoviesView() {
  const { url } = useRouteMatch();
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const onSearchbarSubmit = data => {
    setMovieQuery(data);
  };
  useEffect(() => {
    if (movieQuery === '') {
      return;
    }
    moviesAPI
      .fetchMoviesByQuery(movieQuery)
      .then(({ results }) => setMovies(results));
  }, [movieQuery]);
  return (
    console.log(url),
    (
      <>
        <Searchbar onSearchbarSubmit={onSearchbarSubmit} />
        {movieQuery && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    )
  );
}
