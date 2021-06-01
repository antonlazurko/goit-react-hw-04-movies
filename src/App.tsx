import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from './Components/Container/Container';
import AppBar from './Components/AppBar/';
// import HomeView from '../src/views/HomeView';
// import MoviesView from '../src/views/MoviesView';
// import NotFoundViews from './views/NotFoundView';
// import MovieDetailsPage from './views/MovieDetailsPage';
const HomeView = lazy(() =>
  import('./views/HomeView' /*webpackChunkName: "HomeView" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView' /*webpackChunkName: "MoviesView" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage" */
  ),
);
export default function App() {
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
          <Route>
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
