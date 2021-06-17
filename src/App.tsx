import { Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/";

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
export const App: React.FC = () => {
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
            <FavoriteMovieView />
          </Route>
          <Route>
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};
