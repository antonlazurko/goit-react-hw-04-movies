import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from '../src/Components/Container';
import AppBar from '../src/Components/AppBar';
// import HomeView from '../src/views/HomeView';
// import MoviesView from '../src/views/MoviesView';
// import NotFoundViews from './views/NotFoundView';
// import MovieDetailsPage from './views/MovieDetailsPage';
const HomeView = lazy(() =>
  import('../src/views/HomeView.js' /*webpackChunkName: "HomeView" */),
);
const MoviesView = lazy(() =>
  import('../src/views/MoviesView.js' /*webpackChunkName: "MoviesView" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /*webpackChunkName: "MovieDetailsPage" */
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
