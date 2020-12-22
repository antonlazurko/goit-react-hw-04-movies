import { Switch, Route } from 'react-router-dom';

import Container from '../src/Components/Container';
import AppBar from '../src/Components/AppBar';
import HomeView from '../src/views/HomeView';
import MoviesView from '../src/views/MoviesView';
import NotFoundViews from './views/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/movies">
          <MoviesView />
        </Route>
        <Route>
          <NotFoundViews />
        </Route>
      </Switch>
    </Container>
  );
}
