import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={style.Navigation}>
      <NavLink
        exact
        to="/"
        className={style.Link}
        activeClassName={style.ActiveLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={style.Link}
        activeClassName={style.ActiveLink}
      >
        Search Movies
      </NavLink>
    </nav>
  );
}
