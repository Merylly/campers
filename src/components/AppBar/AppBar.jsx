import clsx from "clsx";
import { NavLink } from "react-router-dom"

import css from './AppBar.module.css'


const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const AppBar = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to='/'>Home</NavLink>
      <NavLink className={getNavLinkClassName} to='/catalog'>Catalog</NavLink>
      <NavLink className={getNavLinkClassName} to='/favorites'>Favorites</NavLink>
    </nav>
  );
}

export default AppBar