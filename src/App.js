import { Switch, Route } from 'react-router-dom';

import Container from '../src/Components/Container';
import AppBar from '../src/Components/AppBar';
import HomeView from '../src/views/HomeView';
import MoviesView from '../src/views/MoviesView';
import NotFoundViews from './views/NotFoundView';
import MovieDetailsPage from './views/MovieDetailsPage';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/movies">
          <MoviesView />
        </Route>
        <Route path="/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route exact path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundViews />
        </Route>
      </Switch>
    </Container>
  );
}
