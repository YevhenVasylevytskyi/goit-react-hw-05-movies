import { Switch, Route } from 'react-router-dom';
import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';

import HomePage from './components/HomePage';
import MoviesPage from 'components/MoviesPage';
import NotFound from 'components/NotFound';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
