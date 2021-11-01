import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import Navigation from './components/Navigation';
import Container from './components/Container/Container';
// import HomePage from "./views/HomePage";
// import MoviesPage from "./views/MoviesPage";
// import MovieDetailsPage from "./views/MovieDetailsPage";

const HomePage = lazy(() =>
  import('./components/HomePage' /*webpackChunkName: "homePage" */),
);
const MoviesPage = lazy(() =>
  import('./components/MoviesPage' /*webpackChunkName: "moviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage' /*webpackChunkName: "movieDetailsPage" */
  ),
);

export default function App() {
  return (
    <Container>
      <Navigation />

      <Suspense
        fallback={
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

// import { Switch, Route } from 'react-router-dom';
// import { lazy, Suspense } from "react";
// import Loader from "react-loader-spinner";
// import Container from './components/Container/Container';
// // import Navigation from 'components/Navigation/Navigation';

// // import HomePage from './components/HomePage';
// // import MoviesPage from 'components/MoviesPage';
// // import MovieDetailsPage from 'components/MovieDetailsPage';
// // import NotFound from 'components/NotFound';

// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// const HomePage = lazy(() =>
//   import("./views/HomePage" /*webpackChunkName: "homePage" */)
// );
// const MoviesPage = lazy(() =>
//   import("./views/MoviesPage" /*webpackChunkName: "moviesPage" */)
// );
// const MovieDetailsPage = lazy(() =>
//   import("./views/MovieDetailsPage" /*webpackChunkName: "movieDetailsPage" */)
// );

// export default function App() {
//   return (
//     <Container>
//       <Header />

//       <Suspense
//         fallback={
//           <Loader type="Circles" color="#00BFFF" height={80} width={80} />
//         }
//       >
//         <Switch>
//           <Route path="/" exact>
//             <HomePage />
//           </Route>

//           <Route path="/movies" exact>
//             <MoviesPage />
//           </Route>

//           <Route path="/movies/:movieId">
//             <MovieDetailsPage />
//           </Route>
//         </Switch>
//       </Suspense>
//     </Container>
//   );
// }

// // export default function App() {
// //   return (
// //     <Container>
// //       <Navigation />

// //       <Switch>
// //         <Route path="/" exact>
// //           <HomePage />
// //         </Route>

// //         <Route path="/movies" exact>
// //           <MoviesPage />
// //         </Route>

// //         <Route path="/movies/:movieId" exact>
// //           <MovieDetailsPage />
// //         </Route>

// //         <Route>
// //           <NotFound />
// //         </Route>
// //       </Switch>

// //       <ToastContainer
// //         position="top-right"
// //         autoClose={2000}
// //         hideProgressBar={false}
// //         newestOnTop={false}
// //         closeOnClick
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //       />
// //     </Container>
// //   );
// // }
