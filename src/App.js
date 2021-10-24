import { Switch, Route } from 'react-router-dom';
import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';

import HomePage from './components/HomePage';
import MoviesPage from 'components/MoviesPage';
import NotFound from 'components/NotFound';

export default function App() {
  return (
    <Container>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
}
