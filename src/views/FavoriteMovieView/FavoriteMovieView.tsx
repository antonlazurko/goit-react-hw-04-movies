import { useState, useEffect, useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useLocation, Link } from "react-router-dom";
import { FirebaseContext } from "../../index";

import { TMovies } from "../../types";
import * as moviesAPI from "../../services/movie-api";
import s from "../HomeView.module.css";

const FavoriteMovieView: React.FC = () => {
  const { firestore } = useContext(FirebaseContext);
  const [movies, setMovies] = useState<TMovies[]>([]);
  const location = useLocation();

  const [favoriteMovies, loading, error] = useCollectionData(
    firestore?.collection("movies"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const handleRemoveFavorite = (id: string) => {
    firestore
      ?.collection("movies")
      .doc(`movieId${id}`)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  const movieRender = (favoriteMovieEl: any, moviesArr: TMovies[] | []) => {
    const movie = moviesArr.find(
      (movie) => `${movie.id}` === favoriteMovieEl.movieId
    );
    return (
      <li key={movie?.id} className={s.item}>
        <Link
          to={{
            pathname: `/movies/${movie?.id}`,
            state: { from: location },
          }}
          className={s.name}
        >
          {movie?.name ?? movie?.title}
        </Link>
        <button
          className={s.deleteBtn}
          onClick={() => handleRemoveFavorite(favoriteMovieEl.movieId)}
        >
          X
        </button>
      </li>
    );
  };

  useEffect(() => {
    moviesAPI
      .fetchPopularMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className={s.title}>
        {favoriteMovies?.length ? "Favorites" : "No one movie"}
      </h1>
      <ul className={s.list}>
        {loading && <div>loading</div>}
        {error && <div>{error}</div>}
        {!loading &&
          favoriteMovies?.map((favoriteMovie) =>
            movieRender(favoriteMovie, movies)
          )}
      </ul>
    </>
  );
};
export default FavoriteMovieView;
