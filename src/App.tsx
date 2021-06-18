import { Switch, Route, Redirect } from "react-router-dom";
import React, { lazy, Suspense, useContext } from "react";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/";
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseContext } from "./index";
const HomeView = lazy(
  () => import("./views/HomeView" /*webpackChunkName: "HomeView" */)
);
const MoviesView = lazy(
  () => import("./views/MoviesView" /*webpackChunkName: "MoviesView" */)
);
const MovieDetailsPage = lazy(
  () =>
    import("./views/MovieDetailsPage" /*webpackChunkName: "MovieDetailsPage" */)
);
const FavoriteMovieView = lazy(
  () => import("./views/FavoriteMovieView/FavoriteMovieView")
);
const LoginView = lazy(() => import("./views/LoginView/LoginView"));
export const App: React.FC = () => {
  const { auth } = useContext(FirebaseContext);
  const [user] = useAuthState(auth);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Downloading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/movies">
            <MoviesView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route exact path="/favorite">
            {user ? <FavoriteMovieView /> : <Redirect to={"/login"} />}
          </Route>
          <Route path="/login">
            {!user ? <LoginView /> : <Redirect to={"/"} />}
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};
