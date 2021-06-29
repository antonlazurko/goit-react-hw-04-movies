import { useState, useEffect } from "react";

import * as moviesAPI from "../services/movie-api";
import Status from "../services/Status";
import s from "../views/Cast.module.css";
type TMovieId = { movieId: string };
interface IArtist {
  id: string;
  profile_path: string;
  name: string;
  character: string;
}
export default function Cast({ movieId }: TMovieId) {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState("");
  console.log(cast);

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI
      .fetchMovieCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);
  return (
    <>
      {status === Status.PENDING && <p>Download cast</p>}
      {status === Status.REJECTED && <p>{error}</p>}
      {status === Status.RESOLVED && (
        <ul className={s.list}>
          {cast.length === 0 && <p>No cast information</p>}
          {cast.map((artist: IArtist) => (
            <li key={artist.id} className={s.item}>
              <div className={s.name}>
                <span className={s.nameDescr}>{artist.name}</span>
                <span className={s.nameDescr}>played</span>
                <span className={s.nameDescr}>{artist.character}</span>
              </div>
              {artist.profile_path && (
                <img
                  className={s.image}
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
